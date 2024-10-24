"use client"

import { ComponentPropsWithoutRef, useEffect, useState } from "react"
import logo_imsl_horizontal from "@/assets/icons/logo-imsl-horizontal.png"
import { handleSmoothScroll } from "@/utils";



interface Props extends ComponentPropsWithoutRef<"footer">{

}
export default function Footer({}:Props){

    const [isScrolled, setIsScrolled] = useState(false);

    // Back to top logic
    useEffect(() => {
        const pxShow = 500;
        const handleScroll = () => {
            if (window.scrollY >= pxShow) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);


    return(
        <footer className="s-footer">

        <div className="row footer-top">
            <div className="column large-4 medium-5 tab-full">
                <div className="footer-logo">
                    <a className="site-footer-logo" href="index.html">
                        <img src={logo_imsl_horizontal.src} alt="Homepage" />
                    </a>
                </div>  {/* <!-- footer-logo --> */}
                <p>
                Fundada em 2000 pelos pastores Fernando Pires e Leia Liberato, 
                hoje é presidida e pastoreada pelo pastor Jucimar Ramos. 
                A Monte Sião é uma igreja terapêutica, que se importa em pregar 
                a as verdades contidas na Palavra de Deus, seguindo-a fielmente 
                e buscando praticar todos os seus princípios. Venha cultuar 
                a Deus conosco!
                </p>
            </div>
            <div className="column large-half tab-full">
                <div className="row">
                    <div className="column large-7 medium-full">
                        <h4 className="h6">Our Location</h4>
                        <p>
                            Avenida Prefeito Samuel Batista Cruz, 8259 <br />
                            Três Barras, Linhares/ES <br />
                        </p>

                        <p>
                            <a href="https://goo.gl/maps/v8Z37nrmEw78aCeh9" target="_blank" className="btn btn--footer">Venha Conhecer</a>
                        </p>
                    </div>
                    <div className="column large-5 medium-full">
                        <h4 className="h6">Links Rápidos</h4>
                        <ul className="footer-list">
                            <li><a href="/">Home</a></li>
                            <li><a href="/about">Sobre</a></li>
                            <li><a href="/volunteering">Voluntariado</a></li>
                            <li><a href="/cells">Células</a></li>
                            <li><a href="/events">Programação</a></li>
                            <li><a href="/contact">Contato</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div> 

        <div className="row footer-bottom">
            <div className="column ss-copyright">
                <span>© Copyright Hesed 2019</span>
                <span>Design by <a href="https://www.styleshout.com/">StyleShout</a></span>
            </div>
        </div> {/* <!-- footer-bottom --> */}

        <div className={`ss-go-top ${isScrolled ? 'link-is-visible' : ''}`}>
            <a className="smoothscroll" title="Back to Top" href="#top" onClick={(e) => handleSmoothScroll(e, '#top')}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 0l8 9h-6v15h-4v-15h-6z" /></svg>
            </a>
        </div> {/* <!-- ss-go-top --> */}

    </footer>
    )
}