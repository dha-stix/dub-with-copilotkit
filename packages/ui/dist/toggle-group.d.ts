import * as react_jsx_runtime from 'react/jsx-runtime';

interface ToggleOption {
    value: string;
    label: string;
}
declare function ToggleGroup({ options, selected, selectAction, }: {
    options: ToggleOption[];
    selected: string | null;
    selectAction: (option: string) => void;
}): react_jsx_runtime.JSX.Element;

export { ToggleGroup };
