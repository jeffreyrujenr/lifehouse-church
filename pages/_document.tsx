import { Html, Head, Main, NextScript } from "next/document";
import Providers from "../providers";
import NavigationBar from "@/components/NavigationBar";

export default function Document() {
  return (
    <Providers>
      <Html lang="en" className="dark">
        <Head />
        <NavigationBar />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    </Providers>
  );
}
