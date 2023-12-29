import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useEffect, useState } from "react";
import "../styles/style.css";
export default ({ src, alt, ...props }) => {
    // Local state
    const [loaded, setLoaded] = useState(false);
    const [imageSrc, setImageSrc] = useState();
    // Effects
    useEffect(() => {
        // Preload image
        const img = new Image();
        // When image is loaded, update state
        img.onload = () => {
            setLoaded(true);
        };
        img.src =
            src && src.uri
                ? src.uri
                : src;
        // Save image to state
        setImageSrc(img);
        // Clean up
        return () => {
            img.onload = null;
        };
    }, [src]);
    return (_jsx(_Fragment, { children: _jsxs("div", { style: {
                width: props.width || imageSrc?.width || 200,
                height: props.height || imageSrc?.height || 200,
                overflow: "hidden",
                position: "relative",
            }, className: props.className, children: [
                // If image is not loaded, show loading fallback
                props.loading === "lazy" && !loaded && (_jsx("div", { style: {
                        width: "300%",
                        height: props.height || imageSrc?.height || 200,
                        backgroundColor: "#e5e5e5",
                    }, className: `${props.loading === "lazy"
                        ? props.mode === "blur"
                            ? "blur-container"
                            : "wave-container wave"
                        : ""}` })), _jsx("img", { src: imageSrc?.src, alt: alt, ...props, style: {
                        objectFit: props.objectfit || "cover",
                        width: "100%",
                        height: "100%",
                    }, hidden: props.loading === "lazy" ? !loaded : false })] }) }));
};
// Fallback component to show while the image is loading
export const LoadingFallback = () => _jsx("div", { children: "Loading..." });
//# sourceMappingURL=image.js.map