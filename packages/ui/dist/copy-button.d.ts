import * as react_jsx_runtime from 'react/jsx-runtime';
import * as class_variance_authority_dist_types from 'class-variance-authority/dist/types';
import { VariantProps } from 'class-variance-authority';
import { LucideIcon } from 'lucide-react';

declare const copyButtonVariants: (props?: ({
    variant?: "default" | "neutral" | null | undefined;
} & class_variance_authority_dist_types.ClassProp) | undefined) => string;
declare function CopyButton({ variant, value, className, icon, }: {
    value: string;
    className?: string;
    icon?: LucideIcon;
} & VariantProps<typeof copyButtonVariants>): react_jsx_runtime.JSX.Element;

export { CopyButton };
