import { useHeaderBuilder } from "./builder";
import styles from "./style.module.css";
import logo from "../../assets/logo_reis.png";

export const Header = () => {
    const {
        visible,
        activeLink,
        links,
        handleNavigation,
        colors,
    } = useHeaderBuilder();

    return (

        <header
            className={`${styles.header} ${visible ? styles.visible : styles.hidden
                }`}
            style={{
                "--header-background": `${colors.background}E8`,
                "--header-border": colors.border,
                "--header-text-primary": colors.textPrimary,
                "--header-text-muted": colors.textMuted,
                "--header-primary": colors.primary,
            } as React.CSSProperties}
        >
            <nav
                className={styles.nav}
                aria-label="Navegação principal"
            >
                <a
                    href="#home"
                    aria-label="Albery Reis — Início"
                    onClick={() => handleNavigation("#home")}
                    className={styles.logoLink}
                >
                    <img
                        src={logo}
                        alt="Albery Reis"
                        className={styles.logo}
                    />
                </a>

                <div className={styles.links}>
                    {links.map((link) => (
                        <a
                            key={link.href}
                            href={link.href}
                            onClick={() => handleNavigation(link.href)}
                            className={`${styles.link} ${activeLink === link.href
                                    ? styles.activeLink
                                    : ""
                                }`}
                        >
                            {link.label}
                            <span className={styles.underline} />
                        </a>
                    ))}
                </div>
            </nav>
        </header>
    );
};
