interface FloatingGlowProps {
    className?: string;
    color?: string;
    size?: string;
}

export default function FloatingGlow({
    className = "",
    color = "bg-[#A67C52]/20",
    size = "w-40 h-40",
}: FloatingGlowProps) {
    return (
        <div
            className={`
                absolute
                rounded-full
                blur-3xl
                pointer-events-none
                ${size}
                ${color}
                ${className}
            `}
        />
    );
}
