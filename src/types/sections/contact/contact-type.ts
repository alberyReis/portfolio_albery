
import type { IconType } from "react-icons";
import type { LucideIcon } from "lucide-react";

export type IContactLink = {
    title: string;
    value: string;
    href: string;
    icon: LucideIcon | IconType;
};
