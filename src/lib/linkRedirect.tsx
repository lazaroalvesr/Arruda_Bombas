import Link from "next/link"
import { ReactNode } from "react"

export const LinkRedirect = ({ href, children }: { href: string, children: ReactNode }) => {
    return (
        <Link href={href} style={{textDecoration: "none", color: "black"}}>
            {children}
        </Link>
    )
}