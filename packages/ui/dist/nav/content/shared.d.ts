import * as react_jsx_runtime from 'react/jsx-runtime';
import Link from 'next/link';
import { ReactNode, ComponentProps, SVGProps } from 'react';

declare const contentHeadingClassName = "text-xs uppercase text-gray-500 dark:text-white/60";
declare const contentLinkCardClassName = "group rounded-[8px] p-2 transition-colors hover:bg-gray-100 active:bg-gray-200 dark:hover:bg-white/[0.15] dark:active:bg-white/20";
declare function ContentLinkCard({ icon, title, description, descriptionLines, className, showArrow, ...rest }: {
    icon: ReactNode;
    title: string;
    description?: string;
    descriptionLines?: 1 | 2;
    showArrow?: boolean;
} & ComponentProps<typeof Link>): react_jsx_runtime.JSX.Element;
declare function ContentIcon({ icon: Icon, }: {
    icon: (props: SVGProps<SVGSVGElement>) => JSX.Element;
}): react_jsx_runtime.JSX.Element;
declare function ToolLinkCard({ name, href, icon, }: {
    name: string;
    href: string;
    icon: ReactNode;
}): react_jsx_runtime.JSX.Element;

export { ContentIcon, ContentLinkCard, ToolLinkCard, contentHeadingClassName, contentLinkCardClassName };
