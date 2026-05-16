import { InputHTMLAttributes } from "react";

type InputProps = InputHTMLAttributes<HTMLInputElement>;

export default function Input(props: InputProps) {
    return (
        <input
            {...props}
            className={`
                w-full
                rounded-2xl
                border
                border-[#D8CFC2]
                bg-white/70
                px-5
                py-3
                text-[#3B2F2F]
                outline-none
                transition-all
                focus:border-[#A67C52]
                focus:ring-2
                focus:ring-[#A67C52]/20
                ${props.className || ""}
            `}
        />
    );
}