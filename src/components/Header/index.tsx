"use client";

// native imports
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

import { CtaButton } from "../CtaButton";
import HamburgerMenu from "../HamburguerMenu";

// context
import { useApp } from "@/contexts/AppContext";

// data
import { NAV_DATA } from "@/data";

// animations
export const Header: React.FC = () => {
  const { isOpen, setIsOpen } = useApp();
  const [scrolled, setScrolled] = useState(false);

  const [isOnTop, setIsOnTop] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= window.innerHeight) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    // Adiciona ou remove a classe "no-scroll" no body com base em `isOpen`
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isOpen]);

  return (
    <header
      className={`${
        isOpen ? "h-[100dvh] bg-white bg-opacity-100" : ""
      } w-full z-50 top-0 bg-secondary border-white border-b-2 flex ${
        isOpen ? `items-start` : `items-center `
      }
      } justify-between px-10 md:max-h-[90px] py-6 md:py-4`}
    >
      <div className="relative h-10 md:h-12 w-48 md:w-64">
        <Link href="/">
          <Image
            quality={100}
            priority
            src={
              scrolled
                ? "/assets/logos/isa_logo_horizontal.webp"
                : isOpen
                ? "/assets/logos/isa_logo_horizontal.webp"
                : "/assets/logos/isa_logo_horizontal_branco.webp"
            }
            layout="fill"
            className="object-contain"
            alt="Logo Cytryn"
          />
        </Link>
      </div>
      {/* Show NAV in Desktop */}

      {isOpen && (
        <div className="fixed md:hidden bottom-2 p-2 w-full flex flex-col max-w-[80vw] min-w-[300px] z-[999999]">
          <CtaButton title="Entre em contato pelo Instagram" insta />
        </div>
      )}

      <div>
        <nav className="hidden lg:flex">
          <ul className="flex gap-5">
            {NAV_DATA.map((navItem) => (
              <li
                className={`relative uppercase font-thin after:content-[''] after:absolute after:left-full after:mx-5 after:font-bold after:text-lg after:font-montserrat after:leading-10 after:uppercase last:after:content-[''] ${
                  scrolled
                    ? "text-secondary after:text-secondary"
                    : "text-white after:text-white"
                }`}
                key={navItem.name}
              >
                <Link href={navItem.href}>
                  <span
                    className={`relative block  after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-full after:bg-white after:scale-x-0 after:origin-left after:transition-transform after:duration-300 hover:after:scale-x-100`}
                  >
                    {navItem.name}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      {/* Show Hamburguer menu in Mobile */}
      <div className="block md:hidden">
        <HamburgerMenu />
      </div>
      {/* Show Hamburguer menu in Mobile */}
      {/* Show NAV in Mobile */}
      <div
        className={`${
          isOpen ? "flex" : "hidden"
        } flex-col gap-5 absolute top-20 left-10 w-full p-5 rounded-lg  bg-clip-padding backdrop-filter backdrop-blur-glass bg-opacity-10 border border-glass-border shadow-glass`}
      >
        {NAV_DATA.map((navItem) => (
          <Link
            onClick={() => setIsOpen(false)}
            href={navItem.href}
            key={navItem.name}
            className="block md:hidden text-secondary text-lg font-montserrat leading-10 uppercase"
          >
            {navItem.name}
          </Link>
        ))}
      </div>
      {/* Show NAV in Mobile */}

      <div className="hidden md:flex gap-4">
        <CtaButton rounded insta />
        <CtaButton rounded />
      </div>
    </header>
  );
};
