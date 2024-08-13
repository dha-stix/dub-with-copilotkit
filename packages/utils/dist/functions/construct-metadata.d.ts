import { Metadata } from 'next';

declare function constructMetadata({ title, description, image, video, icons, canonicalUrl, noIndex, }?: {
    title?: string;
    description?: string;
    image?: string | null;
    video?: string | null;
    icons?: Metadata["icons"];
    canonicalUrl?: string;
    noIndex?: boolean;
}): Metadata;

export { constructMetadata };
