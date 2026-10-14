import type { HTMLAttributes, ReactNode } from "react";
import { Color } from "../../utils/colors/colors";

type BadgeProps = HTMLAttributes<HTMLSpanElement> & {
    children: ReactNode;
    variant?: "primary" | "secondary" | "success" | "warning" | "error" | "info";
    size?: "small" | "medium";
};

export const Badge = ({
    children,
    variant = "secondary",
    size = "medium",
    style,
    ...props
}: BadgeProps) => {
    const variants = {
        primary: {
            backgroundColor: `${Color.PRIMARY}1A`,
            color: Color.PRIMARY,
            border: `1px solid ${Color.PRIMARY}4D`,
        },
        secondary: {
            backgroundColor: Color.SURFACE,
            color: Color.TEXT_SECONDARY,
            border: `1px solid ${Color.BORDER}`,
        },
        success: {
            backgroundColor: `${Color.SUCCESS}1A`,
            color: Color.SUCCESS,
            border: `1px solid ${Color.SUCCESS}4D`,
        },
        warning: {
            backgroundColor: `${Color.WARNING}1A`,
            color: Color.WARNING,
            border: `1px solid ${Color.WARNING}4D`,
        },
        error: {
            backgroundColor: `${Color.ERROR}1A`,
            color: Color.ERROR,
            border: `1px solid ${Color.ERROR}4D`,
        },
        info: {
            backgroundColor: `${Color.INFO}1A`,
            color: Color.INFO,
            border: `1px solid ${Color.INFO}4D`,
        },
    };

    const sizes = {
        small: {
            padding: "0.125rem 0.5rem",
            fontSize: "0.75rem",
        },
        medium: {
            padding: "0.25rem 0.625rem",
            fontSize: "0.875rem",
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
