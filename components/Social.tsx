import facebook from "../assets/icons/social/icon-facebook.svg";
import instagram from "../assets/icons/social/icon-instagram.svg";
import email from "../assets/icons/social/icon-email.svg";

import Link from "next/link";
import Image from "next/image";

import type { SocialType } from "@/types";
import { useCallback } from "react";

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

const styles = {
  default: "border border-white",
  green: "bg-primary"
}

function LinksSocial({ href, alt, icon, name, style = "default" }: SocialType) {
    return (
      <Link href={href} target="_blank">
        <div className="flex items-center gap-5">
          <div className={`${styles?.[style]} p-3 rounded-full`}>
            <Image alt={alt} src={icon} />
          </div>
  
          <h1 className={`text-sm text-white ${style === "green" ? "hidden" : "hidden sm:flex"}`}>{name}</h1>
        </div>
      </Link>
    );
  }

export default function Social({style = "default"}: {style?: "default" | "green"}) {
    const renderSocial = useCallback(
        ({ href, alt, icon, name }: SocialType, idx: number) => (
          <LinksSocial href={href} alt={alt} icon={icon} name={name} key={idx} style={style}/>
        ),
        []
      );

  return (
    <div className={`flex items-center justify-center ${style === "green" ? "md:gap-16 gap-12" : "gap-5"} w-full h-full`}>{social.map(renderSocial)}</div>
  );
}