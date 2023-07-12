import { Html, Head, Main, NextScript } from 'next/document'

'_document é uma pagina para definir um html padrão'
export default function Document() {
  return (
    <Html lang="pt-BR">
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
