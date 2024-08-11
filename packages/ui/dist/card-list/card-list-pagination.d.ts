import * as react_jsx_runtime from 'react/jsx-runtime';
import { PropsWithChildren } from 'react';

declare function CardListPagination({ page, onPageChange, pageSize, totalCount, resourceName, children, }: PropsWithChildren<{
    page: number;
    onPageChange: (fn: (prev: number) => number) => void;
    pageSize?: number;
    totalCount: number;
    resourceName?: (plural: boolean) => string;
}>): react_jsx_runtime.JSX.Element;

export { CardListPagination };
