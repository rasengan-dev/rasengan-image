import React, { CSSProperties } from "react";

/**
 * Props for the Image component
 */
export type ImageProps = {
  src: string | { uri: string };
  alt: string;
  width?: CSSProperties["width"];
  height?: CSSProperties["height"];
  className?: React.HTMLProps<HTMLDivElement>["className"];
  style?: React.HTMLProps<HTMLDivElement>["style"];
  loading?: "lazy" | "eager";
  mode?: "blur" | "wave";
  objectfit?: CSSProperties["objectFit"];
  onClick?: () => void;
};

export type LoadingFallbackProps = {
  width?: CSSProperties["width"];
  height?: CSSProperties["height"];
}
