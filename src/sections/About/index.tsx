// native imports
import React, { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

// assets
import { FaCheck } from "react-icons/fa";

// data
import { ABOUT_DATA } from "@/data";

// image
import Image from "next/image";
import { Title } from "../../components/Title";
import { convertToBold } from "@/utils/convertToBold";

gsap.registerPlugin(ScrollTrigger);

type AboutProps = {
  aboutData: any;
};

const About: React.FC<AboutProps> = ({aboutData}) => {
  const  {sobreMim, descricao1, descricao2} = aboutData[0].fields;
  const aboutMeDataFormatted = sobreMim.split('&');
  const OWNER_NAME = "Isabela Cytryn";

  useEffect(() => {
    gsap.fromTo(
      ".about-image",
      {
        opacity: 0,
        scale: 0.9,
      },
      {
        opacity: 1,
        scale: 1,
        scrollTrigger: {
          trigger: ".about-image",
          start: "top 80%",
          end: "bottom top",
          scrub: true,
        },
        duration: 1,
        ease: "power2.out",
      }
    );

    gsap.from(".about-item", {
      opacity: 0,
      y: 30,
      stagger: 0.2,
      scrollTrigger: {
        trigger: ".about-item",
        start: "top 80%",
        end: "bottom top",
        scrub: true,
      },
      duration: 1,
      ease: "power2.out",
    });

    gsap.fromTo(
      ".custom-shape",
      {
        rotate: -30,
        opacity: 0.5,
      },
      {
        rotate: 0,
        opacity: 0.5,
        scrollTrigger: {
          trigger: ".custom-shape",
          start: "top 80%",
          end: "bottom top",
          scrub: true,
        },
        duration: 1,
        ease: "power2.out",
      }
    );
  }, []);

  
  return (
    <section id="sobre-mim" className="relative container">
      <Title text="SOBRE MIM" />
      <div className="relative">
        <div className="text-quaternary relative w-fit text-xl md:text-2xl lg:text-3xl font-bold mt-8 mb-6 md:mb-12">
          {OWNER_NAME}
          <div className="w-full mt-2 h-1 bg-quaternary mb-8" />
        </div>
      </div>
      <div className="relative mt-8 flex-col md:flex md:flex-row gap-6 md:gap-10">
        <ul className="grid grid-cols-1 text-black">
        {aboutMeDataFormatted.map((item: string, index: number) => {

  return (
    <li
      key={index}
      className="text-lg  lg:text-md h-fit flex items-center mb-2 p-1 gap-2"
    >
      <FaCheck className="min-w-5" width={10} height={10} color="#AE8F72" />
      <p className="text-quaternary">{convertToBold(item)}</p>
    </li>
  );
})}

          <div className="h-1 bg-quaternary my-3 w-full " />
          <p className="text-quaternary mt-2 max-w-[85%]">
            {descricao1}{" "}
          </p>
          <p className="text-quaternary mt-3">
            {descricao2}
          </p>
        </ul>
        <div className="relative w-full h-[500px] md:w-[500px] md:h-[500px] mx-auto mt-8 md:mt-0 md:mx-0">
          <div className="absolute inset-0 -z-10 bg-[#F0E9E0] rounded-lg shadow-lg"></div>
          <Image
            src="/images/isa-front-image.webp"
            className={`about-image rounded-lg w-full h-full object-cover border-8 border-[#DE9790] shadow-xl 
            md:rounded-lg md:w-full md:h-full md:object-cover md:border-8 md:border-[#DE9790] md:shadow-xl`}
            alt="Isabela Cytryn"
            layout="fill"
          />
          {/* Adicione formas geométricas personalizadas */}
          <div className="custom-shape"></div>
        </div>
      </div>
    </section>
  );
};

export default About;
