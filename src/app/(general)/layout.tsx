import localFont from "next/font/local";
import { Inter } from "next/font/google";

import "../globals.css";

import type { Metadata } from "next";
import SmoothScroll from "@/components/SmoothScroll";
import Footer from "@/components/Footer";
import Menu from "@/components/Menu";

const geistSans = localFont({
  src: "../fonts/GeistMonoVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "../fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Igreja Monte Sião",
  description:
    "A Monte Sião é uma igreja terapêutica, que se importa em pregar a as verdades contidas na Palavra de Deus, seguindo-a fielmente e buscando praticar todos os seus princípios",
};

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`} >
        <main className={`flex min-h-screen w-full flex-col items-center bg-white ${inter.className}`}>
          <Menu />
          {children}
          <Footer />
          <SmoothScroll />
        </main>
      </body>
    </html>
  );
}
