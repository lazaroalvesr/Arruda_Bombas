'use client'

import { HeaderUlProps } from "@/lib/interface";
import styled from "styled-components";

export const BGHeader = styled.div`
    background: white;
    border-radius: 15px;
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
    max-width: 1038px;
    margin: auto;
    position: relative;
    z-index: 1;
    height: 100px;
    top: 50px;
    @media (min-width: 320px) and (max-width: 480px) {
        margin: 0px 10px;
        height: 80px;
    }  
    @media (min-width: 768px) and (max-width: 1024px) {
        margin: 0px 30px;
    }
    `

export const HeaderContainer = styled.header`
    display: flex;
    justify-content: space-between;
    padding: 20px 40px;
    align-items: center;
    @media (min-width: 320px) and (max-width: 480px) {
        padding: 15px 20px;
    } 
`

export const HeaderIcon = styled.div`
    display: flex;
    align-items: center;
`

export const HeaderImg = styled.img`
    width: 68px;
    height: 65px;
    @media (min-width: 320px) and (max-width: 480px) {
        width: 48px;
       height: 48px;
    }  
`

export const HeaderIconTitle = styled.p`
    font-weight: normal;
    font-size: 28px;
    padding-left: 8px;
    font-family: var(--type-poppins-regular);
    width: 400;
    @media (min-width: 320px) and (max-width: 480px) {
        font-size: 22px;
    }  
`

export const HeaderUl = styled.ul<HeaderUlProps>`
    display: flex;
    align-content: center;
    justify-content: center;
    gap: 40px;
    @media (min-width: 320px) and (max-width: 480px) {
      flex-direction: column;
      display: ${({ ativo }) => ativo ? 'flex' : 'none'};
      position: absolute;
      width: 100%;
      left: 0px;
      background-color: white;
      padding: 40px;
      border-radius: 15px;
      align-items: center;
      box-shadow: 6px 6px 6px rgba(0, 0, 0, 0.1);
      height: 450px;
      top: 98px;
    }  
`

export const HeaderNavLink = styled.a`
      color: black;

`

export const HeaderLi = styled.li`
    display: flex;
    gap: 40px;
    font-family: var(--type-poppins-regular);
    width: 400;
    font-weight: normal;
    font-size: 18px;
    @media (min-width: 320px) and (max-width: 480px) {
        font-size: 24px;
    }  
`

export const ButtonMobile = styled.button`
display: none;
@media (min-width: 320px) and (max-width: 480px) {
    display: flex;
    background-color: var(--bg-primary);
    border: none;
    position: absolute;
    right: 30px;
    }
`