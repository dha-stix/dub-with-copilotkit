import * as react_jsx_runtime from 'react/jsx-runtime';
import { Table as Table$1, ColumnDef, Cell, VisibilityState, ColumnPinningState, PaginationState } from '@tanstack/react-table';
import { ReactNode, Dispatch, SetStateAction, PropsWithChildren } from 'react';

type UseTableProps<T> = {
    columns: ColumnDef<T, any>[];
    data: T[];
    loading?: boolean;
    error?: string;
    emptyState?: ReactNode;
    cellRight?: (cell: Cell<T, any>) => ReactNode;
    defaultColumn?: Partial<ColumnDef<T, any>>;
    sortBy?: string;
    sortOrder?: "asc" | "desc";
    onSortChange?: (props: {
        sortBy?: string;
        sortOrder?: "asc" | "desc";
    }) => void;
    sortableColumns?: string[];
    columnVisibility?: VisibilityState;
    onColumnVisibilityChange?: (visibility: VisibilityState) => void;
    columnPinning?: ColumnPinningState;
    resourceName?: (plural: boolean) => string;
    className?: string;
    thClassName?: string;
    tdClassName?: string;
} & ({
    pagination: PaginationState;
    onPaginationChange?: Dispatch<SetStateAction<PaginationState>>;
    rowCount: number;
} | {
    pagination?: never;
    onPaginationChange?: never;
    rowCount?: never;
});
type TableProps<T> = UseTableProps<T> & PropsWithChildren<{
    table: Table$1<T>;
}>;
declare function useTable<T extends any>(props: UseTableProps<T>): TableProps<T> & {
    table: Table$1<T>;
};
declare function Table<T>({ columns, data, loading, error, emptyState, cellRight, sortBy, sortOrder, onSortChange, sortableColumns, className, thClassName, tdClassName, table, pagination, resourceName, rowCount, children, }: TableProps<T>): react_jsx_runtime.JSX.Element;

export { Table, useTable };
