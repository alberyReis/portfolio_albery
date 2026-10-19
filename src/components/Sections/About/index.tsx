import { Container } from "../../Primitives/Container";
import { Title } from "../../Typography/Title";
import { Text } from "../../Typography/Text";
import { Tag } from "../../Primitives/Tag";
import { useAboutBuilder } from "./builder";
import styles from "./style.module.css";

export const About = () => {
    const { labelStyle, titleHighlightStyle, technologies } =
        useAboutBuilder();

    return (
        <section id="about" className={styles.section}>
            <Container>
                <div className={styles.content}>
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
                            Sou desenvolvedor de software com experiência
                            prática em aplicações mobile utilizando React
                            Native, JavaScript e TypeScript. Atuei no
                            desenvolvimento de interfaces, integração com APIs
                            e criação de componentes reutilizáveis para Android
                            e iOS.
                        </Text>

                        <div className={styles.paragraphSpacing} />

                        <Text size="large" color="secondary">
                            Minha trajetória na tecnologia é marcada pela
                            curiosidade, pelo aprendizado contínuo e pela busca
                            por soluções eficientes, com atenção à qualidade
                            do código e à experiência do usuário.
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
            </Container>
        </section>
    );
};
