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
                        We Exist To <br/>
                        Honor God And <br/>
                        Make Disciples
                    </h1>

                    <div className="hero-content__buttons">
                        <a href="events.html" className="btn btn--stroke">Upcoming Events</a>
                        <a href="about.html" className="btn btn--stroke">About Us</a>
                    </div>
                </div> {/* <!-- end hero-content__text --> */}

            </div> {/* <!-- end hero-content --> */}

            <ul className="hero-social">
                <li className="hero-social__title">Follow Us</li>
                <li>
                    <a href="#0" title="">Facebook</a>
                </li>
                <li>
                    <a href="#0" title="">YouTube</a>
                </li>
                <li>
                    <a href="#0" title="">Instagram</a>
                </li>
            </ul> {/* <!-- end hero-social --> */}

            <div className="hero-scroll">
                <a onClick={(e) => handleSmoothScroll(e, '#styles')} className="scroll-link smoothscroll">
                    Scroll For More
                </a>
            </div> {/* <!-- end hero-scroll --> */}

        </section> 
    )
}