
import type { ReactNode } from "react";
import { Color } from "../../utils/colors/colors";


type TitleProps = {
    children: ReactNode;
    size?: "large" | "medium" | "small";
    color?: "primary" | "secondary" | "muted" | "accent";
};

const sizes = {
    large: "2.5rem",
    medium: "2rem",
    small: "1.5rem",
};

const colors = {
    primary: Color.TEXT_PRIMARY,
    secondary: Color.TEXT_SECONDARY,
    muted: Color.TEXT_MUTED,
    accent: Color.PRIMARY,
};

export const Title = ({
    children,
    size = "large",
    color = "primary",
}: TitleProps) => {
    return (
        <h2
            style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: sizes[size],
                fontWeight: 700,
                lineHeight: 1.2,
                color: colors[color],
                margin: 0,
            }}
        >
            {children}
        </h2>
    );
};
