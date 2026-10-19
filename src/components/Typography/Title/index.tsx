import styles from "./style.module.css";
import type { ITitleProps } from "../../../types/typography/title/title-type";
import { useTitleBuilder } from "./builder";

export const Title = ({
    children,
    size = "large",
    color = "primary",
}: ITitleProps) => {
    const { titleStyle } = useTitleBuilder(size, color);

    return (
        <h2 className={styles.title} style={titleStyle}>
            {children}
        </h2>
    );
};
