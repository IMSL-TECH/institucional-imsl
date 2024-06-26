import React, { useCallback } from "react";

import Menu from "@/components/Menu";
import Button from "@/components/Button";
import Events from "@/components/Events";
import Footer from "@/components/Footer";
import SmoothScroll from "@/components/SmoothScroll";

import Image from "next/image";

import type { EventsType } from "@/types";
import { Inter } from "next/font/google";

import firstBanner from "@/assets/banner/firstBanner.png";

const inter = Inter({ subsets: ["latin"] });

import { getContentHome } from "@/utils/getContent";

type CommonCultsType = {
  title: string;
  date: string;
};

function CommonCults({ title, date }: CommonCultsType) {
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

  const renderCommonCults = useCallback(
    ({ title, date }: CommonCultsType, idx: number) => (
      <CommonCults title={title} date={date} key={idx} />
    ),
    []
  );

  const { videoBanner, title, welcomeEvents, events } = getContentHome();

  return (
    <main className={`flex min-h-screen flex-col bg-white ${inter.className}`}>
      <Menu />
      <section className="h-screen relative flex bg-black justify-center items-center">
        <div className="w-full h-full relative">
          <Image
            className="absolute bg-no-repeat bg-cover h-full w-full object-cover"
            src={firstBanner}
            alt="Primeira imagem do video banner"
          />
          <div className="relative p-0 w-full h-full overflow-hidden">
            <iframe
              src={videoBanner}
              allow="autoplay; fullscreen;"
              title="MSL-VÍDEO-BG_1"
            ></iframe>
          </div>
          <div className="w-full h-full absolute bg-gradient-to-b from-[#162a65] to-[#247377] top-0 opacity-30"></div>
        </div>

        <div className="absolute mt-32 xl:mt-0 xl:max-w-[80%] flex flex-col xl:flex-row justify-center gap-12 items-center">
          <h1 className="text-white w-52 text-center text-2xl sm:text-3xl md:text-4xl md:w-80 lg:w-64 lg:text-2xl xl:w-[36rem] xl:text-left xl:text-5xl">
            {title}
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
          {welcomeEvents.map(renderCommonCults)}
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
              As células são pensadas de forma estratégica para que você tenha
              um ambiente seguro para aprender mais sobre Deus e criar conexões
              saudáveis com os irmãos, especialmente se você é novo na fé e
              precisa ser discipulado. Junte-se a uma de nossas células,
              encontre a mais próxima de você!
            </div>
            <Button type={3} href="" width="mt-auto self-end w-full">
              Encontrar uma celula
            </Button>
          </div>
        </div>
      </section>
      <section className="gap-10 py-40 px-6 w-full items-center md:px-24 lg:px-10 flex flex-col justify-center">
        <h1 className="w-full text-center md:text-[30px] xl:text-[40px] max-w-screen-xl">
          Próximos eventos
        </h1>
        <div className="w-full max-w-[67rem] flex justify-center items-center flex-col gap-14">
          <div className="w-full grid grid-cols-1 xl:grid-cols-2 max-w-[640px] xl:max-w-none gap-10">
            {events.map(renderEvents)}
          </div>
          <Button width="max-w-[640px] w-full" href="/events" type={2}>
            Ver mais
          </Button>
        </div>
      </section>
      <Footer />
      <SmoothScroll />
    </main>
  );
}
