
import Image from "next/image";
import Link from "next/link";

import type { UserInfoType } from "@/types";

import Jucimar from "@/assets/user/FOTO JUCIMAR RAMOS.jpg";
import Berenice from "@/assets/user/62223956_1887020474731459_3011400726186833414_n.webp";
import banner from "@/assets/banner/home_cover_resized.jpg";

const userInfoList = [
  {
    name: "Jucimar Ramos",
    image: Jucimar,
    occupation: "Pastor sênior",
    content:
      "Pastor, palestrante e escritor com mais de 35 livros lançados. Ministro de cura interior desde 1991, foi treinado pelo Ministério REVER MAPI/CEPAL com certificação em Mestre em Cura Interior. É pastor Sênior da igreja Monte Sião desde o ano 2000. É presidente do Ministério Bálsamo de Gileade. É casado com a pastora Berenice e tem dois filhos, Mhayza e Marcos, casado com Bruna, pais da Karen, sua netinha. Para saber mais:",
    link: {
      label: "@prjucimarramos",
      href: "https://www.instagram.com/prjucimarramos/",
    },
  },
  {
    name: "Berenice Ramos",
    image: Berenice,
    occupation: "Pastora sênior",
    content:
      "Pastora, palestrante e ministra de cura interior, a pastora Berê, carinhosamente chamada por seus discípulos, cuida da igreja local e lidera diretamente o ministério de mulheres da igreja, trabalhando assuntos importantes para este tempo, como feminilidade, autocuidado, paternidade etc. Auxilia o pastor Jucimar no Ministério Bálsamo de Gileade e é formada em Assistência Social. Casada com o pastor Jucimar, tem dois filhos, Mhayza e Marcos, casado com Bruna, pais da Karen, sua netinha.",
  },
];

function UserInfo({ image, name, occupation, content, link }: UserInfoType) {
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

      <div className="text-sm text-justify">
        {content}
        {link?.label ? (
          <Link target="_blank" href={link?.href}>
            <b>{link?.label}</b>
          </Link>
        ) : null}{" "}
      </div>
    </div>
  );
}

export default function About() {

  return (
   <>
   
      <section className="h-[50vh] w-full flex justify-center items-center bg-black relative">
        <Image
          alt="Banner"
          src={banner}
          className="w-full h-full bg-no-repeat bg-contain bg-center object-cover"
          />
        <p className="absolute bottom-16 whitespace-nowrap font-['Montserrat'] text-white text-center text-2xl sm:text-3xl md:text-4xl lg:text-3xl xl:text-6xl 2xl:text-8xl 2xl:bottom-28">
          Quem somos
        </p>
      </section>
      <section className="w-full flex flex-col items-center py-8 lg:py-20 px-6 sm:px-14 lg:px-20 sm:py-32">
        <section className="w-full max-w-screen-sm xl:max-w-[67rem]  gap-14 flex flex-col items-center">
          <div className="font-family-Lora text-2xl sm:text-3xl w-full text-justify">
            Em tempos de grande confusão no mundo, não há nada mais importante
            para alguém que quer viver em serenidade do que saber quem é e o que
            está fazendo neste mundo, pois tudo fica mais fácil a partir desta
            premissa:{" "}
            <b>“Eu sei quem sou e sei o que vim fazer neste mundo!”</b>. Nós
            somos a Igreja Apostólica Monte Sião em Linhares.
          </div>
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-10">
            <div>
              <h1 className="mb-3">Somos Igreja</h1>
              <div className="font-family-Lora text-lg text-justify">
                Porque a palavra Igreja fala de uma comunidade que se une e
                congrega ao redor do nome de Jesus. Somos Igreja porque amamos a
                Jesus e amamos uns aos outros, buscando viver juntos para servir
                a Deus através de Jesus e para servirmos uns aos outros, pois é
                isto que significa ser IGREJA.
              </div>
            </div>
            <div>
              <h1 className="mb-3">Somos Apostólica</h1>
              <div className="font-family-Lora text-lg text-justify">
                Porque a palavra “Apostólica” significa que acreditamos na
                doutrina Apostólica e buscamos viver a vida prática como igreja
                na forma que os Apóstolos de Jesus ensinaram e viveram.
                <b> Somos Apostólica</b> porque rejeitamos a religiosidade e o
                tradicionalismo como base para vida cristã, e buscamos praticar
                de forma efetiva aquilo que Jesus, através de seus Apóstolos,
                nos ensinou a viver.<b> Somos uma Igreja Apostólica.</b>
              </div>
            </div>
            <div>
              <h1 className="mb-3">Somos Monte Sião</h1>
              <div className="font-family-Lora text-lg text-justify">
                Porque O Monte Sião é a verdadeira origem da cristandade, é de
                Sião que vem a lei e a verdade que Deus fez se espalhar pela
                Terra. Somos Monte Sião porque quase todos os escritores
                bíblicos são judeus, assim como Jesus, nosso Messias. O Monte
                Sião é sinônimo de Israel e de Jerusalém, onde toda a revelação
                do Deus de Abraão começou e se desenvolveu até chegar ao seu
                clímax na cruz. Somos Monte Sião porque recusamos a ideia de a
                cultura e a tradição ocidental substituir a cultura judaica e a
                forma de cultuar ao Deus de Abraão, e decidimos aprender com o
                povo que nos deu as escrituras, os patriarcas, os profetas e com
                os apóstolos.
              </div>
            </div>
            <div>
              <h1 className="mb-3">Somos Linhares</h1>
              <div className="font-family-Lora text-lg text-justify">
                Porque o Senhor Deus todo poderoso, que sabe de todas as coisas
                e que tem um certo propósito definido para cada uma de suas
                criaturas, nos levantou nesta cidade e nos comissionou para a
                partir daqui mudar a nossa História, influenciando nossa geração
                a partir de um relacionamento com Deus que nos faz ser pessoas
                melhores, que ajudam outros a serem pessoas melhores. Assim,
                vamos tomar posse da terra que Deus nos entregou para conquistar
                pela sua benção.<b> Somos Linhares</b>, porque esta cidade faz
                parte de nossa identidade uma vez que foi aqui que Deus nos
                plantou para darmos frutos, frutos que a partir daqui abençoarão
                a nós e a nossa cidade e depois de nós abençoarão as nações.
                Somos igreja Apostólica Monte Sião – Linhares, porque foi assim
                que Deus nos chamou a existência e é assim que vamos viver.
              </div>
            </div>
          </div>
        </section>
        <section className="w-full max-w-screen-sm xl:max-w-[67rem] py-6 md:py-10">
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
        <section className="w-full max-w-screen-sm xl:max-w-[67rem] py-6 md:py-10">
          <div className="mb-12">
            <h1 className="text-2xl w-full normal-case mb-10">
              Visão, Valores e missão
            </h1>
            <div className="font-family-Lora capital-first-letter text-lg text-justify">
              Queremos ser uma igreja modelo de discipulado, relacionamento, e
              cuidado, onde muitas gerações de discípulos operam o crescimento e
              desenvolvimento contínuo da Igreja, enquanto comunidade, sendo
              modelo simples e praticável. Nossa visão é ter muitas gerações de
              discípulos levantando e sustentando muitas gerações de discípulos.
            </div>
          </div>
          <div className="flex flex-col gap-10">
            <h1 className="text-2xl w-full normal-case">
              Valores indispensáveis a nossa missão como igreja
            </h1>
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-10">
              <div>
                <h1>
                  1- SER DEPENDENTE DE DEUS EM TUDO QUE FIZER, INCLUSIVE NO
                  MINISTÉRIO
                </h1>
                <div className="font-family-Lora text-xl">
                  “...pois o meu poder se aperfeiçoa na fraqueza.” 2 Coríntios
                  12. 9
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
                  3- OLHAR AS AÇÕES DO PONTO DE VISTA DO TEMPO E ESTRATÉGIA
                  CERTOS
                </h1>
                <div className="font-family-Lora text-xl">
                  “… qual é o rei que, pretendendo sair à guerra contra outro
                  rei, primeiro não se assenta e pensa se com dez mil homens é
                  capaz de enfrentar aquele que vem contra ele com vinte mil?”
                  Lucas 14.31
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
        <section className="w-full max-w-screen-sm xl:max-w-[67rem]">
          <h1 className="text-2xl w-full normal-case mb-10">
            Tomando posse da terra
          </h1>
          <div className="font-family-Lora capital-first-letter text-lg text-justify">
            Somos uma igreja que vive a prática do SMED – Sistema de
            Mentoreamento e Discipulado do Ministério Bálsamo de Gileade. Isso
            significa que acreditamos no poder no discipulado em grupos pequenos
            como o meio recomendado por Jesus para se viver como igreja de Jesus
            na terra. Isto significa também que entendemos e praticamos o
            princípio da escada do sucesso aceitando que: GANHAR, CONSOLIDAR,
            DISCIPULAR E ENVIAR é o verdadeiro estilo de vida recomendado por
            Jesus. Com isso, tomamos posse da terra que nos foi dada por Deus
            através de suas promessas.
          </div>
        </section>
        <section className="w-full max-w-screen-sm xl:max-w-[67rem] py-6 md:py-10 lg:py-20">
          <h1 className="text-2xl w-full normal-case mb-10">Nossa liderança</h1>
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-10">
            {userInfoList.map(
              (
                { name, image, occupation, content, link }: UserInfoType,
                idx: number
              ) => (
                <UserInfo
                name={name}
                image={image}
                occupation={occupation}
                content={content}
                link={link}
                key={idx}
                />
              )
            )}
          </div>
        </section>
      </section>
      </>
  );
}
