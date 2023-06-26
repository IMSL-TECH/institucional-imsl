import Image from "next/image";
import { Inter } from "next/font/google";

import Menu from "@/components/Menu";
import Footer from "@/components/Footer";
import SmoothScroll from "@/components/SmoothScroll";

import { useCallback } from "react";

import Jucimar from "@/assets/user/FOTO JUCIMAR RAMOS.jpg";
import Berenice from "@/assets/user/62223956_1887020474731459_3011400726186833414_n.webp";

import type { StaticImageData } from "next/image";

const inter = Inter({ subsets: ["latin"] });

type UserInfoType = {
  image: StaticImageData;
  name: string;
  occupation: string;
  text: string;
};

const userInfoList = [
  {
    name: "Jucimar Ramos",
    image: Jucimar,
    occupation: "Pastor presidente",
    text: "Laudantium cumque pariatur doloribus et molestias. Natus et voluptas consequuntur quo. Ut eos neque nostrum fugiat impedit. Deserunt qui vitae quidem. Aut laudantium veniam omnis sed ullam quo.",
  },
  {
    name: "Berenice Peres",
    image: Berenice,
    occupation: "Pastora",
    text: "Laudantium cumque pariatur doloribus et molestias. Natus et voluptas consequuntur quo. Ut eos neque nostrum fugiat impedit. Deserunt qui vitae quidem. Aut laudantium veniam omnis sed ullam quo.",
  },
];

function UserInfo({ image, name, occupation, text }: UserInfoType) {
  return (
    <div>
      <div className="flex gap-4 mb-4">
        <Image
          src={image}
          alt="Logo Monte Sião"
          width={80}
          height={80}
          className="rounded-full"
        />
        <div>
          <h1 className="text-1xl w-full normal-case mb-2">{name}</h1>
          <div>{occupation}</div>
        </div>
      </div>

      <div>{text}</div>
    </div>
  );
}

export default function Jose() {
  const renderUserList = useCallback(
    ({ name, image, occupation, text }: UserInfoType, idx: number) => (
      <UserInfo
        name={name}
        image={image}
        occupation={occupation}
        text={text}
        key={idx}
      />
    ),
    [userInfoList]
  );

  return (
    <main className={`flex min-h-screen flex-col ${inter.className}`}>
      <Menu />
      <section className="h-[50vh] w-full bg-black">
        {/* <Image src={}></Image> */}
      </section>
      <section className="w-full p-8 py-20 sm:py-32 gap-14 flex flex-col items-center">
        <div className="font-family-Lora text-2xl sm:text-3xl w-full">
          Em tempos de grande confusão no mundo, não há nada mais importante
          para alguém que quer viver em serenidade do que saber quem é e o que
          está fazendo neste mundo, pois tudo fica mais fácil a partir desta
          premissa: <b>“Eu sei quem sou e sei o que vim fazer neste mundo!”</b>.
          Nós somos a Igreja Apostólica Monte Sião em Linhares.
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div>
            <h1 className="mb-3">Somos Igreja</h1>
            <div className="font-family-Lora text-lg">
              Porque a palavra Igreja fala de uma comunidade que se une e se
              congrega ao redor do nome de Jesus, <b>somos Igreja</b> porque
              amamos a Jesus e amamos uns aos outros buscando viver juntos para
              servir a Deus através de Jesus e para servirmos uns aos outros,
              pois é isto que significa ser IGREJA.
            </div>
          </div>
          <div>
            <h1 className="mb-3">Somos Apostólica</h1>
            <div className="font-family-Lora text-lg">
              Porque a palavra “Apostólica” significa que acreditamos na
              doutrina Apostólica e buscamos viver a vida prática como igreja na
              forma que os Apóstolos de Jesus ensinaram e viveram.
              <b> Somos Apostólica</b> porque rejeitamos a religiosidade e o
              tradicionalismo como base para vida cristã, e buscamos praticar de
              forma efetiva aquilo que Jesus, através de seus Apóstolos, nos
              ensinou a viver.<b> Somos uma Igreja Apostólica.</b>
            </div>
          </div>
          <div>
            <h1 className="mb-3">Somos Monte Sião</h1>
            <div className="font-family-Lora text-lg">
              Porque O Monte Sião é a verdadeira origem da cristandade, é de
              Sião que vem a lei e a verdade que Deus fez se espalhar pela
              Terra. O Monte Sião é sinônimo de Israel e de Jerusalém, onde toda
              a revelação do Deus de Abraão começou e se desenvolveu até chegar
              ao seu clímax na cruz.<b> Somos Monte Sião</b> porque recusamos a
              ideia de a cultura e a tradição ocidental substituir a cultura
              judaica e a forma de cultuar ao Deus de Abraão, e aceitamos
              aprender com o povo que nos deu as escrituras, os patriarcas, os
              profetas, os apóstolos e até o próprio Messias, o Cristo.
              <b> Somos Monte Sião</b>
              porque quase todos os escritores bíblicos são judeus e tudo nos
              veio do Monte Sião.
            </div>
          </div>
          <div>
            <h1 className="mb-3">Somos Linhares</h1>
            <div className="font-family-Lora text-lg">
              Porque o Senhor Deus todo poderoso, que sabe de todas as coisas e
              que tem um certo propósito definido para cada uma de suas
              criaturas, nos levantou nesta cidade e nos comissionou para a
              partir daqui mudar a nossa História, influenciando nossa geração a
              partir de um relacionamento com Deus que nos faz ser pessoas
              melhores, que ajudam outros a serem pessoas melhores. Assim, vamos
              tomar posse da terra que Deus nos entregou para conquistar pela
              sua benção.<b> Somos Linhares</b>, porque esta cidade faz parte de
              nossa identidade uma vez que foi aqui que Deus nos plantou para
              darmos frutos, frutos que a partir daqui abençoarão a nós e a
              nossa cidade e depois de nós abençoarão as nações. Somos igreja
              Apostólica Monte Sião – Linhares, porque foi assim que Deus nos
              chamou a existência e é assim que vamos viver.
            </div>
          </div>
        </div>
      </section>
      <section className="w-full p-8 md:p-10 py-20">
        <div className="flex flex-col border-l-4 border-[#184a4d] p-10">
          <div className="font-family-Lora text-2xl antialiased">
            “O Senhor criará sobre todo o Monte Sião e sobre aqueles que se
            reunirem ali uma nuvem de dia e um clarão de noite. A glória do
            Senhor cobrirá tudo e será um abrigo e sombra para o calor do dia,
            refúgio e esconderijo contra a tempestade e a chuva.”
          </div>
          <div className="text-sm font-['Open_Sans']">Isaias 4:5-6.</div>
        </div>
      </section>
      <section className="w-full p-8 md:p-10 py-20">
        <div className="mb-12">
          <h1 className="text-2xl w-full normal-case mb-10">
            Visão, Valores e missão
          </h1>
          <div className="font-family-Lora capital-first-letter text-lg">
            Queremos chegar a ser uma igreja modelo de discipulado,
            relacionamento, e cuidado, onde muitas gerações de discípulos operam
            o crescimento e desenvolvimento contínuo da igreja, enquanto
            comunidade, sendo modelo simples e praticável. Nossa visão é ter
            muitas gerações de discípulos levantando e sustentando muitas
            gerações de discípulos.
          </div>
        </div>
        <div className="flex flex-col gap-10">
          <h1 className="text-2xl w-full normal-case">
            Valores indispensáveis a nossa missão como igreja
          </h1>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            <div>
              <h1>
                1- SER DEPENDENTE DE DEUS EM TUDO QUE FIZER, INCLUSIVE NO
                MINISTÉRIO
              </h1>
              <div className="font-family-Lora text-xl">
                “...pois o meu poder se aperfeiçoa na fraqueza.” 2 Coríntios 12.
                9
              </div>
            </div>
            <div>
              <h1>
                2- VALORIZAR PESSOAS ACIMA DAS COISAS, RESULTADOS E OBJETIVOS
                SEMPRE
              </h1>
              <div className="font-family-Lora text-xl">
                “É melhor não comer carne nem beber vinho, nem fazer qualquer
                outra coisa que leve seu irmão a cair.” Romanos‬ ‭14. 21‬
              </div>
            </div>
            <div>
              <h1>
                3- OLHAR AS AÇÕES DO PONTO DE VISTA DO TEMPO E ESTRATÉGIA CERTOS
              </h1>
              <div className="font-family-Lora text-xl">
                “… qual é o rei que, pretendendo sair à guerra contra outro rei,
                primeiro não se assenta e pensa se com dez mil homens é capaz de
                enfrentar aquele que vem contra ele com vinte mil?” Lucas 14.31
              </div>
            </div>
            <div>
              <h1>4- SER SEMPRE VOLUNTÁRIO, E INCENTIVAR A VOLUNTARIEDADE</h1>
              <div className="font-family-Lora text-xl">
                “...pastoreiem o rebanho de deus que está aos seus cuidados.
                Olhem por ele, não por obrigação, mas de livre vontade...” 1
                Pedro 5. 2
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full p-8 md:p-10 py-20">
        <h1 className="text-2xl w-full normal-case mb-10">
          Tomando posse da terra
        </h1>
        <div className="font-family-Lora capital-first-letter text-lg">
          Somos uma igreja que vive a prática do SMED – Sistema de Mentoreamento
          e Discipulado do Ministério Bálsamo de Gileade. Isso significa que
          acreditamos no poder no discipulado em grupos pequenos como o meio
          recomendado por Jesus para se viver como igreja de Jesus na terra.
          Isto significa também que entendemos e praticamos o princípio da
          escada do sucesso aceitando que: GANHAR, CONSOLIDAR, DISCIPULAR E
          ENVIAR é o verdadeiro estilo de vida recomendado por Jesus. Com isso,
          tomamos posse da terra que nos foi dada por Deus através de suas
          promessas.
        </div>
      </section>
      <section className="w-full p-8 md:p-10 py-20">
        <h1 className="text-2xl w-full normal-case mb-10">Nossa liderança</h1>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {userInfoList.map(renderUserList)}
        </div>
      </section>
      <Footer />
      <SmoothScroll />
    </main>
  );
}
