import { handleSmoothScroll } from "@/utils"
import { ComponentPropsWithoutRef } from "react"


interface Props extends ComponentPropsWithoutRef<"section">{

}
export default function HeroContent({}:Props){


    return(
        <section className="s-hero">

            <div className="hero-left-bar"></div>

            <div className="row hero-content">

                <div className="column large-full hero-content__text">
                    <h1>
                        Conhecendo <br/>
                        a Deus e fazendo-o <br/>
                        conhecido
                    </h1>

                    <div className="hero-content__buttons">
                        <a href="/events" className="btn btn--stroke">Próximos Eventos</a>
                        <a href="/about" className="btn btn--stroke">Sobre nós</a>
                    </div>
                </div> {/* <!-- end hero-content__text --> */}

            </div> {/* <!-- end hero-content --> */}

            <ul className="hero-social">
                <li className="hero-social__title">Siga-nos</li>
                <li>
                    <a href="https://www.instagram.com/montesiaolinhares/" title="">Instagram</a>
                </li>
                <li>
                    <a href="https://www.youtube.com/c/MonteSi%C3%A3oLinhares" title="">YouTube</a>
                </li>
                <li>
                    <a href="https://pt-br.facebook.com/montesiao.linhares/" title="">Facebook</a>
                </li>
               
            </ul> {/* <!-- end hero-social --> */}

            <div className="hero-scroll">
                <a onClick={(e) => handleSmoothScroll(e, '#about')} className="scroll-link smoothscroll">
                    Ver mais...
                </a>
            </div> {/* <!-- end hero-scroll --> */}

        </section> 
    )
}