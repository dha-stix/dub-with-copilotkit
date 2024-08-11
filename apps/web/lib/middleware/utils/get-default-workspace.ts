import { prismaEdge } from "@/lib/prisma/edge";
import { UserProps } from "@/lib/types";

export async function getDefaultWorkspace(user: UserProps) {
  let defaultWorkspace = user?.defaultWorkspace;

  if (!defaultWorkspace) {
    const refereshedUser = await prismaEdge.user.findUnique({
      where: {
        id: user.id,
      },
      select: {
        defaultWorkspace: true,
        projects: {
          select: {
            project: {
              select: {
                slug: true,
              },
            },
          },
          take: 1,
        },
      },
    });
    defaultWorkspace =
      refereshedUser?.defaultWorkspace ||
      refereshedUser?.projects[0]?.project?.slug ||
      undefined;
  }

  return defaultWorkspace;
}
