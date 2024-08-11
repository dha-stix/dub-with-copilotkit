import * as react from 'react';
import { PaginationState } from '@tanstack/react-table';

declare function useTablePagination({ pageSize, page, onPageChange, }: {
    pageSize: number;
    page: number;
    onPageChange?: (page: number) => void;
}): {
    pagination: PaginationState;
    setPagination: react.Dispatch<react.SetStateAction<PaginationState>>;
};

export { useTablePagination };
