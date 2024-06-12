import React, { useCallback } from "react";

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
  length?: number;
  idx?: number;
};

function CommonCults({
  title,
  date,
  address,
  length,
  idx = 0,
}: CommonCultsType) {
  return (
    <div className="w-full flex flex-col">
      <h2>{title}</h2>

      <div className="font-family-Lora sm:text-base">{date}</div>
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
  const commonCultsLength = commonCults.length;
  const renderCommonCults = useCallback(
    ({ title, date, address }: CommonCultsType, idx: number) => (
      <CommonCults
        title={title}
        date={date}
        address={address}
        key={idx}
        length={commonCultsLength}
        idx={idx}
      />
    ),
    []
  );

  return (
    <main className={`flex min-h-screen flex-col bg-white ${inter.className}`}>
      <Menu />
      <section className="h-screen relative flex justify-center items-center">
        <div className="w-full h-full relative">
          <Image
            src={banner}
            alt="Logo Monte Sião"
            className="bg-no-repeat bg-contain bg-center object-cover w-full h-full -z-10"
          />
          <div className="w-full h-full absolute bg-gradient-to-b from-[#162a65] to-[#247377] top-0 opacity-70"></div>
        </div>

        <div className="absolute mt-32 xl:mt-0 xl:max-w-[80%] flex flex-col xl:flex-row justify-center gap-12 items-center">
          <h1 className="text-white w-52 text-center text-2xl sm:text-3xl md:text-4xl md:w-80 lg:w-64 lg:text-2xl xl:w-[36rem] xl:text-left xl:text-5xl">
            CONHECENDO A DEUS E FAZENDO-O CONHECIDO
          </h1>
          <div className="flex flex-col px-10 md:px-0 justify-center items-center gap-2.5">
            <Button width="md:w-72 w-full" href="/events">
              Próximos eventos
            </Button>
            <Button width="md:w-72 w-full" href="/about">
              Quem nós somos
            </Button>
          </div>
        </div>
      </section>

      <section className="py-32 px-6 lg:px-10 flex flex-col xl:justify-center items-center gap-16">
        <div className="w-full flex flex-col items-center gap-[55px] max-w-screen-sm xl:max-w-[1330px]">
          <h1 className="w-full text-center md:text-[30px] xl:text-[40px]">
            Bem-vindo à igreja Monte Sião
          </h1>
          <div className="w-full font-family-Lora text-[26px] sm:text-[28px] text-justify">
            Somos uma igreja acolhedora, onde todas as pessoas são bem vindas.
            Cremos que Yahweh, o Deus de Abraão é soberano sobre todas as
            coisas, e confiamos plenamente Nele. Amamos a cidade de Linhares,
            onde fica nossa sede, e nosso coração arde por cumprir a missão que
            Jesus confiou em nossas mãos, cuidando de pessoas, conhecendo a Deus
            e fazendo-O conhecido!
          </div>
        </div>
        <div className="w-full h-full xl:max-w-[1330px] flex flex-col sm:flex-row items-center xl:items-start gap-5 max-w-screen-sm">
          {commonCults.map(renderCommonCults)}
        </div>
      </section>
      <section className="bg-primary flex justify-center py-40 px-6 xl:px-10">
        <div className="flex flex-col xl:flex-row xl:justify-center gap-10">
          <div className="gap-7 w-full xl:w-1/2 flex flex-col items-center xl:items-start max-w-screen-sm">
            <h1 className="text-white w-full">Voluntariado</h1>
            <div className="text-white text-lg font-family-Lora text-justify">
              Você pode ser voluntário em um de nossos ministérios! Os
              ministérios servem para servir a Igreja, as redes, as células e ao
              mundo com suas ferramentas, buscando o aperfeiçoamento delas em
              todos os sentidos possíveis, para servir cada vez melhor ao corpo
              de Jesus.
            </div>
            <Button type={3} href="" width="mt-auto self-end w-full">
              Quero participar
            </Button>
          </div>
          <div className="gap-7 w-full xl:w-1/2 flex flex-col max-w-screen-sm">
            <h1 className="text-white">Junte-se a uma célula</h1>
            <div className="text-white text-lg font-family-Lora text-justify">
              Officia earum at quia recusandae. Tempora beatae est aliquam
              fugiat sed et. Exercitationem vitae molestiae officia eos aut id
              ad. Et exercitationem quae perspiciatis mollitia. Laborum quasi
              inventore eaque quia non. Ipsa dignissimos ipsum nisi qui eos et
              iste magnam. Aut dolorum mollitia illum. Iste iure similique nobis
              fuga est amet.
            </div>
            <Button type={3} href="" width="mt-auto self-end w-full">
              Encontrar uma celula
            </Button>
          </div>
        </div>
      </section>
      <section className="gap-10 py-40 px-6 w-full items-center md:px-24 lg:px-10 flex flex-col justify-center">
        <h1 className="w-full flex justify-center max-w-screen-xl">
          Próximos eventos
        </h1>
        <div className="w-full max-w-[67rem] flex justify-center">
          <div className="w-full grid grid-cols-1 xl:grid-cols-2 max-w-[640px] xl:max-w-none gap-10">
            {events.map(renderEvents)}
          </div>
        </div>
      </section>
      <Footer />
      <SmoothScroll />
    </main>
  );
}
