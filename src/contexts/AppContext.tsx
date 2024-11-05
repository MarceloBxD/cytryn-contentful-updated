"use client";

import axios from "axios";
import React, { createContext, useContext, useEffect } from "react";

type AppContextProps = {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  isMobile: boolean;
  isTablet: boolean;
  isDesktop: boolean;
};

const AppContext = createContext<AppContextProps | undefined>(undefined);



type DeviceProps = {
  mobile: boolean | undefined;
  tablet: boolean | undefined;
  desktop: boolean | undefined;
};

export const AppProvider = ({ children }: { children: React.ReactNode }) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [device, setDevice] = React.useState<DeviceProps>({
    mobile: undefined,
    tablet: undefined,
    desktop: undefined,
  });

  const [isMobile, setIsMobile] = React.useState(false);
  const [isTablet, setIsTablet] = React.useState(false);
  const [isDesktop, setIsDesktop] = React.useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 640) {
        setIsMobile(true);
        setIsTablet(false);
        setIsDesktop(false);
      } else if (window.innerWidth > 640 && window.innerWidth <= 1024) {
        setIsMobile(false);
        setIsTablet(true);
        setIsDesktop(false);
      } else {
        setIsMobile(false);
        setIsTablet(false);
        setIsDesktop(true);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [isMobile, isTablet, isDesktop, setIsMobile, setIsTablet, setIsDesktop]);

  const value = {
    isOpen,
    setIsOpen,
    isMobile,
    isTablet,
    isDesktop,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useAppContext must be used within an AppProvider");
  }
  return context;
};
