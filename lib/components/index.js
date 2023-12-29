import { jsx as _jsx } from "react/jsx-runtime";
import React from "react";
import { LoadingFallback } from "./image.js";
// Lazy load the actual image component
const LazyLoadedImage = React.lazy(() => import("./image.js"));
export const LazyImage = ({ src, alt, loading = "lazy", mode = "wave", ...props }) => {
    return (_jsx(React.Suspense, { fallback: _jsx(LoadingFallback, {}), children: _jsx(LazyLoadedImage, { src: src, alt: alt, loading: loading, mode: mode, ...props }) }));
};
//# sourceMappingURL=index.js.map