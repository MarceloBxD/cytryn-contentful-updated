"use client";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import Presentation from "@/sections/Presentation";
import { Header } from "../components/Header";
import SolveProblems from "@/sections/SolveProblems";
import Approach from "@/sections/Approach";
import Faq from "../components/Faq";
import About from "@/sections/About";
import Footer from "../components/Footer";
import Feedbacks from "@/sections/Feedbacks";
import { WhatsappIcon } from "../components/WhatsappIcon";
import { AppProvider } from "@/contexts/AppContext";
import { getEntries } from "@/services/getContentfulData";

export const getStaticProps = async () => {
  const [
    faq,
    mainBannerTexts,
    identificationTexts,
  ] = await Promise.all([
    getEntries({
      contentType: "faq",
    }),
    getEntries({
      contentType: "textosPrincipaisDoBanner"
    }),
    getEntries({
      contentType: "seEssaASuaRealidadeHoje"
    })
  ]);

  // const MAPS_API_KEY = process.env.GOOGLE_MAPS_API_KEY as string;
  const PHONE_NUMBER = process.env.PHONE_NUMBER as string;

  return {
    props: {
      PHONE_NUMBER,
      faq,
      mainBannerTexts,
      identificationTexts,
      // MAPS_API_KEY,
    },
    revalidate: 60 * 5, // 5 minutes
  };
};

type HomeProps = {
  PORTAL_ID: string;
  PHONE_NUMBER: string;
  // MAPS_API_KEY: string;
  mainBannerTexts: any;
  identificationTexts: any;
  faq: any;
  allMidia: any;
}

export default function Home({ PHONE_NUMBER, faq, mainBannerTexts, identificationTexts }: HomeProps) {

  const FAQ_ANSWERS = faq[0].fields.answers.content[0].content[0].value.split('&')
  const FAQ_QUESTIONS = faq[0].fields.question;

  return (
    <AppProvider>
    <main className="flex flex-col min-h-screen">
      <Header />
      <Presentation mainBannerTexts={mainBannerTexts}/>
      <SolveProblems textsFromContentful={identificationTexts}/>
      <Approach />
      <About />
      <Feedbacks />
      <Faq answers={FAQ_ANSWERS} questions={FAQ_QUESTIONS}/>
      <Footer mapsApiKey={""} phoneNumber={PHONE_NUMBER}/>
      <WhatsappIcon />
    </main>
    </AppProvider>
  );
}

