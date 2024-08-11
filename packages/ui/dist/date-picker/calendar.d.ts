import * as react_jsx_runtime from 'react/jsx-runtime';
import { DayPickerSingleProps, DayPickerRangeProps } from 'react-day-picker';
export { Matcher } from 'react-day-picker';

type OmitKeys<T, K extends keyof T> = {
    [P in keyof T as P extends K ? never : P]: T[P];
};
type KeysToOmit = "showWeekNumber" | "captionLayout" | "mode";
type SingleProps = OmitKeys<DayPickerSingleProps, KeysToOmit>;
type RangeProps = OmitKeys<DayPickerRangeProps, KeysToOmit>;
type CalendarProps = ({
    mode: "single";
} & SingleProps) | ({
    mode?: undefined;
} & SingleProps) | ({
    mode: "range";
} & RangeProps);
declare function Calendar({ mode, weekStartsOn, numberOfMonths, showYearNavigation, disableNavigation, locale, className, classNames, ...props }: CalendarProps & {
    showYearNavigation?: boolean;
}): react_jsx_runtime.JSX.Element;

export { Calendar };
