import React, { useCallback } from "react";

import Menu from "@/components/Menu";
import Button from "@/components/Button";
import Events from "@/components/Events";
import Footer from "@/components/Footer";
import SmoothScroll from "@/components/SmoothScroll";

import type { EventsType } from "@/types";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

const events = [
  {
    title: "240 HORAS DE ORAÇÃO E ADORAÇÃO | AQUELES QUE ESPERAM",
    children:
      "Em sua 5ª edição, as 240 horas de oração e adoração é um evento focado em acessar o poder da unidade da igreja através de um ajuntamento santo por 10 dias ininterruptos. Na edição desse ano temos um novo tema, “AQUELES QUE ESPERAM”, onde trabalharemos o texto de Isaías 64:4 – “Desde os tempos antigos ninguém ouviu, nenhum ouvido percebeu, e olho nenhum viu outro Deus, além de ti, que trabalha para aqueles que nele esperam.”",
    href: "/",
    info: {
      date: "09 a 19 de maio",
      time: "18h",
      address: "Av. Prefeito Samuel Batista Cruz, Três Barras, 3593, Linhares – ES.",
    },
  },
  {
    title: "24 ANOS MONTE SIÃO LINHARES | ANO DO PROPÓSITO PERFEITO",
    children:
      "Neste ano nossa igreja completa 24 anos, entrando no ciclo do ano 25, o ANO DO PROPÓSITO PERFEITO! Estaremos reunidos para celebrarmos a Deus com alegria e gratidão por tudo que fez até aqui, entrando no novo ciclo com chave de ouro, na presença do único que é digno: Jesus! Venha participar conosco! “E sabemos que todas as coisas contribuem juntamente para o bem daqueles que amam a Deus, daqueles que são chamados segundo o seu propósito”. – Romanos 8:28",
    href: "/",
    info: {
      date: "09 de junho",
      time: "18h",
      address: "Av. Prefeito Samuel Batista Cruz, Três Barras, 3593, Linhares – ES.",
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
          <div className="relative p-0 w-full h-full overflow-hidden">
            <iframe
              src="https://player.vimeo.com/video/957949303?background=1&badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
              allow="autoplay; fullscreen;"
              title="MSL-VÍDEO-BG_1"
            ></iframe>
          </div>
          <div className="w-full h-full absolute bg-gradient-to-b from-[#162a65] to-[#247377] top-0 opacity-30"></div>
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
