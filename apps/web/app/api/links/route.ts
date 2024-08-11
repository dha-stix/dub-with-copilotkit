import { getDomainOrThrow } from "@/lib/api/domains/get-domain-or-throw";
import { DubApiError, ErrorCodes } from "@/lib/api/errors";
import { createLink, getLinksForWorkspace, processLink } from "@/lib/api/links";
import { throwIfLinksUsageExceeded } from "@/lib/api/links/usage-checks";
import { parseRequestBody } from "@/lib/api/utils";
import { withWorkspace } from "@/lib/auth";
import { ratelimit } from "@/lib/upstash";
import {
  createLinkBodySchema,
  getLinksQuerySchemaExtended,
} from "@/lib/zod/schemas/links";
import { LOCALHOST_IP, getSearchParamsWithArray } from "@dub/utils";
import { NextResponse } from "next/server";

// GET /api/links – get all links for a workspace
export const GET = withWorkspace(
  async ({ req, headers, workspace }) => {
    const searchParams = getSearchParamsWithArray(req.url);

    const {
      domain,
      tagId,
      tagIds,
      search,
      sort,
      page,
      pageSize,
      userId,
      showArchived,
      withTags,
      includeUser,
    } = getLinksQuerySchemaExtended.parse(searchParams);

    if (domain) {
      await getDomainOrThrow({ workspace, domain });
    }

    const response = await getLinksForWorkspace({
      workspaceId: workspace.id,
      domain,
      tagId,
      tagIds,
      search,
      sort,
      page,
      pageSize,
      userId,
      showArchived,
      withTags,
      includeUser,
    });

    return NextResponse.json(response, {
      headers,
    });
  },
  {
    requiredPermissions: ["links.read"],
  },
);

// POST /api/links – create a new link
export const POST = withWorkspace(
  async ({ req, headers, session, workspace }) => {
    if (workspace) {
      throwIfLinksUsageExceeded(workspace);
    }

    const body = createLinkBodySchema.parse(await parseRequestBody(req));

    if (!session) {
      const ip = req.headers.get("x-forwarded-for") || LOCALHOST_IP;
      const { success } = await ratelimit(10, "1 d").limit(ip);

      if (!success) {
        throw new DubApiError({
          code: "rate_limit_exceeded",
          message:
            "Rate limited – you can only create up to 10 links per day without an account.",
        });
      }
    }

    const { link, error, code } = await processLink({
      payload: body,
      workspace,
      ...(session && { userId: session.user.id }),
    });

    if (error != null) {
      throw new DubApiError({
        code: code as ErrorCodes,
        message: error,
      });
    }

    try {
      const response = await createLink(link);

      return NextResponse.json(response, { headers });
    } catch (error) {
      if (error.code === "P2002") {
        throw new DubApiError({
          code: "conflict",
          message: "A link with this externalId already exists.",
        });
      }

      throw new DubApiError({
        code: "unprocessable_entity",
        message: error.message,
      });
    }
  },
  {
    allowAnonymous: true,
    requiredPermissions: ["links.write"],
  },
);
