import styles from "./style.module.css";
import type { ILinkProps } from "../../../types/link/link-type";
import { useLinkBuilder } from "./builder";

export const Link = ({
    children,
    variant = "primary",
    underline = false,
    weight = 500,
    style,
    ...props
}: ILinkProps) => {
    const { linkStyle } = useLinkBuilder(
        variant,
        underline,
        weight,
        style
    );

    return (
        <a
            className={styles.link}
            style={linkStyle}
            {...props}
        >
            {children}
        </a>
    );
};