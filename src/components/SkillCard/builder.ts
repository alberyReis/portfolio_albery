import type { CSSProperties } from "react";
import { Color } from "../../utils/colors/colors";

export const useSkillCardBuilder = () => {
    return {
        cardStyle: {
            backgroundColor: Color.SURFACE,
            borderColor: Color.BORDER,
            color: Color.TEXT_PRIMARY,
        } satisfies CSSProperties,

        iconStyle: {
            backgroundColor: `${Color.PRIMARY}1A`,
            color: Color.PRIMARY,
        } satisfies CSSProperties,
    };
};
