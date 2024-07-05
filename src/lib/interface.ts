import { ReactNode } from "react"


export interface LinkProps {
    href: string
    children: ReactNode
}

export interface HeaderUlProps {
    ativo?: boolean
}

export interface CardProps {
    href: string
    src: string;
    title: string;
    about: string
}