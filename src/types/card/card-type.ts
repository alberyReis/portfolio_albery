import type { HTMLAttributes, ReactNode } from "react";

export type ICardProps = HTMLAttributes<HTMLDivElement> & {
    children: ReactNode;
    variant?: "default" | "outlined" | "elevated";
    padding?: "small" | "medium" | "large";
    hoverable?: boolean;
};
