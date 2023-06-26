import Image from "next/image";

import Menu from "@/components/Menu";
import Button from "@/components/Button";
import Footer from "@/components/Footer";
import SmoothScroll from "@/components/SmoothScroll";

import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main
      className={`flex min-h-screen items-center flex-col ${inter.className}`}
    >
      <Menu />
      <section className="h-[50vh] w-full flex justify-center items-center bg-black relative">
        <p className="absolute bottom-16 whitespace-nowrap font-['Montserrat'] text-white text-center text-2xl sm:text-3xl md:text-4xl lg:text-3xl xl:text-6xl 2xl:text-8xl 2xl:bottom-28">
          Entre em contato
        </p>
      </section>
      <section className="py-32 px-8 lg:px-10 max-w-screen-xl">
        <div className="flex flex-col gap-10">
          <p className="font-family-Lora capital-first-letter text-lg">
            Corrupti voluptas sed possimus odio cupiditate. Ut id nemo
            doloremque iusto voluptates placeat esse ut. Voluptatem saepe aut
            vel ut. Perferendis hic voluptates quibusdam animi quis est itaque.
            Atque delectus praesentium voluptas voluptas. Odio voluptatem
            facilis magni magnam quas aut quasi.
          </p>
          <p className="font-family-Lora text-lg">
            Nam est quae harum doloribus illum consequatur cupiditate quod rem.
            Error qui culpa. Porro cupiditate veniam assumenda nostrum eius.
            Tempore rerum eos. Est perferendis nesciunt corrupti quia sunt
            reprehenderit id autem. Quis in voluptates perspiciatis. Voluptatem
            saepe aut vel ut reprehenderit id perferendis
          </p>
        </div>

        <div className="mt-12 flex flex-col md:flex-row gap-10">
          <div className="w-full md:w-1/2">
            <h1>Localização</h1>
            <div>
              <p className="font-family-Lora text-lg">
                Igreja Monte Sião Linhares
              </p>
              <p className="font-family-Lora text-lg">
                Avenida Prefeito Samuel Batista Cruz
              </p>
              <p className="font-family-Lora text-lg">
                Três Barras, Linhares - ES
              </p>
            </div>
          </div>
          <div className="w-full md:w-1/2">
            <h1>Informação para contato</h1>
            <p className="font-family-Lora text-lg">@Montesiaolinhares</p>
            <p className="font-family-Lora text-lg">
              comunicacao.montesiao@gmail.com
            </p>
            <p className="font-family-Lora text-lg w-full">
              Telefone: (27) 3373-6313 - Horário para contato 13:30 às 17:30
            </p>

            <Button href="/" width="w-full" type={2}>
              Whatsapp
            </Button>
          </div>
        </div>
      </section>
      <Footer />
      <SmoothScroll />
    </main>
  );
}
