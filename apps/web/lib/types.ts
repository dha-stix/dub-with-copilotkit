import z from "@/lib/zod";
import { metaTagsSchema } from "@/lib/zod/schemas/metatags";
import { DirectorySyncProviders } from "@boxyhq/saml-jackson";
import { Link, Project } from "@prisma/client";
import { integrationSchema } from "./zod/schemas/integration";
import { createLinkBodySchema } from "./zod/schemas/links";
import { oAuthAppSchema } from "./zod/schemas/oauth";
import { tokenSchema } from "./zod/schemas/token";

export type LinkProps = Link;

export interface LinkWithTagsProps extends LinkProps {
  tags: TagProps[];
}

export interface SimpleLinkProps {
  domain: string;
  key: string;
  url: string;
}

export interface QRLinkProps {
  domain: string;
  key?: string;
  url?: string;
}

export interface RedisLinkProps {
  id: string;
  url?: string;
  trackConversion?: boolean;
  password?: boolean;
  proxy?: boolean;
  rewrite?: boolean;
  iframeable?: boolean;
  expiresAt?: Date;
  expiredUrl?: string;
  ios?: string;
  android?: string;
  geo?: object;
  doIndex?: boolean;
  projectId?: string;
}

export interface EdgeLinkProps {
  id: string;
  domain: string;
  key: string;
  url: string;
  proxy: boolean;
  title: string;
  description: string;
  image: string;
  password: string;
  clicks: number;
  publicStats: boolean;
  userId: string;
  projectId: string;
}

export interface TagProps {
  id: string;
  name: string;
  color: TagColorProps;
}

export type TagColorProps = (typeof tagColors)[number];

export type PlanProps = (typeof plans)[number];

export type RoleProps = (typeof roles)[number];

export type BetaFeatures = "conversions" | "integrations" | "dublink";

export interface WorkspaceProps extends Project {
  logo: string | null;
  plan: PlanProps;
  domains: {
    id: string;
    slug: string;
    primary: boolean;
    verified: boolean;
  }[];
  users: {
    role: RoleProps;
  }[];
  flags?: {
    [key in BetaFeatures]: boolean;
  };
}

export type WorkspaceWithUsers = Omit<WorkspaceProps, "domains">;

export interface UserProps {
  id: string;
  name: string;
  email: string;
  image?: string;
  createdAt: Date;
  source: string | null;
  migratedWorkspace: string | null;
  defaultWorkspace?: string;
  isMachine: boolean;
  hasPassword: boolean;
  provider: string | null;
}

export interface WorkspaceUserProps extends UserProps {
  role: RoleProps;
}

export type DomainVerificationStatusProps =
  | "Valid Configuration"
  | "Invalid Configuration"
  | "Conflicting DNS Records"
  | "Pending Verification"
  | "Domain Not Found"
  | "Unknown Error";

export interface DomainProps {
  id: string;
  slug: string;
  verified: boolean;
  primary: boolean;
  archived: boolean;
  placeholder?: string;
  expiredUrl?: string;
  projectId: string;
}

export interface BitlyGroupProps {
  guid: string;
  bsds: string[]; // custom domains
  tags: string[];
}

export interface ImportedDomainCountProps {
  id: number;
  domain: string;
  links: number;
}

export interface SAMLProviderProps {
  name: string;
  logo: string;
  saml: "okta" | "azure" | "google";
  samlModalCopy: string;
  scim: keyof typeof DirectorySyncProviders;
  scimModalCopy: {
    url: string;
    token: string;
  };
}

export type NewLinkProps = z.infer<typeof createLinkBodySchema>;

type ProcessedLinkOverrides = "domain" | "key" | "url" | "projectId";
export type ProcessedLinkProps = Omit<NewLinkProps, ProcessedLinkOverrides> &
  Pick<LinkProps, ProcessedLinkOverrides> & { userId?: LinkProps["userId"] } & {
    createdAt?: Date;
    id?: string;
  };

export const plans = [
  "free",
  "pro",
  "business",
  "business plus",
  "business extra",
  "business max",
  "enterprise",
] as const;

export const roles = ["owner", "member"] as const;

export const tagColors = [
  "red",
  "yellow",
  "green",
  "blue",
  "purple",
  "pink",
  "brown",
] as const;

export type MetaTag = z.infer<typeof metaTagsSchema>;

export type TokenProps = z.infer<typeof tokenSchema>;

export type OAuthAppProps = z.infer<typeof oAuthAppSchema>;

export type NewOAuthApp = Omit<
  OAuthAppProps,
  "id" | "clientId" | "verified" | "installations" | "screenshots"
>;

export type ExistingOAuthApp = OAuthAppProps;

export type IntegrationProps = z.infer<typeof integrationSchema>;

export type InstalledIntegrationProps = Pick<
  IntegrationProps,
  "id" | "slug" | "logo" | "name" | "developer" | "description"
> & {
  installations: number;
  installed?: boolean;
};

export type InstalledIntegrationInfoProps = Pick<
  IntegrationProps,
  | "id"
  | "slug"
  | "logo"
  | "name"
  | "developer"
  | "description"
  | "readme"
  | "website"
  | "screenshots"
> & {
  createdAt: Date;
  installations: number;
  installed: {
    id: string;
    createdAt: Date;
    by: {
      id: string;
      name: string | null;
      image: string | null;
    };
  } | null;
};
