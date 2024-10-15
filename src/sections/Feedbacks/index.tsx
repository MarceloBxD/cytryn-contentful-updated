import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FEEDBACKS } from "@/data/feedbacks-data";
import { FeedbackCard } from "../../components/FeedbackCard";
import { Pagination, A11y, Autoplay } from "swiper/modules";
import { Title } from "../../components/Title";

import "swiper/css";
import "swiper/css/pagination";
import { motion } from "framer-motion";
import { FADE_IN_BASIC_ANIMATION } from "@/utils/animations";
import Link from "next/link";

const Feedbacks: React.FC = () => {
  return (
    <motion.section
      id="avaliações"
      {...FADE_IN_BASIC_ANIMATION}
      className="max-w-screen container w-full mt-10"
    >
      <Title className="" text="AVALIAÇÕES" />

      <div>
        <Swiper
          modules={[Pagination, A11y, Autoplay]}
          spaceBetween={50}
          pagination={{ clickable: true }}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            640: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
          className="mt-5 px-5"
        >
          {FEEDBACKS.map((feedback, index) => (
            <SwiperSlide className="flex justify-center" key={index}>
              <FeedbackCard key={feedback.description} {...feedback} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="flex gap-3 group mx-auto w-fit mt-5 items-center justify-end">
        <Link
          target="_blank"
          href="https://www.doctoralia.com.br/isabela-cytryn-2/psicologo/rio-de-janeiro#profile-reviews"
          className="hover:underline hover:cursor-pointer"
        >
          Ver mais avaliações
        </Link>
        <svg
          className="group-hover:translate-x-1 transition-transform duration-150"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M2 12L20 12"
            stroke="black"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M13 5L20 12L13 19"
            stroke="black"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </motion.section>
  );
};

export default Feedbacks;
