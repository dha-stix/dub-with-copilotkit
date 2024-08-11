import * as react_jsx_runtime from 'react/jsx-runtime';
import { PropsWithChildren, ReactNode } from 'react';

type PopoverProps = PropsWithChildren<{
    content: ReactNode | string;
    align?: "center" | "start" | "end";
    openPopover: boolean;
    setOpenPopover: (open: boolean) => void;
    mobileOnly?: boolean;
    popoverContentClassName?: string;
    collisionBoundary?: Element | Element[];
    sticky?: "partial" | "always";
    onEscapeKeyDown?: (event: KeyboardEvent) => void;
}>;
declare function Popover({ children, content, align, openPopover, setOpenPopover, mobileOnly, popoverContentClassName, collisionBoundary, sticky, onEscapeKeyDown, }: PopoverProps): react_jsx_runtime.JSX.Element;

export { Popover, PopoverProps };
