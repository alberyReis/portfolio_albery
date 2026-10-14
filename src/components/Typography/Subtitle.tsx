
import type { ReactNode } from "react";
import { Color } from "../../utils/colors/colors";

type SubtitleProps = {
    children: ReactNode;
    color?: "primary" | "secondary" | "muted" | "accent";
};

const colors = {
    primary: Color.TEXT_PRIMARY,
    secondary: Color.TEXT_SECONDARY,
    muted: Color.TEXT_MUTED,
    accent: Color.PRIMARY,
};

export const Subtitle = ({
    children,
    color = "secondary",
}: SubtitleProps) => {
    return (
        <h3
            style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "1.25rem",
                fontWeight: 500,
                lineHeight: 1.5,
                color: colors[color],
                margin: 0,
            }}
        >
            {children}
        </h3>
    );
};
