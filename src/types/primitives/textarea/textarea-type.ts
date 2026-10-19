import type { TextareaHTMLAttributes } from "react";

export type ITextAreaProps = TextareaHTMLAttributes<HTMLTextAreaElement> & {
    label?: string;
    error?: string;
};