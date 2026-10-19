import styles from "./style.module.css";
import type { ISpinnerProps } from "../../../types/spinner/spinner-type";
import { useSpinnerBuilder } from "./builder";

export const Spinner = ({
    size = "medium",
    color = "primary",
    style,
    ...props
}: ISpinnerProps) => {
    const { spinnerStyle } = useSpinnerBuilder(size, color);

    return (
        <div
            role="status"
            aria-label="Carregando"
            className={styles.spinner}
            style={{ ...spinnerStyle, ...style }}
            {...props}
        />
    );
};