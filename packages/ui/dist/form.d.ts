import * as react_jsx_runtime from 'react/jsx-runtime';
import { InputHTMLAttributes, ReactNode } from 'react';

declare function Form({ title, description, inputAttrs, helpText, buttonText, disabledTooltip, handleSubmit, }: {
    title: string;
    description: string;
    inputAttrs: InputHTMLAttributes<HTMLInputElement>;
    helpText?: string | ReactNode;
    buttonText?: string;
    disabledTooltip?: string | ReactNode;
    handleSubmit: (data: any) => Promise<any>;
}): react_jsx_runtime.JSX.Element;

export { Form };
