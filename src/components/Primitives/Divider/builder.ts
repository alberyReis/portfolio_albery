import type { CSSProperties } from "react";
import { Color } from "../../../utils/colors/colors";
import type { IDividerProps } from "../../../types/divider/divider-type";

export const useDividerBuilder = ({
    orientation = "horizontal",
    variant = "solid",
    color = "default",
    spacing = "medium",
}: Pick<IDividerProps, "orientation" | "variant" | "color" | "spacing">) => {
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
    const colorValue = colors[color];
    const spacingValue = spacings[spacing];

    const dividerStyle = {
        borderTop: isHorizontal
            ? `1px ${variant} ${colorValue}`
            : undefined,
        borderLeft: !isHorizontal
            ? `1px ${variant} ${colorValue}`
            : undefined,
        margin: isHorizontal
            ? `${spacingValue} 0`
            : `0 ${spacingValue}`,
    } satisfies CSSProperties;

    return {
        isHorizontal,
        dividerStyle,
    };
};
