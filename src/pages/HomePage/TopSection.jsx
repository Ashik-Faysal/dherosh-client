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
        <div className="text-center w-80">
          <h1 className="text-6xl font-extrabold text-[#6F4E37]">Dherosh</h1>
          <p className="text-white text-xl ">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laudantium
            magni obcaecati doloremque recusandae voluptates blanditiis in.
            Excepturi repudiandae quae consequatur!
          </p>
        </div>
      </div>
    </div>
  );
};

export default TopSection;
