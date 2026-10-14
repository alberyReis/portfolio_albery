import type { TextareaHTMLAttributes } from "react";
import { Color } from "../../utils/colors/colors";

type TextAreaProps = TextareaHTMLAttributes<HTMLTextAreaElement> & {
    label?: string;
    error?: string;
};

export const TextArea = ({
    label,
    error,
    id,
    style,
    disabled,
    ...props
}: TextAreaProps) => {
    const textAreaId = id ?? props.name;

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
                    htmlFor={textAreaId}
                    style={{
                        color: Color.TEXT_SECONDARY,
                        fontSize: "0.875rem",
                        fontWeight: 500,
                    }}
                >
                    {label}
                </label>
            )}

            <textarea
                {...props}
                id={textAreaId}
                disabled={disabled}
                aria-invalid={Boolean(error)}
                aria-describedby={error ? `${textAreaId}-error` : undefined}
                style={{
                    width: "100%",
                    minHeight: "8rem",
                    boxSizing: "border-box",
                    padding: "0.75rem 1rem",
                    backgroundColor: Color.SURFACE,
                    color: Color.TEXT_PRIMARY,
                    border: `1px solid ${error ? Color.ERROR : Color.BORDER}`,
                    borderRadius: "0.5rem",
                    fontFamily: "Inter, sans-serif",
                    fontSize: "1rem",
                    lineHeight: 1.5,
                    resize: "vertical",
                    outline: "none",
                    opacity: disabled ? 0.5 : 1,
                    cursor: disabled ? "not-allowed" : "text",
                    ...style,
                }}
            />

            {error && (
                <span
                    id={`${textAreaId}-error`}
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
