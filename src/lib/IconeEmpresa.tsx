import { BgImgEmpresas, ImgEmpresas } from "@/app/_Components/styles/EmpresasParceiras.styles"

export const IconeEmpresa = ({src}: {src: string}) => {
    return (
        <BgImgEmpresas>
            <ImgEmpresas src={src} alt="Foto icone empresa"/>
        </BgImgEmpresas>
    )
}