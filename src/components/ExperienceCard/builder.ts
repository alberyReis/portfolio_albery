
import type { CSSProperties } from "react";
import { Color } from "../../utils/colors/colors";

export const useExperienceCardBuilder = () => {
    return {
        cardStyle: {
            backgroundColor: Color.SURFACE,
            borderColor: Color.BORDER,
        } satisfies CSSProperties,

        periodStyle: {
            color: Color.TEXT_MUTED,
        } satisfies CSSProperties,

        markerStyle: {
            color: Color.PRIMARY,
        } satisfies CSSProperties,
    };
};
