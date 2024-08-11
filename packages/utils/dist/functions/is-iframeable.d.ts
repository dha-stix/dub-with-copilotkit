declare const isIframeable: ({ url, requestDomain, }: {
    url: string;
    requestDomain: string;
}) => Promise<boolean>;

export { isIframeable };
