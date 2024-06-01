interface ImageLoaderProps {
    src: string;
    width: number;
    quality?: number;
}

const imageLoader = ({ src, width, quality }: ImageLoaderProps): string => {
    return `${src}?w=${width}&q=${quality || 50}`;
};

export default imageLoader;
