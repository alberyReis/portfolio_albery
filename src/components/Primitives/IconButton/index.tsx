import styles from "./style.module.css";
import type { IIconButtonProps } from "../../../types/primitives/icon-button/icon-button-type";
import { useIconButtonBuilder } from "./builder";

export const IconButton = ({
    icon,
    label,
    variant = "ghost",
    size = "medium",
    disabled = false,
    style,
    ...props
}: IIconButtonProps) => {
    const { buttonStyle } = useIconButtonBuilder(
        variant,
        size,
        disabled,
        style
    );

    return (
        <button
            type="button"
            aria-label={label}
            title={label}
            disabled={disabled}
            className={styles.button}
            style={buttonStyle}
            {...props}
        >
            {icon}
        </button>
    );
};