import { useEffect, useState } from "react";
import { useDebounce } from "@/utils";

const animated = {
  active: "null",
  goTop: "-translate-y-16 opacity-0",
};

export default function SmoothScroll() {
  const [visible, setVisible] = useState("");

  const handleClick = (event: MouseEvent) => {
    event.preventDefault();

    const main = document.querySelector("main");
    main?.scrollIntoView({ behavior: "smooth" });

    setVisible(animated?.goTop);

    const voltarAoEstadoOriginal = useDebounce(() => {
      setVisible("");
    }, 501);

    voltarAoEstadoOriginal();
  };

  useEffect(() => {
    const handleScroll = () => {
      const screen = document.documentElement.scrollTop;
      if (visible === animated.goTop) {
        return null;
      } else {
        setVisible(screen > 250 ? animated?.active : "");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [visible]);

  return (
    <button
      className={`bg-black w-12 h-12 fixed right-6 bottom-6 rounded-lg duration-500 transform  ease-in-out ${
        visible ? visible : "opacity-0 translate-y-20"
      }`}
      onClick={(e) => {
        handleClick(e);
      }}
    ></button>
  );
}
