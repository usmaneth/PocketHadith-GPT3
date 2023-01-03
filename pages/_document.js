import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html>
      <Head>
        <meta property="og:title" content="PocketHadith" key="title"/>
        <meta property="og:description" content="PocketHadith" key="description"/>
        <meta
          property="og:image"
          content="https://i.ibb.co/j8wTz4D/Screen-Shot-2023-01-03-at-3-51-20-PM.png"
        />
        <meta name="twitter:card" content="summary_large_image"></meta>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
