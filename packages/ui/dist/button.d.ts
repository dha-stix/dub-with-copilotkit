import * as react from 'react';
import { ReactNode } from 'react';
import * as class_variance_authority_dist_types from 'class-variance-authority/dist/types';
import { VariantProps } from 'class-variance-authority';

declare const buttonVariants: (props?: ({
    variant?: "success" | "outline" | "primary" | "secondary" | "danger" | "danger-outline" | null | undefined;
} & class_variance_authority_dist_types.ClassProp) | undefined) => string;
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {
    text?: ReactNode | string;
    textWrapperClassName?: string;
    loading?: boolean;
    icon?: ReactNode;
    shortcut?: string;
    disabledTooltip?: string | ReactNode;
}
declare const Button: react.ForwardRefExoticComponent<ButtonProps & react.RefAttributes<HTMLButtonElement>>;

export { Button, ButtonProps, buttonVariants };
