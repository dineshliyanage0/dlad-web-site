import React from "react";
import NextDocument, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
} from "next/document";
import { ColorModeScript } from "@chakra-ui/react";
import { config } from "theme";
import GAScript from "analytics/ga-script";
import Footer from "components/footer";
class Document extends NextDocument {

  static getInitialProps(ctx: DocumentContext) {
    return NextDocument.getInitialProps(ctx);
  }

  render() {
    return (
      <Html lang="en">
        <Head></Head>
        <body>
          <ColorModeScript initialColorMode={config.initialColorMode} />
          <Main />
          <NextScript />
          <GAScript />
        </body>
        <Footer />
      </Html>
    );
  }
}

export default Document;
