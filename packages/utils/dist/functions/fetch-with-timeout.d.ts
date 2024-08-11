declare function fetchWithTimeout(input: RequestInfo | URL, init?: RequestInit | undefined, timeout?: number): Promise<Response>;

export { fetchWithTimeout };
