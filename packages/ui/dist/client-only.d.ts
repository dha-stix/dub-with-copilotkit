import * as react_jsx_runtime from 'react/jsx-runtime';
import { ReactNode } from 'react';

declare const ClientOnly: ({ children, fallback, fadeInDuration, className, }: {
    children: ReactNode;
    fallback?: ReactNode;
    fadeInDuration?: number | undefined;
    className?: string | undefined;
}) => react_jsx_runtime.JSX.Element;

export { ClientOnly };
