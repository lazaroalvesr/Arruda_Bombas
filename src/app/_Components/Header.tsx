'use client'

import { useState } from 'react'
import { BGHeader, ButtonMobile, HeaderContainer, HeaderIcon, HeaderIconTitle, HeaderImg, HeaderLi, HeaderUl } from './styles/Header.styles'
import { ContainerGlobal } from './styles/GlobalStyle.styles'
import HeaderLiNavLink from './HeaderNavLink'
import { IoMdClose } from 'react-icons/io'
import { CiMenuFries } from 'react-icons/ci'

const Header = () => {
    const [ativo, setAtivo] = useState(false)

    const toggle = () => {
        setAtivo((!ativo))
    }
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
                    <HeaderUl ativo={ativo}>
                        <HeaderLiNavLink href='/'>
                            <HeaderLi>
                                Home
                            </HeaderLi>
                        </HeaderLiNavLink>
                        <HeaderLiNavLink href='/Equipamentos'>
                            <HeaderLi>
                                Equipamentos
                            </HeaderLi>
                        </HeaderLiNavLink>
                        <HeaderLiNavLink href='/Sobrenos'>
                            <HeaderLi>
                                Sobre Nós
                            </HeaderLi>
                        </HeaderLiNavLink>
                    </HeaderUl>
                </HeaderContainer>
            </ContainerGlobal>
        </BGHeader >
    )
}

export default Header
