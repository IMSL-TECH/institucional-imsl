import { ComponentPropsWithoutRef } from "react"


interface Props extends ComponentPropsWithoutRef<"section">{

}
export default function PageContent({className,children,id}:Props){

    return(
        <section id={id} className={`page-content ${className}`}>
            {children}
        </section>
    )
}