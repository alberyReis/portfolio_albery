import type { HTMLAttributes, ReactNode } from "react";

export type IContainerProps = HTMLAttributes<HTMLDivElement> & {
    children: ReactNode;
};
