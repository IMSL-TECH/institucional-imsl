import Link from "next/link";
import Image from "next/image";
import { EventsType } from "@/types";

import clock from "../assets/icons/icon-time.svg";
import calendar from "../assets/icons/icon-calendar.svg";
import location from "../assets/icons/icon-location.svg";

export default function Events({ title, children, href, info }: EventsType) {
  return (
    <div className="w-full sm:min-w-[400px] flex flex-col gap-5">
      <Link href={href} className="text-xl sm:text-2xl font-semibold">
        {title}
      </Link>
      <div className="font-family-Lora text-base sm:text-xl">{children}</div>
      <div>
        <div className="font-['Montserrat'] border-solid py-4 pl-10 border-y-[1px] border-gray-200 uppercase font-semibold text-[11px] tracking-[.15rem] sm:text-[0.6rem] relative">
          <Image
            src={calendar}
            width={21}
            height={21}
            alt="Ícone de relógio"
            className="absolute left-2"
          />{" "}
          {info?.date}
        </div>
        <div className="font-['Montserrat'] border-solid py-4 pl-10 border-y-[1px] -mt-px border-gray-200 uppercase font-semibold text-[11px] tracking-[.15rem] sm:text-[0.6rem] relative">
          <Image
            src={clock}
            width={21}
            height={21}
            alt="Ícone de relógio"
            className="absolute left-2"
          />
          {info?.time}
        </div>
        <div className="font-['Montserrat'] border-solid py-4 pl-10 border-y-[1px] -mt-px border-gray-200 uppercase font-semibold text-[11px] tracking-[.15rem] sm:text-[0.6rem] relative">
          <Image
            src={location}
            width={21}
            height={21}
            alt="Ícone de relógio"
            className="absolute left-2"
          />
          {info?.address}
        </div>
      </div>
    </div>
  );
}
