import type { StaticImageData } from "next/image";

export interface EventsType {
  title: string;
  children: React.ReactNode;
  href: string;
  info: {
    date: string;
    time: string;
    address: string;
  };
}

export interface UserInfoType {
  image: StaticImageData;
  name: string;
  occupation: string;
  content: string;
  link?: {
    label: string;
    href: string;
  };
}

export interface TitleDescriptionType {
  title: string;
  description: string;
}

export interface SocialType {
  icon: StaticImageData;
  name: string;
  alt: string;
  href: string;
  style?: "default" | "green";
}

export interface MenuListLinksType {
  title: string;
  href: string;
  isSelected?: boolean;
  className?: string;
  onClick?: () => void;
}

export interface ButtonType {
  href: string;
  type?: 1 | 2 | 3;
  width?: string;
  target?: string;
  children?: React.ReactNode;
}

export interface MenuListType {
  active?: boolean;
  onClick?: () => void;
  className?: string;
  flexDirection?: "row" | "column";
}

export interface CommonCultsType {
  title: string;
  date: string;
};
