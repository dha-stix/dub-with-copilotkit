declare function linkConstructor({ domain, key, pretty, searchParams, }: {
    domain?: string;
    key?: string;
    pretty?: boolean;
    searchParams?: Record<string, string>;
}): string;

export { linkConstructor };
