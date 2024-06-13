import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="pt-BR">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@500;600;700&display=swap"
          rel="stylesheet"
        />
        <script src="https://player.vimeo.com/api/player.js"></script>
      </Head>
      <body>
        <title>Igreja Monte Sião</title>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
