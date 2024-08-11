import * as react_jsx_runtime from 'react/jsx-runtime';

declare function Avatar({ user, className, }: {
    user?: {
        id?: string | null | undefined;
        name?: string | null | undefined;
        email?: string | null | undefined;
        image?: string | null | undefined;
    };
    className?: string;
}): react_jsx_runtime.JSX.Element;
declare function TokenAvatar({ id, className, }: {
    id: string;
    className?: string;
}): react_jsx_runtime.JSX.Element;

export { Avatar, TokenAvatar };
