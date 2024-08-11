declare function fetcher<JSON = any>(input: RequestInfo, init?: RequestInit): Promise<JSON>;

export { fetcher };
