import { ComponentPropsWithoutRef } from "react"
import wheel_500 from "@/assets/wheel-500.jpg"
import wheel_1000 from "@/assets/wheel-1000.jpg"
import { getImageProps } from "next/image"

interface Props extends ComponentPropsWithoutRef<"picture"> {

}
export default function ResponsiveImage({}: Props) {

    const common = { alt: 'Art Direction Example', sizes: '100vw' }

    const { props: { srcSet: desktop } } = getImageProps({
        ...common,
        width: 1440,
        height: 875,
        quality: 80,
        src: wheel_500.src,
    })

    const {
        props: { srcSet: mobile, ...rest },
    } = getImageProps({
        ...common,
        width: 750,
        height: 1334,
        quality: 70,
        src: wheel_1000.src,
    })

    return (
        <picture>
            <source media="(min-width: 1000px)" srcSet={desktop} />
            <source media="(min-width: 500px)" srcSet={mobile} />
            <img {...rest} style={{ width: '100%', height: 'auto' }} />
        </picture>
    )
}