import type { CSSProperties } from "react";
import {
    SiHtml5,
    SiCss,
    SiJavascript,
    SiTypescript,
    SiGit,
    SiGithub,
    SiReact,
    SiNextdotjs,
    SiAngular,
} from "react-icons/si";
import {
    BrainCircuit,
    Database,
    Network,
} from "lucide-react";

import type { ISkillCardProps } from "../../../types/skill-card/skill-card-type";
import { Color } from "../../../utils/colors/colors";

export const useSkillsBuilder = () => {
    const skills: ISkillCardProps[] = [
        {
            title: "HTML",
            description:
                "Estruturação de páginas web com HTML semântico, priorizando acessibilidade e organização do conteúdo.",
            icon: SiHtml5,
        },
        {
            title: "CSS",
            description:
                "Estilização de interfaces, criação de layouts e desenvolvimento de experiências responsivas.",
            icon: SiCss,
        },
        {
            title: "JavaScript",
            description:
                "Desenvolvimento de funcionalidades interativas e implementação de lógica para aplicações web.",
            icon: SiJavascript,
        },
        {
            title: "TypeScript",
            description:
                "Aplicação de tipagem estática para aumentar a previsibilidade, a legibilidade e a confiabilidade do código.",
            icon: SiTypescript,
        },
        {
            title: "Git",
            description:
                "Controle de versão para registrar alterações, gerenciar branches e acompanhar a evolução do código.",
            icon: SiGit,
        },
        {
            title: "GitHub",
            description:
                "Gerenciamento de repositórios, colaboração no desenvolvimento e compartilhamento de projetos de software.",
            icon: SiGithub,
        },
        {
            title: "APIs REST",
            description:
                "Integração entre aplicações e serviços por meio de requisições HTTP e troca de dados em JSON.",
            icon: Network,
        },
        {
            title: "Banco de Dados",
            description:
                "Fundamentos de armazenamento, organização e consulta de dados em sistemas de banco de dados.",
            icon: Database,
        },
        {
            title: "React",
            description:
                "Construção de interfaces declarativas com componentes reutilizáveis e gerenciamento de estado.",
            icon: SiReact,
        },
        {
            title: "Next.js",
            description:
                "Desenvolvimento de aplicações web com React utilizando recursos e convenções do framework Next.js.",
            icon: SiNextdotjs,
        },
        {
            title: "React Native",
            description:
                "Desenvolvimento de aplicações móveis para Android e iOS com JavaScript, TypeScript e React.",
            icon: SiReact,
        },
        {
            title: "Angular",
            description:
                "Desenvolvimento de aplicações web com componentes, serviços, injeção de dependências e recursos do framework.",
            icon: SiAngular,
        },
        {
            title: "Inteligência Artificial",
            description:
                "Utilização de ferramentas de IA como apoio à análise de problemas, à produtividade e ao desenvolvimento de software.",
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
