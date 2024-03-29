import { useCallback } from "react";

import Image from "next/image";
import Menu from "@/components/Menu";
import Button from "@/components/Button";
import Events from "@/components/Events";
import Footer from "@/components/Footer";
import SmoothScroll from "@/components/SmoothScroll";

import type { EventsType } from "@/types";
import { Inter } from "next/font/google";

import banner from "../assets/banner/IMG_1416.jpg";

const inter = Inter({ subsets: ["latin"] });

const events = [
  {
    title: "Confirenci das crianças de 2019",
    children:
      "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum",
    href: "/",
    info: {
      date: "Sabado 27 de novembro",
      time: "8:00AM - 5:30PM",
      address: "8317, Av. Prefeito Samuel Batista Cruz, 8259 - Três Barras,",
    },
  },
  {
    title: "Confirencia das crianças de 2019",
    children:
      "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum",
    href: "/",
    info: {
      date: "Sabado 27 de novembro",
      time: "8:00AM - 5:30PM",
      address: "8317, Av. Prefeito Samuel Batista Cruz, 8259 - Três Barras,",
    },
  },
  {
    title: "Confirencia das crianças de 2019",
    children:
      "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum",
    href: "/",
    info: {
      date: "Sabado 27 de novembro",
      time: "8:00AM - 5:30PM",
      address: "8317, Av. Prefeito Samuel Batista Cruz, 8259 - Três Barras,",
    },
  },
  {
    title: "Confirencia das crianças de 2019",
    children:
      "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum",
    href: "/",
    info: {
      date: "Sabado 27 de novembro",
      time: "8:00AM - 5:30PM",
      address: "8317, Av. Prefeito Samuel Batista Cruz, 8259 - Três Barras,",
    },
  },
];

const commonCults = [
  {
    title: "Culto principal",
    date: "Domingo - 18h - 20:30h",
    address:
      "8317, Av. Prefeito Samuel Batista Cruz, 8259 - Três Barras, Linhares - ES",
  },
  {
    title: "Horários de oração",
    date: "Todos os dias - 6h | 18h",
    address:
      "8317, Av. Prefeito Samuel Batista Cruz, 8259 - Três Barras, Linhares - ES",
  },
  {
    title: "Cura interior",
    date: "Quarta-feira - 19:30h | Sábado - 14h",
    address:
      "8317, Av. Prefeito Samuel Batista Cruz, 8259 - Três Barras, Linhares - ES",
  },
];

type CommonCultsType = {
  title: string;
  date: string;
  address: string;
};

function CommonCults({ title, date, address }: CommonCultsType) {
  return (
    <div className="w-full gap-4 flex flex-col">
      <h1>{title}</h1>
      <div>
        <div className="font-family-Lora sm:text-base">{date}</div>
        <div className="font-family-Lora sm:text-base">{address}</div>
      </div>
    </div>
  );
}

export default function Home() {
  const renderEvents = useCallback(
    ({ title, href, children, info }: EventsType, idx: number) => (
      <Events info={info} href={href} title={title} key={idx}>
        {children}
      </Events>
    ),
    []
  );

  const renderCommonCults = useCallback(
    ({ title, date, address }: CommonCultsType, idx: number) => (
      <CommonCults title={title} date={date} address={address} key={idx} />
    ),
    []
  );

  return (
    <main className={`flex min-h-screen flex-col bg-white ${inter.className}`}>
      <Menu />
      <section className="h-screen relative flex justify-center bg-black items-center">
        <Image
          src={banner}
          alt="Logo Monte Sião"
          className="bg-no-repeat bg-contain bg-center object-cover w-full h-full"
        />
        <div className="absolute xl:max-w-[80%] sm:bottom-12 flex flex-col xl:flex-row justify-center gap-12 items-center">
          <h1 className="text-white w-52 text-center text-2xl sm:text-3xl md:text-4xl md:w-80 lg:w-64 lg:text-3xl xl:w-[36rem] xl:text-left xl:text-6xl">
            CONHECENDO A DEUS E FAZENDO-O CONHECIDO
          </h1>
          <div className="flex flex-col justify-center items-center gap-2.5">
            <Button width="w-60 min-[320px]:w-72" href="/events">
              Próximos eventos
            </Button>
            <Button width="w-60 min-[320px]:w-72" href="/about">
              Quem nós somos
            </Button>
          </div>
        </div>
      </section>

      <section className="py-32 px-8 sm:px-14 lg:px-20 flex flex-col xl:flex-row xl:justify-center items-center gap-16">
        <div className="w-full xl:w-6/12 flex flex-col items-center gap-10 max-w-screen-sm">
          <h1 className="w-full">Bem-vindo a igreja Monte Sião</h1>
          <div className="w-full font-family-Lora text-2xl sm:text-3xl">
          Somos uma igreja acolhedora, onde todas as pessoas são bem-vindas, cremos que Yahweh, o Deus de Abraão é soberano sobre todas as coisas, e confiamos plenamente Nele. Amamos a cidade de Linhares, onde fica nossa sede, e nosso coração arde por cumprir a missão que Jesus confiou em nossas mãos, cuidando de pessoas, conhecendo a Deus e fazendo-O conhecido!
          </div>
          <Button href="/about" width="w-full" type={2}>
            Quem nós somos
          </Button>
        </div>
        <div className="w-full h-full xl:w-6/12 flex flex-col items-center xl:items-start gap-16 max-w-screen-sm">
          {commonCults.map(renderCommonCults)}
        </div>
      </section>
      <section className="bg-primary w-full flex justify-center py-40 px-8 sm:px-14 lg:px-20">
        <div className="flex flex-col lg:flex-row lg:justify-center gap-10">
          <div className="gap-7 w-full flex flex-col items-center lg:items-start max-w-screen-sm">
            <h1 className="text-2xl text-white w-full">Voluntáriado</h1>
            <div className="text-white font-family-Lora">
            Você pode ser voluntário em um de nossos ministérios! Os ministérios têm o objetivo de servir a Igreja, as redes, as células e ao mundo com suas ferramentas, buscando o aperfeiçoamento delas em todos os sentidos possíveis, para servir cada vez melhor ao corpo de Jesus.
            </div>
            <Button type={3} href="" width="mt-auto self-end w-full">
              Quero participar
            </Button>
          </div>
          <div className="gap-7 w-full flex flex-col max-w-screen-sm">
            <h1 className="text-2xl text-white">Junte-se a uma célula</h1>
            <div className="text-white font-family-Lora">
            Você pode se conectar conosco através de uma de nossas células! As células são grupos menores de estudos feito nas casas dos irmãos, uma ferramenta dada por Deus para mantermos a unidade do Corpo fluindo enquanto estudamos a Palavra. Encontre a célula mais próxima de você:
            LINK PARA O ZAP DA COMUNICAÇÃO COM MENSAGEM: “QUERO PARTICIPAR DE UMA CELULA”

            </div>
            <Button type={3} href="https://wa.me/5527999280013?text=QUERO PARTICIPAR DE UMA CELULA!!" width="mt-auto self-end w-full">
              Encontrar uma celula
            </Button>
          </div>
        </div>
      </section>
      <section className="gap-10 py-40 w-full items-center p-8 sm:px-14 lg:px-20 flex flex-col justify-center">
        <h1 className="w-full flex justify-center max-w-screen-xl">
          Próximos eventos
        </h1>
        <div className="w-full max-w-7xl">
          <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-10">
            {events.map(renderEvents)}
          </div>
        </div>
      </section>
      <Footer />
      <SmoothScroll />
    </main>
  );
}
