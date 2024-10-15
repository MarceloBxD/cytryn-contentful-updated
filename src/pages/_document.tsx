import MetaTags from "@/components/MetaTags";
import { Html, Head, Main, NextScript } from "next/document";


export default function Document() {
  return (
    <Html lang="pt-br">
      <Head>
      <link
          href="https://fonts.googleapis.com/css2?family=Raleway:wght@400;700&family=Sora:wght@400;700&display=swap"
          rel="stylesheet"
        />
        <MetaTags/>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
