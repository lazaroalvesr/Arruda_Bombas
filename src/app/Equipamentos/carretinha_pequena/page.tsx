'use client'

import Galeria from "@/app/_Components/GaleriaFotos";
import { BombaNome, BombaPreco, Bombas, BombasContainer, BombasContainerInfo, BombasInfo, ButtonDiv, ButtonEnviar, CloseModal, ContainerBomba, ContatoContainer, ContatoNomeInput, ContatoTextArea, DivContato, DivIconeMobile, EmailMobile, Form, IconeEmail, IconeMSG, IconeSelect, IconeTelefone, IconeZap, IconeZapMobile, InformacoesBombas, InformacoesItens, InformacoesTitulo, ItensText, NomeBomba, NomeContato, NumeroContato, SetaPrecoIcon, ZapMobile } from "@/app/_Components/styles/Bombas.styles"
import Link from "next/link";
import { FormEvent, useState } from "react";
import emailjs from '@emailjs/browser'

export default function PaginaCarretinhaPequena() {

    const [contato, setContato] = useState(false)
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [mensagem, setMensagem] = useState('')
    const [celular, setCelular] = useState('');

    const nome = 'Carretinha pequena'

    const message = `Oi, tudo bem? Vim pelo site Arruda Bombas Hidráulicas, gostaria de solicitar um orçamento do modelo ${nome}.`;
    const whatsappLink = `https://api.whatsapp.com/send?phone=5519974105318&text=${encodeURIComponent(message)}`;

    const images = [
        { id: 1, images: "/img/Pequena/Pequena_1.png" },
        { id: 2, images: "/img/Pequena/Pequena_2.png" },
        { id: 3, images: "/img/Pequena/Pequena_3.png" },
        { id: 4, images: "/img/Pequena/Pequena_4.png" },
        { id: 5, images: "/img/Pequena/Pequena_5.png" },
        { id: 6, images: "/img/Pequena/Pequena_6.png" },
    ];

    const Itens = [
        { nome: 'No Motor Elétrico ou no Motor a Diesel' },
        { nome: '200 bar de pressão' },
        { nome: 'Camisa 0.60 de comprimento' },
        { nome: '150 de diâmetro' },
        { nome: 'Pistão 0.60 de comprimento' },
        { nome: 'Bombeamento horizontal 40 metros' },
        { nome: '6 metros vertical' },
        { nome: 'Brita 0 e 1' },
        { nome: 'Coxo com sistema tubo S' },
        { nome: 'Painel PP' },
        { nome: 'Sistema de bombeamento automatizado' },
        { nome: 'Radiador de óleo' },
        { nome: 'Capacidade 5 cúbicos por hora' },
        { nome: 'OBS: Fabricada encima de uma carretinha emplacada' },
    ]

    function toggleContato() {
        setContato(!contato)
    }

    function sendEmail(e: FormEvent) {
        e.preventDefault()

        const templateParams = {
            from_name: name,
            message: `${mensagem}\n\nEquipamento: ${nome}`,
            email: email,
            celular: celular
        };

        emailjs.send("service_1aw0p1n", "template_5q7b1ps", templateParams, "MUihn924koQBFDrhZ")
            .then((response) => {
                console.log('Email enviado', response.status, response.text);
                setName('');
                setEmail('');
                setMensagem('');
                setCelular('');
            }, (err) => {
                console.log('Erro:', err);
            });
    }

    return (
        <BombasContainer>
            <Bombas>
                <ContainerBomba>
                    <NomeBomba>
                        <BombaPreco>R$ 140.000</BombaPreco>
                        <BombaNome>Carretinha pequena</BombaNome>
                        <Galeria images={images} />
                    </NomeBomba>
                    <BombasInfo>
                        <BombasContainerInfo>
                            <SetaPrecoIcon src="/img/PrecoPequena.png" />
                            <DivContato ativo={contato}>
                                <CloseModal src="/img/X.png" onClick={toggleContato} />
                                <ContatoContainer>
                                    <NomeContato>Entre em Contato</NomeContato>
                                    <NumeroContato><IconeTelefone src="/img/zap.png" />19 97410-5318</NumeroContato>
                                    <Form onSubmit={sendEmail}>
                                        <ContatoNomeInput placeholder="Nome"
                                            type="text"
                                            onChange={(e) => setName(e.target.value)}
                                            value={name}
                                            required
                                        />
                                        <ContatoNomeInput placeholder="Número de Celular"
                                            type="tel"
                                            onChange={(e) => setCelular(e.target.value)}
                                            value={celular}
                                            required
                                        />
                                        <ContatoNomeInput placeholder="Seu Email"
                                            type="email"
                                            onChange={(e) => setEmail(e.target.value)}
                                            value={email}
                                            required
                                        />
                                        <ContatoTextArea placeholder="Escreava sua mensagem aqui"
                                            onChange={(e) => setMensagem(e.target.value)}
                                            value={mensagem}
                                            required
                                        />
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
                        {Itens.map((item, index) => (
                            <ItensText key={index}>
                                <IconeSelect src="/img/Select.png" />
                                {item.nome}
                            </ItensText>
                        ))}
                    </InformacoesItens>
                </InformacoesBombas>
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