declare const generateDomainFromName: (name: string) => string;
declare const validDomainRegex: RegExp;
declare const validKeyRegex: RegExp;
declare const validSlugRegex: RegExp;
declare const getSubdomain: (name: string, apexName: string) => string | null;
declare const getApexDomain: (url: string) => string;
declare const getDomainWithoutWWW: (url: string) => string | null | undefined;
declare const isDubDomain: (domain: string) => boolean;

export { generateDomainFromName, getApexDomain, getDomainWithoutWWW, getSubdomain, isDubDomain, validDomainRegex, validKeyRegex, validSlugRegex };
