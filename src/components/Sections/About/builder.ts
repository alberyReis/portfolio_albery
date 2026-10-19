import type { CSSProperties } from "react";
import { Color } from "../../../utils/colors/colors";
import type { IAboutTechnology } from "../../../types/sections/about/about-type";

export const useAboutBuilder = () => {
    const technologies: IAboutTechnology[] = [
        "JavaScript",
        "TypeScript",
        "React",
        "React Native",
        "Git",
        "REST APIs",
    ];

    return {
        labelStyle: {
            color: Color.PRIMARY,
        } satisfies CSSProperties,

        titleHighlightStyle: {
            color: Color.PRIMARY,
        } satisfies CSSProperties,

        technologies,
    };
};
