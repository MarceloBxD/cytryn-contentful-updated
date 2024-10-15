import React from "react";
import { motion } from "framer-motion";

type TitleProps = {
  text: string;
  className?: string;
};

export const Title = ({ text, className }: TitleProps) => {
  return (
    <motion.h2
      className={`text-xl text-secondary md:text-3xl mb-8 md:mb-2 text-left font-bold  ${className} `}
    >
      {text}
    </motion.h2>
  );
};
