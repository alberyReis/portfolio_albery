import { useEffect, useState } from "react";
import type { CSSProperties } from "react";

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

    const [menuOpen, setMenuOpen] = useState(false);

    const handleLinkClick = (href: (typeof links)[number]["href"]) => {
        handleNavigation(href);
        setMenuOpen(false);
    };

    useEffect(() => {
        const handleEscape = (event: KeyboardEvent) => {
            if (event.key === "Escape") {
                setMenuOpen(false);
            }
        };

        document.addEventListener("keydown", handleEscape);

        return () => {
            document.removeEventListener("keydown", handleEscape);
        };
    }, []);

    return (
        <header
            className={`${styles.header} ${
                visible ? styles.visible : styles.hidden
            }`}
            style={
                {
                    "--header-background": `${colors.background}E8`,
                    "--header-border": colors.border,
                    "--header-text-primary": colors.textPrimary,
                    "--header-text-muted": colors.textMuted,
                    "--header-primary": colors.primary,
                } as CSSProperties
            }
        >
            <nav
                className={styles.nav}
                aria-label="Navegação principal"
            >
                <a
                    href="#home"
                    aria-label="Albery Reis — Início"
                    onClick={() => handleLinkClick("#home")}
                    className={styles.logoLink}
                >
                    <img
                        src={logo}
                        alt="Albery Reis"
                        className={styles.logo}
                    />
                </a>

                <button
                    type="button"
                    className={`${styles.menuButton} ${
                        menuOpen ? styles.menuButtonOpen : ""
                    }`}
                    aria-label={
                        menuOpen ? "Fechar menu" : "Abrir menu"
                    }
                    aria-expanded={menuOpen}
                    aria-controls="header-navigation"
                    onClick={() => setMenuOpen((previous) => !previous)}
                >
                    <span />
                    <span />
                    <span />
                </button>

                <div
                    id="header-navigation"
                    className={`${styles.links} ${
                        menuOpen ? styles.linksOpen : ""
                    }`}
                >
                    {links.map((link) => (
                        <a
                            key={link.href}
                            href={link.href}
                            onClick={() => handleLinkClick(link.href)}
                            className={`${styles.link} ${
                                activeLink === link.href
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
