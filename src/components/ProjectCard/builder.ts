import type { CSSProperties } from "react";
import { Color } from "../../utils/colors/colors";

export const useProjectCardBuilder = () => {
    return {
        cardStyle: {
            backgroundColor: Color.SURFACE,
            borderColor: Color.BORDER,
            color: Color.TEXT_PRIMARY,
        } satisfies CSSProperties,

        linkStyle: {
            color: Color.PRIMARY,
        } satisfies CSSProperties,
    };
};
