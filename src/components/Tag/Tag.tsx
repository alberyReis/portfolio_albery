import type { HTMLAttributes, ReactNode } from "react";
import { Color } from "../../utils/colors/colors";


type TagProps = HTMLAttributes<HTMLSpanElement> & {
    children: ReactNode;
    variant?: "default" | "primary" | "outline";
    size?: "small" | "medium" | "large";
};

export const Tag = ({
    children,
    variant = "default",
    size = "medium",
    style,
    ...props
}: TagProps) => {
    const variants = {
        default: {
            backgroundColor: Color.SURFACE,
            color: Color.TEXT_SECONDARY,
            border: `1px solid ${Color.BORDER}`,
        },
        primary: {
            backgroundColor: `${Color.PRIMARY}1A`,
            color: Color.PRIMARY,
            border: `1px solid ${Color.PRIMARY}4D`,
        },
        outline: {
            backgroundColor: "transparent",
            color: Color.TEXT_PRIMARY,
            border: `1px solid ${Color.BORDER}`,
        },
    };

    const sizes = {
        small: {
            padding: "0.125rem 0.5rem",
            fontSize: "0.75rem",
        },
        medium: {
            padding: "0.25rem 0.75rem",
            fontSize: "0.875rem",
        },
        large: {
            padding: "0.375rem 1rem",
            fontSize: "1rem",
        },
    };

    return (
        <span
            style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                width: "fit-content",
                fontFamily: "'Inter', sans-serif",
                fontWeight: 500,
                lineHeight: 1.5,
                whiteSpace: "nowrap",
                borderRadius: "0.375rem",
                ...variants[variant],
                ...sizes[size],
                ...style,
            }}
            {...props}
        >
            {children}
        </span>
    );
};
