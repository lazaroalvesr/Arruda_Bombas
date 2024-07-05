'use client'

import styled from "styled-components"

export const PaginaEquipamentos = styled.section`
    width: 100%;
    height: 100%;
`

export const ContainerPagina = styled.div`
    margin: 160px auto;
    width: 1100px;
    flex-wrap: wrap;
    gap: 40px;
    display: flex;
    @media (min-width: 320px) and (max-width: 480px) {
        flex-direction: column;
        align-items: center;
        width: 100%;
        margin: 90px 0px;
    }  
    @media (min-width: 768px) and (max-width: 1024px) {
            width: 800px;
            align-items: center;
            justify-content: center;
    }
`