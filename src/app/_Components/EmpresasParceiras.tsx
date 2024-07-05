import { IconeEmpresa } from "@/lib/IconeEmpresa"
import { ContainerEmpresa, DivIconsEmpresas, EmpresasContainer, EmpresasParceirasBGBlack, EmpresasTexto, EmpresasTitulo } from "./styles/EmpresasParceiras.styles"
import { ContainerGlobal } from "./styles/GlobalStyle.styles"

export const EmpresasParceiras = () => {
    return (
        <ContainerGlobal>
            <ContainerEmpresa>
                <EmpresasParceirasBGBlack>
                    <EmpresasContainer>
                        <EmpresasTexto>Nossos Parceiro de Confiança</EmpresasTexto>
                        <EmpresasTitulo>Empresas Parceiras</EmpresasTitulo>
                        <DivIconsEmpresas>
                            <IconeEmpresa src="/img/formix.png" />
                            <IconeEmpresa src="/img/leme.png" />
                            <IconeEmpresa src="/img/rvConcreto.png" />
                        </DivIconsEmpresas>
                    </EmpresasContainer>
                </EmpresasParceirasBGBlack>
            </ContainerEmpresa>
        </ContainerGlobal>
    )
}