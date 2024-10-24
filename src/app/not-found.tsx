import Link from "next/link";
import Image from "next/image";

import background from "@/assets/banner/mountain-background-web.png"
import error404 from "@/assets/icons/404.svg"
import PageContent from "@/components/pageContent";
import PageHeader from "@/components/PageHeader";


export default function Error(){
    return (
<>

       <PageHeader imgSrc="">
            Pagina não encontrada
       </PageHeader>
        <PageContent>
            
            <section className="row">

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
            </section>
            
           
         </PageContent>
         </>
    )
}