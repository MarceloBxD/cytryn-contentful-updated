"use client";

import React from "react";
import { FaInstagram } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";
import { CtaButton } from "../CtaButton";
import BackToTopButton from "../BackToTopButton";

const SOCIAL_MEDIA_ITEMS = [
  {
    id: 1,
    name: "Instagram",
    image: <FaInstagram size={24} color="#E1306C" />,
    bgOnHover: "#E1306C",
    href: "https://www.instagram.com/psi.isabelacytryn/",
  },
  {
    id: 3,
    name: "Doctoralia",
    image: (
      <Image
        quality={100}
        alt="Doctoralia logo"
        src="/icons/doctoralia.webp"
        width={32}
        height={32}
      />
    ),
    href: "https://www.doctoralia.com.br/isabela-cytryn-2/psicologo/rio-de-janeiro#profile-reviews",
  },
];

type FooterProps = {
  phoneNumber: string;
  mapsApiKey: string;
}

const Footer: React.FC<FooterProps> = ({phoneNumber, mapsApiKey}) => {
  return (
    <footer id="contato" className="text-black w-full bg-primary py-5">
      <div className="flex flex-col md:flex-row items-center justify-between container mx-auto px-4">
        <div className="flex items-center space-x-6 mb-5 md:mb-0">
          {SOCIAL_MEDIA_ITEMS.map((item) => (
            <Link
              target="_blank"
              key={item.id}
              href={item.href}
              className="flex items-center justify-center w-10 h-10 md:w-12 md:h-12 hover:bg-secondary  transition-colors duration-300 rounded-full"
            >
              {item.image}
            </Link>
          ))}
        </div>
        <div className="flex flex-col items-center text-center">
          <p className="text-md md:text-lg max-w-[350px] md:max-w-full mt-2 text-black">
            Atendimento <b>online</b> e <b>presencial</b> <br />
            na Zona Sul do Rio de Janeiro
          </p>
          <p className="text-md md:text-lg font-bold">CRP: 05/69829</p>
          <p className="text-md md:text-lg">Isabela Fernandes Cytryn</p>
        </div>
        <div className="mt-5 md:mt-0">
          <CtaButton number={phoneNumber} title="Entre em contato pelo <b>WhatsApp</b>!" />
          <BackToTopButton />
        </div>
        <div className="font-thin italic text-sm mt-5">
          <p>
            Desenvolvido por @<code>_bracetmarcelo</code>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
