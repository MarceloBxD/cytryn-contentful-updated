import { useApp } from "@/contexts/AppContext";
import { useEffect, useState } from "react";

const HamburgerMenu = () => {
  const { isOpen, setIsOpen } = useApp();

  const [scrolled, setScrolled] = useState(false);

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

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div className="p-2 flex items-center justify-center">
      <div className="space-y-1 cursor-pointer z-50" onClick={toggleMenu}>
        <div
          className={`w-8 h-1  transform transition duration-300 ease-in-out ${
            isOpen
              ? "rotate-45 bg-secondary translate-y-[1px]"
              : `${scrolled ? "bg-secondary" : "bg-white"}`
          }`}
        ></div>
        <div
          className={`w-8 h-1 ${
            scrolled ? "bg-secondary" : "bg-white"
          } transform transition duration-300 ease-in-out ${
            isOpen ? "opacity-0" : ``
          }`}
        ></div>
        <div
          className={`w-8 h-1  transform transition duration-300 ease-in-out ${
            isOpen
              ? "-rotate-45 bg-secondary -translate-y-[14px]"
              : `${scrolled ? "bg-secondary" : "bg-white"}`
          }`}
        ></div>
      </div>
    </div>
  );
};

export default HamburgerMenu;
