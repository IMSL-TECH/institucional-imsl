import { getContentEvents } from "@/utils/getContent";
import { Inter } from "next/font/google";

import Image from "next/image";
import Menu from "@/components/Menu";
import Footer from "@/components/Footer";
import SmoothScroll from "@/components/SmoothScroll";
import Events from "@/components/Events";

import type { EventsType } from "@/types";

import banner from "@/assets/banner/home_cover_resized.jpg";

const inter = Inter({ subsets: ["latin"] });

export default function Event() {
  const events = getContentEvents();

  return (
    <main
      className={`flex min-h-screen flex-col items-center ${inter.className}`}
    >
      <Menu />
      <section className="h-[50vh] w-full flex justify-center items-center bg-black relative">
        <Image
          alt="Banner"
          src={banner}
          className="w-full h-full bg-no-repeat bg-contain bg-center object-cover"
        />
        <p className="absolute bottom-16 whitespace-nowrap font-['Montserrat'] text-white text-center text-2xl sm:text-3xl md:text-4xl lg:text-3xl xl:text-6xl 2xl:text-8xl 2xl:bottom-28">
          Próximos eventos
        </p>
      </section>
      <section className="w-full py-8 px-6 md:px-24 lg:px-10 sm:py-32 flex justify-center">
        <section className="w-full max-w-[67rem] flex justify-center items-center flex-col gap-14">
          <div className="w-full grid grid-cols-1 xl:grid-cols-2 max-w-[640px] xl:max-w-none gap-10">
            {events.map(
              ({ title, href, children, info }: EventsType, idx: number) => {
                return (
                  <Events key={idx} title={title} href={href} info={info}>
                    {children}
                  </Events>
                );
              }
            )}
          </div>
        </section>
      </section>

      <Footer />
      <SmoothScroll />
    </main>
  );
}
