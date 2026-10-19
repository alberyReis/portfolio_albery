import type { CSSProperties } from "react";
import { Color } from "../../../utils/colors/colors";

export const useHomeBuilder = () => {
    return {
        labelStyle: {
            color: Color.PRIMARY,
        } satisfies CSSProperties,

        indicatorStyle: {
            backgroundColor: Color.PRIMARY,
        } satisfies CSSProperties,

        titleHighlightStyle: {
            color: Color.PRIMARY,
        } satisfies CSSProperties,
    };
};
