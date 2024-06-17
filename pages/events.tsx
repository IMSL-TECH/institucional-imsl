import Image from "next/image";

import Menu from "@/components/Menu";
import Footer from "@/components/Footer";
import SmoothScroll from "@/components/SmoothScroll";
import Events from "@/components/Events";

import { Inter } from "next/font/google";
import { useCallback } from "react";
import { EventsType } from "@/types";

import banner from "@/assets/banner/home_cover_resized.jpg"
const inter = Inter({ subsets: ["latin"] });

const events = [
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

export default function Event() {
  const renderEventList = useCallback(
    ({ title, href, children, info }: EventsType, idx: number) => {
      return (
        <Events key={idx} title={title} href={href} info={info}>
          {children}
        </Events>
      );
    },
    []
  );
  return (
    <main
      className={`flex min-h-screen flex-col items-center ${inter.className}`}
    >
      <Menu />
      <section className="h-[50vh] w-full flex justify-center items-center bg-black relative">
      <Image alt="Banner" src={banner} className="w-full h-full bg-no-repeat bg-contain bg-center object-cover"/>
        <p className="absolute bottom-16 whitespace-nowrap font-['Montserrat'] text-white text-center text-2xl sm:text-3xl md:text-4xl lg:text-3xl xl:text-6xl 2xl:text-8xl 2xl:bottom-28">
          Próximos eventos
        </p>
      </section>
      <section className="w-full py-8 px-8 sm:px-14 lg:px-20 sm:py-32 gap-14 flex flex-col max-w-7xl items-center">
        <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-10">
          {events.map(renderEventList)}
        </div>
      </section>

      <Footer />
      <SmoothScroll />
    </main>
  );
}
