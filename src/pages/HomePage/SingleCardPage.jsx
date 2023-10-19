import React, { useState } from "react";
import { Fade, Slide } from "react-awesome-reveal";

const SingleCardPage = ({ card }) => {
  const { type, description, imageFront } = card;
  const [isHovered, setIsHovered] = useState(false);

  const handleHover = () => {
    setIsHovered(true);
  };

  const handleUnhover = () => {
    setIsHovered(false);
  };

  return (
    <div
      onMouseEnter={handleHover}
      onMouseLeave={handleUnhover}
      className={`relative overflow-hidden border shadow-md transition-transform transform hover:scale-105 cursor-pointer`}
    >
      <img src={imageFront} alt={type} className="w-96 h-48 object-cover" />
      <div
        className={`p-4 ${
          isHovered
            ? "opacity-100 transform translate-y-0"
            : "opacity-0 transform -translate-y-1"
        } transition-all duration-300 absolute top-0 left-0 w-full h-full text-gray-400 text-center flex flex-col justify-center bg-[conic-gradient(at_bottom_right,_var(--tw-gradient-stops))] from-blue-700 via-blue-800 to-gray-900`}
      >
        <Slide>
          <h2 className="text-lg font-semibold mb-2">{type}</h2>
          <p >{description}</p>
        </Slide>
      </div>
    </div>
  );
};

export default SingleCardPage;
