import type { InputHTMLAttributes } from "react";
import { Color } from "../../utils/colors/colors";

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
    label?: string;
    error?: string;
};

export const Input = ({
    label,
    error,
    id,
    style,
    disabled,
    ...props
}: InputProps) => {
    const inputId = id ?? props.name;

    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                gap: "0.5rem",
                width: "100%",
            }}
        >
            {label && (
                <label
                    htmlFor={inputId}
                    style={{
                        color: Color.TEXT_SECONDARY,
                        fontSize: "0.875rem",
                        fontWeight: 500,
                    }}
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
                style={{
                    width: "100%",
                    boxSizing: "border-box",
                    padding: "0.75rem 1rem",
                    backgroundColor: Color.SURFACE,
                    color: Color.TEXT_PRIMARY,
                    border: `1px solid ${error ? Color.ERROR : Color.BORDER}`,
                    borderRadius: "0.5rem",
                    fontFamily: "Inter, sans-serif",
                    fontSize: "1rem",
                    outline: "none",
                    opacity: disabled ? 0.5 : 1,
                    cursor: disabled ? "not-allowed" : "text",
                    ...style,
                }}
            />

            {error && (
                <span
                    id={`${inputId}-error`}
                    role="alert"
                    style={{
                        color: Color.ERROR,
                        fontSize: "0.75rem",
                    }}
                >
                    {error}
                </span>
            )}
        </div>
    );
};