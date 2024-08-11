import * as react_jsx_runtime from 'react/jsx-runtime';
import { b as Preset } from '../types-2682e9e8.js';
import 'date-fns';
import 'react';
import 'react-day-picker';
import '../popover.js';

type PresetsProps<TPreset extends Preset, TValue> = {
    presets: TPreset[];
    onSelect: (preset: TPreset) => void;
    currentValue?: TValue;
};
declare const Presets: {
    <TPreset extends Preset, TValue>({ presets, onSelect, currentValue, }: PresetsProps<TPreset, TValue>): react_jsx_runtime.JSX.Element;
    displayName: string;
};

export { Presets };
