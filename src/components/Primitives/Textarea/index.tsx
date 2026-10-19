import styles from "./style.module.css";
import type { ITextAreaProps } from "../../../types/primitives/textarea/textarea-type";
import { useTextAreaBuilder } from "./builder";

export const TextArea = ({
    label,
    error,
    id,
    style,
    disabled,
    ...props
}: ITextAreaProps) => {
    const textAreaId = id ?? props.name;

    const { textAreaStyle } = useTextAreaBuilder(
        error,
        disabled,
        style
    );

    return (
        <div className={styles.wrapper}>
            {label && (
                <label
                    htmlFor={textAreaId}
                    className={styles.label}
                >
                    {label}
                </label>
            )}

            <textarea
                {...props}
                id={textAreaId}
                disabled={disabled}
                aria-invalid={Boolean(error)}
                aria-describedby={
                    error ? `${textAreaId}-error` : undefined
                }
                className={styles.textArea}
                style={textAreaStyle}
            />

            {error && (
                <span
                    id={`${textAreaId}-error`}
                    role="alert"
                    className={styles.error}
                >
                    {error}
                </span>
            )}
        </div>
    );
};