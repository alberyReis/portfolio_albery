import styles from "./style.module.css";
import type { IInputProps } from "../../../types/input/input-type";
import { useInputBuilder } from "./builder";

export const Input = ({
    label,
    error,
    id,
    style,
    disabled,
    ...props
}: IInputProps) => {
    const inputId = id ?? props.name;

    const {
        wrapperStyle,
        labelStyle,
        inputStyle,
        errorStyle,
    } = useInputBuilder(error, disabled, style);

    return (
        <div className={styles.wrapper} style={wrapperStyle}>
            {label && (
                <label
                    htmlFor={inputId}
                    className={styles.label}
                    style={labelStyle}
                >
                    {label}
                </label>
            )}

            <input
                {...props}
                id={inputId}
                disabled={disabled}
                aria-invalid={Boolean(error)}
                aria-describedby={error ? `${inputId}-error` : undefined}
                className={styles.input}
                style={inputStyle}
            />

            {error && (
                <span
                    id={`${inputId}-error`}
                    role="alert"
                    className={styles.error}
                    style={errorStyle}
                >
                    {error}
                </span>
            )}
        </div>
    );
};