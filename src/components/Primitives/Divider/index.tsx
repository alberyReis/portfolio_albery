import type { IDividerProps } from "../../../types/primitives/divider/divider-type";
import { useDividerBuilder } from "./builder";

import styles from "./style.module.css";

export const Divider = ({
    orientation = "horizontal",
    variant = "solid",
    color = "default",
    spacing = "medium",
    style,
    ...props
}: IDividerProps) => {
    const { isHorizontal, dividerStyle } = useDividerBuilder({
        orientation,
        variant,
        color,
        spacing,
    });

    return (
        <hr
            className={`${styles.divider} ${
                isHorizontal ? styles.horizontal : styles.vertical
            }`}
            aria-orientation={orientation}
            style={{ ...dividerStyle, ...style }}
            {...props}
        />
    );
};
