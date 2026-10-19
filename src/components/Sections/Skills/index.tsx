import { Container } from "../../Primitives/Container";
import { Title } from "../../Typography/Title";
import { Text } from "../../Typography/Text";
import { SkillCard } from "../../SkillCard";
import { useSkillsBuilder } from "./builder";
import styles from "./style.module.css";

export const Skills = () => {
    const {
        labelStyle,
        titleHighlightStyle,
        sectionStyle,
        skills,
    } = useSkillsBuilder();

    return (
        <section
            id="skills"
            className={styles.section}
            style={sectionStyle}
        >
            <Container>
                <div className={styles.content}>
                    <header className={styles.header}>
                        <span
                            className={styles.label}
                            style={labelStyle}
                        >
                            Competências
                        </span>

                        <Title size="large">
                            Tecnologias que{" "}
                            <span style={titleHighlightStyle}>
                                utilizo.
                            </span>
                        </Title>

                        <Text size="large" color="secondary">
                            Tecnologias e ferramentas que utilizo
                            no desenvolvimento de interfaces web,
                            aplicações mobile e soluções com
                            inteligência artificial.
                        </Text>
                    </header>

                    <div className={styles.skills}>
                        {skills.map((skill) => (
                            <SkillCard
                                key={skill.title}
                                {...skill}
                            />
                        ))}
                    </div>
                </div>
            </Container>
        </section>
    );
};
