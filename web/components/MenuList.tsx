import { useCallback } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

type MenuListType = {
  title: string;
  href: string;
  isSelected?: boolean;
  className?: string;
  onClick?: () => void;
};

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
}: MenuListType) {
  const handleClick = () => {
    onClick ? onClick() : null;
  };

  return (
    <li onClick={handleClick} className="w-full">
      <Link
        href={href}
        className={`menuList w-full flex justify-center items-center h-full whitespace-nowrap uppercase font-sans hover:rounded-md p-1 ${
          className && className
        } ${isSelected && "!text-orange-600"} `}
      >
        {title}
      </Link>
    </li>
  );
}

export default function MenuList({
  onClick,
  className,
  flexDirection = "row",
}: {
  onClick?: () => void;
  className?: string;
  flexDirection?: "row" | "column";
}) {
  const router = useRouter();

  const renderList = useCallback(
    ({ title, href }: MenuListType, idx: number) => (
      <ListLinks
        key={idx}
        title={title}
        href={href}
        isSelected={href == router?.route}
        className={className}
        onClick={onClick}
      />
    ),
    [router?.route, className, onClick]
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
