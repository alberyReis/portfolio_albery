import type { ButtonHTMLAttributes, ReactNode } from "react";

export type IIconButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
    icon: ReactNode;
    label: string;
    variant?: "primary" | "secondary" | "outline" | "ghost";
    size?: "small" | "medium" | "large";
};