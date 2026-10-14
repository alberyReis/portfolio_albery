import type { AnchorHTMLAttributes, ReactNode } from "react";
import { Color } from "../../utils/colors/colors";

type LinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
    children: ReactNode;
    variant?: "primary" | "secondary" | "muted";
    underline?: boolean;
    weight?: 400 | 500 | 600 | 700;
};

export const Link = ({
    children,
    variant = "primary",
    underline = false,
    weight = 500,
    style,
    ...props
}: LinkProps) => {
    const colors = {
        primary: Color.PRIMARY,
        secondary: Color.TEXT_SECONDARY,
        muted: Color.TEXT_MUTED,
    };

    return (
        <a
            style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "1rem",
                fontWeight: weight,
                lineHeight: 1.5,
                color: colors[variant],
                textDecoration: underline ? "underline" : "none",
                textUnderlineOffset: "0.25rem",
                cursor: "pointer",
                transition: "color 150ms ease",
                ...style,
            }}
            {...props}
        >
            {children}
        </a>
    );
};