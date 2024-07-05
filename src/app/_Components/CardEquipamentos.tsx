import Link from "next/link"
import { Button, CardAbout, CardContainer, CardEquipamento, CardImg, CardTextContainer, CardTitle } from "./styles/CardEquipamentos.styles"
import { CardProps } from "@/lib/interface"

export const CardEquipamentos = ({ about, href, src, title }: CardProps) => {
    return (
        <Link href={href} style={{ textDecoration: 'none', color: 'black' }}>
            <CardEquipamento>
                <CardContainer>
                    <CardImg src={src} alt="Foto do equipamento"/>
                    <CardTextContainer>
                        <CardTitle>{title}</CardTitle>
                        <CardAbout>{about}</CardAbout>
                    </CardTextContainer>
                    <Button>Ver Modelo</Button>
                </CardContainer>
            </CardEquipamento >
        </Link>
    )
}