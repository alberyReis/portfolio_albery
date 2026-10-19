import styles from "./style.module.css";
import type { ITagProps } from "../../../types/primitives/tag/tag-type";
import { useTagBuilder } from "./builder";

export const Tag = ({
    children,
    variant = "default",
    size = "medium",
    style,
    ...props
}: ITagProps) => {
    const { tagStyle } = useTagBuilder(variant, size);

    return (
        <span
            className={styles.tag}
            style={{ ...tagStyle, ...style }}
            {...props}
        >
            {children}
        </span>
    );
};