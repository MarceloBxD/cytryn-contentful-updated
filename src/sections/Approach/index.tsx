"use client";

// native imports
import React from "react";
import { motion } from "framer-motion";

// assets
import { FaCheck } from "react-icons/fa";

// animations
import { FADE_IN_BASIC_ANIMATION } from "@/utils/animations";

// data
import { APPROACH_DATA } from "@/data";
import { Title } from "../../components/Title";
import { convertToBold } from "@/utils/convertToBold";

type ApproachProps = {
  textsFromContentful: any;
};

const Approach: React.FC<ApproachProps> = ({textsFromContentful}) => {

  const { titulo, subtitulo, descricao, boxItems } = textsFromContentful[0].fields;

  const boxItemsArray = boxItems.split('&');

  return (
    <motion.section
      id="abordagem"
      {...FADE_IN_BASIC_ANIMATION}
      className="container my-20 flex gap-10 flex-col md:flex-row"
    >
      <motion.div className="flex-1">
        <Title text={convertToBold(titulo)} />
        <h3 className="text-lg md:mt-5 md:text-xl text-quaternary">
          {convertToBold(subtitulo)}
        </h3>
        <p className="text-md md:text-lg mt-2 md:mt-5 text-quaternary max-w-[90%]">
          {convertToBold(descricao)}
        </p>
      </motion.div>
      <motion.div className="flex-1">
        <ul className="flex flex-col gap-3 bg-transparent p-3 md:p-5 rounded-xl border-4 border-secondary">
          {boxItemsArray.map((item: string, index:number) => (
            <>
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="flex items-center gap-2"
                key={index}
              >
                <FaCheck size={42} color="#AE8F72" />
                <li className="ml-3 text-quaternary">{convertToBold(item)}</li>
              </motion.div>
              <div className="hidden md:block w-full h-[0.5px] bg-secondary rounded-full last:hidden" />
            </>
          ))}
        </ul>
      </motion.div>
    </motion.section>
  );
};

export default Approach;
