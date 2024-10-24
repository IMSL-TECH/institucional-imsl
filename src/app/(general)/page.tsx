import Image from "next/image";
import Button from "@/components/base/Button";
import Events from "@/components/Events";


import { getContentHome } from "@/utils/getContent";

import type { EventsType, CommonCultsType } from "@/types";

import firstBanner from "@/assets/banner/firstBanner.png";
import Hero from "@/components/Hero";
import PageContent from "@/components/pageContent";


function CommonCults({ title, date }: CommonCultsType) {
  return (
    <div className="w-full flex flex-col">
      <h2>{title}</h2>

      <div className="font-family-Lora sm:text-base">{date}</div>
    </div>
  );
}

export default function Home() {
  const { videoBanner, title, welcomeEvents, events } = getContentHome();

  return (
    <>
      <Hero/>

      <section id="about" className="s-about">

        <div className="row row-y-center about-content">

            <div className="column large-half medium-full">
                <h2 className="">Bem vindo a Monte Sião</h2>
                <p className=""> 
                Somos uma igreja acolhedora, onde todas as pessoas são bem vindas.
                Cremos que Yahweh, o Deus de Abraão é soberano sobre todas as
                coisas, e confiamos plenamente Nele. Amamos a cidade de Linhares,
                onde fica nossa sede, e nosso coração arde por cumprir a missão que
                Jesus confiou em nossas mãos, cuidando de pessoas, conhecendo a Deus
                e fazendo-O conhecido!
                </p>
                <a href="/about" className="btn btn--primary h-full-width">Mais sobre nós</a>
            </div>

            <div className="column large-half medium-full">
                <ul className="about-sched">
                    <li>
                        <h4>Culto Principal</h4>
                        <p>
                        Domingo - 18:00 <br/>
                        </p>
                    </li>
                    <li>
                        <h4>Oração</h4>
                        <p>
                        Todos os dias - 06:00 | 18:00  <br/>
                        </p>
                    </li>
                    <li>
                        <h4>Cura Interior</h4>
                        <p>
                        Quarta-Feira - 19:30 | Sábado - 14:00<br/>
                        </p>
                    </li>
                </ul> 
            </div>

        </div> 

      </section>
      <section className="s-connect">

        <div className="row connect-content">
            <div className="column large-half tab-full">
                <h3 className="display-1">Voluntariado.</h3>
                <p>
                Você pode ser voluntário em um de nossos ministérios! Os
              ministérios servem para servir a Igreja, as redes, as células e ao
              mundo com suas ferramentas, buscando o aperfeiçoamento delas em
              todos os sentidos possíveis, para servir cada vez melhor ao corpo
              de Jesus.
                </p>

                <a href="/volunteering" className="btn btn--white h-full-width">Quero participar</a>
            </div>
            <div className="column large-half tab-full">
                <h3 className="display-1">Junte-se a uma célula.</h3>
                <p>
                As células são pensadas de forma estratégica para que você tenha
              um ambiente seguro para aprender mais sobre Deus e criar conexões
              saudáveis com os irmãos, especialmente se você é novo na fé e
              precisa ser discipulado. Junte-se a uma de nossas células,
              encontre a mais próxima de você!
                </p>

                <a href="/cells" className="btn btn--white h-full-width">Encontrar uma celula</a>
            </div>
        </div>

    </section>
    <section className="s-events">

        <div className="row events-header">
            <div className="column">
                <h2 className="display-1 ">Próximos Eventos</h2>
            </div>
        </div> 

        <div className="row block-large-1-2 block-900-full events-list">

            <div className="column events-list__item">
                <h3 className="events-list__item-title">
                    <a href="/events/240h-adoracao-2024" title="">240 HORAS DE ORAÇÃO E ADORAÇÃO</a>
                </h3>
                <p>
                Em sua 5ª edição, as 240 horas de oração e adoração é um evento focado em acessar 
                o poder da unidade da igreja através de um ajuntamento santo por 10 dias ininterruptos.
                Na edição desse ano temos um novo tema, <strong>“AQUELES QUE ESPERAM”</strong>, onde trabalharemos o 
                texto de Isaías 64:4 <em> – “Desde os tempos antigos ninguém ouviu, nenhum ouvido percebeu, 
                e olho nenhum viu outro Deus, além de ti, que trabalha para aqueles que nele esperam.”</em>
                </p>
                <ul className="events-list__meta">
                    <li className="events-list__meta-date">Saturday, September 28, 2019</li>
                    <li className="events-list__meta-time">8:00AM - 5:30PM</li>
                    <li className="events-list__meta-location">1600 Amphitheatre Parkway, Mt. View</li>
                </ul>
            </div>

            <div className="column events-list__item">
                <h3 className="events-list__item-title">
                    <a href="/events/aniversario-monte-siao-24" title="">24 ANOS MONTE SIÃO LINHARES</a>
                </h3>
                <p>
                Neste ano nossa igreja completa 24 anos, entrando no ciclo do ano 25, 
                o ANO DO PROPÓSITO PERFEITO! Estaremos reunidos para celebrarmos a Deus com alegria e 
                gratidão por tudo que fez até aqui, entrando no novo ciclo com chave de ouro, 
                na presença do único que é digno: Jesus! Venha participar conosco! “E sabemos que 
                todas as coisas contribuem juntamente para o bem daqueles que amam a Deus, daqueles 
                que são chamados segundo o seu propósito”. – Romanos 8:28
                </p>
                <ul className="events-list__meta">
                    <li className="events-list__meta-date">Saturday, July 27, 2019</li>
                    <li className="events-list__meta-time">6:00PM - 8:30PM</li>
                    <li className="events-list__meta-location">1600 Amphitheatre Parkway, Mt. View</li>
                </ul>
            </div> 

        </div>
        <div className="row events-header">
            <div className="column">
                <a className="btn btn--primary ">Ver mais</a>
            </div>
        </div> 
    </section>     
   </>
  );
}
