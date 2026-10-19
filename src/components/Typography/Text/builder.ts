import type { CSSProperties } from "react";
import { Color } from "../../../utils/colors/colors";
import type { ITextProps } from "../../../types/typography/text/text-type";

export const useTextBuilder = (
    size: NonNullable<ITextProps["size"]>,
    color: NonNullable<ITextProps["color"]>,
    weight: NonNullable<ITextProps["weight"]>
) => {
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

    return {
        textStyle: {
            fontSize: sizes[size],
            fontWeight: weight,
            color: colors[color],
        } satisfies CSSProperties,
    };
};
