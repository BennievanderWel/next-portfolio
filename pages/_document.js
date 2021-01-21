import Document, { Html, Head, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang='en'>
        <Head>
          <meta name='description' content='A Next.js site' />
          <meta charset='utf-8' />
          <meta name='robots' content='noindex, nofollow' />
          <link
            rel='stylesheet'
            href='https://cdnjs.cloudflare.com/ajax/libs/nprogress/0.2.0/nprogress.min.css'
          />
          <link rel='preconnect' href='https://fonts.gstatic.com' />
          <link
            href='https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,300;1,300&display=swap'
            rel='stylesheet'
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
        <style jsx>{`
          body {
            font-family: 'Roboto', sans-serif;
          }
        `}</style>
      </Html>
    );
  }
}
