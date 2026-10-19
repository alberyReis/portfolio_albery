export type IProjectCardProps = {
    title: string;
    description: string;
    link: string;
    image: {
        alt: string;
        mobile?: string;
        tablet?: string;
        desktop: string;
    };
};

export type IProjectsProps = {
    projects: IProjectCardProps[];
};