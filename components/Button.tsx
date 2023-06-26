const styleButton = {
  1: {
    style: "border border-white text-white hover:text-black hover:bg-white",
  },
  2: { style: "bg-[#2d8c90] hover:bg-[#247376] text-white" },
  3: { style: "bg-white hover:shadow-md text-black" },
};

export default function Button({
  href,
  type = 1,
  width,
  target,
  children,
}: {
  href: string;
  type?: 1 | 2 | 3;
  width?: string;
  target?: string;
  children?: React.ReactNode;
}) {
  return (
    <button className={`h-12 xl:h-16 ${width && width}`}>
      <a
        href={href}
        className={`uppercase rounded-lg tracking-[.10em] min-[320px]:text-xs min-[320px]:tracking-[.20em] flex p-5 font-medium ${styleButton?.[type]?.style} justify-center items-center flex w-full h-full text-sm`}
        target={target ? target : ""}
      >
        {children}
      </a>
    </button>
  );
}
