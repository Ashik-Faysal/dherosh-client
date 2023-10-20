import React from "react";
import Lottie from "lottie-react";
import backgroundAnimation from "../../assets/Animation - 1697692196222 .json";

const TopSection = () => {
  return (
    <div className="relative h-[65vh] w-full overflow-hidden">
      {/* Lottie animation as background */}
      <Lottie
        animationData={backgroundAnimation}
        loop={true}
        autoplay={true}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: -1,
          backgroundColor: "black",
        }}
      />

      {/* Text on top of the Lottie animation */}
      <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center text-center">
        <div className="text-center md:w-1/2">
          <h1 className="text-6xl font-extrabold text-dharosh">Dherosh</h1>
          <p className="text-white text-xl pt-2">
            Your Gateway to Innovative Software Solutions. We specialize in crafting tailored, high-quality software products for businesses and individuals, driving digital transformation with creativity and
            expertise.
          </p>
        </div>
      </div>
    </div>
  );
};

export default TopSection;
