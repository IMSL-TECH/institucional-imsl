import Image from "next/image";

import Menu from "@/components/Menu";
import Footer from "@/components/Footer";
import SmoothScroll from "@/components/SmoothScroll";

import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className={`flex min-h-screen flex-col ${inter.className}`}>
      <Menu />
      <section className="h-[50vh] w-full bg-black"></section>
      <Footer />
      <SmoothScroll />
    </main>
  );
}
