"use client";

import { useCallback } from "react";
import { usePathname } from 'next/navigation'

import Link from "next/link";

import type { MenuListLinksType, MenuListType } from "@/types";

const menuList = [
  { title: "Home", href: "/" },
  { title: "Sobre", href: "/about" },
  { title: "Agenda", href: "/events" },
  { title: "Entre em contato", href: "/contact" },
];

function ListLinks({
  href,
  title,
  onClick,
  isSelected,
  className,
}: MenuListLinksType) {
  const handleClick = () => {
    onClick ? onClick() : null;
  };

  return (
    <li onClick={handleClick} className="w-full">
      <Link
        href={href}
        className={`menuList w-full flex justify-center items-center h-full whitespace-nowrap uppercase font-sans hover:rounded-md p-1 ${
          className && className
        } ${isSelected && "!text-light-green"} `}
      >
        {title}
      </Link>
    </li>
  );
}

export default function MenuList({
  active = true,
  onClick,
  className,
  flexDirection = "row",
}: MenuListType) {
  const pathname = usePathname();

  const renderList = useCallback(
    ({ title, href }: MenuListLinksType, idx: number) => (
      <ListLinks
        key={idx}
        title={title}
        href={href}
        isSelected={href == pathname && active}
        className={className}
        onClick={onClick}
      />
    ),
    [pathname, className, onClick, active]
  );

  return (
    <nav className="w-full">
      <ul
        className={`flex gap-2.5 ${
          flexDirection === "row" ? "flex-row" : "flex-col"
        }`}
      >
        {menuList.map(renderList)}
      </ul>
    </nav>
  );
}
