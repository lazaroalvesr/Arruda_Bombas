import { ReactNode } from "react"


export interface LinkProps{
    href: string
    isActive?: boolean
    children: ReactNode
}

export interface HeaderUlProps {
    ativo?: boolean
}