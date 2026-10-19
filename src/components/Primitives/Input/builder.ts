import type { CSSProperties } from "react";
import { Color } from "../../../utils/colors/colors";

export const useInputBuilder = (
    error?: string,
    disabled?: boolean,
    style?: CSSProperties
) => {
    return {
        wrapperStyle: {
            display: "flex",
            flexDirection: "column",
            gap: "0.5rem",
            width: "100%",
        } satisfies CSSProperties,

        labelStyle: {
            color: Color.TEXT_SECONDARY,
            fontSize: "0.875rem",
            fontWeight: 500,
        } satisfies CSSProperties,

        inputStyle: {
            width: "100%",
            boxSizing: "border-box",
            padding: "0.75rem 1rem",
            backgroundColor: Color.SURFACE,
            color: Color.TEXT_PRIMARY,
            border: `1px solid ${error ? Color.ERROR : Color.BORDER}`,
            borderRadius: "0.5rem",
            fontFamily: "Inter, sans-serif",
            fontSize: "1rem",
            outline: "none",
            opacity: disabled ? 0.5 : 1,
            cursor: disabled ? "not-allowed" : "text",
            ...style,
        } satisfies CSSProperties,

        errorStyle: {
            color: Color.ERROR,
            fontSize: "0.75rem",
        } satisfies CSSProperties,
    };
};