import { ReactNode } from "react";

type ModalProps = {
    isOpen: boolean;
    onClose: () => void;
    children: ReactNode;
};

export default function Modal({
    isOpen,
    onClose,
    children,
}: ModalProps) {
    if (!isOpen) return null;

    return (
        <div
            className="
                fixed
                inset-0
                z-50
                flex
                items-center
                justify-center
                bg-black/40
                px-6
            "
        >
            <div
                className="
                    relative
                    w-full
                    max-w-2xl
                    rounded-[32px]
                    bg-[#F8F3EC]
                    p-6
                    shadow-2xl
                "
            >
                <button
                    onClick={onClose}
                    className="
                        absolute
                        top-4
                        right-4
                        text-xl
                        text-[#5B4B8A]
                    "
                >
                    ✕
                </button>

                {children}
            </div>
        </div>
    );
}