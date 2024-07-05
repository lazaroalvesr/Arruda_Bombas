import { LinkRedirect } from "@/lib/linkRedirect"
import { CardEquipamentos } from "./CardEquipamentos"
import { ButtonVerMais, CardEquipamentosContainer, EquipamentosContainer, EquipamentosText, EquipamentosTextGray } from "./styles/Equipamentos.styles"
import { ContainerGlobal } from "./styles/GlobalStyle.styles"

export const Equipamentos = () => {
    return (
        <ContainerGlobal>
            <EquipamentosContainer>
                <EquipamentosTextGray>Encontre seu equipamento Certo</EquipamentosTextGray>
                <EquipamentosText>Conheça Nossos Equipamentos</EquipamentosText>
                <CardEquipamentosContainer>
                    <CardEquipamentos
                        href="/Equipamentos/p700"
                        title="P700"
                        about="Máxima eficiência com 200 bar de pressão e 35 m³/h. Alcance de 80m horizontal e 12m vertical. Compatível com brita 0 e 1, sistema tubo S e painel automatizado."
                        src="/img/P700.png"
                    />
                    <CardEquipamentos
                        href="/Equipamentos/caminhao_Betoneira"
                        title="Caminhão com as betoneiras encima"
                        about="Desempenho superior com 200 bar de pressão. Alcance de 80m horizontal e 12m vertical. Sistema tubo S, painel automatizado e radiador de óleo. Ideal para brita 0 e 1."
                        src="/img/betoneira.png"
                    />
                    <CardEquipamentos
                        href="/Equipamentos/betombomba"
                        title="BetonBomba"
                        about="Com 200 bar de pressão e 25 m³/h de capacidade, a Betonbomba atinge até 100m horizontal e 20m vertical. Camisa e pistão de 0,75m, sistema tubo S, painel automatizado e radiador de óleo garantem eficiência máxima. Ideal para brita 0 e 1."
                        src="/img/betombomba.png"
                    />
                </CardEquipamentosContainer>
                <LinkRedirect href="/Equipamentos">
                    <ButtonVerMais>Ver Mais</ButtonVerMais>
                </LinkRedirect>
            </EquipamentosContainer>
        </ContainerGlobal>
    )
}