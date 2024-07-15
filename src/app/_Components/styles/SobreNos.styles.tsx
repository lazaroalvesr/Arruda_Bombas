'use client'
import styled from "styled-components"

export const SobreContainer = styled.section`
       margin: 90px auto;
    width: 1100px;
    @media (min-width: 320px) and (max-width: 480px) {
      width: 100%;
    padding-left: 20px;
    margin: 60px auto;
    }  
    @media (min-width: 768px) and (max-width: 1024px) {
        width: 100%;
        padding-left: 30px;
        padding-right: 30px;
    }
`

export const SobreTexto = styled.p`
    font-size: 15px;
    padding-bottom: 20px;
    font-family: var(--type-poppins-regular);
    font-weight: 400;
    @media (min-width: 320px) and (max-width: 480px) {
       width: 350px;
         }  
`

export const SobreSpan = styled.span`
font-size: 15px;
font-family: var(--type-poppins-regular);
font-weight: 700;
color: black;
`