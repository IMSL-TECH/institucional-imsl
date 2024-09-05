import Social from "@/components/Social";
import Image from "next/image";

import background from "@/assets/banner/mountain-background-web.png"


export default function underConstruction(){
    return (
        <section className="w-full h-screen gap-14 flex flex-col items-center justify-center">
           <p className="px-4 py-2 font-light text-white uppercase rounded-2xl text-2xl md:text-4xl bg-primary">Em construção</p>
           <p className="max-w-4xl md:text-2xl sm:px-14 px-10 text-justify ">
                Estamos trabalhando para trazer um novo site para você. 
                Em breve, teremos novidades! Enquanto isso, acompanhe nossas 
                redes sociais ou entre em contato conosco para mais informações
                sobre tudo que acontece na nossa igreja.
            </p>
            <div className="h-14"><Social style="green"/> </div>
            
            <div className="-z-10 fixed bottom-0 w-full h-[550px]">
                <Image alt="background under construction" className="w-full h-full bg-cover object-cover" src={background}/>
            </div>
        </section>
    )
}