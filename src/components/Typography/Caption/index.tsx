import styles from "./style.module.css";
import type { ICaptionProps } from "../../../types/typography/caption/caption-type";
import { useCaptionBuilder } from "./builder";

export const Caption = ({
    children,
    color = "muted",
}: ICaptionProps) => {
    const { captionStyle } = useCaptionBuilder(color);

    return (
        <span className={styles.caption} style={captionStyle}>
            {children}
        </span>
    );
};