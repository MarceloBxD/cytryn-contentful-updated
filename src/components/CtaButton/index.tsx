import Link from "next/link";
import React, { useEffect, useRef } from "react";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import gsap from "gsap";

type CtaButtonProps = {
  title?: string;
  insta?: boolean;
  rounded?: boolean;
  number?: string;
};

export const CtaButton: React.FC<CtaButtonProps> = ({
  title,
  insta,
  rounded,
  number,
}) => {
  const buttonRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    if (!buttonRef.current) return;

    // Animação da imagem
    gsap.fromTo(
      buttonRef.current,
      {
        scale: 1,
        backgroundColor: "#F0e9e0", // primary
        color: "#2d5262", // quaternary
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
      },
      {
        scale: 1,
        backgroundColor: "#F0e9e0", // primary
        color: "#2d5262", // quaternary
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
        duration: 0.3,
        ease: "power1.out",
      }
    );

    gsap.to(buttonRef.current, {
      scale: 1.1,
      backgroundColor: "#DE9790", // terciary
      color: "#F0e9e0", // primary
      boxShadow: "0 10px 20px rgba(0, 0, 0, 0.4)",
      duration: 0.3,
      ease: "power1.out",
      paused: true,
    });

    buttonRef.current.addEventListener("mouseenter", () => {
      gsap.to(buttonRef.current, {
        scale: 1.1,
        color: "#F0e9e0", // primary
        boxShadow: "0 10px 20px rgba(0, 0, 0, 0.4)",
        duration: 0.3,
        ease: "power1.out",
      });
    });

    buttonRef.current.addEventListener("mouseleave", () => {
      gsap.to(buttonRef.current, {
        scale: 1,
        backgroundColor: "#F0e9e0", 
        color: "#2d5262", 
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
        duration: 0.3,
        ease: "power1.out",
      });
    });
  }, []);

  const INSTAGRAM_URL = "https://www.instagram.com/psi.isabelacytryn/";
  const WHATSAPP_URL =
    `https://api.whatsapp.com/send?phone=${number}&text=Oi,%20vim%20pelo%20site!%20`;

  return (
    <Link
      ref={buttonRef}
      target="_blank"
      href={insta ? INSTAGRAM_URL : WHATSAPP_URL}
      className={`flex border cursor-pointer py-2 px-4 rounded-full z-50 justify-between items-center gap-3`}
    >
      {/* svg wpp */}
      {!rounded && (
        <span
          dangerouslySetInnerHTML={{
            __html: title ?? "",
          }}
          className="text-quaternary text-md"
        />
      )}

      {insta ? (
        <FaInstagram size={24} color="#E1306C" />
      ) : (
        <FaWhatsapp size={24} color="#25D366" />
      )}
    </Link>
  );
};
