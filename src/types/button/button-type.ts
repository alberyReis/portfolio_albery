import type { ButtonHTMLAttributes, ReactNode } from "react";

export type IButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
    children: ReactNode;
    variant?: "primary" | "secondary" | "outline";
    size?: "small" | "medium" | "large";
};