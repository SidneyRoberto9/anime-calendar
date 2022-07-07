import { Head, Html, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang='pt-br'>
      <Head />
      <link rel='shortcut icon' href='/static/letter-a.ico' />
      <meta
        name='description'
        content='Calendario dos Lançamentos de Animes de Cada temporada divididos por semana e busca'
      />
      <title>Animes Calendar</title>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
