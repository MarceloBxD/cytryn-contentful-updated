import { createClient } from "contentful";

type Entry = {
  contentType: "faq" | "textosPrincipaisDoBanner" | "seEssaASuaRealidadeHoje" | "sobreMim" | "comoEuPossoTeAjudar";
};

export const getEntries = async ({ contentType }: Entry) => {
  const contentful = createClient({
    space: process.env.CONTENTFUL_SPACE_ID || "",
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN || "",
  });

  const entries = await contentful.getEntries({ content_type: contentType });

  return entries.items;
};