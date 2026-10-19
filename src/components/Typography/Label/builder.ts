import type { CSSProperties } from "react";
import { Color } from "../../../utils/colors/colors";
import type { ILabelProps } from "../../../types/typography/label/label-type";

export const useLabelBuilder = (
    color: NonNullable<ILabelProps["color"]>
) => {
    const colors = {
        primary: Color.TEXT_PRIMARY,
        secondary: Color.TEXT_SECONDARY,
        muted: Color.TEXT_MUTED,
        accent: Color.PRIMARY,
    };

    return {
        labelStyle: {
            color: colors[color],
        } satisfies CSSProperties,
    };
};