import type { CSSProperties } from "react";
import { FaLinkedin } from "react-icons/fa";
import { SiGithub } from "react-icons/si";

import type { IFooterLink } from "../../types/footer/footer-type";
import { Color } from "../../utils/colors/colors";

export const useFooterBuilder = () => {
    const links: IFooterLink[] = [
        {
            label: "GitHub",
            href: "https://github.com/alberyReis",
            icon: SiGithub,
        },
        {
            label: "LinkedIn",
            href: "https://www.linkedin.com/in/albery-reis",
            icon: FaLinkedin,
        },
    ];

    return {
        footerStyle: {
            backgroundColor: Color.BACKGROUND,
            borderColor: Color.BORDER,
        } satisfies CSSProperties,

        copyrightStyle: {
            color: Color.TEXT_MUTED,
            "--footer-link-hover": Color.PRIMARY,
        } as CSSProperties,

        links,
        year: new Date().getFullYear(),
    };
};
