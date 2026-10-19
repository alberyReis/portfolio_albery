import type { HTMLAttributes } from "react";

export type IDividerProps = HTMLAttributes<HTMLHRElement> & {
    orientation?: "horizontal" | "vertical";
    variant?: "solid" | "dashed" | "dotted";
    color?: "default" | "strong" | "primary";
    spacing?: "small" | "medium" | "large";
};
