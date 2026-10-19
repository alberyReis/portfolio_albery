import type { HTMLAttributes } from "react";

export type ISpinnerProps = HTMLAttributes<HTMLDivElement> & {
    size?: "small" | "medium" | "large";
    color?: "primary" | "secondary" | "white";
};