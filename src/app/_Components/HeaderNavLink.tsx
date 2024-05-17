import { LinkProps } from '@/lib/interface';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react'
import { HeaderNavLink } from './styles/Header.styles';

const HeaderLiNavLink = ({ href, children }: LinkProps) => {
    const pathname = usePathname();
    const isActive = pathname === href

    return (
        <Link href={href} passHref style={{ textDecoration: 'none' }}>
            <HeaderNavLink isActive={isActive}>{children}</HeaderNavLink>
        </Link>
    )
}

export default HeaderLiNavLink