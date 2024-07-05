'use client'
import styled from "styled-components"

export const VendasContainer = styled.div`
    margin: 140px 0px 140px 70px;
    display: flex;
    gap: 26px;
    @media (min-width: 320px) and (max-width: 480px) {
       flex-direction: column;
       margin: 0px;
        }  
     @media (min-width: 768px) and (max-width: 1024px) {
    margin-left: 30px;
    }
`

export const Img = styled.img`
    width: 389px;
    height: 289px;
    @media (min-width: 320px) and (max-width: 480px) {
    display: flex;
    width: 100%;
    }  
`

export const DivImg = styled.div`
    position: relative;
    align-items: center;
    display: flex;
    justify-content: center;
    margin: auto;
padding: 4px;
`

export const QuadradoTruck = styled.div`
    width: 111px;
    height: 99px;
    border-radius: 2px;
    display: flex;
    flex-direction: column;
    border-radius: 15px;
    align-items: center;
    padding: 7px;
    position: absolute;
    background-color: white;
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
    top: -40px;
    left: -50px;
    @media (min-width: 320px) and (max-width: 480px) {
       left: 10px;
       width: 100px;
       height: 90px;
       padding: 2px;
    }  
    @media (min-width: 768px) and (max-width: 1024px) {
  left: -10px;
    }
`

export const QuadradoTruckText = styled.p`
    color: black;
    font-family: var(--type-poppins-bold);
    font-weight: 700;
    font-size: 22px;
`

export const QuadradoTruckImg = styled.img`
    width: 45px;
    height: 44px;
`

export const Quadrado = styled.div`
    width: 50px;
    height: 47px;
    border-radius: 2px;
    position: absolute;
    background-color: #C9BFBF;
    bottom: -2px;
    left: -4px;
    @media (min-width: 320px) and (max-width: 480px) {
 left: 2px;
 bottom: -3px;
 width: 45px;
    }  
    @media (min-width: 768px) and (max-width: 1024px) {
    left: -4px;
    bottom: -3px;
    }
`

export const QuadradoPequeno = styled.div`
    width: 13px;
    height: 13px;
    border-radius: 2px;
    position: absolute;
    background-color: black;
    bottom: -14px;
    left: 42px;
    @media (min-width: 320px) and (max-width: 480px) {
 left: 44px;
 bottom: -14px;
}  
`


export const DivText = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: -20px;
    gap: 5px;
    @media (min-width: 320px) and (max-width: 480px) {
    margin-left: 24px;
    margin-top: 0px;
    }  
`

export const TextP = styled.p`
    font-size: 22px;
    color: #a7a5a5;
    font-family: var(--type-poppins-regular);
    font-weight: 400;
`

export const Titulo = styled.h3`
    font-size: 32px;
    color: black;
    font-family: var(--type-poppins-bold);
    font-weight: 700;
    @media (min-width: 320px) and (max-width: 480px) {
  font-size: 25px;
    }  
    @media (min-width: 768px) and (max-width: 1024px) {
        font-size: 26px;
    }
`

export const TituloSpan = styled.span`
    font-size: 32px;
    color: #a7a5a5;
    font-family: var(--type-poppins-bold);
    font-weight: 700;
    @media (min-width: 320px) and (max-width: 480px) {
  font-size: 25px;
    } 
    @media (min-width: 768px) and (max-width: 1024px) {
        font-size: 26px;
    }    
`

export const Sobre = styled.p`
    font-size: 15px;
    color: #6D6969;
    font-family: var(--type-poppins-bold);
    font-weight: 700;
    width: 573px;
    @media (min-width: 320px) and (max-width: 480px) {
    width: 100%;
    }  
    @media (min-width: 768px) and (max-width: 1024px) {
        width: 100%;
        padding-right: 20px;
    }
`

