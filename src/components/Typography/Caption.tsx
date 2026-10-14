
import type { ReactNode } from "react";
import { Color } from "../../utils/colors/colors";

type CaptionProps = {
    children: ReactNode;
    color?: "secondary" | "muted" | "accent";
};

const colors = {
    secondary: Color.TEXT_SECONDARY,
    muted: Color.TEXT_MUTED,
    accent: Color.PRIMARY,
};

export const Caption = ({
    children,
    color = "muted",
}: CaptionProps) => {
    return (
        <span
            style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "0.75rem",
                fontWeight: 400,
                lineHeight: 1.5,
                color: colors[color],
            }}
        >
            {children}
        </span>
    );
};
