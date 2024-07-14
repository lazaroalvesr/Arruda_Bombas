'use client'

import { Bombas, BombasContainer, BombasImg, BombasInfo, ButtonLeft, ButtonRight, DivImg, IMG, IMGPrincipal } from "@/app/_Components/styles/Bombas.styles";
import { GaleriaFotos } from "@/lib/interface";
import { useState } from "react";
import { FaChevronLeft } from "react-icons/fa6";
import { FaAngleRight } from "react-icons/fa6";

const Galeria = ({ images }: GaleriaFotos) => {
    const [mainImage, setMainImage] = useState<string>(images[0].images);
    const [currentIndex, setCurrentIndex] = useState<number>(0);

    const handleClick = (src: string, index: number) => {
        setMainImage(src);
        setCurrentIndex(index);
    };

    const handleNext = () => {
        const nextIndex = (currentIndex + 1) % images.length;
        setMainImage(images[nextIndex].images);
        setCurrentIndex(nextIndex);
    };

    const handlePrevious = () => {
        const prevIndex = (currentIndex - 1 + images.length) % images.length;
        setMainImage(images[prevIndex].images);
        setCurrentIndex(prevIndex);
    };

    return (
        <Bombas>
            <BombasImg>
                <ButtonLeft onClick={handlePrevious}>
                    <FaChevronLeft color="#ffff" />
                </ButtonLeft>
                <IMGPrincipal src={mainImage} />
                <ButtonRight onClick={handleNext}>
                    <FaAngleRight color="#ffff" />
                </ButtonRight>
                <DivImg>
                    {images.map((img, index) => (
                        <IMG
                            src={img.images}
                            key={img.id}
                            onClick={() => handleClick(img.images, index)}
                        />
                    ))}
                </DivImg>
            </BombasImg>
            <BombasInfo></BombasInfo>
        </Bombas>
    );
};

export default Galeria;
