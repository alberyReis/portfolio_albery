import type { CSSProperties } from "react";
import { Color } from "../../../utils/colors/colors";
import type { ISubtitleProps } from "../../../types/typography/subtitle/subtitle-type";

export const useSubtitleBuilder = (
    color: NonNullable<ISubtitleProps["color"]>
) => {
    const colors = {
        primary: Color.TEXT_PRIMARY,
        secondary: Color.TEXT_SECONDARY,
        muted: Color.TEXT_MUTED,
        accent: Color.PRIMARY,
    };

    return {
        subtitleStyle: {
            color: colors[color],
        } satisfies CSSProperties,
    };
};
