import Document, { Html, Head, Main, NextScript } from "next/document"

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          {/* eslint-disable-next-line */}
        </Head>
        <body className="bg-[#f2f2f2]">
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
