import styles from "./style.module.css";
import type { ISubtitleProps } from "../../../types/typography/subtitle/subtitle-type";
import { useSubtitleBuilder } from "./builder";

export const Subtitle = ({
    children,
    color = "secondary",
}: ISubtitleProps) => {
    const { subtitleStyle } = useSubtitleBuilder(color);

    return (
        <h3 className={styles.subtitle} style={subtitleStyle}>
            {children}
        </h3>
    );
};
