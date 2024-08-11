import { qstash } from "@/lib/cron";
import { prisma } from "@/lib/prisma";
import { isStored, storage } from "@/lib/storage";
import { recordLink } from "@/lib/tinybird";
import { ProcessedLinkProps } from "@/lib/types";
import { formatRedisLink, redis } from "@/lib/upstash";
import {
  APP_DOMAIN_WITH_NGROK,
  R2_URL,
  getParamsFromURL,
  truncate,
} from "@dub/utils";
import { Prisma } from "@prisma/client";
import { waitUntil } from "@vercel/functions";
import { updateLinksUsage } from "./update-links-usage";
import { combineTagIds, transformLink } from "./utils";

export async function createLink(link: ProcessedLinkProps) {
  let { key, url, expiresAt, title, description, image, proxy, geo } = link;

  const combinedTagIds = combineTagIds(link);

  const { utm_source, utm_medium, utm_campaign, utm_term, utm_content } =
    getParamsFromURL(url);

  const { tagId, tagIds, tagNames, ...rest } = link;

  const response = await prisma.link.create({
    data: {
      ...rest,
      key,
      title: truncate(title, 120),
      description: truncate(description, 240),
      // if it's an uploaded image, make this null first because we'll update it later
      image: proxy && image && !isStored(image) ? null : image,
      utm_source,
      utm_medium,
      utm_campaign,
      utm_term,
      utm_content,
      expiresAt: expiresAt ? new Date(expiresAt) : null,
      geo: geo || Prisma.JsonNull,

      // Associate tags by tagNames
      ...(tagNames?.length &&
        link.projectId && {
          tags: {
            create: tagNames.map((tagName) => ({
              tag: {
                connect: {
                  name_projectId: {
                    name: tagName,
                    projectId: link.projectId as string,
                  },
                },
              },
            })),
          },
        }),

      // Associate tags by IDs (takes priority over tagNames)
      ...(combinedTagIds &&
        combinedTagIds.length > 0 && {
          tags: {
            createMany: {
              data: combinedTagIds.map((tagId) => ({ tagId })),
            },
          },
        }),
    },
    include: {
      tags: {
        select: {
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
  });

  const uploadedImageUrl = `${R2_URL}/images/${response.id}`;

  waitUntil(
    Promise.all([
      // record link in Redis
      redis.hset(link.domain.toLowerCase(), {
        [link.key.toLowerCase()]: await formatRedisLink(response),
      }),
      // record link in Tinybird
      recordLink({
        link_id: response.id,
        domain: response.domain,
        key: response.key,
        url: response.url,
        tag_ids: response.tags.map(({ tag }) => tag.id),
        workspace_id: response.projectId,
        created_at: response.createdAt,
      }),
      // Upload image to R2 and update the link with the uploaded image URL when
      // proxy is enabled and image is set and not stored in R2
      ...(proxy && image && !isStored(image)
        ? [
            // upload image to R2
            storage.upload(`images/${response.id}`, image, {
              width: 1200,
              height: 630,
            }),
            // update the null image we set earlier to the uploaded image URL
            prisma.link.update({
              where: {
                id: response.id,
              },
              data: {
                image: uploadedImageUrl,
              },
            }),
          ]
        : []),
      // delete public links after 30 mins
      !response.userId &&
        qstash.publishJSON({
          url: `${APP_DOMAIN_WITH_NGROK}/api/cron/links/delete`,
          // delete after 30 mins
          delay: 30 * 60,
          body: {
            linkId: response.id,
          },
        }),
      // update links usage for workspace
      link.projectId &&
        updateLinksUsage({
          workspaceId: link.projectId,
          increment: 1,
        }),
    ]),
  );

  return {
    ...transformLink(response),
    // optimistically set the image URL to the uploaded image URL
    image:
      proxy && image && !isStored(image) ? uploadedImageUrl : response.image,
  };
}
