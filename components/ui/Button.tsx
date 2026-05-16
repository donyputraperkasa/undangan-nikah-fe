"use client";

type Props = {
    children: React.ReactNode;
    onClick?: () => void;
};

export default function Button({
    children,
    onClick,
}: Props) {
    return (
        <button
            type="button"
            onClick={onClick}
            className="
                w-60
                h-10
                rounded-2xl
                bg-[#A67C52]
                px-8
                py-4
                flex
                items-center
                justify-center
                text-center
                text-sm
                tracking-widest
                text-white
                leading-normal
                transition-all
                hover:bg-[#5B4B8A]
                hover:scale-105
            "
        >
            {children}
        </button>
    );
}