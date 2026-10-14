import type { AnchorHTMLAttributes, ReactNode } from "react";
import { Color } from "../../utils/colors/colors";

type LinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
    children: ReactNode;
    variant?: "primary" | "secondary" | "muted";
    underline?: boolean;
};

export const Link = ({
    children,
    variant = "primary",
    underline = false,
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
                fontWeight: 500,
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
