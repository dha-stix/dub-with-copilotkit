import * as react from 'react';
import { ComponentProps } from 'react';
import * as class_variance_authority_dist_types from 'class-variance-authority/dist/types';
import { VariantProps } from 'class-variance-authority';

declare const triggerStyles: (props?: ({
    hasError?: boolean | null | undefined;
} & class_variance_authority_dist_types.ClassProp) | undefined) => string;
interface TriggerProps extends ComponentProps<"button">, VariantProps<typeof triggerStyles> {
    placeholder?: string;
}
declare const Trigger: react.ForwardRefExoticComponent<Omit<TriggerProps, "ref"> & react.RefAttributes<HTMLButtonElement>>;

export { Trigger };
