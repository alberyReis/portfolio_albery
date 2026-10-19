import type { IImageProps } from "../../../types/primitives/image/image-type";
import styles from "./style.module.css";

export const Image = ({ src, alt }: IImageProps) => {
    return (
        <div className={styles.container}>
            <img
                className={styles.image}
                src={src}
                alt={alt}
            />
        </div>
    );
};
