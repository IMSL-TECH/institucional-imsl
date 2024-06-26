import Link from "next/link";
import Image from "next/image";

import type { SocialType } from "@/types";
import { useCallback } from "react";
import { getContentSocialMedia } from "@/utils/getContent";

const styles = {
  default: "border border-white",
  green: "bg-primary",
};

function LinksSocial({ href, alt, icon, name, style = "default" }: SocialType) {
  return (
    <Link href={href} target="_blank">
      <div className="flex items-center gap-5">
        <div className={`${styles?.[style]} p-3 rounded-full`}>
          <Image alt={alt} src={icon} />
        </div>

        <h1
          className={`text-sm text-white ${
            style === "green" ? "hidden" : "hidden xl:flex"
          }`}
        >
          {name}
        </h1>
      </div>
    </Link>
  );
}

export default function Social({
  style = "default",
}: {
  style?: "default" | "green";
}) {
  const social = getContentSocialMedia()

  const renderSocial = useCallback(
    ({ href, alt, icon, name }: SocialType, idx: number) => (
      <LinksSocial
        href={href}
        alt={alt}
        icon={icon}
        name={name}
        key={idx}
        style={style}
      />
    ),
    []
  );

  return (
    <div
      className={`flex items-center justify-center ${
        style === "green" ? "md:gap-16 gap-12" : "gap-5"
      } w-full h-full`}
    >
      {social.map(renderSocial)}
    </div>
  );
}
