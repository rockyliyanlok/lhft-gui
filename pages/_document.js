import Document, { Head, Html, Main, NextScript } from 'next/document'
import { getLangFromReq } from '../utils/fromReq'
import React from 'react'
import { ServerStyleSheet } from 'styled-components'

class MyDocument extends Document {
  static async getInitialProps (ctx) {
    const lang = getLangFromReq(ctx.req)
    const sheet = new ServerStyleSheet()
    const originalRenderPage = ctx.renderPage

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: App => props =>
            sheet.collectStyles(<App {...props} />)
        })

      const initialProps = await Document.getInitialProps(ctx)
      return {
        ...initialProps,
        lang,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        )
      }
    } finally {
      sheet.seal()
    }
  }

  render () {
    return (
      <Html lang={this.props.lang}>
        <Head>
          <meta name="Description" content="A web GUI to present data from lhft-backend service."></meta>
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link href="https://fonts.googleapis.com/css2?family=Roboto+Condensed:ital,wght@0,300;0,400;0,700;1,300;1,400;1,700&display=swap" rel="stylesheet" />
          <link rel="icon" href="/favicon.ico" />
          <link rel="manifest" href="/manifest.json" />
          <link href='/favicon-16x16.png' rel='icon' type='image/png' sizes='16x16' />
          <link href='/favicon-32x32.png' rel='icon' type='image/png' sizes='32x32' />
          <link rel="apple-touch-icon" href="/apple-touch-icon.png"></link>
          <meta name="theme-color" content="#FFFFFF"/>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
