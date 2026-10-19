import styles from "./style.module.css";
import type { ITextProps } from "../../../types/typography/text/text-type";
import { useTextBuilder } from "./builder";

export const Text = ({
    children,
    size = "medium",
    color = "secondary",
    weight = 400,
}: ITextProps) => {
    const { textStyle } = useTextBuilder(size, color, weight);

    return (
        <p className={styles.text} style={textStyle}>
            {children}
        </p>
    );
};
