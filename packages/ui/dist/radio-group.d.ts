import * as RadioGroupPrimitive from '@radix-ui/react-radio-group';
import * as react from 'react';

declare const RadioGroup: react.ForwardRefExoticComponent<Omit<RadioGroupPrimitive.RadioGroupProps & react.RefAttributes<HTMLDivElement>, "ref"> & react.RefAttributes<HTMLDivElement>>;
declare const RadioGroupItem: react.ForwardRefExoticComponent<Omit<RadioGroupPrimitive.RadioGroupItemProps & react.RefAttributes<HTMLButtonElement>, "ref"> & react.RefAttributes<HTMLButtonElement>>;

export { RadioGroup, RadioGroupItem };
