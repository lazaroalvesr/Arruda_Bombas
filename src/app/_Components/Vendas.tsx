import { ContainerGlobal } from "./styles/GlobalStyle.styles"
import { DivImg, DivText, Img, Quadrado, QuadradoPequeno, QuadradoTruck, QuadradoTruckImg, QuadradoTruckText, Sobre, TextP, Titulo, TituloSpan, VendasContainer } from "./styles/Vendas.styles"

export const Vendas = () => {
    return (
        <ContainerGlobal>
            <VendasContainer>
                <DivImg>
                    <QuadradoTruck>
                        <QuadradoTruckImg src="/img/truck.png" alt="icone de uma caminhão betoneira" />
                        <QuadradoTruckText>10k+</QuadradoTruckText>
                    </QuadradoTruck>
                    <Img src="/img/foto.png" alt="Pessoas olhando projeto no tablet" />
                    <Quadrado />
                    <QuadradoPequeno />
                </DivImg>
                <DivText>
                    <TextP>O Equipamento Certo</TextP>
                    <Titulo>Oferecemos equipamentos de construção mais <TituloSpan>inteligentes e eficientes.</TituloSpan> </Titulo>
                    <Sobre>Nossa variedade de equipamentos de construção avançados foi projetada para elevar a eficiência e a inteligência em seus projetos, garantindo resultados superiores.</Sobre>
                </DivText>
            </VendasContainer>
        </ContainerGlobal>
    )
}