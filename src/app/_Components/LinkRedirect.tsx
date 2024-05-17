import { LinkProps } from '@/lib/interface'
import Link from 'next/link'
import React from 'react'

const LinkRedirect = ({ children, href }: LinkProps) => {
    return (
        <Link href={href}>
            {children}
        </Link>
    )
}

export default LinkRedirect