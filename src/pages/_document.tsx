import React from 'react'
import Document, { Html, Main, NextScript, Head } from 'next/document'

export default class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />

          <link rel="preconnect" href="https://fonts.gstatic.com" />

          <link
            href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap"
            rel="stylesheet"
          />

          <link rel="shortcut icon" href="logo.png" type="image/x-icon" />

          <meta
            name="description"
            content="Somos especilistas em fotografia familiar, com foco em fotografia infantíl, locação de estúdio e ensáio corparativo. Atendemos em toda a Grande Vitória(Vila Velha, Vitória, Serra e Cariacica)."
          />

<meta name="google-site-verification" content="qqEDvkfukQ56GZshW9HPXJbQpAtEfosDSSK8tOMYRFg" />
        </Head>

        <body>
          <Main />

          <NextScript />
        </body>
      </Html>
    )
  }
}
