// components/BackToTopButton.tsx

import React, { useState, useEffect } from "react";

const BackToTopButton: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`rounded-full mt-3 justify-between z-[1000] p-3 w-full bg-secondary text-primary shadow-lg transition-transform duration-300 ease-in-out flex items-center gap-2 ${
        isVisible ? "opacity-100 scale-100" : "opacity-0 scale-0"
      } hover:bg-transparent group focus:outline-none focus:ring-2 focus:ring-quaternary`}
      aria-label="Voltar ao topo"
    >
      <span className="text-sm md:block group-hover:text-quaternary text-white font-medium">
        Voltar ao Topo
      </span>
      <svg
        className="w-5 h-5 group-hover:fill-[#000000] rotate-180"
        fill="#ffffff"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M19 9l-7 7-7-7"
        />
      </svg>
    </button>
  );
};

export default BackToTopButton;
