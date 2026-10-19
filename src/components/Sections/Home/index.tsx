import { Container } from "../../Primitives/Container";
import { Button } from "../../Primitives/Button";
import { Link } from "../../Primitives/Link";
import { Title } from "../../Typography/Title";
import { Text } from "../../Typography/Text";
import brainImage from "../../../assets/brain-ai.png";
import { useHomeBuilder } from "./builder";
import styles from "./style.module.css";
import { Image } from "../../Primitives/Image";

export const Home = () => {
    const { labelStyle, indicatorStyle, titleHighlightStyle } =
        useHomeBuilder();

    const handleProjectsClick = () => {
        document
            .getElementById("projects")
            ?.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <section id="home" className={styles.section}>
            <Container>
                <div className={styles.content}>
                    <div className={styles.textContent}>
                        <span
                            className={styles.label}
                            style={labelStyle}
                        >
                            <span
                                className={styles.indicator}
                                style={indicatorStyle}
                            />
                            Desenvolvedor de Software
                        </span>

                        <Title size="large">
                            Desenvolvendo experiências digitais com{" "}
                            <span style={titleHighlightStyle}>
                                React e React Native.
                            </span>
                        </Title>

                        <div className={styles.description}>
                            <Text size="large" color="secondary">
                                Desenvolvedor de software e estudante do 7º período de Engenharia de Software, com experiência prática no desenvolvimento de aplicações web e mobile. Foco em React, React Native e TypeScript, com atenção à qualidade do código, à arquitetura de componentes e à construção de interfaces funcionais, acessíveis e escaláveis.
                            </Text>
                        </div>

                        <div className={styles.actions}>
                            <Button
                                variant="primary"
                                size="large"
                                onClick={handleProjectsClick}
                            >
                                Ver projetos
                            </Button>

                            <Link
                                href="#contact"
                                variant="secondary"
                                weight={600}
                                style={{ padding: "0.875rem 0" }}
                            >
                                Entrar em contato →
                            </Link>
                        </div>
                    </div>

                    <div className={styles.imageContent}>
                        <Image
                            src={brainImage}
                            alt="Cérebro que representa a integração entre inteligência humana, lógica e inteligência artificial"
                        />
                    </div>
                </div>
            </Container>
        </section>
    );
};
