import type { CSSProperties } from "react";
import { Color } from "../../../utils/colors/colors";
import type { ILinkProps } from "../../../types/link/link-type";

export const useLinkBuilder = (
    variant: NonNullable<ILinkProps["variant"]>,
    underline: boolean,
    weight: NonNullable<ILinkProps["weight"]>,
    style?: CSSProperties
) => {
    const colors = {
        primary: Color.PRIMARY,
        secondary: Color.TEXT_SECONDARY,
        muted: Color.TEXT_MUTED,
    };

    return {
        linkStyle: {
            color: colors[variant],
            textDecoration: underline ? "underline" : "none",
            fontWeight: weight,
            ...style,
        } satisfies CSSProperties,
    };
};