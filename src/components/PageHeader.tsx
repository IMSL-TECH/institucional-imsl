import { url } from "inspector"
import { ComponentPropsWithoutRef } from "react"


interface Props extends ComponentPropsWithoutRef<"section">{
    imgSrc:string

}
export default function PageHeader({children,imgSrc}:Props){

    return(
        <section className="page-header" style={{ backgroundImage: `url(${imgSrc})` }}>

        <div className="gradient-overlay"></div>
        <div className="row page-header__content">
            <div className="column">
                <h1>{children}</h1>
            </div>
        </div>

    </section>
    )
}










