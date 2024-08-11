import { getDomainOrThrow } from "@/lib/api/domains/get-domain-or-throw";
import { getLinksCount } from "@/lib/api/links";
import { withWorkspace } from "@/lib/auth";
import { getLinksCountQuerySchema } from "@/lib/zod/schemas/links";
import { NextResponse } from "next/server";

// GET /api/links/count – get the number of links for a workspace
export const GET = withWorkspace(
  async ({ headers, searchParams, workspace }) => {
    const params = getLinksCountQuerySchema.parse(searchParams);
    const { domain } = params;

    if (domain) {
      await getDomainOrThrow({ domain, workspace: workspace });
    }

    const count = await getLinksCount({
      searchParams: params,
      workspaceId: workspace.id,
    });

    return NextResponse.json(count, {
      headers,
    });
  },
  {
    requiredPermissions: ["links.read"],
  },
);
