
import { Container } from "../../Primitives/Container";
import { Title } from "../../Typography/Title";
import { Text } from "../../Typography/Text";
import { ProjectCard } from "../../ProjectCard";
import { useProjectsBuilder } from "./builder";
import styles from "./style.module.css";

export const Projects = () => {
    const {
        labelStyle,
        titleHighlightStyle,
        projects,
        sectionStyle,
    } = useProjectsBuilder();

    return (
        <section
            id="projects"
            className={styles.section}
            style={sectionStyle}
        >
            <Container>
                <div className={styles.content}>
                    <div className={styles.header}>
                        <span
                            className={styles.label}
                            style={labelStyle}
                        >
                            Portfólio
                        </span>

                        <Title size="large">
                            Projetos em{" "}
                            <span style={titleHighlightStyle}>
                                destaque.
                            </span>
                        </Title>

                        <Text size="large" color="secondary">
                            Conheça alguns dos projetos que desenvolvi,
                            explorando interfaces, funcionalidades e
                            soluções de software com foco na qualidade
                            do código e na experiência do usuário.
                        </Text>
                    </div>

                    <div className={styles.projects}>
                        {projects.map((project) => (
                            <ProjectCard
                                key={project.title}
                                {...project}
                            />
                        ))}
                    </div>
                </div>
            </Container>
        </section>
    );
};
