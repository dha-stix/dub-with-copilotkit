declare const log: ({ message, type, mention, }: {
    message: string;
    type: "alerts" | "cron" | "links" | "subscribers" | "errors";
    mention?: boolean | undefined;
}) => Promise<Response | undefined>;

export { log };
