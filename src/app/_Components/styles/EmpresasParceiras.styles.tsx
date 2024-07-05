'use client'
import styled from "styled-components"

export const ContainerEmpresa =styled.div`
height: auto;
@media (min-width: 320px) and (max-width: 480px) {
  height: 700px;
}     

`

export const EmpresasParceirasBGBlack = styled.div`
  background: linear-gradient(to bottom, black, #333333);
  width: 100%;
 border-radius: 15px;
 height: 288px;
 margin-bottom: 200px;
 @media (min-width: 320px) and (max-width: 480px) {
        margin:  auto;
        width: 380px;
}     
 @media (min-width: 768px) and (max-width: 1024px) {
  width: 850px;
  margin: auto;
    }
`

export const EmpresasContainer = styled.div`
display: flex;
padding-top: 80px;
flex-direction: column;
align-items: center;
@media (min-width: 320px) and (max-width: 480px) {
margin-top: 60px;
padding-bottom: 60px;
}   
`

export const EmpresasTexto = styled.p`
font-family: var(--type-poppins-regular);
font-weight: 400;
font-size: 15px;
color: #C9BFBF;
`

export const EmpresasTitulo = styled.h3`
font-family: var(--type-poppins-bold);
font-weight: 700;
font-size: 36px;
color: #FFFFFF;
@media (min-width: 320px) and (max-width: 480px) {
       font-size: 30px;
}  
`

export const DivIconsEmpresas = styled.div`
background-color: white;
display: flex;
margin-top: 40px;
width: 940px;
height: 164px;
gap: 20px;
align-items: center;
justify-content: center;
border-radius: 15px;
@media (min-width: 320px) and (max-width: 480px) {
        flex-direction: column;
        padding: 40px;
        width: 270px;
        height: auto;
  }  
  @media (min-width: 768px) and (max-width: 1024px) {
  width: 750px;
    }
`

export const BgImgEmpresas = styled.div`
background-color: #CAC6C6;
width: 153px;
height: 118px;
border-radius: 15px;
align-items: center;
display: flex;
justify-content: center;
`

export const ImgEmpresas = styled.img`
    width: auto;
    height: 92px;
`