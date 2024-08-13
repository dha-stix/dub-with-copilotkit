import * as react_jsx_runtime from 'react/jsx-runtime';
import * as react from 'react';
import { Dispatch, SetStateAction } from 'react';

type KeyboardShortcutListener = {
    id: string;
    key: string | string[];
    enabled?: boolean;
    priority?: number;
};
declare const KeyboardShortcutContext: react.Context<{
    listeners: KeyboardShortcutListener[];
    setListeners: Dispatch<SetStateAction<KeyboardShortcutListener[]>>;
}>;
declare function KeyboardShortcutProvider({ children, }: {
    children: React.ReactNode;
}): react_jsx_runtime.JSX.Element;
declare function useKeyboardShortcut(key: KeyboardShortcutListener["key"], callback: (e: KeyboardEvent) => void, options?: Pick<KeyboardShortcutListener, "enabled" | "priority">): void;

export { KeyboardShortcutContext, KeyboardShortcutProvider, useKeyboardShortcut };
