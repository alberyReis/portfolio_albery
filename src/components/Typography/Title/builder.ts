import type { CSSProperties } from "react";
import { Color } from "../../../utils/colors/colors";
import type { ITitleProps } from "../../../types/typography/title/title-type";

export const useTitleBuilder = (
    size: NonNullable<ITitleProps["size"]>,
    color: NonNullable<ITitleProps["color"]>
) => {
    const sizes = {
        large: "clamp(1.5rem, 5vw, 2.5rem)",
        medium: "clamp(1.25rem, 4vw, 2rem)",
        small: "clamp(1rem, 3vw, 1.5rem)",
    };

    const colors = {
        primary: Color.TEXT_PRIMARY,
        secondary: Color.TEXT_SECONDARY,
        muted: Color.TEXT_MUTED,
        accent: Color.PRIMARY,
    };

    return {
        titleStyle: {
            fontSize: sizes[size],
            color: colors[color],
        } satisfies CSSProperties,
    };
};
