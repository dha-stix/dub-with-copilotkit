import { Metadata } from 'next';

declare function constructMetadata({ title, description, image, video, icons, noIndex, }?: {
    title?: string;
    description?: string;
    image?: string | null;
    video?: string | null;
    icons?: Metadata["icons"];
    noIndex?: boolean;
}): Metadata;

export { constructMetadata };
