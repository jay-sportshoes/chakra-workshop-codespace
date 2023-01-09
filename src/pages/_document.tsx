import NextDocument, { Html, Head, Main, NextScript } from 'next/document';
import { ColorModeScript } from '@chakra-ui/react';
import { fontVars } from './_app';

export default class Document extends NextDocument {
  render() {
    return (
      <Html>
        <Head />
        <body className={fontVars}>
          {/* Make Color mode to persists when you refresh the page. */}
          <ColorModeScript />
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
