import type { HTMLAttributes, ReactNode } from "react";

export type ITagProps = HTMLAttributes<HTMLSpanElement> & {
    children: ReactNode;
    variant?: "default" | "primary" | "outline";
    size?: "small" | "medium" | "large";
};