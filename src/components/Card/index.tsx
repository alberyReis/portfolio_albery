import type { ICardProps } from "../../types/card/card-type";
import { useCardBuilder } from "./builder";
import styles from "./style.module.css";

export const Card = ({
    children,
    variant = "default",
    padding = "medium",
    hoverable = false,
    style,
    ...props
}: ICardProps) => {
    const { cardStyle, hoverable: isHoverable } = useCardBuilder({
        variant,
        padding,
        hoverable,
    });

    return (
        <div
            className={`${styles.card} ${isHoverable ? styles.hoverable : ""}`}
            style={{ ...cardStyle, ...style }}
            {...props}
        >
            {children}
        </div>
    );
};
