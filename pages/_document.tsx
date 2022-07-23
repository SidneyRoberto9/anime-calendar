import { Head, Html, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang='pt-br'>
      <Head />
      <link rel='shortcut icon' href='/static/letter-a.ico' />
      <meta
        name='viewport'
        content='initial-scale=1.0, width=device-width'
      />
      <meta
        name='description'
        content='Calendário dos Lançamentos de Animes de Cada temporada divididos por semana e busca'
      />
      <meta
        property='og:title'
        content='Animes Calendar'
        key='ogtitle'
      />
      <title>Animes Calendar</title>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
