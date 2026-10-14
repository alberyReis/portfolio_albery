import type { HTMLAttributes, ReactNode } from "react";
import { Color } from "../../utils/colors/colors";

type CardProps = HTMLAttributes<HTMLDivElement> & {
    children: ReactNode;
    variant?: "default" | "outlined" | "elevated";
    padding?: "small" | "medium" | "large";
    hoverable?: boolean;
};

export const Card = ({
    children,
    variant = "default",
    padding = "medium",
    hoverable = false,
    style,
    ...props
}: CardProps) => {
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

    return (
        <div
            style={{
                ...variants[variant],
                padding: paddings[padding],
                borderRadius: "0.75rem",
                boxSizing: "border-box",
                transition: "background-color 150ms ease, border-color 150ms ease",
                ...(hoverable && {
                    cursor: "pointer",
                }),
                ...style,
            }}
            {...props}
        >
            {children}
        </div>
    );
};
