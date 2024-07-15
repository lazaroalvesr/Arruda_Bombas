import React from 'react'
import { BGContainer, BGMain, BGMainContainer, BGMainContainerButton, BGMainParagraph, BGMainRight, BGMainRightIMG, BGMainSpan, BGMainTitle, BgMainAbout, BgMainButton } from './styles/BgMain.styles'
import Arrow_Icon from './Arrow_Icon'
import LinkRedirect from './LinkRedirect'

const Main = () => {

    const message = `Oi, tudo bem? Vim pelo site Arruda Bombas Hidráulicas, gostaria de solicitar um orçamento.`;
    const whatsappLink = `https://api.whatsapp.com/send?phone=5519974105318&text=${encodeURIComponent(message)}`;

    return (
        <BGContainer>
            <BGMain>
                <BGMainContainer>
                    <BGMainTitle>O Equipamento Certo <Arrow_Icon /></BGMainTitle>
                    <BgMainAbout>Procurando pelo Melhor <BGMainSpan>Equipamento.</BGMainSpan></BgMainAbout>
                    <BGMainParagraph>Especialistas em bombas de concreto, garantindo máxima eficiência e durabilidade para suas construções</BGMainParagraph>
                    <BGMainContainerButton>
                        <LinkRedirect href='/Catálogo_Arruda_Bombas.pdf'>
                            <BgMainButton>Baixar o Catálogo</BgMainButton>
                        </LinkRedirect>
                        <LinkRedirect href={whatsappLink}>
                            <BgMainButton>Entrar em Contato</BgMainButton>
                        </LinkRedirect>
                    </BGMainContainerButton>
                </BGMainContainer>
                <BGMainRight>
                    <BGMainRightIMG src="/img/P700.png" alt='Bomba de concreto Modelo P700'/>
                </BGMainRight>
            </BGMain>
        </BGContainer>
    )
}

export default Main