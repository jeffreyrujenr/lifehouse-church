import { Html, Head, Main, NextScript } from "next/document";
import Providers from "../providers";

export default function Document() {
  return (
    <Providers>
      <Html lang="en" className="dark">
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    </Providers>
  );
}
