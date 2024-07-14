'use client'

import Galeria from "@/app/_Components/GaleriaFotos";
import { BombaNome, BombaPreco, Bombas, BombasContainer, BombasContainerInfo, BombasInfo, ButtonDiv, ButtonEnviar, CloseModal, ContainerBomba, ContatoContainer, ContatoNomeInput, ContatoTextArea, DivContato, DivIconeMobile, EmailMobile, Form, IconeEmail, IconeMSG, IconeSelect, IconeTelefone, IconeZap, IconeZapMobile, InformacoesBombas, InformacoesItens, InformacoesTitulo, ItensText, NomeBomba, NomeContato, NumeroContato, SetaPrecoIcon, Video, VideoContainer, VideoDemonstacaoTitulo, VideoDemonstracao, ZapMobile } from "@/app/_Components/styles/Bombas.styles"
import Link from "next/link";
import { useState } from "react";

export default function PaginaP700() {

    const [contato, setContato] = useState(false)

    const nome = 'Bomba P700'

    const message = `Oi, tudo bem? Vim pelo site Arruda Bombas Hidráulicas, gostaria de solicitar um orçamento do modelo ${nome}.`;
    const whatsappLink = `https://api.whatsapp.com/send?phone=5519974105318&text=${encodeURIComponent(message)}`;

    const images = [
        { id: 1, images: "/img/P700/P700_1.png" },
        { id: 2, images: "/img/P700/P700_2.png" },
        { id: 3, images: "/img/P700/P700_3.png" },
        { id: 4, images: "/img/P700/P700_4.png" },
        { id: 5, images: "/img/P700/P700_5.png" },
        { id: 6, images: "/img/P700/P700_6.png" },
        { id: 7, images: "/img/P700/P700_7.jpg" },
    ];

    const Itens = [
        { nome: '200 bar de pressão' },
        { nome: 'Camisa 1.20 de comprimento' },
        { nome: 'Camisa 180 de diâmetro' },
        { nome: 'Pistão 1.20 de comprimento' },
        { nome: 'Potência equivalente a P500' },
        { nome: 'Bombeamento horizontal 80 metros' },
        { nome: '12 metros vertical' },
        { nome: 'Brita 0 e 1' },
        { nome: 'Coxo com sistema tubo S' },
        { nome: 'Painel PP' },
        { nome: 'Sistema de bombeamento automatizado' },
        { nome: 'Radiador de óleo' },
        { nome: 'Capacidade 35 cúbicos por hora' },
    ]

    function toggleContato() {
        setContato(!contato)
    }

    return (
        <BombasContainer>
            <Bombas>
                <ContainerBomba>
                    <NomeBomba>
                        <BombaPreco>R$ 165.000</BombaPreco>
                        <BombaNome>P700</BombaNome>
                        <Galeria images={images} />
                    </NomeBomba>
                    <BombasInfo>
                        <BombasContainerInfo>
                            <SetaPrecoIcon src="/img/PrecoP700.png" />
                            <DivContato ativo={contato}>
                                <CloseModal src="/img/X.png" onClick={toggleContato} />
                                <ContatoContainer>
                                    <NomeContato>Entre em Contato</NomeContato>
                                    <NumeroContato><IconeTelefone src="/img/zap.png" />19 97410-5318</NumeroContato>
                                    <Form>
                                        <ContatoNomeInput placeholder="Nome" />
                                        <ContatoNomeInput placeholder="Seu Email" />
                                        <ContatoNomeInput placeholder="Seu telefone" />
                                        <ContatoTextArea placeholder="Escreava sua mensagem aqui" />
                                        <ButtonDiv>
                                            <ButtonEnviar><IconeMSG src="/img/msg.png" />Enviar mensagem</ButtonEnviar>
                                            <Link href={whatsappLink}>
                                                <IconeZap src="/img/zap.png" />
                                            </Link>
                                        </ButtonDiv>
                                    </Form>
                                </ContatoContainer>
                            </DivContato>
                        </BombasContainerInfo>
                    </BombasInfo>
                </ContainerBomba>
                <InformacoesBombas>
                    <InformacoesTitulo>Especificações</InformacoesTitulo>
                    <InformacoesItens>
                        {Itens.map((item,index) => (
                            <ItensText key={index}>
                                <IconeSelect src="/img/Select.png" />
                                {item.nome}
                            </ItensText>
                        ))}
                    </InformacoesItens>
                </InformacoesBombas>
                <VideoDemonstracao>
                    <VideoDemonstacaoTitulo>Videos de Demonstração</VideoDemonstacaoTitulo>
                    <VideoContainer>
                        <Video src="/video/video1.mp4" controls />
                        <Video src="/video/video2.mp4" controls />
                        <Video src="/video/video3.mp4" controls />
                    </VideoContainer>
                </VideoDemonstracao>
            </Bombas>
            <DivIconeMobile>
                <Link href={whatsappLink}>
                    <IconeZapMobile>
                        <ZapMobile src="/img/zap.png" />
                    </IconeZapMobile>
                </Link>
                <IconeEmail onClick={toggleContato}>
                    <EmailMobile src="/img/msg.png" />
                    Enviar e-mail
                </IconeEmail>
            </DivIconeMobile>
        </BombasContainer>
    )
}