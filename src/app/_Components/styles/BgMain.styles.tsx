'use client'

import styled from "styled-components";

export const BGMain = styled.div`
  background: linear-gradient(to bottom, black, #333333);
    width: 100%;
    height: 688px;
    margin-top: -120px;
    @media (min-width: 320px) and (max-width: 480px) {
       height: 850px;
    } 
`

export const BGMainRight = styled.div`
  background: white;
    width: 50%;
    height: 568px;
    margin-top: -120px;
    position: absolute;
    right: 0;
    top: 220px;
    @media (min-width: 320px) and (max-width: 480px) {
    background: none;
}  
@media (min-width: 768px) and (max-width: 1024px) {
    top: 232px;
    }
`

export const BGContainer = styled.div`
    width: 100%;
`

export const BGMainContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 260px;
  margin-left: 240px;
  @media (min-width: 320px) and (max-width: 480px) {
       margin: 22px;
       padding-top: 200px;
    }  
    @media (min-width: 768px) and (max-width: 1024px) {
      margin-left: 48px;
       padding-top: 240px;
    }
`

export const BGMainTitle = styled.h2`
  color: #989696;
  font-weight: normal;
  align-items: center;
  display: flex;
  gap: 12px;
  font-size: 22px;
  font-family: var(--type-poppins-regular);
  @media (min-width: 320px) and (max-width: 480px) {
      font-size: 18px;
    }  
    @media (min-width: 768px) and (max-width: 1024px) {
   font-size: 18px;
    }
`

export const BgMainAbout = styled.p`
  font-size: 40px;
  padding-top: 14px;
  color: white;
  font-weight: bold;
  width: 480px;
  font-family: var(--type-poppins-bold);
  @media (min-width: 320px) and (max-width: 480px) {
        font-size: 44px;
        width: 100%;
    }  
    @media (min-width: 768px) and (max-width: 1024px) {
   font-size: 37px;
   width: 360px;
    }
`
export const BGMainSpan = styled.span`
  color: #C9BFBF;
`

export const BGMainParagraph = styled.p`
  color: white;
  width: 440px;
  padding-top: 20px;
  font-size: 14px;
  font-family: var(--type-poppins-regular);
  font-weight: normal;
  @media (min-width: 320px) and (max-width: 480px) {
       width: 100%;
       padding-top: 220px;
    }  
    @media (min-width: 768px) and (max-width: 1024px) {
   font-size: 15px;
   width: 360px;
    }
`

export const BGMainContainerButton = styled.div`
  display: flex;
  gap: 20px;
  margin-top: 40px;
`

export const BgMainButton = styled.button`
  width: 200px;
  background: #1E1E1E;
  color: white;
  border: none;
  border: 1px solid white;
  font-family: var(--type-poppins-regular);
  border-radius: 15px;
  padding: 30px 20px;
  align-items: center;
  cursor: pointer;
  text-align: center;
  display: flex;
  justify-content: center;
  height: 20px;
  @media (min-width: 320px) and (max-width: 480px) {
       width: 100%;
    } 
  @media (min-width: 768px) and (max-width: 1024px) {
    width: 160px;
    }

    transition: transform 0.3s ease; 
    
    &&:hover{
        transform: scale(1.1);
    }

`

export const BGMainRightIMG = styled.img`
  max-width: 100%;
  width: 647px;
  margin-left: 40px;
  padding-top: 80px;
  @media (min-width: 320px) and (max-width: 480px) {
       margin-left: -150px;
       margin-top: 250px;
       max-width: 300px;
    } 
    @media (min-width: 768px) and (max-width: 1024px) {
      margin-top: 120px;
       max-width: 390px;
       margin-left: 12px;
    }
`