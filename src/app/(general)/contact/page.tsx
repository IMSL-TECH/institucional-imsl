
import Image from "next/image";
import Button from "@/components/base/Button";

import whatsapp from "@/assets/icons/whatsapp_white.png";
import banner from "@/assets/banner/home_cover_resized.jpg"


export default function Home() {
  return (
    <>
      <section className="h-[50vh] w-full flex justify-center items-center bg-black relative">
        <Image alt="Banner" src={banner} className="w-full h-full bg-no-repeat bg-contain bg-center object-cover" />
        <p className="absolute bottom-16 whitespace-nowrap font-['Montserrat'] text-white text-center text-2xl sm:text-3xl md:text-4xl lg:text-3xl xl:text-6xl 2xl:text-8xl 2xl:bottom-28">
          Entre em contato
        </p>
      </section>
      <section className="py-32 flex flex-col items-center px-6 sm:px-14 lg:px-20 w-full">
        <div className="flex flex-col w-full max-w-screen-sm xl:max-w-[67rem] gap-10">
          <p className="font-family-Lora text-lg text-justify">
            Estamos aqui para servir você! Se você deseja saber mais sobre a nossa igreja, tirar dúvidas,
            compartilhar um pedido de oração ou simplesmente conversar, não hesite em nos contatar.
            Acreditamos que cada pessoa é única e preciosa aos olhos de Deus,
            e queremos caminhar junto com você em sua jornada de fé.
          </p>
        </div>

        <div className="mt-12 max-w-screen-sm xl:max-w-[67rem] w-full flex flex-col xl:flex-row gap-10">
          <div className="w-full xl:w-1/2">
            <h1 className="mb-4">Localização</h1>
            <div>
              <p className="font-family-Lora text-base sm:text-lg">
                Igreja Monte Sião Linhares
              </p>
              <p className="font-family-Lora text-base sm:text-lg">
                Avenida Prefeito Samuel Batista Cruz, 8259
              </p>
              <p className="font-family-Lora text-base sm:text-lg">
                Três Barras, Linhares - ES
              </p>
            </div>
          </div>
          <div className="w-full xl:w-1/2">
            <h1 className="mb-4">Informação para contato</h1>
            <p className="font-family-Lora text-base sm:text-lg">
              @Montesiaolinhares
            </p>
            <p className="font-family-Lora text-base sm:text-lg">
              comunicacao.montesiao@gmail.com
            </p>
            <p className="font-family-Lora text-base sm:text-lg w-full">
              Telefone: (27) 3373-6313 - Horário para contato 13:30 às 17:30
            </p>

            <Button
              target="_blank"
              href="https://wa.me/5527999280013"
              width="w-full mt-4"
              type={2}
            >
              <Image
                src={whatsapp}
                alt="Ícone Whatsapp"
                width={30}
                className="mr-3"
              />
              Whatsapp
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
