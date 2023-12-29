import React from "react";
import { ImageProps } from "../types/index.js";
import { LoadingFallback } from "./image.js";

// Lazy load the actual image component
const LazyLoadedImage = React.lazy(() => import("./image.js"));

export const LazyImage = ({
  src,
  alt,
  loading = "lazy",
  mode = "wave",
  ...props
}: ImageProps) => {
  return (
    <React.Suspense fallback={<LoadingFallback />}>
      {/* Use lazy-loaded image component */}
      <LazyLoadedImage
        src={src}
        alt={alt}
        loading={loading}
        mode={mode}
        {...props}
      />
    </React.Suspense>
  );
};