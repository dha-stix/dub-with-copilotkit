import * as react_jsx_runtime from 'react/jsx-runtime';
import * as class_variance_authority_dist_types from 'class-variance-authority/dist/types';
import { VariantProps } from 'class-variance-authority';
import Autoplay from 'embla-carousel-autoplay';
import useEmblaCarousel, { UseEmblaCarouselType } from 'embla-carousel-react';
import * as react from 'react';

type CarouselApi = UseEmblaCarouselType[1];
type UseCarouselParameters = Parameters<typeof useEmblaCarousel>;
type CarouselOptions = UseCarouselParameters[0];
type CarouselPlugin = UseCarouselParameters[1];
type AutoplayOptions = Parameters<typeof Autoplay>[0];
type CarouselProps = {
    opts?: CarouselOptions;
    plugins?: CarouselPlugin;
    orientation?: "horizontal" | "vertical";
    autoplay?: boolean | AutoplayOptions;
    setApi?: (api: CarouselApi) => void;
};
type CarouselContextProps = {
    carouselRef: ReturnType<typeof useEmblaCarousel>[0];
    api: ReturnType<typeof useEmblaCarousel>[1];
    scrollPrev: () => void;
    scrollNext: () => void;
    canScrollPrev: boolean;
    canScrollNext: boolean;
} & CarouselProps;
declare function useCarousel(): CarouselContextProps;
declare const Carousel: react.ForwardRefExoticComponent<react.HTMLAttributes<HTMLDivElement> & CarouselProps & react.RefAttributes<HTMLDivElement>>;
declare const CarouselContent: react.ForwardRefExoticComponent<react.HTMLAttributes<HTMLDivElement> & react.RefAttributes<HTMLDivElement>>;
declare const CarouselItem: react.ForwardRefExoticComponent<react.HTMLAttributes<HTMLDivElement> & react.RefAttributes<HTMLDivElement>>;
declare const CarouselPrevious: react.ForwardRefExoticComponent<{
    className?: string | undefined;
} & react.RefAttributes<HTMLButtonElement>>;
declare const CarouselNext: react.ForwardRefExoticComponent<{
    className?: string | undefined;
} & react.RefAttributes<HTMLButtonElement>>;
declare const CarouselNavBar: ({ variant, className, }: VariantProps<(props?: ({
    variant?: "simple" | "floating" | null | undefined;
} & class_variance_authority_dist_types.ClassProp) | undefined) => string> & {
    className?: string | undefined;
}) => react_jsx_runtime.JSX.Element;

export { Carousel, CarouselApi, CarouselContent, CarouselItem, CarouselNavBar, CarouselNext, CarouselPrevious, useCarousel };
