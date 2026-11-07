import type {
    InputHTMLAttributes,
    ReactNode,
    SelectHTMLAttributes,
    TextareaHTMLAttributes,
} from "react";

export type ButtonProps = {
    children: ReactNode;
    onClick?: () => void;
};

export type CardProps = {
    children: ReactNode;
    className?: string;
};

export type ContainerProps = {
    children: ReactNode;
    className?: string;
};

export type SectionTitleProps = {
    subtitle?: string;
    title: string;
    description?: string;
};

export type ModalProps = {
    isOpen: boolean;
    onClose: () => void;
    children: ReactNode;
};

export type SelectProps = SelectHTMLAttributes<HTMLSelectElement>;

export type TextareaProps = TextareaHTMLAttributes<HTMLTextAreaElement>;

export type InputProps = InputHTMLAttributes<HTMLInputElement>;

