import { ReactNode } from "react"

export interface HeaderLiProps{
    isActive?: boolean
}

export interface LinkProps{
    href: string
    children: ReactNode
}