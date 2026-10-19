import type { CSSProperties } from "react";
import type { ICardProps } from "../../types/card/card-type";
import { Color } from "../../utils/colors/colors";

export const useCardBuilder = ({
    variant = "default",
    padding = "medium",
    hoverable = false,
}: Pick<ICardProps, "variant" | "padding" | "hoverable">) => {
    const variants = {
        default: {
            backgroundColor: Color.SURFACE,
            border: `1px solid ${Color.BORDER}`,
            boxShadow: "none",
        },
        outlined: {
            backgroundColor: "transparent",
            border: `1px solid ${Color.BORDER}`,
            boxShadow: "none",
        },
        elevated: {
            backgroundColor: Color.SURFACE,
            border: `1px solid ${Color.BORDER}`,
            boxShadow: "0 8px 24px rgba(0, 0, 0, 0.2)",
        },
    };

    const paddings = {
        small: "1rem",
        medium: "1.5rem",
        large: "2rem",
    };

    return {
        cardStyle: {
            ...variants[variant],
            padding: paddings[padding],
        } satisfies CSSProperties,
        hoverable,
    };
};
