import * as react_jsx_runtime from 'react/jsx-runtime';
import { Dispatch, SetStateAction } from 'react';

declare function Modal({ children, className, showModal, setShowModal, onClose, desktopOnly, preventDefaultClose, }: {
    children: React.ReactNode;
    className?: string;
    showModal?: boolean;
    setShowModal?: Dispatch<SetStateAction<boolean>>;
    onClose?: () => void;
    desktopOnly?: boolean;
    preventDefaultClose?: boolean;
}): react_jsx_runtime.JSX.Element;

export { Modal };
