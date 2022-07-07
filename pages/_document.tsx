import { Head, Html, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang='pt-br'>
      <Head />
      <link rel='shortcut icon' href='/static/letter-a.ico' />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
