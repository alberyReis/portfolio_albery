
import type { ReactNode } from "react";
import { Color } from "../../utils/colors/colors";

type LabelProps = {
    children: ReactNode;
    color?: "primary" | "secondary" | "muted" | "accent";
};

const colors = {
    primary: Color.TEXT_PRIMARY,
    secondary: Color.TEXT_SECONDARY,
    muted: Color.TEXT_MUTED,
    accent: Color.PRIMARY,
};

export const Label = ({
    children,
    color = "secondary",
}: LabelProps) => {
    return (
        <span
            style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "0.875rem",
                fontWeight: 600,
                lineHeight: 1.5,
                color: colors[color],
            }}
        >
            {children}
        </span>
    );
};
