"use client";

import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

// animações
import { motion } from "framer-motion";
import { FADE_IN_BASIC_ANIMATION } from "@/utils/animations";
import { Title } from "../Title";

type FaqProps = {
  answers: string[];
  questions: string[] | undefined;
};

const Faq: React.FC<FaqProps> = ({ answers, questions }) => {
  const halfLength = Math.ceil((questions?.length || 0) / 2);
  const firstHalfQuestions = questions?.slice(0, halfLength);
  const secondHalfQuestions = questions?.slice(halfLength);

  const firstHalfAnswers = answers.slice(0, halfLength);
  const secondHalfAnswers = answers.slice(halfLength);

  return (
    <motion.section
      {...FADE_IN_BASIC_ANIMATION}
      id="faq"
      className="container my-20 px-4 md:px-0"
    >
      <Title className="ml-6" text="PERGUNTAS FREQUENTES" />
      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <Accordion type="multiple">
            {firstHalfQuestions?.map((question, index) => (
              <AccordionItem
                className="max-w-[90%] mx-auto"
                key={index}
                value={`item-${index}`}
              >
                <AccordionTrigger className="text-left text-quaternary hover:text-secondary">
                  <p className="max-w-[90%] text-[16px]">{question}</p>
                </AccordionTrigger>
                <AccordionContent className="text-quaternary">
                  {firstHalfAnswers[index]} {/* Resposta correspondente */}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
        <div className="-mt-5 md:mt-0">
          <Accordion type="multiple">
            {secondHalfQuestions?.map((question, index) => (
              <AccordionItem
                className="max-w-[90%] mx-auto"
                key={index + halfLength} // Ajustando o índice para o segundo conjunto
                value={`item-${index + halfLength}`}
              >
                <AccordionTrigger className="text-left text-quaternary hover:text-secondary">
                  <p className="max-w-[90%] text-[16px]">{question}</p>
                </AccordionTrigger>
                <AccordionContent className="text-quaternary">
                  {secondHalfAnswers[index]} {/* Resposta correspondente */}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </motion.section>
  );
};

export default Faq;
