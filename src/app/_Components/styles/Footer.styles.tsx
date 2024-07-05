'use client'
import styled from "styled-components"

export const FooterBg = styled.div`
      background: linear-gradient(to bottom, black, #333333);
      width: 100%;
`

export const FooterContainer = styled.div`
    display: flex;
    flex-direction: column;
    position: relative;
    @media (min-width: 320px) and (max-width: 480px) {
       margin-top: 20px;
        }  
        @media (min-width: 768px) and (max-width: 1024px) {
            margin-top: 200px;
    }
`

export const CardContainerInfos = styled.div`
    display: flex;
    padding-top: 15px;
    gap: 40px;
    flex-direction: column;
    @media (min-width: 320px) and (max-width: 480px) {
   gap: 20px ;
    }
    @media (min-width: 768px) and (max-width: 1024px) {
           gap: 20px;
    }
`

export const CardInformativo = styled.div`
    margin-top: -40px;
    background-color: #6D6969;
    width: 464px;
    height: 388px;
    border-radius: 15px;
    padding: 25px;
    @media (min-width: 320px) and (max-width: 480px) {
      width: 370px;
      margin: -40px auto;
      }  
`

export const CardInfomativoTitulo = styled.p`
    color: white;
    font-size: 25px;
    font-family: var(--type-poppins-bold);
    font-weight: 700;
`

export const CardInfomativoSobre = styled.p`
    color: white;
    font-size: 14px;
    font-family: var(--type-poppins-regular);
    font-weight: 500;

`

export const CardButton = styled.button`
    background-color: black;
    color: white;
    border-radius: 15px;
    padding: 15px;
    width: 100%;
    cursor: pointer;
    font-family: var(--type-poppins-regular);
font-weight: 400;
`

export const ContainerInfos = styled.div`
  display: flex;
  flex-direction: column;
`

export const Div = styled.div`
  display: flex;
  padding-top: 50px;
  padding-left: 40px;
  @media (min-width: 320px) and (max-width: 480px) {
  flex-direction: column;
    }
`

export const FooterItens = styled.div`
display: flex;
@media (min-width: 320px) and (max-width: 480px) {
     flex-direction: column;
        }  
`

export const FooterIcon = styled.div`
    display: flex;
    align-items: center;
`

export const FooterImg = styled.img`
    width: 53px;
    height: 53px;
    @media (min-width: 320px) and (max-width: 480px) {
        width: 48px;
       height: 48px;
    }  
`

export const FooterIconTitle = styled.p`
    font-weight: normal;
    font-size: 22px;
    padding-left: 8px;
    color: white;
    font-family: var(--type-poppins-regular);
    font-weight: 400;
    @media (min-width: 320px) and (max-width: 480px) {
        font-size: 14px;
    }  
`

export const ListaFooterEquipamento = styled.div`
  display: flex;
  padding-top: 40px;
  flex-direction: column;

`

export const ListaTitulo = styled.p`
  font-size: 18px;
  font-family: var(--type-poppins-regular);
  font-weight: 400;
  color: white;
`

export const Lista = styled.ul`
 display: flex;
 padding-top: 22px;
 flex-direction: column;
 gap: 8px;
`

export const ListaItens = styled.li`
  font-size: 14px;
  font-family: var(--type-poppins-regular);
  font-weight: 400;
  list-style: none;
  color: #C9BFBF;

  &&:hover{
    color: white;
  }
`

export const DivRedesSociais = styled.div`
    display: flex;
    margin: auto;
    width: 250px;
    align-items: center;
    gap: 7px;
    @media (min-width: 320px) and (max-width: 480px) {
 margin: 20px 0px;
    }
    @media (min-width: 768px) and (max-width: 1024px) {
    flex-direction: column;
    }
    `

export const DivRedesTexto = styled.p`
    font-size: 16px;
    font-family: var(--type-poppins-bold);
    font-weight: 700;
    color: white;
    display: flex;
align-items: center;
gap: 11px;
@media (min-width: 768px) and (max-width: 1024px) {
         gap: 2px;
    }
`

export const DivRedesImg = styled.img`
width: 32px;
height: 32px;
`

export const FooterDireitosAutorais = styled.div`
display: flex;
justify-content: space-around;
margin-top: 120px;

&&::after{
    content: '';
    display: block;
    width: 1444px;
    position: absolute;
    height: 2px;
    background-color: #373636;
}

@media (min-width: 320px) and (max-width: 480px) {
 margin: 20px 0px;
 flex-direction: column;
 align-items: center;
 &&::after{
    content: '';
    display: none;
    width: 1444px;
    position: absolute;
    height: 2px;
    background-color: #373636;
}
    }

    @media (min-width: 768px) and (max-width: 1024px) {
        &&::after{
    content: '';
    display: none;
    width: 1444px;
    position: absolute;
    height: 2px;
    background-color: #373636;
}
    }
`

export const TextoDireitos = styled.p`
font-size: 14px;
font-family: var(--type-poppins-regular);
font-weight: 400;
color: white;
padding: 22px;
@media (min-width: 320px) and (max-width: 480px) {
 padding: 2px;
    }
`

export const TextoWhite = styled.span`
color: white;
font-size: 14px;
font-family: var(--type-poppins-bold);
font-weight: 700;
`

export const ContainerImgs = styled.div`
    display: flex;
`

export const IconSeta = styled.span`
    display: flex;
    @media (min-width: 768px) and (max-width: 1024px) {
         display: none;
    }
`