import type { CSSProperties, HTMLAttributes } from "react";
import { Color } from "../../utils/colors/colors";

type SpinnerProps = HTMLAttributes<HTMLDivElement> & {
    size?: "small" | "medium" | "large";
    color?: "primary" | "secondary" | "white";
};

export const Spinner = ({
    size = "medium",
    color = "primary",
    style,
    ...props
}: SpinnerProps) => {
    const sizes = {
        small: "1rem",
        medium: "2rem",
        large: "3rem",
    };

    const colors = {
        primary: Color.PRIMARY,
        secondary: Color.TEXT_SECONDARY,
        white: Color.TEXT_PRIMARY,
    };

    const spinnerStyle: CSSProperties = {
        width: sizes[size],
        height: sizes[size],
        border: `3px solid ${Color.BORDER}`,
        borderTopColor: colors[color],
        borderRadius: "50%",
        animation: "spinner-rotation 0.8s linear infinite",
        flexShrink: 0,
        ...style,
    };

    return (
        <>
            <style>
                {`
          @keyframes spinner-rotation {
            to {
              transform: rotate(360deg);
            }
          }
        `}
            </style>

            <div
                role="status"
                aria-label="Carregando"
                style={spinnerStyle}
                {...props}
            />
        </>
    );
};
