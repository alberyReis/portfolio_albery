
import { Color } from "../../../utils/colors/colors";
import type { IBadgeProps } from "../../../types/primitives/badge/badge-type";

export const useBadgeBuilder = ({
    variant = "secondary",
    size = "medium",
}: Pick<IBadgeProps, "variant" | "size">) => {
    const variants = {
        primary: {
            backgroundColor: `${Color.PRIMARY}1A`,
            color: Color.PRIMARY,
            border: `1px solid ${Color.PRIMARY}4D`,
        },
        secondary: {
            backgroundColor: Color.SURFACE,
            color: Color.TEXT_SECONDARY,
            border: `1px solid ${Color.BORDER}`,
        },
        success: {
            backgroundColor: `${Color.SUCCESS}1A`,
            color: Color.SUCCESS,
            border: `1px solid ${Color.SUCCESS}4D`,
        },
        warning: {
            backgroundColor: `${Color.WARNING}1A`,
            color: Color.WARNING,
            border: `1px solid ${Color.WARNING}4D`,
        },
        error: {
            backgroundColor: `${Color.ERROR}1A`,
            color: Color.ERROR,
            border: `1px solid ${Color.ERROR}4D`,
        },
        info: {
            backgroundColor: `${Color.INFO}1A`,
            color: Color.INFO,
            border: `1px solid ${Color.INFO}4D`,
        },
    };

    const sizes = {
        small: {
            padding: "0.125rem 0.5rem",
            fontSize: "0.75rem",
        },
        medium: {
            padding: "0.25rem 0.625rem",
            fontSize: "0.875rem",
        },
    };

    return {
        variantStyles: variants[variant],
        sizeStyles: sizes[size],
    };
};
