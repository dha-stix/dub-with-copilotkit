declare const resizeImage: (file: File, opts?: {
    width: number;
    height: number;
    quality: number;
}) => Promise<string>;

export { resizeImage };
