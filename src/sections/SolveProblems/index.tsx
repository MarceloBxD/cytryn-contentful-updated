// native imports
import React from "react";
import { motion } from "framer-motion";

// icons
import { TfiFaceSad } from "react-icons/tfi";

// nuvem icon
import { IoCloud } from "react-icons/io5";
import { Pause } from "lucide-react";
import { Heart } from "lucide-react";
import { FaHamburger } from "react-icons/fa";
import { MessageCircleIcon } from "lucide-react";
import { convertToBold } from "@/utils/convertToBold";
// components
import SolveProblemCard from "../../components/SolveProblemCard";
import { FADE_IN_BASIC_ANIMATION } from "@/utils/animations";
import { Title } from "../../components/Title";


type SolveProblemsProps = {
  textsFromContentful: any;
};

const SolveProblems: React.FC<SolveProblemsProps> = ({textsFromContentful}) => {

  const { titulo, subtitulo, cards } = textsFromContentful[0].fields;

  const SOLVE_PROBLEMS_CARDS_DATA = {
    items: [
      {
        faceIcon: <TfiFaceSad size={24} color="#FFF" />,
        description: (
          <p className="font-normal">
            {convertToBold(cards[0])}
          </p>
        ),
      },
      {
        faceIcon: <IoCloud size={24} color="#FFF" />,
        description: (
          <p className="font-normal">
                        {convertToBold(cards[1])}

          </p>
        ),
      },
      {
        faceIcon: <Pause size={24} color="#FFF" />,
        description: (
          <p className="font-normal">
                       {convertToBold(cards[2])}

          </p>
        ),
      },
      {
        faceIcon: <Heart size={24} color="#FFF" />,
        description: (
          <p className="font-normal">
                       {convertToBold(cards[3])}

          </p>
        ),
      },
      {
        faceIcon: <FaHamburger size={24} color="#FFF" />,
        description: (
          <p className="font-normal">
          {convertToBold(cards[4])}
          </p>
        ),
      },
      {
        faceIcon: <MessageCircleIcon size={24} color="#FFF" />,
        description: (
          <p className="font-normal">
            {convertToBold(cards[5])}
          </p>
        ),
      },
    ],
  };
  

  return (
    <motion.section
      {...FADE_IN_BASIC_ANIMATION}
      id="sintomas"
      className={`
    grid
    grid-cols-1
    md:grid-cols-2
    lg:grid-cols-3
    gap-3
    md:gap-4
    container
`}
    >
      <motion.div
        className={`
        col-span-full
        flex
        flex-col
        items-center
        justify-center
        text-center
        text-quaternary
        mt-20
        md:mt-0
        `}
      >
        <Title
          className="
        text-center"
          text={titulo}
        />
        <motion.p className="text-xl mb-10 md:text-2xl lg:text-4xl text-center">
          {subtitulo}
        </motion.p>
      </motion.div>
      {SOLVE_PROBLEMS_CARDS_DATA.items.map((problem, index) => (
        <SolveProblemCard faceIcon={problem.faceIcon} key={index}>
          {problem.description}
        </SolveProblemCard>
      ))}
    </motion.section>
  );
};

export default SolveProblems;

