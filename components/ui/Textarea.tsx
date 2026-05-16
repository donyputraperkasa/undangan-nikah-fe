import { TextareaHTMLAttributes } from "react";

type TextareaProps = TextareaHTMLAttributes<HTMLTextAreaElement>;

export default function Textarea(props: TextareaProps) {
    return (
        <textarea
            {...props}
            className={`
                w-full
                rounded-2xl
                border
                border-[#D8CFC2]
                bg-white/70
                px-5
                py-4
                text-[#3B2F2F]
                outline-none
                transition-all
                resize-none
                focus:border-[#A67C52]
                focus:ring-2
                focus:ring-[#A67C52]/20
                ${props.className || ""}
            `}
        />
    );
}