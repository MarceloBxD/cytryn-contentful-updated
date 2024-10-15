"use client";
import { motion } from "framer-motion";
import React from "react";

interface SolveProblemCardProps extends React.HTMLAttributes<HTMLDivElement> {
  faceIcon?: React.ReactNode;
  children: React.ReactNode | React.ReactNode[];
}

const SolveProblemCard: React.FC<SolveProblemCardProps> = ({
  faceIcon,
  children,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      whileHover={{ scale: 1.05 }}
      className={`flex gap-4 p-2 bg-transparent border-secondary border-4 shadow-md rounded-lg items-center hover:shadow-lg transition-shadow duration-300 ease-in-out cursor-default`}
    >
      <div
        className={`flex items-center justify-center  bg-secondary rounded-full p-2`}
      >
        {faceIcon}
      </div>
      <div className={`text-quaternary text-left font-semibold text-lg`}>
        {children}
      </div>
    </motion.div>
  );
};

export default SolveProblemCard;
