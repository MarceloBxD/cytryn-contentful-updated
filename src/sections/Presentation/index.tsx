"use client";

import React from "react";
import { motion } from "framer-motion";
// components
import { CtaButton } from "../../components/CtaButton";

// animation
import { FADE_IN_BASIC_ANIMATION } from "@/utils/animations";
import Image from "next/image";

// data
import { PRESENTATION_DATA } from "@/data";



const PresentationImage: React.FC = () => {
  return (
    <div className="relative w-full h-[320px] md:h-full md:w-1/3">
      <Image
        layout="fill"
        alt="Isa Front Image"
        className="object-cover object-top"
        src="/images/bg.webp"
      />
    </div>
  );
};


type PresentationProps = {
  mainBannerTexts: any;
};

const Presentation: React.FC<PresentationProps> = ({mainBannerTexts}) => {

  const { tituloPrincipal, subtitulo, paragrafo, bannerCta } = mainBannerTexts[0].fields;

  return (
    <section
      id="apresentacao"
      className="relative flex flex-col-reverse md:flex-row items-center md:h-[calc(100vh-80px)] max-w-screen -mb-10 md:mb-12"
    >
      <div className="mt-5 flex-1  flex flex-col justify-center items-center md:items-start px-4 md:px-8">
        <div className="flex flex-col items-center md:items-start text-quaternary gap-2 md:gap-4">
          <motion.h1
            {...FADE_IN_BASIC_ANIMATION}
            className="text-xl font-bold text-center md:text-left md:text-3xl"
          >
            {tituloPrincipal}
          </motion.h1>
          <motion.h2
            {...FADE_IN_BASIC_ANIMATION}
            className="text-lg md:text-2xl font-medium text-center md:text-left"
          >
            {subtitulo}
          </motion.h2>
        </div>
        <motion.p
          {...FADE_IN_BASIC_ANIMATION}
          className="text-sm text-quaternary max-w-[70%] mx-auto md:mx-0 md:max-w-[75%] text-center md:text-left py-3 md:py-5"
        >
          {paragrafo}
        </motion.p>
        <motion.p
          {...FADE_IN_BASIC_ANIMATION}
          className="text-sm text-quaternary max-w-[70%] mx-auto md:mx-0 md:max-w-[75%] text-center md:text-left pb-3 md:pb-5 font-semibold"
        >
          {bannerCta}
        </motion.p>
        <motion.div
          {...FADE_IN_BASIC_ANIMATION}
          className="flex justify-center md:justify-start w-fit"
        >
          <CtaButton title="Entre em contato pelo <b>WhatsApp</b>!" />
        </motion.div>
      </div>
      <PresentationImage />
    </section>
  );
};

export default Presentation;
