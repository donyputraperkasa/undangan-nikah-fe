import { ReactNode } from "react";

type FloralFrameProps = {
    children: ReactNode;
    className?: string;
};

export default function FloralFrame({
    children,
    className = "",
}: FloralFrameProps) {
    return (
        <div
            className={`
                relative
                rounded-[32px]
                border
                border-[#D8CFC2]
                bg-white/40
                p-6
                md:p-8
                shadow-lg
                backdrop-blur-md
                overflow-hidden
                ${className}
            `}
        >
            <div className="absolute top-0 left-0 w-24 h-24 rounded-full bg-[#5B4B8A]/10 blur-2xl" />
            <div className="absolute bottom-0 right-0 w-24 h-24 rounded-full bg-[#A67C52]/10 blur-2xl" />

            <div className="relative z-10">
                {children}
            </div>
        </div>
    );
}
