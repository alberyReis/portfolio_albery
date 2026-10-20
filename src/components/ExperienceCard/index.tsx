import { Title } from "../Typography/Title";
import { Text } from "../Typography/Text";
import { Tag } from "../Primitives/Tag";
import type { IExperienceCardProps } from "../../types/experience-card/experience-card-type";
import { useExperienceCardBuilder } from "./builder";
import styles from "./style.module.css";

export const ExperienceCard = ({
    company,
    role,
    period,
    project,
    responsibilities,
    technologies,
}: IExperienceCardProps) => {
    const {
        cardStyle,
        periodStyle,
        markerStyle,
    } = useExperienceCardBuilder();

    return (
        <div className={styles.card} style={cardStyle}>
            <div className={styles.cardHeader}>
                <div className={styles.role}>
                    <Title size="large">{role}</Title>

                    <Text size="large" color="secondary">
                        {company}
                    </Text>
                </div>

                <span className={styles.period} style={periodStyle}>
                    {period}
                </span>
            </div>

            <Text size="large" color="secondary">
                {project}
            </Text>

            <ul className={styles.responsibilities}>
                {responsibilities.map((responsibility) => (
                    <li key={responsibility}>
                        <Text color="secondary">{responsibility}</Text>
                    </li>
                ))}
            </ul>

            <div className={styles.technologies} style={markerStyle}>
                {technologies.map((technology) => (
                    <Tag key={technology}>{technology}</Tag>
                ))}
            </div>
        </div>
    );
};
