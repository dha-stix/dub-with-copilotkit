import * as react_jsx_runtime from 'react/jsx-runtime';
import { Dispatch, SetStateAction, ReactNode, InputHTMLAttributes } from 'react';

interface InputSelectItemProps {
    id: string;
    value: string;
    color?: string;
    image?: string;
    disabled?: boolean;
    label?: string;
}
declare function InputSelect({ items, selectedItem, setSelectedItem, className, disabled, adjustForMobile, icon, inputAttrs, noItemsElement, }: {
    items: InputSelectItemProps[] | [];
    selectedItem: InputSelectItemProps | null;
    setSelectedItem: Dispatch<SetStateAction<InputSelectItemProps | null>>;
    className?: string;
    disabled?: boolean;
    adjustForMobile?: boolean;
    icon?: ReactNode;
    inputAttrs?: InputHTMLAttributes<HTMLInputElement>;
    noItemsElement?: ReactNode;
}): react_jsx_runtime.JSX.Element;

export { InputSelect, InputSelectItemProps };
