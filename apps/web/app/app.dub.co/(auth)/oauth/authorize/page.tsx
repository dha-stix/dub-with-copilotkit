import { vaidateAuthorizeRequest } from "@/lib/api/oauth/actions";
import { getSession } from "@/lib/auth";
import z from "@/lib/zod";
import { authorizeRequestSchema } from "@/lib/zod/schemas/oauth";
import EmptyState from "@/ui/shared/empty-state";
import { BlurImage, Logo } from "@dub/ui";
import { HOME_DOMAIN, constructMetadata } from "@dub/utils";
import { ArrowLeftRight } from "lucide-react";
import { redirect } from "next/navigation";
import { Suspense } from "react";
import { AuthorizeForm } from "./authorize-form";
import { ScopesRequested } from "./scopes-requested";

export const runtime = "nodejs";

export const metadata = constructMetadata({
  title: "Authorize API access | Dub",
  noIndex: true,
});

// OAuth app consent page
export default async function Authorize({
  searchParams,
}: {
  searchParams?: z.infer<typeof authorizeRequestSchema>;
}) {
  const session = await getSession();

  if (!session) {
    redirect("/login");
  }

  const { error, integration, requestParams } =
    await vaidateAuthorizeRequest(searchParams);

  if (error || !integration) {
    return (
      <div className="relative z-10 mt-[calc(30vh)] h-fit w-full max-w-md overflow-hidden sm:rounded-2xl">
        <EmptyState icon={Logo} title={error} />
      </div>
    );
  }

  return (
    <div className="relative z-10 m-auto w-full max-w-md border-y border-gray-200 sm:rounded-2xl sm:border sm:shadow-xl">
      <div className="flex flex-col items-center justify-center space-y-6 border-b border-gray-200 bg-white px-4 py-6 pt-8 text-center sm:rounded-t-2xl sm:px-16">
        <div className="flex items-center gap-3">
          <a href={integration.website} target="_blank" rel="noreferrer">
            {integration.logo ? (
              <BlurImage
                src={integration.logo}
                alt={`Logo for ${integration.name}`}
                className="size-12 rounded-full border border-gray-200"
                width={20}
                height={20}
              />
            ) : (
              <Logo className="size-12" />
            )}
          </a>
          <ArrowLeftRight className="size-5 text-gray-500" />
          <a href={HOME_DOMAIN} target="_blank" rel="noreferrer">
            <Logo className="size-12" />
          </a>
        </div>
        <p className="text-md">
          <span className="font-bold">{integration.name}</span> is requesting
          API access to a workspace on Dub.
        </p>
        <span className="text-xs text-gray-500">
          Built by{" "}
          <a
            href={integration.website}
            target="_blank"
            rel="noreferrer"
            className="underline"
          >
            {integration.developer}
          </a>
        </span>
      </div>
      <div className="flex flex-col space-y-3 bg-white px-2 py-6 sm:px-10">
        <ScopesRequested scopes={requestParams.scope} />
      </div>
      <div className="flex flex-col space-y-2 border-t border-gray-200 bg-white px-2 py-6 sm:rounded-b-2xl sm:px-10">
        <Suspense>
          <AuthorizeForm {...requestParams} />
        </Suspense>
      </div>
    </div>
  );
}
