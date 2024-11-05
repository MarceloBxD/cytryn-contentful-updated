import { Html, Head, Main, NextScript } from "next/document";


export default function Document() {
  return (
    <Html lang="pt-br">
      <Head>
      <link
          href="https://fonts.googleapis.com/css2?family=Raleway:wght@400;700&family=Sora:wght@400;700&display=swap"
          rel="stylesheet"
        />
       <meta charSet="utf-8" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, maximum-scale=1.0, user-scalable=no"
      />
      <meta name="theme-color" content="#AE8F72" />
      <meta
        name="apple-mobile-web-app-status-bar-style"
        content="black-translucent"
      />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-title" content="Isa Cytryn" />
      <link rel="shortcut icon" href="/favicon.ico" />
      <link rel="icon" href="/favicon.ico" />
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <meta name="description" content="" />
      <meta
        name="keywords"
        content="Psicóloga Isabela Cytryn, Atendimento psicológico, Terapia online, Psicoterapia individual, Tratamento para ansiedade, Tratamento para depressão, Terapia cognitivo-comportamental, Consultas psicológicas, Psicoterapia para adultos, Terapia para estresse, Psicóloga especializada em transtornos de humor, Apoio emocional, Psicóloga em [cidade/região específica], Psicoterapia para autoconhecimento, Psicóloga de confiança, Consulta psicológica online, Terapia para autoestima, Suporte psicológico, Psicoterapia presencial e online, Atendimento psicológico humanizado"
      />

      {/* OPEN GRAPH */}
      <meta name="robots" content="index, follow" />
      <meta property="og:title" content="Isa Cytryn" />
      <meta property="og:description" content="" />
      <meta property="og:type" content="website" />
      <meta
        property="og:url"
        content="https://psicologaisabelacytryn.com.br/"
      />
      <meta
        property="og:image"
        content="https://psicologaisabelacytryn.com.br/og/og_image_1.webp"
      />
      <meta property="og:site_name" content="Psicóloga - Isabela Cytryn" />
      <meta property="og:locale" content="pt_BR" />

      {/* Twitter SEO */}
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content="Isabela Cytryn" />
      <meta name="twitter:description" content="" />
      <meta
        name="twitter:image"
        content="https://psicologaisabelacytryn.com.br/og/og_image_1.webp"
      />

      {/* AUTHOR SEO */}
      <meta name="author" content="Marcelo Bracet" />
      <link rel="author" href="https://bracetdev.vercel.app/" />
      <meta name="author" content="@_bracetmarcelo" />
      <meta name="author" content="@majors_solutions" />

      <meta name="application-name" content="Isabela Cytryn" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
