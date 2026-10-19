import type { CSSProperties } from "react";
import { Color } from "../../../utils/colors/colors";
import type { ICaptionProps } from "../../../types/typography/caption/caption-type";

export const useCaptionBuilder = (
    color: NonNullable<ICaptionProps["color"]>
) => {
    const colors = {
        secondary: Color.TEXT_SECONDARY,
        muted: Color.TEXT_MUTED,
        accent: Color.PRIMARY,
    };

    return {
        captionStyle: {
            color: colors[color],
        } satisfies CSSProperties,
    };
};