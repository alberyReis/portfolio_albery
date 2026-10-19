import type { CSSProperties } from "react";
import { Color } from "../../../utils/colors/colors";
import type { IIconButtonProps } from "../../../types/icon-button/icon-button-type";

export const useIconButtonBuilder = (
    variant: NonNullable<IIconButtonProps["variant"]>,
    size: NonNullable<IIconButtonProps["size"]>,
    disabled: boolean,
    style?: CSSProperties
) => {
    const variants = {
        primary: {
            backgroundColor: Color.PRIMARY,
            color: Color.TEXT_PRIMARY,
            border: `1px solid ${Color.PRIMARY}`,
        },
        secondary: {
            backgroundColor: Color.SURFACE,
            color: Color.TEXT_PRIMARY,
            border: `1px solid ${Color.BORDER}`,
        },
        outline: {
            backgroundColor: "transparent",
            color: Color.PRIMARY,
            border: `1px solid ${Color.PRIMARY}`,
        },
        ghost: {
            backgroundColor: "transparent",
            color: Color.TEXT_SECONDARY,
            border: "1px solid transparent",
        },
    };

    const sizes = {
        small: "2rem",
        medium: "2.5rem",
        large: "3rem",
    };

    return {
        buttonStyle: {
            ...variants[variant],
            width: sizes[size],
            height: sizes[size],
            fontSize: size === "small" ? "1rem" : "1.25rem",
            cursor: disabled ? "not-allowed" : "pointer",
            opacity: disabled ? 0.5 : 1,
            ...style,
        } satisfies CSSProperties,
    };
};