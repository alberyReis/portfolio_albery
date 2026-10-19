
import type { CSSProperties } from "react";
import {
    SiHtml5,
    SiCss,
    SiJavascript,
    SiTypescript,
    SiReact,
    SiNextdotjs,
    SiAngular,
} from "react-icons/si";
import { BrainCircuit, Database } from "lucide-react";

import type { ISkillCardProps } from "../../../types/skill-card/skill-card-type";
import { Color } from "../../../utils/colors/colors";

export const useSkillsBuilder = () => {
    const skills: ISkillCardProps[] = [
        {
            title: "HTML",
            description:
                "Estruturação de páginas web com marcação semântica e acessível.",
            icon: SiHtml5,
        },
        {
            title: "CSS",
            description:
                "Estilização de interfaces responsivas e criação de layouts.",
            icon: SiCss,
        },
        {
            title: "JavaScript",
            description:
                "Implementação de funcionalidades e comportamentos dinâmicos.",
            icon: SiJavascript,
        },
        {
            title: "TypeScript",
            description:
                "Tipagem estática para desenvolver aplicações mais previsíveis.",
            icon: SiTypescript,
        },
        {
            title: "Banco de Dados",
            description:
                "Armazenamento, organização e consulta de dados em bancos de dados.",
            icon: Database,
        },
        {
            title: "React",
            description:
                "Criação de interfaces reutilizáveis baseadas em componentes.",
            icon: SiReact,
        },
        {
            title: "Next.js",
            description: "Desenvolvimento de aplicações web com React e Next.js.",
            icon: SiNextdotjs,
        },
        {
            title: "React Native",
            description:
                "Desenvolvimento de aplicações mobile para Android e iOS.",
            icon: SiReact,
        },
        {
            title: "Angular",
            description:
                "Desenvolvimento de aplicações web com componentes e recursos do framework.",
            icon: SiAngular,
        },
        {
            title: "Inteligência Artificial",
            description:
                "Utilização de ferramentas de IA para apoiar o desenvolvimento e a resolução de problemas de software.",
            icon: BrainCircuit,
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

        skills,
    };
};
