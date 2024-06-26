import facebook from "../assets/icons/social/icon-facebook.svg";
import instagram from "../assets/icons/social/icon-instagram.svg";
import email from "../assets/icons/social/icon-email.svg";
import youtube from "../assets/icons/social/icon-youtube.svg";

export default {
  home: {
    videoBanner:
      "https://player.vimeo.com/video/957949303?background=1&badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479",
    title: "CONHECENDO A DEUS E FAZENDO-O CONHECIDO",
    welcomeEvents: [
      { title: "CULTO PRINCIPAL", date: "Domingo - 18h - 20:30h" },
      { title: "HORÁRIOS DE ORAÇÃO", date: "Todos os dias - 6h | 18h" },
      { title: "CURA INTERIOR", date: "Quarta-feira - 19:30h | Sábado - 14h" },
    ],
  },
  social: [
    {
      icon: instagram,
      name: "instagram",
      alt: "Ícone do instagram",
      href: "https://www.instagram.com/montesiaolinhares/",
    },
    {
      icon: email,
      name: "email",
      alt: "Ícone do email",
      href: "mailto:prakenia@gmail.com",
    },
    {
      icon: youtube,
      name: "youtube",
      alt: "Ícone do youtube",
      href: "https://www.youtube.com/c/MonteSi%C3%A3oLinhares",
    },
    {
      icon: facebook,
      name: "facebook",
      alt: "Ícone do facebook",
      href: "https://pt-br.facebook.com/montesiao.linhares/",
    },
  ],
  events: [
    {
        title: "240 HORAS DE ORAÇÃO E ADORAÇÃO | AQUELES QUE ESPERAM",
        children:
          "Em sua 5ª edição, as 240 horas de oração e adoração é um evento focado em acessar o poder da unidade da igreja através de um ajuntamento santo por 10 dias ininterruptos. Na edição desse ano temos um novo tema, “AQUELES QUE ESPERAM”, onde trabalharemos o texto de Isaías 64:4 – “Desde os tempos antigos ninguém ouviu, nenhum ouvido percebeu, e olho nenhum viu outro Deus, além de ti, que trabalha para aqueles que nele esperam.”",
        href: "/",
        info: {
          date: "09 a 19 de maio",
          time: "18h",
          address: "Av. Prefeito Samuel Batista Cruz, Três Barras, 3593, Linhares – ES.",
        },
      },
      {
        title: "24 ANOS MONTE SIÃO LINHARES | ANO DO PROPÓSITO PERFEITO",
        children:
          "Neste ano nossa igreja completa 24 anos, entrando no ciclo do ano 25, o ANO DO PROPÓSITO PERFEITO! Estaremos reunidos para celebrarmos a Deus com alegria e gratidão por tudo que fez até aqui, entrando no novo ciclo com chave de ouro, na presença do único que é digno: Jesus! Venha participar conosco! “E sabemos que todas as coisas contribuem juntamente para o bem daqueles que amam a Deus, daqueles que são chamados segundo o seu propósito”. – Romanos 8:28",
        href: "/",
        info: {
          date: "09 de junho",
          time: "18h",
          address: "Av. Prefeito Samuel Batista Cruz, Três Barras, 3593, Linhares – ES.",
        },
      },
  ]
};
