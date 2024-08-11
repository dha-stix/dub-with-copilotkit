declare const DUB_DOMAINS: ({
    id: string;
    slug: string;
    verified: boolean;
    primary: boolean;
    archived: boolean;
    placeholder: string;
    allowedHostnames: string[];
    description: string;
    projectId: string;
} | {
    id: string;
    slug: string;
    verified: boolean;
    primary: boolean;
    archived: boolean;
    placeholder: string;
    description: string;
    projectId: string;
    allowedHostnames?: undefined;
})[];
declare const DUB_DOMAINS_ARRAY: string[];
declare const DUB_DEMO_LINKS: {
    id: string;
    domain: string;
    key: string;
}[];

export { DUB_DEMO_LINKS, DUB_DOMAINS, DUB_DOMAINS_ARRAY };
