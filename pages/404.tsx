import background from "../assets/banner/mountain-background-web.png"
import Social from "@/components/Social";
import Image from "next/image";

import error from "@/assets/icons/error.svg"
import error404 from "@/assets/icons/404.svg"
import Link from "next/link";

export default function Error404(){
    return (
    <main className="w-full h-screen gap-6 md:gap-10 flex flex-col items-center justify-center">
           <Image alt="error" className="md:w-80 w-40 bg-cover" src={error404}/>
           <p className="max-w-4xl md:text-2xl sm:px-14 px-10 text-center ">
                Não encontramos essa página
            </p>
            <Link href="/" className="uppercase flex items-center justify-center font-sans rounded-full w-60 h-10 text-white bg-primary">
                    Home 
            </Link>
            <div className="-z-10 fixed bottom-0 w-full h-[550px]">
                <Image alt="background under construction" className="w-full h-full bg-cover object-cover" src={background}/>
            </div>
    </main>
    )
}