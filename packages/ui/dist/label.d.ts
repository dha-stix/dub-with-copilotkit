import * as class_variance_authority_dist_types from 'class-variance-authority/dist/types';
import * as LabelPrimitive from '@radix-ui/react-label';
import { VariantProps } from 'class-variance-authority';
import * as react from 'react';

declare const Label: react.ForwardRefExoticComponent<Omit<LabelPrimitive.LabelProps & react.RefAttributes<HTMLLabelElement>, "ref"> & VariantProps<(props?: class_variance_authority_dist_types.ClassProp | undefined) => string> & react.RefAttributes<HTMLLabelElement>>;

export { Label };
