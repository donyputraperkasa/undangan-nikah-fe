import type { ParallaxLayerProps } from "@/types/ornament.type";

export default function ParallaxLayer({
    children,
    className = "",
}: ParallaxLayerProps) {
    return (
        <div
            className={`
                absolute
                will-change-transform
                pointer-events-none
                ${className}
            `}
        >
            {children}
        </div>
    );
}
