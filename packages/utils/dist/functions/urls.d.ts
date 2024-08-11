declare const isValidUrl: (url: string) => boolean;
declare const getUrlFromString: (str: string) => string;
declare const getSearchParams: (url: string) => Record<string, string>;
declare const getSearchParamsWithArray: (url: string) => Record<string, string | string[]>;
declare const getParamsFromURL: (url: string) => Record<string, string>;
declare const UTMTags: readonly ["utm_source", "utm_medium", "utm_campaign", "utm_term", "utm_content"];
declare const constructURLFromUTMParams: (url: string, utmParams: Record<string, string>) => string;
declare const paramsMetadata: {
    display: string;
    key: string;
    examples: string;
}[];
declare const getUrlWithoutUTMParams: (url: string) => string;
declare const getPrettyUrl: (url: string) => string;
declare const createHref: (href: string, domain: string, utmParams?: Partial<Record<(typeof UTMTags)[number], string>>) => string;

export { UTMTags, constructURLFromUTMParams, createHref, getParamsFromURL, getPrettyUrl, getSearchParams, getSearchParamsWithArray, getUrlFromString, getUrlWithoutUTMParams, isValidUrl, paramsMetadata };
