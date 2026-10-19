import type { CSSProperties } from "react";
import { Mail } from "lucide-react";
import { FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { SiGithub } from "react-icons/si";

import type { IContactLink } from "../../../types/sections/contact/contact-type";
import { Color } from "../../../utils/colors/colors";

export const useContactBuilder = () => {
    const contactLinks: IContactLink[] = [
        {
            title: "E-mail",
            value: "albery.reis.88@gmail.com",
            href: "mailto:albery.reis.88@gmail.com",
            icon: Mail,
        },
        {
            title: "LinkedIn",
            value: "Perfil profissional",
            href: "https://www.linkedin.com/in/albery-reis",
            icon: FaLinkedin,
        },
        {
            title: "GitHub",
            value: "Repositórios e projetos",
            href: "https://github.com/alberyReis",
            icon: SiGithub,
        },
        {
            title: "WhatsApp",
            value: "(79) 99867-8885",
            href: "https://wa.me/5579998678885",
            icon: FaWhatsapp,
        },
    ];

    return {
        labelStyle: {
            color: Color.PRIMARY,
        } satisfies CSSProperties,

        titleHighlightStyle: {
            color: Color.PRIMARY,
        } satisfies CSSProperties,

        sectionStyle: {
            color: Color.TEXT_PRIMARY,
        } satisfies CSSProperties,

        contactStyle: {
            backgroundColor: Color.SURFACE,
            borderColor: Color.BORDER,
            color: Color.TEXT_PRIMARY,
            "--contact-hover-border": Color.PRIMARY,
        } as CSSProperties,

        linkStyle: {
            color: Color.PRIMARY,
            "--contact-hover-background": Color.SURFACE_HOVER,
            "--contact-icon-background": `${Color.PRIMARY}1A`,
        } as CSSProperties,

        contactLinks,
    };
};