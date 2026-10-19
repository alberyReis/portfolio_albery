
import type { CSSProperties } from "react";
import {
    Code2,
    Palette,
    Braces,
    FileCode2,
    Atom,
    Smartphone,
    Layers,
    BrainCircuit,
    Triangle,
} from "lucide-react";

import type { ISkillCardProps } from "../../../types/skill-card/skill-card-type";
import { Color } from "../../../utils/colors/colors";

export const useSkillsBuilder = () => {
    const skills: ISkillCardProps[] = [
        {
            title: "HTML",
            description:
                "Estruturação de páginas web com marcação semântica e acessível.",
            icon: Code2,
        },
        {
            title: "CSS",
            description:
                "Estilização de interfaces responsivas e criação de layouts.",
            icon: Palette,
        },
        {
            title: "JavaScript",
            description:
                "Implementação de funcionalidades e comportamentos dinâmicos.",
            icon: Braces,
        },
        {
            title: "TypeScript",
            description:
                "Tipagem estática para desenvolver aplicações mais previsíveis.",
            icon: FileCode2,
        },
        {
            title: "React",
            description:
                "Criação de interfaces reutilizáveis baseadas em componentes.",
            icon: Atom,
        },
        {
            title: "Next.js",
            description:
                "Desenvolvimento de aplicações React com roteamento, renderização no servidor e otimizações de desempenho.",
            icon: Triangle,
        },
        {
            title: "React Native",
            description:
                "Desenvolvimento de aplicações mobile para Android e iOS.",
            icon: Smartphone,
        },
        {
            title: "Angular",
            description:
                "Desenvolvimento de aplicações web com componentes e recursos do framework.",
            icon: Layers,
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
