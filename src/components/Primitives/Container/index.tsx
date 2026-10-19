import type { IContainerProps } from "../../../types/primitives/container/container-type";
import styles from "./style.module.css";

export const Container = ({
    children,
    style,
    ...props
}: IContainerProps) => {
    return (
        <div
            className={styles.container}
            style={style}
            {...props}
        >
            {children}
        </div>
    );
};
