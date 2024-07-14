'use client'
import { HeaderUlProps } from "@/lib/interface"
import styled from "styled-components"

export const BombasContainer = styled.section`
    width: 1020px;
    margin: 120px auto 90px;
    @media (min-width: 320px) and (max-width: 480px) {
       width: 360px;
       margin: 50px auto 90px;
        }  
`

export const Bombas = styled.div`
    display: flex;
    flex-direction: column;
`

export const ContainerBomba = styled.div`
    display: flex;
   justify-content: space-between;
   margin-bottom: 60px;
   @media (min-width: 320px) and (max-width: 480px) {
     margin-bottom: 0px;
     position: relative;
        }  
`

export const NomeBomba = styled.div`
display: flex;
flex-direction: column;
@media (min-width: 320px) and (max-width: 480px) {
     flex-direction: column-reverse;
        } 
`

export const BombasImg = styled.div`
width: 500px;
align-items: center;
display: flex;
position: relative;
flex-direction: column;
@media (min-width: 320px) and (max-width: 480px) {
       width: 100%;
        }  
`

export const IMGPrincipal = styled.img`
    width: 500px;
    height: 400px;
    background-color: #edeff0;
    object-fit: contain;
    @media (min-width: 320px) and (max-width: 480px) {
       width: 100%;
       height: 300px;
        }  
`

export const DivImg = styled.div`
    display: flex;
    overflow-x: auto;  
    width: 500px;
    border: 2px solid gray;
    border-radius: 8px;
    gap: 8px;
    margin-top: 10px;
    padding: 4px;
    @media (min-width: 320px) and (max-width: 480px) {
       display: none;
        }  
`

export const IMG = styled.img`
    width: 80px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: auto;
    cursor: pointer;
opacity: 60%;


&&:hover{
    opacity: 100%;
}
`

export const ButtonLeft = styled.button`
    position: absolute;
    border: none;
    left: -20px;
    background-color: gray;
    height: 60px;
    width: 30px;
    border-radius: 5px;
display: flex;
align-items: center;
justify-content: center;
    cursor: pointer;
    top: 170px;
    @media (min-width: 320px) and (max-width: 480px) {
      left: -14px;
      top: 120px;
        }  
`

export const ButtonRight = styled.button`
    position: absolute;
    border: none;
    right: -20px;
    background-color: gray;
    height: 60px;
    width: 30px;
    border-radius: 5px;
display: flex;
align-items: center;
justify-content: center;
    cursor: pointer;
    top: 170px;
    @media (min-width: 320px) and (max-width: 480px) {
      right: -10px;
      top: 120px;
        } 
`

export const BombasInfo = styled.div`
    display: flex;
    flex-direction: column;
`

export const BombasContainerInfo = styled.div`
    display: flex;
    flex-direction: column;
`

export const SetaPrecoIcon = styled.img`
    width: 300px;
    margin-left: 22px;
    height: auto;
    @media (min-width: 320px) and (max-width: 480px) {
       display: none;
        }  
`

export const DivContato = styled.div<HeaderUlProps>`
    width: 320px;
    margin-top: 20px;
    border-radius: 8px;
    border: 2px solid gray;
    @media (min-width: 320px) and (max-width: 480px) {
        display: ${props => (props.ativo ? 'block' : 'none')};
        position: absolute;
        padding-top: 20px;
        left: 0;
        background-color: white;
        width: 100%;
        border: none;
        height: 500px;
        z-index: 2000;
        top: 0;
        }  
`

export const ContatoContainer = styled.div`
display: flex;
padding: 20px;
flex-direction: column;
`

export const NomeContato = styled.p`
font-size: 20px;
font-weight: 700;
font-family: var(--type-poppins-regular);
`

export const NumeroContato = styled.span`
font-size: 14px;
align-items: center;
display: flex;
font-weight: 500;
`

export const Form = styled.form`
display: flex;
margin-top: 20px;
gap: 10px;
flex-direction: column;
`

export const ContatoNomeInput = styled.input`
    width: 100%;
    background-color: transparent;
    border: 1px solid gray;
    border-radius: 4px;
    padding: 6px;
`

export const ContatoTextArea = styled.textarea`
    width: 100%;
    background-color: transparent;
    border: 1px solid gray;
    border-radius: 4px;
    height: 100px;
    padding: 10px;
    resize: none;
`

export const ButtonDiv = styled.div`
    display: flex;
    width: 100%;
    margin-top: 5px;
    justify-content: space-between;
`

export const ButtonEnviar = styled.button`
color: white;
width: 70%;
background-color: black;
display: flex;
font-family: var(--type-poppins-regular);
align-items: center;
border-radius: 10px;
justify-content: center;
gap: 10px;
text-align: center;
padding: 10px;
cursor: pointer;
`

export const IconeMSG = styled.img`
width: 20px;
`

export const InformacoesBombas = styled.div`
display: flex;
flex-direction: column; 
`

export const InformacoesTitulo = styled.p`
    font-size: 20px;
    font-family: var(--type-poppins-regular);
    font-weight: 700;
`

export const IconeZap = styled.img`
    width: 50px;
    cursor: pointer;
`

export const InformacoesItens = styled.div`
display: flex;
width: 700px;
margin-top: 40px;
gap: 40px;
flex-wrap: wrap;
@media (min-width: 320px) and (max-width: 480px) {
   flex-direction: column;
   width: 100%;
        }  
`

export const IconeSelect = styled.img`
width: 40px;
`

export const ItensText = styled.p`
    font-size: 17px;
    font-family: var(--type-poppins-regular);
    font-weight: 500;
    width: 330px;
    align-items: center;
    display: flex;
`

export const VideoDemonstracao = styled.div`
    display: flex;
    height: 100%;
    flex-direction: column;
    margin-top: 40px;
`

export const VideoDemonstacaoTitulo = styled.p`
    font-size: 20px;
    font-family: var(--type-poppins-regular);
    font-weight: 700;
    `

export const VideoContainer = styled.div`
margin-top: 20px;
gap: 20px;
width: 600px;
    display: flex;
    @media (min-width: 320px) and (max-width: 480px) {
   overflow: scroll;
   width: 360px;
        }  
`

export const Video = styled.video`
    width: 200px;
    border-radius: 8px;
`

export const IconeTelefone = styled.img`
width: 20px;
`

export const BombaNome = styled.p`
 font-size: 25px;
    font-family: var(--type-poppins-regular);
    font-weight: 600;
    @media (min-width: 320px) and (max-width: 480px) {
 padding-bottom: 2px;
 padding-top: 20px;
        }  
`

export const BombaPreco = styled.p`
 font-size: 25px;
    font-family: var(--type-poppins-regular);
    font-weight: 500;
    display: none;
    @media (min-width: 320px) and (max-width: 480px) {
 padding-bottom: 20px;
 display: flex;
        }  
`

export const DivIconeMobile = styled.div`
   display: none;
    @media (min-width: 320px) and (max-width: 480px) {
        display: flex;
    gap: 20px;
    position: fixed;
    align-items: center;
    justify-content: center;
    z-index: 1999;
    margin: auto;
    width: 100%;
    bottom: 10px;
        }  
`

export const IconeZapMobile = styled.div`
background-color: #bdbbbbf8;
width: 60px;
height: 60px;
border-radius: 15px;
align-items: center;
display: flex;
justify-content: center;
`

export const ZapMobile = styled.img`
width: 45px;
`

export const IconeEmail = styled.div`
    background-color: #bdbbbbf8;
width: 200px;
gap: 10px;
height: 60px;
font-family: var(--type-poppins-regular);
font-weight: 500;
border-radius: 15px;
align-items: center;
color: white;
display: flex;
justify-content: center;
`

export const EmailMobile = styled.img`
width: 34px;
`

export const CloseModal = styled.img`

    display: none;
    @media (min-width: 320px) and (max-width: 480px) {
        width: 30px;
    position: absolute;
    right: 10px;
        } 
`

export const Aviso = styled.p`
     font-size: 15px;
     width: 320px;
    font-family: var(--type-poppins-regular);
    font-weight: 500;
    color: red;
    display: none;
    @media (min-width: 320px) and (max-width: 480px) {
 padding-bottom: 20px;
 display: flex;
        }  
`