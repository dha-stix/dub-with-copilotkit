import { prismaEdge } from "@/lib/prisma/edge";
import { redis } from "@/lib/upstash";
import z from "@/lib/zod";
import { APP_DOMAIN, getSearchParams } from "@dub/utils";
import { redirect } from "next/navigation";
import { NextRequest } from "next/server";

export const runtime = "edge";

const schema = z.object({
  state: z.string(),
  stripe_user_id: z.string().optional(),
  error: z.string().optional(),
  error_description: z.string().optional(),
});

export const GET = async (req: NextRequest) => {
  const parsed = schema.safeParse(getSearchParams(req.url));

  if (!parsed.success) {
    console.error("[Stripe OAuth callback] Error", parsed.error);
    return new Response("Invalid request", { status: 400 });
  }

  const {
    state,
    stripe_user_id: stripeAccountId,
    error,
    error_description,
  } = parsed.data;

  // Find workspace that initiated the Stripe app install
  const workspaceId = await redis.get<string>(`stripe:install:state:${state}`);

  if (!workspaceId) {
    redirect(APP_DOMAIN);
  }

  // Delete the state key from Redis
  await redis.del(`stripe:install:state:${state}`);

  if (error) {
    const workspace = await prismaEdge.project.findUnique({
      where: {
        id: workspaceId,
      },
    });
    if (!workspace) {
      redirect(APP_DOMAIN);
    }
    redirect(
      `${APP_DOMAIN}/${workspace.slug}/settings?stripeConnectError=${error_description}`,
    );
  } else if (stripeAccountId) {
    // Update the workspace with the Stripe Connect ID
    const workspace = await prismaEdge.project.update({
      where: {
        id: workspaceId,
      },
      data: {
        stripeConnectId: stripeAccountId,
      },
    });
    redirect(`${APP_DOMAIN}/${workspace.slug}/settings`);
  }
};
