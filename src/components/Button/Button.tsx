
import type { ButtonHTMLAttributes, ReactNode } from "react";
import { Color } from "../../utils/colors/colors";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
    children: ReactNode;
    variant?: "primary" | "secondary" | "outline";
    size?: "small" | "medium" | "large";
};

export const Button = ({
    children,
    variant = "primary",
    size = "medium",
    disabled = false,
    style,
    ...props
}: ButtonProps) => {
    const variants = {
        primary: {
            backgroundColor: Color.PRIMARY,
            color: Color.TEXT_PRIMARY,
            border: `1px solid ${Color.PRIMARY}`,
        },
        secondary: {
            backgroundColor: Color.SURFACE,
            color: Color.TEXT_PRIMARY,
            border: `1px solid ${Color.BORDER}`,
        },
        outline: {
            backgroundColor: "transparent",
            color: Color.PRIMARY,
            border: `1px solid ${Color.PRIMARY}`,
        },
    };

    const sizes = {
        small: {
            padding: "0.5rem 0.875rem",
            fontSize: "0.875rem",
        },
        medium: {
            padding: "0.75rem 1.25rem",
            fontSize: "1rem",
        },
        large: {
            padding: "1rem 1.5rem",
            fontSize: "1.125rem",
        },
    };

    return (
        <button
            disabled={disabled}
            style={{
                ...variants[variant],
                ...sizes[size],
                fontFamily: "'Inter', sans-serif",
                fontWeight: 600,
                lineHeight: 1.5,
                borderRadius: "0.5rem",
                cursor: disabled ? "not-allowed" : "pointer",
                opacity: disabled ? 0.5 : 1,
                transition: "background-color 150ms ease, border-color 150ms ease",
                ...style,
            }}
            {...props}
        >
            {children}
        </button>
    );
};
