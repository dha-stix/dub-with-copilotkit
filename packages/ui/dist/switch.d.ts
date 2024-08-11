import * as react_jsx_runtime from 'react/jsx-runtime';
import { Dispatch, SetStateAction, ReactNode } from 'react';

declare function Switch({ fn, trackDimensions, thumbDimensions, thumbTranslate, checked, loading, disabled, disabledTooltip, }: {
    fn?: Dispatch<SetStateAction<boolean>> | ((checked: boolean) => void);
    trackDimensions?: string;
    thumbDimensions?: string;
    thumbTranslate?: string;
    checked?: boolean;
    loading?: boolean;
    disabled?: boolean;
    disabledTooltip?: string | ReactNode;
}): react_jsx_runtime.JSX.Element;

export { Switch };
