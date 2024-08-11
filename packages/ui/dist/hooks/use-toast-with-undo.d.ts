declare function useToastWithUndo(): ({ id, message, undo, duration, }: {
    id: number | string;
    message: string;
    undo: () => void;
    duration?: number | undefined;
}) => string | number;

export { useToastWithUndo };
