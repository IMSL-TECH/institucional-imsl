import { ComponentPropsWithoutRef, useState } from "react";
import icon_imsl from  "@/assets/icons/icon-imsl.png"


interface Props extends ComponentPropsWithoutRef<"header">{

}
export default function Header({className}:Props){

    const [isMenuOpen, setIsMenuOpen] = useState(false);

        // Mobile menu toggle
        const handleMenuToggle = () => {
            setIsMenuOpen(!isMenuOpen);
        };

    return(
        <header className={`s-header ${className}`}>

            <div className="header-logo">
                <a className="site-logo" href="index.html">
                    <img src={icon_imsl.src} alt="Homepage"/>
                </a>
            </div>

            <nav style={{"display":`${isMenuOpen ? "block":"none"}`}} className={`header-nav-wrap`}>
                <ul className="header-nav">
                    <li><a href="index.html" title="Home">Home</a></li>
                    <li><a href="about.html" title="About">About</a></li>
                    <li><a href="events.html" title="Services">Events</a></li>
                    <li><a href="contact.html" title="Contact us">Contact</a></li>	
                </ul>
            </nav>

            <a className={`header-menu-toggle ${isMenuOpen ? 'is-clicked' : ''}`} onClick={handleMenuToggle} href="#0"><span>Menu</span></a>

    </header> 
    )
}