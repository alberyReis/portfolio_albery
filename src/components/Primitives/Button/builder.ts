import { Color } from "../../../utils/colors/colors";
import type { IButtonProps } from "../../../types/primitives/button/button-type";

export const useButtonBuilder = ({
    variant = "primary",
    size = "medium",
}: Pick<IButtonProps, "variant" | "size">) => {
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
    };

    const sizes = {
        small: {
            padding: "0.5rem 0.875rem",
            fontSize: "0.875rem",
        },
        medium: {
            padding: "0.75rem 1.25rem",
            fontSize: "1rem",
        },
        large: {
            padding: "1rem 1.5rem",
            fontSize: "1.125rem",
        },
    };

    return {
        variantStyles: variants[variant],
        sizeStyles: sizes[size],
    };
};