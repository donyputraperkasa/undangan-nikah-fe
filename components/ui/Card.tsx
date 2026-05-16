import { ReactNode } from "react";

type CardProps = {
    children: ReactNode;
    className?: string;
};

export default function Card({
    children,
    className = "",
}: CardProps) {
    return (
        <div
            className={`
                rounded-[32px]
                bg-white/60
                backdrop-blur-md
                border
                border-white/40
                shadow-lg
                p-6
                md:p-8
                ${className}
            `}
        >
            {children}
        </div>
    );
}