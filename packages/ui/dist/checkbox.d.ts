import * as CheckboxPrimitive from '@radix-ui/react-checkbox';
import * as react from 'react';

declare const Checkbox: react.ForwardRefExoticComponent<Omit<CheckboxPrimitive.CheckboxProps & react.RefAttributes<HTMLButtonElement>, "ref"> & react.RefAttributes<HTMLButtonElement>>;

export { Checkbox };
