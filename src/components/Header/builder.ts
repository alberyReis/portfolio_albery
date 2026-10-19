
import { useEffect, useRef, useState } from "react";
import { Color } from "../../utils/colors/colors";
import type {
    IHeaderHref,
    IHeaderLink,
} from "../../types/header/header-type";

export const useHeaderBuilder = () => {
    const [visible, setVisible] = useState(true);
    const [activeLink, setActiveLink] = useState<IHeaderHref>("#home");

    const isNavigating = useRef(false);
    const navigationTimeout = useRef<number | null>(null);
    const previousScrollY = useRef(window.scrollY);

    const links: IHeaderLink[] = [
        { label: "Início", href: "#home" },
        { label: "Sobre", href: "#about" },
        { label: "Experiência", href: "#experience" },
        { label: "Projetos", href: "#projects" },
        { label: "Skills", href: "#skills" },
        { label: "Contato", href: "#contact" },
    ];

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            const difference = currentScrollY - previousScrollY.current;

            if (isNavigating.current) {
                previousScrollY.current = currentScrollY;
                return;
            }

            if (currentScrollY <= 80) {
                setVisible(true);
            } else if (Math.abs(difference) > 5) {
                setVisible(difference < 0);
            }

            previousScrollY.current = currentScrollY;
        };

        window.addEventListener("scroll", handleScroll, { passive: true });

        return () => {
            window.removeEventListener("scroll", handleScroll);

            if (navigationTimeout.current !== null) {
                window.clearTimeout(navigationTimeout.current);
            }
        };
    }, []);

    const handleNavigation = (href: IHeaderHref) => {
        setActiveLink(href);
        setVisible(true);
        isNavigating.current = true;

        if (navigationTimeout.current !== null) {
            window.clearTimeout(navigationTimeout.current);
        }

        navigationTimeout.current = window.setTimeout(() => {
            isNavigating.current = false;
            previousScrollY.current = window.scrollY;
            navigationTimeout.current = null;
        }, 1000);
    };

    return {
        visible,
        activeLink,
        links,
        handleNavigation,
        colors: {
            background: Color.BACKGROUND,
            border: Color.BORDER,
            textPrimary: Color.TEXT_PRIMARY,
            textMuted: Color.TEXT_MUTED,
            primary: Color.PRIMARY,
        },
    };
};
