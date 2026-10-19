
import type { CSSProperties } from "react";
import { Color } from "../../../utils/colors/colors";

export const useExperienceBuilder = () => {
    const experiences = [
        {
            company: "VileSoft",
            role: "Desenvolvedor Mobile - React Native",
            period: "Fev. 2025 – Set. 2026",
            project: "Projeto Orbi360",
            responsibilities: [
                "Desenvolvimento de interfaces e funcionalidades mobile para Android e iOS com React Native.",
                "Integração com APIs REST e implementação de funcionalidades com JavaScript e TypeScript.",
                "Criação de componentes reutilizáveis e implementação de internacionalização (i18n).",
                "Desenvolvimento e estruturação do sistema de chat da aplicação.",
                "Manutenção e evolução de funcionalidades, utilizando Git/GitHub e metodologias ágeis.",
            ],
            technologies: [
                "TypeScript",
                "React Native",
                "REST APIs",
                "i18n",
                "Git",
            ],
        },
    ];

    return {
        labelStyle: {
            color: Color.PRIMARY,
        } satisfies CSSProperties,

        titleHighlightStyle: {
            color: Color.PRIMARY,
        } satisfies CSSProperties,

        experiences,
    };
};
