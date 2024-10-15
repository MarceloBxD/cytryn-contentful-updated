import React from "react";

type FeedbackCardProps = {
  quantOfstars: number;
  description: string;
  author?: string;
  role?: string;
};

const SVG = () => (
  <svg
    width="50"
    height="50"
    viewBox="0 0 50 50"
    fill="#000"
    xmlns="http://www.w3.org/2000/svg"
    className="absolute bottom-5 right-5"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M25 0C11.191 0 0 11.191 0 25s11.191 25 25 25 25-11.191 25-25S38.809 0 25 0zm0 3c12.703 0 23 10.297 23 22s-10.297 22-23 22S2 37.703 2 26 12.297 3 25 3zm0 6c-6.075 0-11 4.925-11 11s4.925 11 11 11 11-4.925 11-11-4.925-11-11-11zm0 3c4.963 0 9 4.037 9 9s-4.037 9-9 9-9-4.037-9-9 4.037-9 9-9z"
    />
  </svg>
);

export const FeedbackCard = ({
  quantOfstars,
  description,
  author,
  role,
}: FeedbackCardProps) => {
  return (
    <div className="bg-white rounded hover:pointer-grab min-h-[270px] md:min-h-[300px] border border-terciary py-4 px-4 flex flex-col gap-2">
      <div className="flex gap-2 items-center">
        {Array.from({ length: quantOfstars }, (_, index) => (
          <div key={index}>
            <span>⭐</span>
          </div>
        ))}
      </div>
      <div className=" text-gray-400 text-sm md:text-md pt-5">
        {description}
      </div>
      <div>
        <h3 className="text-lg md:text-xl font-bold">{author}</h3>
        <p className="text-sm md:text-md text-gray-400">{role}</p>
      </div>
      <div className="absolute bottom-0 right-0 opacity-10">
        <SVG />
      </div>
    </div>
  );
};
