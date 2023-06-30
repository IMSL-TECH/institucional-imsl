import { useCallback, useState } from "react";
import Image from "next/image";
import Link from "next/link";

import MenuList from "./MenuList";

import logo from "../assets/icons/logoMSL.png";

const linesMenuHamburguer = [
  "transform rotate-45 translate-y-2 animate-spin-slow",
  "duration-[0s] animate-fade-out invisible",
  "transform -rotate-45 -translate-y-2 animate-spin-fast",
];

export default function Menu() {
  const [toggle, setToggle] = useState(false);
  const handleToggle = () => {
    setToggle(!toggle);
  };

  const renderMenuHamburguer = useCallback(
    (style: any, idx: number) => {
      return (
        <li
          className={`${idx === 2 && !toggle ? "w-5" : "w-6"} h-0.5 ${
            toggle ? style : ""
          } ${toggle ? "bg-black" : "bg-white"} duration-[0.5s]`}
          key={idx}
        />
      );
    },
    [toggle, linesMenuHamburguer]
  );

  return (
    <section className="flex w-screen px-12 pt-10 z-10 absolute justify-between">
      <div>
        <Link href="/" className="">
          <Image src={logo} alt="Logo Monte Sião" className="h-12 w-12" />
        </Link>
      </div>
      <div className="hidden md:flex">
        <MenuList className="text-white" />
      </div>

      <section className="flex md:hidden z-10">
        <ul
          className={`hamburger-btn flex-col gap-1.5 flex z-20 ${
            toggle
              ? "text-black fixed p-2 right-3 hover:bg-slate-200 rounded-md"
              : "text-white"
          }`}
          onClick={handleToggle}
        >
          {linesMenuHamburguer.map(renderMenuHamburguer)}
        </ul>
        <div
          className={`flex p-3 pt-28 fixed w-64 h-screen bg-white top-0 right-0 rounded-s-2xl bg-gray-200 transition-all ${
            toggle ? "" : "translate-x-full"
          } duration-300 transform  ease-in-out `}
        >
          <MenuList
            flexDirection="column"
            className="text-black md:text-white hover:!text-white"
            onClick={handleToggle}
          />
        </div>
      </section>
    </section>
  );
}
