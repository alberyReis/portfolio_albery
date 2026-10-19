import type { CSSProperties } from "react";
import { Color } from "../../../utils/colors/colors";

export const useTextAreaBuilder = (
    error?: string,
    disabled?: boolean,
    style?: CSSProperties
) => ({
    textAreaStyle: {
        borderColor: error ? Color.ERROR : Color.BORDER,
        opacity: disabled ? 0.5 : 1,
        cursor: disabled ? "not-allowed" : "text",
        ...style,
    } satisfies CSSProperties,
});