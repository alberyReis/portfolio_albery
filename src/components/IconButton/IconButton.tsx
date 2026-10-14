import type { ButtonHTMLAttributes, ReactNode } from "react";
import { Color } from "../../utils/colors/colors";

type IconButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
    icon: ReactNode;
    label: string;
    variant?: "primary" | "secondary" | "outline" | "ghost";
    size?: "small" | "medium" | "large";
};

export const IconButton = ({
    icon,
    label,
    variant = "ghost",
    size = "medium",
    disabled = false,
    style,
    ...props
}: IconButtonProps) => {
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
        ghost: {
            backgroundColor: "transparent",
            color: Color.TEXT_SECONDARY,
            border: "1px solid transparent",
        },
    };

    const sizes = {
        small: "2rem",
        medium: "2.5rem",
        large: "3rem",
    };

    return (
        <button
            type="button"
            aria-label={label}
            title={label}
            disabled={disabled}
            style={{
                ...variants[variant],
                width: sizes[size],
                height: sizes[size],
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                padding: 0,
                borderRadius: "0.5rem",
                fontSize: size === "small" ? "1rem" : "1.25rem",
                cursor: disabled ? "not-allowed" : "pointer",
                opacity: disabled ? 0.5 : 1,
                transition: "background-color 150ms ease, color 150ms ease",
                ...style,
            }}
            {...props}
        >
            {icon}
        </button>
    );
};
