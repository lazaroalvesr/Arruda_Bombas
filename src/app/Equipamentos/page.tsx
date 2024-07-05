import { CardEquipamentos } from '../_Components/CardEquipamentos'
import { ContainerPagina, PaginaEquipamentos } from '../_Components/styles/PaginaEquipamentos.styles'

const Equipamentos = () => {
  return (
    <PaginaEquipamentos>
      <ContainerPagina>
        <CardEquipamentos
          href="/Equipamentos/p700"
          title="P700"
          about="Máxima eficiência com 200 bar de pressão e 35 m³/h. Alcance de 80m horizontal e 12m vertical. Compatível com brita 0 e 1, sistema tubo S e painel automatizado....."
          src="/img/P700.png"
        />
        <CardEquipamentos
          href="/Equipamentos/caminhao_Betoneira"
          title="Caminhão com as betoneiras encima"
          about="Desempenho superior com 200 bar de pressão. Alcance de 80m horizontal e 12m vertical. Sistema tubo S, painel automatizado e radiador de óleo. Ideal para brita 0 e 1....."
          src="/img/betoneira.png"
        />
        <CardEquipamentos
          href="/Equipamentos/betombomba"
          title="BetonBomba"
          about="Com 200 bar de pressão e 25 m³/h de capacidade, a Betonbomba atinge até 100m horizontal e 20m vertical. Camisa e pistão de 0,75m, sistema tubo S, painel automatizado e radiador de óleo garantem eficiência máxima. Ideal para brita 0 e 1....."
          src="/img/betombomba.png"
        />
        <CardEquipamentos
          href="/Equipamentos/carretinha_rebocavel"
          title="Carretinha Rebocável"
          about="Com 200 bar de pressão e capacidade de 25 metros cúbicos por hora, a bomba hidráulica da Arruda Bombas Hidráulicas alcança até 100 metros horizontalmente e 20 metros verticalmente. Possui camisa e pistão com 0,75 metro de comprimento...."
          src="/img/rebocavel.png"
        />
        <CardEquipamentos
          href="/Equipamentos/carretinha_pequena"
          title="Carretinha pequena"
          about="Com 200 bar de pressão, a bomba hidráulica possui uma camisa de 0,60 m de comprimento e 150 mm de diâmetro, com um pistão também de 0,60 m de comprimento. É capaz de realizar bombeamento horizontal por até 40 metros ...."
          src="/img/eletrica.png"
        />
      </ContainerPagina>
    </PaginaEquipamentos>
  )
}

export default Equipamentos