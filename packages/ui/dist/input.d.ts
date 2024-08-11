import react__default from 'react';

interface InputProps extends react__default.InputHTMLAttributes<HTMLInputElement> {
    error?: string;
}
declare const Input: react__default.ForwardRefExoticComponent<InputProps & react__default.RefAttributes<HTMLInputElement>>;

export { Input, InputProps };
