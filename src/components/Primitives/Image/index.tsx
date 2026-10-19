
import type { IImageProps } from "../../../types/primitives/image/image-type";
import styles from "./style.module.css";

export const Image = ({
    src,
    alt,
    mobileSrc,
    tabletSrc,
}: IImageProps) => {
    return (
        <picture className={styles.container}>
            {mobileSrc && (
                <source
                    media="(max-width: 424px)"
                    srcSet={mobileSrc}
                />
            )}

            {tabletSrc && (
                <source
                    media="(max-width: 1023px)"
                    srcSet={tabletSrc}
                />
            )}

            <img
                className={styles.image}
                src={src}
                alt={alt}
            />
        </picture>
    );
};
