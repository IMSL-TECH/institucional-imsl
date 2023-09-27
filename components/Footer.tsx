import { useCallback } from "react";

import Button from "./Button";
import MenuList from "./MenuList";
import Image from "next/image";

import logo from "../assets/icons/logoMS253x150-1.png";
import facebook from "../assets/icons/social/icon-facebook.svg";
import instagram from "../assets/icons/social/icon-instagram.svg";
import email from "../assets/icons/social/icon-email.svg";
import Link from "next/link";

import type { SocialType } from "@/types";

const social = [
  {
    icon: facebook,
    name: "facebook",
    alt: "Ícone do facebook",
    href: "https://pt-br.facebook.com/montesiao.linhares/",
  },
  {
    icon: instagram,
    name: "instagram",
    alt: "Ícone do instagram",
    href: "https://www.instagram.com/montesiaolinhares/",
  },
  {
    icon: email,
    name: "email",
    alt: "Ícone do email",
    href: "mailto:prakenia@gmail.com",
  },
];

function Social({ href, alt, icon, name }: SocialType) {
  return (
    <Link href={href} target="_blank">
      <div className="flex items-center gap-5 sm:w-40">
        <div className="border border-white p-3 rounded-full">
          <Image alt={alt} src={icon} />
        </div>

        <h1 className="text-sm text-white hidden sm:flex">{name}</h1>
      </div>
    </Link>
  );
}

export default function Footer() {
  const renderSocial = useCallback(
    ({ href, alt, icon, name }: SocialType, idx: number) => (
      <Social href={href} alt={alt} icon={icon} name={name} key={idx} />
    ),
    []
  );

  return (
    <section>
      <div className="w-full h-16 bg-dark-green flex items-center justify-center gap-5">
        {social.map(renderSocial)}
      </div>
      <div className="py-24 px-8 flex flex-col sm:flex-row lg:px-10 bg-primary gap-8">
        <div className="w-full sm:w-1/2 flex flex-col  items-center sm:items-start gap-5">
          <Image src={logo} alt="Logo Monte Sião" width={130} />
          <div className="text-white font-family-Lora opacity-75">
            Laborum ad explicabo. Molestiae voluptates est. Quisquam labore
            tenetur et assumenda voluptatibus a beatae. Rerum odio ducimus
            reprehenderit sit animi laborum nostrum dolorum animi voluptates est
            voluptatibus a beatae.
          </div>
        </div>
        <div className="flex flex-col xl:flex-row w-full sm:w-1/2 gap-8">
          <div className="flex flex-col gap-4 w-full xl:w-1/2">
            <h1 className="text-white mt-4 opacity-75">Localização</h1>
            <div className="text-white font-family-Lora opacity-75">
              Igreja Monte Sião Linhares Avenida Prefeito Samuel Batista Cruz
              Três Barras, Linhares - ES
            </div>
            <Button
              target="_blank"
              type={3}
              href="https://goo.gl/maps/v8Z37nrmEw78aCeh9"
            >
              Mapa
            </Button>
          </div>
          <div className="mt-4 xl:w-1/2 flex flex-col gap-5">
            <h1 className="text-white">LINKS</h1>
            <MenuList
              className="items-start text-white !justify-start !p-0 font-family-Lora opacity-75"
              flexDirection="column"
              active={false}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
