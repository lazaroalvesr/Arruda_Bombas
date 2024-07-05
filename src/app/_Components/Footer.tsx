import Arrow_Icon from "./Arrow_Icon"
import LinkRedirect from "./LinkRedirect"
import { CardButton, CardContainerInfos, CardInfomativoSobre, CardInfomativoTitulo, CardInformativo, ContainerInfos, Div, FooterBg, FooterContainer, FooterIcon, FooterIconTitle, FooterImg, ListaItens, ListaFooterEquipamento, ListaTitulo, Lista, DivRedesSociais, DivRedesTexto, DivRedesImg, FooterDireitosAutorais, FooterItens, TextoDireitos, TextoWhite, ContainerImgs, IconSeta } from "./styles/Footer.styles"
import { ContainerGlobal } from "./styles/GlobalStyle.styles"

export const Footer = () => {
    return (
        <FooterBg>
            <ContainerGlobal>
                <FooterContainer>
                    <FooterItens>
                        <CardInformativo>
                            <CardContainerInfos>
                                <CardInfomativoTitulo>Tem alguma dúvida ? Sinta-se à vontade para perguntar</CardInfomativoTitulo>
                                <CardInfomativoSobre>Nossa equipe está aqui para ajudar! Se tiver dúvidas, perguntas ou precisar de mais informações, não hesite em entrar em contato conosco. Estamos prontos para oferecer a assistência necessária e esclarecer todas as suas questões.</CardInfomativoSobre>
                                <CardButton>Entrar em Contato</CardButton>
                            </CardContainerInfos>
                        </CardInformativo>
                        <Div>
                            <ContainerInfos>
                                <FooterIcon>
                                    <FooterImg src='/img/Logo.png' alt='Icone Arruda Bombas' />
                                    <FooterIconTitle>Arruda Bombas Hidráulicas</FooterIconTitle>
                                </FooterIcon>
                                <ListaFooterEquipamento>
                                    <ListaTitulo>Tipos de Equipamento</ListaTitulo>
                                    <Lista>
                                        <LinkRedirect href="/">
                                            <ListaItens>P700</ListaItens>
                                        </LinkRedirect>
                                        <LinkRedirect href="/">
                                            <ListaItens>Caminhão com as betoneiras encima</ListaItens>
                                        </LinkRedirect>
                                        <LinkRedirect href="/">
                                            <ListaItens>BetonBomba</ListaItens>
                                        </LinkRedirect>
                                        <LinkRedirect href="/">
                                            <ListaItens>Bomba de Concreto Carretinha Pequena</ListaItens>
                                        </LinkRedirect>
                                        <LinkRedirect href="/">
                                            <ListaItens>Bomba de Concreto Rebocável</ListaItens>
                                        </LinkRedirect>
                                    </Lista>
                                </ListaFooterEquipamento>
                            </ContainerInfos>
                            <DivRedesSociais>
                                <DivRedesTexto>Nos siga <IconSeta> <Arrow_Icon /></IconSeta></DivRedesTexto>
                                <ContainerImgs>
                                    <LinkRedirect href="https://www.instagram.com/arrudabombashidraulicas7/">
                                        <DivRedesImg src="/img/Instagram.png" alt="Icone do Instagram" />
                                    </LinkRedirect>
                                    <LinkRedirect href="/">
                                        <DivRedesImg src="/img/Facebook.png" alt="Icone do Facebook" />
                                    </LinkRedirect>
                                </ContainerImgs>
                            </DivRedesSociais>
                        </Div>
                    </FooterItens>
                    <FooterDireitosAutorais>
                        <TextoDireitos>2024 © Todos os direitos reservados - <TextoWhite>Arruda Bombas</TextoWhite></TextoDireitos>
                        <TextoDireitos>Feito por <LinkRedirect href="https://www.lazaroalvesr.com/"><TextoWhite>Lázaro Alves R</TextoWhite></LinkRedirect></TextoDireitos>
                    </FooterDireitosAutorais>
                </FooterContainer>
            </ContainerGlobal>
        </FooterBg>
    )
}