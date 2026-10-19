import { Image } from "../Primitives/Image";
import { Title } from "../Typography/Title";
import { Text } from "../Typography/Text";
import type { IProjectCardProps } from "../../types/project-card/project-card-type";
import { useProjectCardBuilder } from "./builder";
import styles from "./style.module.css";

export const ProjectCard = ({
    title,
    description,
    link,
    image,
}: IProjectCardProps) => {
    const { cardStyle, linkStyle } = useProjectCardBuilder();

    return (
        <article className={styles.card} style={cardStyle}>
            <div className={styles.content}>
                <Title size="large">{title}</Title>

                <Text color="secondary">{description}</Text>

                <a
                    className={styles.projectLink}
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={linkStyle}
                >
                    Ver projeto
                    <span aria-hidden="true">↗</span>
                </a>
            </div>

            <div className={styles.visual}>
                <Image
                    src={image.desktop}
                    mobileSrc={image.mobile}
                    tabletSrc={image.tablet}
                    alt={image.alt}
                />
            </div>
        </article>
    );
};
