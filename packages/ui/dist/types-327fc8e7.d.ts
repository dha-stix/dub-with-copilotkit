import { LucideIcon } from 'lucide-react';
import { ReactNode, ComponentType, SVGProps } from 'react';

type FilterIcon = LucideIcon | ReactNode | ComponentType<SVGProps<SVGSVGElement>>;
type Filter = {
    key: string;
    icon: FilterIcon;
    label: string;
    separatorAfter?: boolean;
    options: FilterOption[] | null;
    multiple?: boolean;
    getOptionIcon?: (value: FilterOption["value"], props: {
        key: Filter["key"];
        option?: FilterOption;
    }) => FilterIcon | null;
    getOptionLabel?: (value: FilterOption["value"], props: {
        key: Filter["key"];
        option?: FilterOption;
    }) => string | null;
};
type FilterOption = {
    value: any;
    label: string;
    right?: ReactNode;
    icon?: FilterIcon;
    data?: Record<string, any>;
};

export { Filter as F, FilterOption as a };
