import * as react_jsx_runtime from 'react/jsx-runtime';
import * as react from 'react';
import { PropsWithChildren } from 'react';
import * as class_variance_authority_dist_types from 'class-variance-authority/dist/types';
import { VariantProps } from 'class-variance-authority';

declare const cardListVariants: (props?: ({
    variant?: "compact" | "loose" | null | undefined;
    loading?: boolean | null | undefined;
} & class_variance_authority_dist_types.ClassProp) | undefined) => string;
type CardListProps = PropsWithChildren<{
    loading?: boolean;
    className?: string;
}> & VariantProps<typeof cardListVariants>;
declare const CardListContext: react.Context<Pick<CardListProps, "variant">>;
declare function CardList({ variant, loading, className, children, }: CardListProps): react_jsx_runtime.JSX.Element;

export { CardList, CardListContext };
