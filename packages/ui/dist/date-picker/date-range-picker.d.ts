import * as react_jsx_runtime from 'react/jsx-runtime';
import { D as DateRangePreset, a as DateRange, P as PickerProps } from '../types-2682e9e8.js';
import 'date-fns';
import 'react';
import 'react-day-picker';
import '../popover.js';

type RangeDatePickerProps = {
    presets?: DateRangePreset[];
    presetId?: DateRangePreset["id"];
    defaultValue?: DateRange;
    value?: DateRange;
    onChange?: (dateRange?: DateRange, preset?: DateRangePreset) => void;
} & PickerProps;
declare function DateRangePicker({ presets, ...props }: RangeDatePickerProps): react_jsx_runtime.JSX.Element;

export { DateRangePicker };
