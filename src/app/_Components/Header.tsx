'use client'

import { memo, useEffect, useState } from 'react'
import { BGHeader, ButtonMobile, HeaderContainer, HeaderIcon, HeaderIconTitle, HeaderImg, HeaderLi, HeaderUl } from './styles/Header.styles'
import { ContainerGlobal } from './styles/GlobalStyle.styles'
import HeaderLiNavLink from './HeaderNavLink'
import { IoMdClose } from 'react-icons/io'
import { CiMenuFries } from 'react-icons/ci'

const Header = memo(() => {
    const [ativo, setAtivo] = useState(false)

    const toggle = () => {
        setAtivo((!ativo))
    }

    const handleResize = () => {
        if (window.innerWidth < 728 && !ativo) {
            setAtivo(true)
        }

        if (window.innerWidth < 426 && ativo) {
            setAtivo(false)
        }
    }

    useEffect(() => {
        window.addEventListener("resize", handleResize)

        return () => {
            window.removeEventListener('resize', handleResize)
        }
    }, [ativo])

    return (
        <BGHeader>
            <ContainerGlobal>
                <HeaderContainer>
                    <HeaderIcon>
                        <HeaderImg src='/img/Logo.png' alt='Icone Arruda Bombas' />
                        <HeaderIconTitle>Arruda Bombas</HeaderIconTitle>
                    </HeaderIcon>
                    <ButtonMobile onClick={toggle} aria-label="Menu Mobile">
                        {ativo ? <IoMdClose size={30} /> : <CiMenuFries size={30} />}
                    </ButtonMobile>
                    {ativo || (typeof window !== 'undefined' && window.innerWidth >= 728) ? (
                        <HeaderUl>
                            <HeaderLi>
                                <HeaderLiNavLink href='/'>Home</HeaderLiNavLink>
                            </HeaderLi>
                            <HeaderLi>
                                <HeaderLiNavLink href='/Equipamentos'>Equipamentos</HeaderLiNavLink>
                            </HeaderLi>
                            <HeaderLi>
                                <HeaderLiNavLink href='/Sobrenos'>Sobre Nós</HeaderLiNavLink>
                            </HeaderLi>
                        </HeaderUl>
                    ) : null}
                </HeaderContainer>
            </ContainerGlobal>
        </BGHeader>
    )
})

export default Header
