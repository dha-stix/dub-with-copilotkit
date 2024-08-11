import * as react_jsx_runtime from 'react/jsx-runtime';
import * as class_variance_authority_dist_types from 'class-variance-authority/dist/types';
import { VariantProps } from 'class-variance-authority';
import { ReactNode } from 'react';

declare const acceptFileTypes: Record<string, {
    types: string[];
    errorMessage?: string;
}>;
declare const imageUploadVariants: (props?: ({
    variant?: "default" | "plain" | null | undefined;
} & class_variance_authority_dist_types.ClassProp) | undefined) => string;
type FileUploadReadFileProps = {
    /**
     * Whether to automatically read the file and return the result as `src` to onChange
     */
    readFile?: false;
    onChange?: (data: {
        file: File;
    }) => void;
} | {
    /**
     * Whether to automatically read the file and return the result as `src` to onChange
     */
    readFile: true;
    onChange?: (data: {
        file: File;
        src: string;
    }) => void;
};
type FileUploadProps = FileUploadReadFileProps & {
    accept: keyof typeof acceptFileTypes;
    className?: string;
    iconClassName?: string;
    /**
     * Image to display (generally for image uploads)
     */
    imageSrc?: string | null;
    /**
     * Whether to display a loading spinner
     */
    loading?: boolean;
    /**
     * Whether to allow clicking on the area to upload
     */
    clickToUpload?: boolean;
    /**
     * Whether to show instruction overlay when hovered
     */
    showHoverOverlay?: boolean;
    /**
     * Content to display below the upload icon (null to only display the icon)
     */
    content?: ReactNode | null;
    /**
     * Desired resolution to suggest and optionally resize to
     */
    targetResolution?: {
        width: number;
        height: number;
    };
    /**
     * A maximum file size (in megabytes) to check upon file selection
     */
    maxFileSizeMB?: number;
    /**
     * Accessibility label for screen readers
     */
    accessibilityLabel?: string;
    disabled?: boolean;
} & VariantProps<typeof imageUploadVariants>;
declare function FileUpload({ readFile, onChange, variant, className, iconClassName, accept, imageSrc, loading, clickToUpload, showHoverOverlay, content, maxFileSizeMB, accessibilityLabel, disabled, }: FileUploadProps): react_jsx_runtime.JSX.Element;

export { FileUpload, FileUploadProps };
