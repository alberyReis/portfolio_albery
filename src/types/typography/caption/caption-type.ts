import type { ReactNode } from "react";

export type ICaptionProps = {
    children: ReactNode;
    color?: "secondary" | "muted" | "accent";
};