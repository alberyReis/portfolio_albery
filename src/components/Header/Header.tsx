import { useEffect, useState } from "react";
import { Container } from "../Container/Container";
import { Color } from "../../utils/colors/colors";
import logo from "../../assets/logo_reis.png";

export const Header = () => {
    const [visible, setVisible] = useState(true);
    const [activeLink, setActiveLink] = useState("#home");

    useEffect(() => {
        let previousScrollY = window.scrollY;

        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            const difference = currentScrollY - previousScrollY;

            if (currentScrollY <= 80) {
                setVisible(true);
            } else if (Math.abs(difference) > 5) {
                setVisible(difference < 0);
            }

            previousScrollY = currentScrollY;
        };

        window.addEventListener("scroll", handleScroll, { passive: true });

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const links = [
        { label: "Início", href: "#home" },
        { label: "Sobre", href: "#about" },
        { label: "Projetos", href: "#projects" },
        { label: "Contato", href: "#contact" },
    ];

    const linkStyle = (href: string) => ({
        position: "relative" as const,
        padding: "0.65rem 0",
        color: activeLink === href ? Color.TEXT_PRIMARY : Color.TEXT_MUTED,
        fontSize: "0.875rem",
        fontWeight: activeLink === href ? 600 : 400,
        textDecoration: "none",
        transition: "color 180ms ease",
    });

    return (
        <header
            style={{
                position: "fixed",
                top: 0,
                left: 0,
                width: "100%",
                zIndex: 1000,
                backgroundColor: `${Color.BACKGROUND}E8`,
                backdropFilter: "blur(16px)",
                WebkitBackdropFilter: "blur(16px)",
                borderBottom: `1px solid ${Color.BORDER}`,
                transform: visible ? "translateY(0)" : "translateY(-100%)",
                transition: "transform 250ms ease",
            }}
        >
            <Container>
                <nav
                    aria-label="Navegação principal"
                    style={{
                        minHeight: "80px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        gap: "2rem",
                    }}
                >
                    <a
                        href="#home"
                        aria-label="Albery Reis — Início"
                        style={{
                            display: "flex",
                            alignItems: "center",
                            flexShrink: 0,
                        }}
                    >
                        <img
                            src={logo}
                            alt="Albery Reis"
                            style={{
                                display: "block",
                                width: "64px",

                                objectFit: "contain",
                                objectPosition: "left center",
                                borderRadius: "12px",
                            }}
                        />
                    </a>
                    <div
                        style={{
                            display: "flex",
                            alignItems: "center",
                            gap: "2.5rem",
                        }}
                    >
                        {links.map((link) => (
                            <a
                                key={link.href}
                                href={link.href}
                                onClick={() => setActiveLink(link.href)}
                                style={linkStyle(link.href)}
                            >
                                {link.label}

                                <span
                                    style={{
                                        position: "absolute",
                                        left: 0,
                                        bottom: 0,
                                        width: activeLink === link.href ? "100%" : "0",
                                        height: "2px",
                                        backgroundColor: Color.PRIMARY,
                                        borderRadius: "2px",
                                        transition: "width 180ms ease",
                                    }}
                                />
                            </a>
                        ))}
                    </div>
                </nav>
            </Container>
        </header>
    );
};
