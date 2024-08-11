declare const timeAgo: (timestamp: Date | null, { withAgo, }?: {
    withAgo?: boolean | undefined;
}) => string;

export { timeAgo };
