import type { AnchorHTMLAttributes, ReactNode } from "react";

export type ILinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
    children: ReactNode;
    variant?: "primary" | "secondary" | "muted";
    underline?: boolean;
    weight?: 400 | 500 | 600 | 700;
};