import { ComponentPropsWithoutRef } from "react"

interface Props extends ComponentPropsWithoutRef<"section">{

}
export default function SocialSection({}:Props){

    return(
        <section className="s-social">

        <div className="row social-content">
            <div className="column">
                <ul className="social-list">
                    <li className="social-list__item">
                        <a href="#0" title="">
                            <span className="social-list__icon social-list__icon--facebook"></span>
                            <span className="social-list__text">Facebook</span>
                        </a>
                    </li>
                    <li className="social-list__item">
                        <a href="#0" title="">
                            <span className="social-list__icon social-list__icon--twitter"></span>
                            <span className="social-list__text">Twitter</span>
                        </a>
                    </li>
                    <li className="social-list__item">
                        <a href="#0" title="">
                            <span className="social-list__icon social-list__icon--instagram"></span>
                            <span className="social-list__text">Instagram</span>
                        </a>
                    </li>
                    <li className="social-list__item">
                        <a href="#0" title="">
                            <span className="social-list__icon social-list__icon--email"></span>
                            <span className="social-list__text">Email</span>
                        </a>
                    </li>
                </ul>
            </div>
        </div> 

    </section> 
    )
}