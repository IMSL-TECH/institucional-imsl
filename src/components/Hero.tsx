"use client"

import { Parallax, Background } from "react-parallax"
import HeroContent from "./HeroContent"
import heroBg from "@/assets/hero-bg-3000.jpg"

interface Props {
   
}

export default function Hero({ }: Props) {


    return (
        <Parallax strength={600} >
            <Background className='bg-hero-paralax-image' >
                <img src={heroBg.src} alt="Backgournd image home" />
            </Background>
            <HeroContent />
        </Parallax>
    )
}