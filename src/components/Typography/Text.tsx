
import type { ReactNode } from "react";
import { Color } from "../../utils/colors/colors";

type TextProps = {
    children: ReactNode;
    size?: "small" | "medium" | "large";
    color?: "primary" | "secondary" | "muted" | "accent" | "success";
    weight?: 400 | 500 | 600 | 700;
};

const sizes = {
    small: "0.875rem",
    medium: "1rem",
    large: "1.125rem",
};

const colors = {
    primary: Color.TEXT_PRIMARY,
    secondary: Color.TEXT_SECONDARY,
    muted: Color.TEXT_MUTED,
    accent: Color.PRIMARY,
    success: Color.SUCCESS,
};

export const Text = ({
    children,
    size = "medium",
    color = "secondary",
    weight = 400,
}: TextProps) => {
    return (
        <p
            style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: sizes[size],
                fontWeight: weight,
                lineHeight: 1.75,
                color: colors[color],
                margin: 0,
            }}
        >
            {children}
        </p>
    );
};
