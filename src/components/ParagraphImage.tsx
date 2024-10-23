import { ComponentPropsWithoutRef } from "react"
import Image from "next/image";

interface Props extends ComponentPropsWithoutRef<"p"> {
    imgPos: "left" | "right",
    imgSrc:string,
    imgHeight?:number,
    imgWidth?:number,
    alt:string,
    href?:string
}

export default function ParagraphImage({ className, children,imgPos,imgSrc,imgHeight,imgWidth,alt,href }: Props) {

    return (
        <p className={className} >
            <a href={href?href:"#"}>
                <Image width={imgWidth?imgWidth:120} height={imgHeight?imgHeight:120} className={`h-pull-${imgPos}`} alt={alt} src={imgSrc} />
            </a>
            {children}
            
        </p>
    )
}














