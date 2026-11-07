import type { ReactNode } from "react";

export type CornerPosition = "top-left" | "top-right" | "bottom-left" | "bottom-right";

export type ButterflyProps = {
    className?: string;
};

export type FloralWreathProps = {
    children?: ReactNode;
    className?: string;
};

export type VintageCornerProps = {
    position?: CornerPosition;
    className?: string;
    color?: string;
};

export type BatikCornerProps = {
    position?: CornerPosition;
};

export type FloralFrameProps = {
    children: ReactNode;
    className?: string;
};

export type GununganOrnamentProps = {
    className?: string;
    variant?: "full" | "side-left" | "side-right";
    color?: string;
};

export interface ParallaxLayerProps {
    children: ReactNode;
    className?: string;
}

export interface FloatingGlowProps {
    className?: string;
    color?: string;
    size?: string;
}

