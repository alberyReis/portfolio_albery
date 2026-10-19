import type { CSSProperties } from "react";
import type { IButtonProps } from "../../../types/button/button-type";
import { useButtonBuilder } from "./builder";
import styles from "./style.module.css";

export const Button = ({
    children,
    variant = "primary",
    size = "medium",
    disabled = false,
    style,
    ...props
}: IButtonProps) => {
    const { variantStyles, sizeStyles } = useButtonBuilder({
        variant,
        size,
    });

    return (
        <button
            className={styles.button}
            disabled={disabled}
            style={{
                ...variantStyles,
                ...sizeStyles,
                opacity: disabled ? 0.5 : 1,
                ...style,
            } as CSSProperties}
            {...props}
        >
            {children}
        </button>
    );
};