import { EmpresasParceiras } from "./_Components/EmpresasParceiras";
import { Equipamentos } from "./_Components/Equipamentos";
import Main from "./_Components/Main";
import { Vendas } from "./_Components/Vendas";

export default function Home() {
  return (
    <div>
      <Main />
      <Equipamentos />
      <Vendas />
      <EmpresasParceiras />
    </div>
  );
}
