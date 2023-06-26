import Link from "next/link";
import { EventsType } from "@/types";

export default function Events({ title, children, href, info }: EventsType) {
  return (
    <div className="w-full sm:min-w-[400px] flex flex-col gap-5 max-w-[21.8rem] xl:max-w-[30.7rem] md:w-2/4 max-w-lg">
      <Link href={href} className="text-xl sm:text-2xl font-semibold">
        {title}
      </Link>
      <div className="font-family-Lora text-base sm:text-xl">{children}</div>
      <div>
        <div className="font-['Montserrat'] border-solid p-5 border-y-[1px] border-gray-200 uppercase font-semibold tracking-[.25rem] text-[0.6rem]">
          {info?.date}
        </div>
        <div className="font-['Montserrat'] border-solid p-5 border-y-[1px] -mt-px border-gray-200 uppercase font-semibold tracking-[.25rem] text-[0.6rem]">
          {info?.time}
        </div>
        <div className="font-['Montserrat'] border-solid p-5 border-y-[1px] -mt-px border-gray-200 uppercase font-semibold tracking-[.25rem] text-[0.6rem]">
          {info?.address}
        </div>
      </div>
    </div>
  );
}
