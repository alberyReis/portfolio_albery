import type { HTMLAttributes, ReactNode } from "react";

export type IBadgeProps = HTMLAttributes<HTMLSpanElement> & {
    children: ReactNode;
    variant?: "primary" | "secondary" | "success" | "warning" | "error" | "info";
    size?: "small" | "medium";
};
