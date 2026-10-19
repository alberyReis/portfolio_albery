export type IHeaderHref =
    | "#home"
    | "#about"
    | "#experience"
    | "#projects"
    | "#contact";

export type IHeaderLink = {
    label: string;
    href: IHeaderHref;
};