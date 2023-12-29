import { CSSProperties } from "react";
/**
 * Props for the Image component
 */
export type ImageProps = {
    src: string | {
        uri: string;
    };
    alt: string;
    width?: CSSProperties["width"];
    height?: CSSProperties["height"];
    className?: string;
    style?: {
        [key: string]: any;
    };
    loading?: "lazy" | "eager";
    mode?: "blur" | "wave";
    objectfit?: CSSProperties["objectFit"];
    onClick?: () => void;
};
