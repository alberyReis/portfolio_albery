import type { HTMLAttributes } from "react";
import { Color } from "../../utils/colors/colors";


type DividerProps = HTMLAttributes<HTMLHRElement> & {
    orientation?: "horizontal" | "vertical";
    variant?: "solid" | "dashed" | "dotted";
    color?: "default" | "strong" | "primary";
    spacing?: "small" | "medium" | "large";
};

export const Divider = ({
    orientation = "horizontal",
    variant = "solid",
    color = "default",
    spacing = "medium",
    style,
    ...props
}: DividerProps) => {
    const colors = {
        default: Color.BORDER,
        strong: Color.BORDER_HOVER,
        primary: Color.PRIMARY,
    };

    const spacings = {
        small: "0.5rem",
        medium: "1rem",
        large: "1.5rem",
    };

    const isHorizontal = orientation === "horizontal";

    return (
        <hr
            aria-orientation={orientation}
            style={{
                border: "none",
                backgroundColor: "transparent",
                borderTop: isHorizontal
                    ? `${variant === "solid" ? "1px solid" : `1px ${variant}`} ${colors[color]}`
                    : undefined,
                borderLeft: !isHorizontal
                    ? `${variant === "solid" ? "1px solid" : `1px ${variant}`} ${colors[color]}`
                    : undefined,
                width: isHorizontal ? "100%" : "0",
                height: isHorizontal ? "0" : "auto",
                alignSelf: isHorizontal ? undefined : "stretch",
                margin: isHorizontal
                    ? `${spacings[spacing]} 0`
                    : `0 ${spacings[spacing]}`,
                ...style,
            }}
            {...props}
        />
    );
};
