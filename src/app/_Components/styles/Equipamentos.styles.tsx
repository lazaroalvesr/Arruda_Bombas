'use client'
import styled from "styled-components"

export const EquipamentosContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: auto;
    align-items: center;
    margin-top: 140px;
    @media (min-width: 320px) and (max-width: 480px) {
    margin-top: 80px;
    }  
`

export const EquipamentosTextGray = styled.p`
    font-size: 18px;
    font-weight: 400;
    color: #6D6969;
    font-family: var(--type-poppins-regular);
`

export const EquipamentosText = styled.h2`
    font-size: 35px;
    font-family: var(--type-poppins-bold);
    font-weight: 700;
    @media (min-width: 320px) and (max-width: 480px) {
      text-align: center;
    }  
`

export const CardEquipamentosContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 39px;
    padding-top: 71px;
    align-items: center;
justify-content: center;
margin: auto;
    @media (min-width: 320px) and (max-width: 480px) {
        grid-template-columns: repeat(1, 1fr);
    }  
    @media (min-width: 768px) and (max-width: 1024px) {
        grid-template-columns: repeat(2, 1fr);
    }
`

export const ButtonVerMais = styled.button`
    border: 1px solid #1E1E1E;
    color: #1E1E1E;
    font-family: var(--type-poppins-bold);
    font-weight: 700;
    font-size: 14px;
    cursor: pointer;
    margin: 40px auto;
    background-color: transparent;
    width: 213px;
    height: 54px;
    border-radius: 15px;

 &&:hover{
    background-color: #1E1E1E;
    color: white;
 }
`