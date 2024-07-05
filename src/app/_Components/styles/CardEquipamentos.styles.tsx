'use client'
import styled from "styled-components"

export const CardEquipamento = styled.div`
    background-color: white;
    width: 330px;
     box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.2);
    border-radius: 15px;
    padding-top: 15px;
    height: 430px;
    transition: transform 0.3s ease; 

    &&:hover{
        transform: scale(1.1);
    }

`

export const CardContainer = styled.div`
    width: 300px;
    margin: auto;
    display: flex;
    flex-direction: column;
`

export const CardImg = styled.img`
    width: 277px;
    height: 159px;
    display: flex;
    margin: auto;
    object-fit: contain;
`

export const CardTextContainer = styled.div`
height: 190px;
`

export const CardTitle = styled.h4`
    font-family: var(--type-poppins-bold);
    width: 700;
    font-size: 20px;
    width: 350PX;
    padding-top: 15px;
    @media (min-width: 320px) and (max-width: 480px) {
   width: auto;
    }  
`

export const CardAbout = styled.h4`
    font-family: var(--type-poppins-bold);
    font-weight: 700;
    padding-top: 10px;
    font-size: 12px;
    color: #6D6969;
`

export const Button = styled.button`
    background-color: #1E1E1E;
    color: white;
    font-family: var(--type-poppins-bold);
    font-weight: 700;
    font-size: 14px;
    cursor: pointer;
    margin:  auto;
    width: 213px;
    height: 54px;
    border-radius: 15px;
`