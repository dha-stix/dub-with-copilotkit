import * as react from 'react';
import { ReactNode } from 'react';
import * as react_jsx_runtime from 'react/jsx-runtime';
import * as TooltipPrimitive from '@radix-ui/react-tooltip';
import { ButtonProps } from './button.js';
import 'class-variance-authority/dist/types';
import 'class-variance-authority';

declare function TooltipProvider({ children }: {
    children: ReactNode;
}): react_jsx_runtime.JSX.Element;
interface TooltipProps extends Omit<TooltipPrimitive.TooltipContentProps, "content"> {
    content: ReactNode | string | ((props: {
        setOpen: (open: boolean) => void;
    }) => ReactNode);
}
declare function Tooltip({ children, content, side }: TooltipProps): react_jsx_runtime.JSX.Element;
declare function TooltipContent({ title, cta, href, target, onClick, }: {
    title: string;
    cta?: string;
    href?: string;
    target?: string;
    onClick?: () => void;
}): react_jsx_runtime.JSX.Element;
declare function SimpleTooltipContent({ title, cta, href, }: {
    title: string;
    cta: string;
    href: string;
}): react_jsx_runtime.JSX.Element;
declare function LinkifyTooltipContent({ children }: {
    children: ReactNode;
}): react_jsx_runtime.JSX.Element;
declare function InfoTooltip(props: Omit<TooltipProps, "children">): react_jsx_runtime.JSX.Element;
declare function NumberTooltip({ value, unit, prefix, children, lastClicked, }: {
    value?: number | null;
    unit?: string;
    prefix?: string;
    children: ReactNode;
    lastClicked?: Date | null;
}): string | number | boolean | react_jsx_runtime.JSX.Element | Iterable<ReactNode> | react.PromiseLikeOfReactNode | null | undefined;
declare function BadgeTooltip({ children, content, ...props }: TooltipProps): react_jsx_runtime.JSX.Element;
declare function ButtonTooltip({ tooltipContent, children, ...props }: {
    tooltipContent: ReactNode | string;
    children: ReactNode;
} & ButtonProps): react_jsx_runtime.JSX.Element;

export { BadgeTooltip, ButtonTooltip, InfoTooltip, LinkifyTooltipContent, NumberTooltip, SimpleTooltipContent, Tooltip, TooltipContent, TooltipProps, TooltipProvider };
