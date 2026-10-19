import type { ReactNode } from "react";

export type ITextProps = {
    children: ReactNode;
    size?: "small" | "medium" | "large";
    color?: "primary" | "secondary" | "muted" | "accent" | "success";
    weight?: 400 | 500 | 600 | 700;
};
