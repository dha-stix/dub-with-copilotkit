import * as react_jsx_runtime from 'react/jsx-runtime';
import { ReactNode } from 'react';
import { F as Filter, a as FilterOption } from '../types-327fc8e7.js';
import 'lucide-react';

type FilterSelectProps = {
    filters: Filter[];
    onSelect: (key: string, value: FilterOption["value"]) => void;
    onRemove: (key: string, value: FilterOption["value"]) => void;
    onOpenFilter?: (key: string) => void;
    activeFilters?: {
        key: Filter["key"];
        value: FilterOption["value"];
    }[];
    askAI?: boolean;
    children?: ReactNode;
    emptyState?: ReactNode | Record<string, ReactNode>;
    className?: string;
};
declare function FilterSelect({ filters, onSelect, onRemove, onOpenFilter, activeFilters, askAI, children, emptyState, className, }: FilterSelectProps): react_jsx_runtime.JSX.Element;

export { FilterSelect };
