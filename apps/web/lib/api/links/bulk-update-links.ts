import { prisma } from "@/lib/prisma";
import { isStored, storage } from "@/lib/storage";
import z from "@/lib/zod";
import { bulkUpdateLinksBodySchema } from "@/lib/zod/schemas/links";
import { R2_URL, getParamsFromURL, nanoid, truncate } from "@dub/utils";
import { Prisma } from "@prisma/client";
import { waitUntil } from "@vercel/functions";
import { propagateBulkLinkChanges } from "./propagate-bulk-link-changes";
import { combineTagIds, transformLink } from "./utils";

export async function bulkUpdateLinks(
  params: z.infer<typeof bulkUpdateLinksBodySchema> & { workspaceId: string },
) {
  const { linkIds, data, workspaceId } = params;

  const {
    url,
    title,
    description,
    image,
    proxy,
    expiresAt,
    geo,
    tagId,
    tagIds,
    tagNames,
    ...rest
  } = data;

  const combinedTagIds = combineTagIds({ tagId, tagIds });

  const imageUrlNonce = nanoid(7);

  const updatedLinks = await Promise.all(
    linkIds.map((linkId) =>
      prisma.link.update({
        where: {
          id: linkId,
        },
        data: {
          ...rest,
          url,
          proxy,
          title: truncate(title, 120),
          description: truncate(description, 240),
          image:
            proxy && image && !isStored(image)
              ? `${R2_URL}/images/${linkIds[0]}_${imageUrlNonce}`
              : image,
          expiresAt: expiresAt ? new Date(expiresAt) : null,
          geo: geo || Prisma.JsonNull,
          ...(url && getParamsFromURL(url)),
          // Associate tags by tagNames
          ...(tagNames &&
            workspaceId && {
              tags: {
                deleteMany: {},
                create: tagNames.map((tagName) => ({
                  tag: {
                    connect: {
                      name_projectId: {
                        name: tagName,
                        projectId: workspaceId as string,
                      },
                    },
                  },
                })),
              },
            }),

          // Associate tags by IDs (takes priority over tagNames)
          ...(combinedTagIds && {
            tags: {
              deleteMany: {},
              create: combinedTagIds.map((tagId) => ({
                tagId,
              })),
            },
          }),
        },
        include: {
          tags: {
            select: {
              tagId: true,
              tag: {
                select: {
                  id: true,
                  name: true,
                  color: true,
                },
              },
            },
          },
        },
      }),
    ),
  );

  waitUntil(
    Promise.all([
      // propagate changes to redis and tinybird
      propagateBulkLinkChanges(updatedLinks),
      // if proxy is true and image is not stored in R2, upload image to R2
      proxy &&
        image &&
        !isStored(image) &&
        storage.upload(`images/${linkIds[0]}_${imageUrlNonce}`, image, {
          width: 1200,
          height: 630,
        }),
    ]),
  );

  return updatedLinks.map((link) => transformLink(link));
}
