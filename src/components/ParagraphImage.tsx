import { ComponentPropsWithoutRef } from "react"
import Image from "next/image";

interface Props extends ComponentPropsWithoutRef<"p"> {
    right?:boolean,
    imgSrc:string,
    imgHeight?:number,
    imgWidth?:number,
    alt:string,
    href?:string
}

export default function ParagraphImage({ className, children,right,imgSrc,imgHeight,imgWidth,alt,href }: Props) {

    return (
        <p className={className} >
            <a href={href?href:"#"}>
                <Image width={imgWidth?imgWidth:120} height={imgHeight?imgHeight:120} className={right? "h-pull-right" : "h-pull-left"} alt={alt} src={imgSrc} />
            </a>
            {children}
            
        </p>
    )
}














