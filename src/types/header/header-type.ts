export type IHeaderHref =
    | "#home"
    | "#about"
    | "#experience"
    | "#projects"
    | "#skills"
    | "#contact";

export type IHeaderLink = {
    label: string;
    href: IHeaderHref;
};
