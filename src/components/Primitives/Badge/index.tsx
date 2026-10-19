import type { CSSProperties } from "react";
import type { IBadgeProps } from "../../../types/badge/badge-type";
import { useBadgeBuilder } from "./builder";
import styles from "./style.module.css";

export const Badge = ({
    children,
    variant = "secondary",
    size = "medium",
    style,
    ...props
}: IBadgeProps) => {
    const { variantStyles, sizeStyles } = useBadgeBuilder({
        variant,
        size,
    });

    return (
        <span
            className={styles.badge}
            style={{
                ...variantStyles,
                ...sizeStyles,
                ...style,
            } as CSSProperties}
            {...props}
        >
            {children}
        </span>
    );
};
