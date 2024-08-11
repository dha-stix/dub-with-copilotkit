import * as react_jsx_runtime from 'react/jsx-runtime';
import { F as Filter, a as FilterOption } from '../types-327fc8e7.js';
import 'lucide-react';
import 'react';

type FilterListProps = {
    filters: Filter[];
    activeFilters?: {
        key: Filter["key"];
        value: FilterOption["value"];
    }[];
    onRemove: (key: string, value: FilterOption["value"]) => void;
    onRemoveAll: () => void;
    className?: string;
};
declare function FilterList({ filters, activeFilters, onRemove, onRemoveAll, className, }: FilterListProps): react_jsx_runtime.JSX.Element;

export { FilterList };
