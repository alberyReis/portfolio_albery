import type { CSSProperties } from "react";
import { Color } from "../../../utils/colors/colors";
import type { ISpinnerProps } from "../../../types/spinner/spinner-type";

export const useSpinnerBuilder = (
    size: NonNullable<ISpinnerProps["size"]>,
    color: NonNullable<ISpinnerProps["color"]>
) => {
    const sizes = {
        small: "1rem",
        medium: "2rem",
        large: "3rem",
    };

    const colors = {
        primary: Color.PRIMARY,
        secondary: Color.TEXT_SECONDARY,
        white: Color.TEXT_PRIMARY,
    };

    return {
        spinnerStyle: {
            width: sizes[size],
            height: sizes[size],
            border: `3px solid ${Color.BORDER}`,
            borderTopColor: colors[color],
        } satisfies CSSProperties,
    };
};