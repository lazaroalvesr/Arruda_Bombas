import { LinkProps } from '@/lib/interface'
import Link from 'next/link'
import React from 'react'

const LinkRedirect = ({ children, href }: LinkProps) => {
    return (
        <Link href={href} style={{textDecoration: 'none'}} target='_blank'>
            {children}
        </Link>
    )
}

export default LinkRedirect