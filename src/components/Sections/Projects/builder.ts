
import type { CSSProperties } from "react";
import type { IProjectCardProps } from "../../../types/project-card/project-card-type";
import { Color } from "../../../utils/colors/colors";

import fernandoElectricianDesktop from "../../../assets/portfolio-fernando-eletrotecnico-desktop.png";
import fernandoElectricianTablet from "../../../assets/portfolio-fernando-eletrotecnico-tablet.png";
import fernandoElectricianMobile from "../../../assets/portfolio-fernando-eletrotecnico-mobile.png";

import receiptGeneratorDesktop from "../../../assets/receipt-generator-desktop.png";
import receiptGeneratorTablet from "../../../assets/receipt-generator-tablet.png";
import receiptGeneratorMobile from "../../../assets/receipt-generator-mobile.png";

export const useProjectsBuilder = () => {
    const projects: IProjectCardProps[] = [
        {
            title: "Fernando Eletrotécnico",
            description:
                "Desenvolvimento de uma aplicação web para apresentar serviços de eletrotécnica, com foco na organização das informações e na experiência do usuário.",
            link: "https://portfoliofernandoeletrotecnico.vercel.app/",
            image: {
                alt: "Página inicial do site Fernando Eletrotécnico",
                desktop: fernandoElectricianDesktop,
                tablet: fernandoElectricianTablet,
                mobile: fernandoElectricianMobile,
            },
        },
        {
            title: "Gerador de Recibos",
            description:
                "Aplicação web para gerar recibos de forma prática, facilitando o preenchimento das informações e a criação de documentos organizados.",
            link: "https://receiptgeneratormf.vercel.app/",
            image: {
                alt: "Interface do Gerador de Recibos",
                desktop: receiptGeneratorDesktop,
                tablet: receiptGeneratorTablet,
                mobile: receiptGeneratorMobile,
            },
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

        projects,
    };
};
