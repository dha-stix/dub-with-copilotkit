import { prisma } from "@/lib/prisma";
import { Logo } from "@dub/ui";
import { HOME_DOMAIN } from "@dub/utils";
import { ResetPasswordForm } from "./form";

export const runtime = "nodejs";

interface Props {
  params: {
    token: string;
  };
}

export default async function ResetPasswordPage({ params: { token } }: Props) {
  const validToken = await isValidToken(token);

  return (
    <div className="relative z-10 my-10 flex min-h-full w-full items-center justify-center">
      <div className="w-full max-w-md overflow-hidden border-y border-gray-200 sm:rounded-2xl sm:border sm:shadow-xl">
        <div className="flex flex-col items-center justify-center space-y-3 border-b border-gray-200 bg-white px-4 py-6 pt-8 text-center sm:px-16">
          <a href={HOME_DOMAIN}>
            <Logo className="h-10 w-10" />
          </a>
          <h3 className="text-xl font-semibold">Reset your password</h3>
          <p className="text-sm text-gray-500">
            {validToken
              ? "Enter new password for your account."
              : "The request is invalid or expired."}
          </p>
        </div>
        <div className="flex flex-col space-y-3 bg-gray-50 px-4 py-8 sm:px-16">
          {validToken ? (
            <ResetPasswordForm />
          ) : (
            <div className="text-center">
              That request is expired or invalid. Please request a new one.
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

const isValidToken = async (token: string) => {
  const resetToken = await prisma.verificationToken.findUnique({
    where: {
      token,
      expires: {
        gte: new Date(),
      },
    },
    select: {
      token: true,
    },
  });

  return !!resetToken;
};
