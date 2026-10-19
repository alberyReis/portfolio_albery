import { useFooterBuilder } from "./builder";
import styles from "./style.module.css";

export const Footer = () => {
    const { footerStyle, copyrightStyle, links, year } = useFooterBuilder();

    return (
        <footer className={styles.footer} style={footerStyle}>
                <div className={styles.content}>
                    <p className={styles.copyright} style={copyrightStyle}>
                        © {year} Albery Reis. Todos os direitos reservados.
                    </p>

                    <nav className={styles.navigation} aria-label="Redes sociais">
                        {links.map((link) => {
                            const Icon = link.icon;

                            return (
                                <a
                                    key={link.label}
                                    href={link.href}
                                    className={styles.link}
                                    style={copyrightStyle}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={link.label}
                                    title={link.label}
                                >
                                    <Icon size={20} aria-hidden="true" />
                                    <span>{link.label}</span>
                                </a>
                            );
                        })}
                    </nav>
                </div>
        </footer>
    );
};
