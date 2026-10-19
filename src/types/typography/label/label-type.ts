import type { ReactNode } from "react";

export type ILabelProps = {
    children: ReactNode;
    color?: "primary" | "secondary" | "muted" | "accent";
};