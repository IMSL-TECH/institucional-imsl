import Image from "next/image";
import Button from "@/components/Button";
import MenuList from "@/components/MenuList";
import Social from "@/components/Social";

import logo from "../../assets/icons/logo-imsl-horizontal.png";

export default function Footer() {
  return (
    <section className="w-full">
      <div className="w-full h-16 bg-dark-green flex items-center justify-center">
        <Social />
      </div>
      <div className="flex flex-col items-center py-24 lg:px-10 px-8 bg-primary w-full">
        <div className="w-full max-w-[640px] xl:max-w-[70rem] flex flex-col xl:flex-row gap-8">
          <div className="w-full  xl:w-1/2 flex flex-col  items-center xl:items-start gap-5">
            <Image src={logo} alt="Logo Monte Sião" width={150} />
            <div className="text-white font-family-Lora opacity-75">
              Fundada em 2000 pelos pastores Fernando Pires e Leia Liberato,
              hoje é presidida e pastoreada pelo pastor Jucimar Ramos. A Monte
              Sião é uma igreja terapêutica, que se importa em pregar a as
              verdades contidas na Palavra de Deus, seguindo-a fielmente e
              buscando praticar todos os seus princípios. Venha cultuar a Deus
              conosco!
            </div>
          </div>
          <div className="flex flex-col xl:flex-row w-full xl:w-1/2 gap-8">
            <div className="flex flex-col gap-4 w-full xl:w-1/2">
              <h1 className="text-white mt-4 opacity-75">Localização</h1>
              <div className="text-white font-family-Lora opacity-75">
                Avenida Prefeito Samuel Batista Cruz, 8259
                Três Barras, Linhares - ES
              </div>
              <Button
                target="_blank"
                type={3}
                href="https://goo.gl/maps/v8Z37nrmEw78aCeh9"
              >
                Faça uma visita!
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
      </div>
    </section>
  );
}
