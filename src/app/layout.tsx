import Header from "@/components/Header";
import "./globals.css";

import type { Metadata } from "next";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Igreja Monte Sião",
  description:
    "A Monte Sião é uma igreja terapêutica, que se importa em pregar a as verdades contidas na Palavra de Deus, seguindo-a fielmente e buscando praticar todos os seus princípios",
};



export default function RootLayout({children}: Readonly<{children: React.ReactNode;}>) {
  return (
    <html lang="pt-br">
      <body id="top" >
        <Header/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
