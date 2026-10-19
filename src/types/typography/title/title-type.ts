import type { ReactNode } from "react";

export type ITitleProps = {
    children: ReactNode;
    size?: "large" | "medium" | "small";
    color?: "primary" | "secondary" | "muted" | "accent";
};
