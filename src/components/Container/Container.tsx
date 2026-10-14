import type { HTMLAttributes, ReactNode } from "react";

type ContainerProps = HTMLAttributes<HTMLDivElement> & {
    children: ReactNode;
};

export const Container = ({
    children,
    style,
    ...props
}: ContainerProps) => {
    return (
        <div
            {...props}
            style={{
                width: "100%",
                maxWidth: "1440px",
                marginInline: "auto",
                paddingInline: "2rem",
                boxSizing: "border-box",
                ...style,
            }}
        >
            {children}
        </div>
    );
};
