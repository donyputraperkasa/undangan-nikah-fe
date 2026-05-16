import { ReactNode } from "react";

interface ParallaxLayerProps {
    children: ReactNode;
    className?: string;
}

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
