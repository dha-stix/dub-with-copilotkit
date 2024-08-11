import * as react_jsx_runtime from 'react/jsx-runtime';
import * as react from 'react';
import { Headset } from '../icons/nucleo/headset.js';
import { ResourcesContent } from './content/resources-content.js';

type NavTheme = "light" | "dark";
declare const NavContext: react.Context<{
    theme: NavTheme;
}>;
declare const navItems: ({
    name: string;
    href: string;
    content?: undefined;
    childItems?: undefined;
} | {
    name: string;
    content: typeof ResourcesContent;
    childItems: {
        icon: typeof Headset;
        title: string;
        href: string;
    }[];
    href?: undefined;
})[];
declare function Nav({ theme }: {
    theme?: NavTheme;
}): react_jsx_runtime.JSX.Element;

export { Nav, NavContext, NavTheme, navItems };
