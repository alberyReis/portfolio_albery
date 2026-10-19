import type { CSSProperties } from "react";
import { Color } from "../../../utils/colors/colors";
import type { ITagProps } from "../../../types/tag/tag-type";

export const useTagBuilder = (
    variant: NonNullable<ITagProps["variant"]>,
    size: NonNullable<ITagProps["size"]>
) => {
    const variants = {
        default: {
            backgroundColor: Color.SURFACE,
            color: Color.TEXT_SECONDARY,
            border: `1px solid ${Color.BORDER}`,
        },
        primary: {
            backgroundColor: `${Color.PRIMARY}1A`,
            color: Color.PRIMARY,
            border: `1px solid ${Color.PRIMARY}4D`,
        },
        outline: {
            backgroundColor: "transparent",
            color: Color.TEXT_PRIMARY,
            border: `1px solid ${Color.BORDER}`,
        },
    };

    const sizes = {
        small: {
            padding: "0.125rem 0.5rem",
            fontSize: "0.75rem",
        },
        medium: {
            padding: "0.25rem 0.75rem",
            fontSize: "0.875rem",
        },
        large: {
            padding: "0.375rem 1rem",
            fontSize: "1rem",
        },
    };

    return {
        tagStyle: {
            ...variants[variant],
            ...sizes[size],
        } satisfies CSSProperties,
    };
};