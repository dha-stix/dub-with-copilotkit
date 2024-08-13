import * as react_jsx_runtime from 'react/jsx-runtime';
import * as react from 'react';
import { PropsWithChildren } from 'react';

declare const CardContext: react.Context<{
    hovered: boolean;
}>;
declare function CardListCard({ outerClassName, innerClassName, children, onClick, hoverStateEnabled, }: PropsWithChildren<{
    outerClassName?: string;
    innerClassName?: string;
    onClick?: () => void;
    hoverStateEnabled?: boolean;
}>): react_jsx_runtime.JSX.Element;

export { CardContext, CardListCard };
