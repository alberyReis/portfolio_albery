import styles from "./style.module.css";
import type { ILabelProps } from "../../../types/typography/label/label-type";
import { useLabelBuilder } from "./builder";

export const Label = ({
    children,
    color = "secondary",
}: ILabelProps) => {
    const { labelStyle } = useLabelBuilder(color);

    return (
        <span className={styles.label} style={labelStyle}>
            {children}
        </span>
    );
};