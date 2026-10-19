
import { Container } from "../../Primitives/Container";
import { Title } from "../../Typography/Title";
import { Text } from "../../Typography/Text";
import { ExperienceCard } from "../../ExperienceCard";
import { useExperienceBuilder } from "./builder";
import styles from "./style.module.css";

export const Experience = () => {
    const {
        labelStyle,
        titleHighlightStyle,
        experiences,
    } = useExperienceBuilder();

    return (
        <section id="experience" className={styles.section}>
            <Container>
                <div className={styles.content}>
                    <div className={styles.header}>
                        <span
                            className={styles.label}
                            style={labelStyle}
                        >
                            Minha trajetória
                        </span>

                        <Title size="large">
                            Experiência{" "}
                            <span style={titleHighlightStyle}>
                                profissional.
                            </span>
                        </Title>

                        <Text size="large" color="secondary">
                            Minha experiência no desenvolvimento de software,
                            com foco em aplicações mobile, qualidade de código
                            e soluções centradas no usuário.
                        </Text>
                    </div>

                    <div className={styles.timeline}>
                        {experiences.map((experience) => (
                            <article
                                key={`${experience.company}-${experience.period}`}
                                className={styles.experience}
                            >
                                <div className={styles.timelineMarker}>
                                    <span className={styles.timelineDot} />
                                </div>

                                <ExperienceCard
                                    company={experience.company}
                                    role={experience.role}
                                    period={experience.period}
                                    project={experience.project}
                                    responsibilities={experience.responsibilities}
                                    technologies={experience.technologies}
                                />
                            </article>
                        ))}
                    </div>
                </div>
            </Container>
        </section>
    );
};
