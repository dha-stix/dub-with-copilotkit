import { DubApiError, exceededLimitError } from "@/lib/api/errors";
import { bulkCreateLinks, combineTagIds, processLink } from "@/lib/api/links";
import { bulkUpdateLinks } from "@/lib/api/links/bulk-update-links";
import { throwIfLinksUsageExceeded } from "@/lib/api/links/usage-checks";
import { parseRequestBody } from "@/lib/api/utils";
import { withWorkspace } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { storage } from "@/lib/storage";
import { NewLinkProps, ProcessedLinkProps } from "@/lib/types";
import {
  bulkCreateLinksBodySchema,
  bulkUpdateLinksBodySchema,
} from "@/lib/zod/schemas/links";
import { R2_URL } from "@dub/utils";
import { waitUntil } from "@vercel/functions";
import { NextResponse } from "next/server";

// POST /api/links/bulk – bulk create up to 100 links
export const POST = withWorkspace(
  async ({ req, headers, session, workspace }) => {
    if (!workspace) {
      throw new DubApiError({
        code: "bad_request",
        message:
          "Missing workspace. Bulk link creation is only available for custom domain workspaces.",
      });
    }

    throwIfLinksUsageExceeded(workspace);

    const links = bulkCreateLinksBodySchema.parse(await parseRequestBody(req));
    if (
      workspace.linksUsage + links.length > workspace.linksLimit &&
      (workspace.plan === "free" || workspace.plan === "pro")
    ) {
      throw new DubApiError({
        code: "exceeded_limit",
        message: exceededLimitError({
          plan: workspace.plan,
          limit: workspace.linksLimit,
          type: "links",
        }),
      });
    }

    // check if any of the links have a defined key and the domain + key combination is the same
    const duplicates = links.filter(
      (link, index, self) =>
        link.key &&
        self
          .slice(index + 1)
          .some((l) => l.domain === link.domain && l.key === link.key),
    );
    if (duplicates.length > 0) {
      throw new DubApiError({
        code: "bad_request",
        message: `Duplicate links found: ${duplicates
          .map((link) => `${link.domain}/${link.key}`)
          .join(", ")}`,
      });
    }

    const processedLinks = await Promise.all(
      links.map(async (link) =>
        processLink({
          payload: link,
          workspace,
          userId: session.user.id,
          bulk: true,
        }),
      ),
    );

    let validLinks = processedLinks
      .filter(({ error }) => error == null)
      .map(({ link }) => link) as ProcessedLinkProps[];

    let errorLinks = processedLinks
      .filter(({ error }) => error != null)
      .map(({ link, error, code }) => ({
        link,
        error,
        code,
      }));

    // filter out tags that don't belong to the workspace
    const workspaceTags = await prisma.tag.findMany({
      where: {
        projectId: workspace.id,
      },
      select: {
        id: true,
        name: true,
      },
    });
    const workspaceTagIds = workspaceTags.map(({ id }) => id);
    const workspaceTagNames = workspaceTags.map(({ name }) => name);
    validLinks.forEach((link, index) => {
      const combinedTagIds =
        combineTagIds({
          tagId: link.tagId,
          tagIds: link.tagIds,
        }) ?? [];
      const invalidTagIds = combinedTagIds.filter(
        (id) => !workspaceTagIds.includes(id),
      );
      if (invalidTagIds.length > 0) {
        // remove link from validLinks and add error to errorLinks
        validLinks = validLinks.filter((_, i) => i !== index);
        errorLinks.push({
          error: `Invalid tagIds detected: ${invalidTagIds.join(", ")}`,
          code: "unprocessable_entity",
          link,
        });
      }

      const invalidTagNames = link.tagNames?.filter(
        (name) => !workspaceTagNames.includes(name),
      );
      if (invalidTagNames?.length) {
        validLinks = validLinks.filter((_, i) => i !== index);
        errorLinks.push({
          error: `Invalid tagNames detected: ${invalidTagNames.join(", ")}`,
          code: "unprocessable_entity",
          link,
        });
      }
    });

    const validLinksResponse =
      validLinks.length > 0 ? await bulkCreateLinks({ links: validLinks }) : [];

    return NextResponse.json([...validLinksResponse, ...errorLinks], {
      headers,
    });
  },
  {
    requiredPermissions: ["links.write"],
  },
);

// PATCH /api/links/bulk – bulk update up to 100 links with the same data
export const PATCH = withWorkspace(async ({ req, workspace, headers }) => {
  const { linkIds, data } = bulkUpdateLinksBodySchema.parse(
    await parseRequestBody(req),
  );

  if (linkIds.length === 0) {
    return NextResponse.json("No links to update", { headers });
  }

  const links = await prisma.link.findMany({
    where: {
      id: { in: linkIds },
      projectId: workspace.id,
    },
  });

  // linkIds that don't exist
  let errorLinks = linkIds
    .filter((id) => links.find((link) => link.id === id) === undefined)
    .map((id) => ({
      error: "Link not found",
      code: "not_found",
      link: { id },
    }));

  let { tagNames, expiresAt } = data;
  const tagIds = combineTagIds(data);
  // tag checks
  if (tagIds && tagIds.length > 0) {
    const tags = await prisma.tag.findMany({
      select: {
        id: true,
      },
      where: { projectId: workspace?.id, id: { in: tagIds } },
    });

    if (tags.length !== tagIds.length) {
      throw new DubApiError({
        code: "unprocessable_entity",
        message: `Invalid tagIds detected: ${tagIds.filter((tagId) => tags.find(({ id }) => tagId === id) === undefined).join(", ")}`,
      });
    }
  } else if (tagNames && tagNames.length > 0) {
    const tags = await prisma.tag.findMany({
      select: {
        name: true,
      },
      where: {
        projectId: workspace?.id,
        name: { in: tagNames },
      },
    });

    if (tags.length !== tagNames.length) {
      throw new DubApiError({
        code: "unprocessable_entity",
        message: `Invalid tagNames detected: ${tagNames.filter((tagName) => tags.find(({ name }) => tagName === name) === undefined).join(", ")}`,
      });
    }
  }

  const processedLinks = await Promise.all(
    links.map(async (link) =>
      processLink({
        payload: {
          ...link,
          expiresAt:
            link.expiresAt instanceof Date
              ? link.expiresAt.toISOString()
              : link.expiresAt,
          geo: link.geo as NewLinkProps["geo"],
          ...data,
        },
        workspace,
        userId: link.userId ?? undefined,
        bulk: true,
        skipKeyChecks: true,
      }),
    ),
  );

  const validLinkIds = processedLinks
    .filter(({ error }) => error == null)
    .map(({ link }) => link.id) as string[];

  errorLinks = errorLinks.concat(
    processedLinks
      .filter(({ error }) => error != null)
      .map(({ link, error, code }) => ({
        error: error as string,
        code: code as string,
        link,
      })),
  );

  const response =
    validLinkIds.length > 0
      ? await bulkUpdateLinks({
          linkIds: validLinkIds,
          data: {
            ...data,
            tagIds,
            expiresAt,
          },
          workspaceId: workspace.id,
        })
      : [];

  waitUntil(
    (async () => {
      if (data.proxy && data.image) {
        await Promise.allSettled(
          links.map(async (link) => {
            // delete old proxy image urls if exist and match the link ID
            if (
              link.image &&
              link.image.startsWith(`${R2_URL}/images/${link.id}`) &&
              link.image !== data.image
            ) {
              storage.delete(link.image.replace(`${R2_URL}/`, ""));
            }
          }),
        );
      }
    })(),
  );

  return NextResponse.json([...response, ...errorLinks], { headers });
});
