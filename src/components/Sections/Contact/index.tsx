import { Container } from "../../Primitives/Container";
import { Title } from "../../Typography/Title";
import { Text } from "../../Typography/Text";
import { useContactBuilder } from "./builder";
import styles from "./style.module.css";

export const Contact = () => {
    const {
        labelStyle,
        titleHighlightStyle,
        sectionStyle,
        contactStyle,
        linkStyle,
        contactLinks,
    } = useContactBuilder();

    return (
        <section
            id="contact"
            className={styles.section}
            style={sectionStyle}
        >
            <Container>
                <div className={styles.content}>
                    <div className={styles.introduction}>
                        <span className={styles.label} style={labelStyle}>
                            Contato
                        </span>

                        <Title size="large">
                            Vamos conversar
                            <span style={titleHighlightStyle}>?</span>
                        </Title>

                        <Text size="large" color="secondary">
                            Estou aberto a oportunidades profissionais,
                            novos projetos e conexões com pessoas da área
                            de tecnologia. Entre em contato para conversarmos
                            sobre como posso contribuir com sua equipe.
                        </Text>

                        <a
                            href="mailto:albery.reis.88@gmail.com"
                            className={styles.emailButton}
                            style={linkStyle}
                        >
                            Entrar em contato
                            <span aria-hidden="true">↗</span>
                        </a>
                    </div>

                    <div className={styles.contactList}>
                        {contactLinks.map((contact) => {
                            const Icon = contact.icon;

                            return (
                                <a
                                    key={contact.title}
                                    href={contact.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={styles.contactCard}
                                    style={contactStyle}
                                >
                                    <span
                                        className={styles.iconContainer}
                                        style={linkStyle}
                                    >
                                        <Icon size={24} aria-hidden="true" />
                                    </span>

                                    <span className={styles.contactText}>
                                        <span className={styles.contactTitle}>
                                            {contact.title}
                                        </span>

                                        <span className={styles.contactValue}>
                                            {contact.value}
                                        </span>
                                    </span>

                                    <span
                                        className={styles.arrow}
                                        aria-hidden="true"
                                    >
                                        ↗
                                    </span>
                                </a>
                            );
                        })}
                    </div>
                </div>
            </Container>
        </section>
    );
};
