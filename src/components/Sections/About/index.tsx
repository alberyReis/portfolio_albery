import { Container } from "../../Primitives/Container";
import { Image } from "../../Primitives/Image";
import { Title } from "../../Typography/Title";
import { Text } from "../../Typography/Text";
import { Tag } from "../../Primitives/Tag";
import { useAboutBuilder } from "./builder";
import styles from "./style.module.css";
import aboutImage from "../../../assets/cybernetic-human.png";

export const About = () => {
    const { labelStyle, titleHighlightStyle, technologies } =
        useAboutBuilder();

    return (
        <section id="about" className={styles.section}>
            <Container>
                <div className={styles.content}>
                    <div className={styles.visualContent}>
                        <Image
                            src={aboutImage}
                            alt="Retrato futurista com o rosto metade humano e metade máquina"
                        />
                    </div>

                    <div className={styles.textContent}>
                        <span
                            className={styles.label}
                            style={labelStyle}
                        >
                            Sobre mim
                        </span>

                        <Title size="large">
                            Transformando ideias em{" "}
                            <span style={titleHighlightStyle}>
                                soluções digitais.
                            </span>
                        </Title>

                        <div className={styles.description}>
                            <Text size="large" color="secondary">
                                Sou desenvolvedor de software com experiência prática no desenvolvimento de aplicações mobile para Android e iOS utilizando React Native, JavaScript e TypeScript. Durante minha atuação profissional, trabalhei na construção de interfaces, integração com APIs REST, desenvolvimento de componentes reutilizáveis e implementação de recursos voltados à funcionalidade e à experiência do usuário.
                            </Text>

                            <div className={styles.paragraphSpacing} />

                            <Text size="large" color="secondary">
                                Atualmente, curso o 7º período de Engenharia de Software e continuo ampliando meus conhecimentos em arquitetura de software, boas práticas de desenvolvimento e tecnologias web e mobile. Busco desenvolver soluções bem estruturadas, com código organizado, componentes reutilizáveis e foco em manutenibilidade, desempenho e qualidade.
                            </Text>
                        </div>

                        <div className={styles.technologies}>
                            {technologies.map((technology) => (
                                <Tag key={technology}>
                                    {technology}
                                </Tag>
                            ))}
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
};
