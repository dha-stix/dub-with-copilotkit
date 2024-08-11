import * as react_jsx_runtime from 'react/jsx-runtime';
import * as react from 'react';
import { ReactNode } from 'react';

declare const PopupContext: react.Context<{
    hidePopup: () => void;
}>;
declare function Popup({ children, hiddenCookieId, }: {
    children: ReactNode;
    hiddenCookieId: string;
}): react_jsx_runtime.JSX.Element;

export { Popup, PopupContext };
