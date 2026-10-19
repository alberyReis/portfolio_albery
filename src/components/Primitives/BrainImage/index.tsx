import type { IBrainImageProps } from "../../../types/primitives/brain-image/brain-image-type";
import styles from "./style.module.css";

export const BrainImage = ({ src, alt }: IBrainImageProps) => {
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
