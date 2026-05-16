import { ReactNode } from "react";

type ContainerProps = {
    children: ReactNode;
    className?: string;
};

export default function Container({
    children,
    className = "",
}: ContainerProps) {
    return (
        <div
            className={`
                w-full
                max-w-6xl
                mx-auto
                px-6
                sm:px-8
                md:px-10
                ${className}
            `}
        >
            {children}
        </div>
    );
}