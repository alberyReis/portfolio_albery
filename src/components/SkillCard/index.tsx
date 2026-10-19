import { Text } from "../Typography/Text";
import { Title } from "../Typography/Title";
import type { ISkillCardProps } from "../../types/skill-card/skill-card-type";
import { useSkillCardBuilder } from "./builder";
import styles from "./style.module.css";

export const SkillCard = ({
    title,
    description,
    icon: Icon,
}: ISkillCardProps) => {
    const { cardStyle, iconStyle } = useSkillCardBuilder();

    return (
        <article className={styles.card} style={cardStyle}>
            <div className={styles.iconContainer} style={iconStyle}>
                <Icon size={32} aria-hidden="true" />
            </div>

            <div className={styles.content}>
                <Title size="medium">{title}</Title>

                <Text color="secondary">{description}</Text>
            </div>
        </article>
    );
};
