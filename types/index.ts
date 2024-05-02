import type { StaticImageData } from "next/image";

export type EventsType = {
  title: string;
  children: React.ReactNode;
  href: string;
  info: {
    date: string;
    time: string;
    address: string;
  };
};

export type UserInfoType = {
  image: StaticImageData;
  name: string;
  occupation: string;
  text: string;
};

export type TitleDescriptionType = {
  title: string;
  description: string;
};

export type SocialType = {
  icon: any;
  name: string;
  alt: string;
  href: string;
  style?: "default" | "green"
};
