import React, { useState, useEffect } from "react";
import { FaArrowRight } from "react-icons/fa";
import Lottie from "lottie-react";
import backgroundAnimation from "../../assets/animation_lnzh6y1t.json";

const SuccessPage = () => {
  const technologyCompanies = [
    "Apple",
    "Microsoft",
    "Amazon",
    "Google",
    "Samsung",
    "IBM",
    "Intel",
    "Oracle",
    "NVIDIA",
    "Tesla",
    "Facebook",
  ];

  const [animationHeight, setAnimationHeight] = useState("100%");
  const [showAnimation, setShowAnimation] = useState(true);

  // Adjust the Lottie animation height for small screens
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 640) {
        setShowAnimation(false);
        setAnimationHeight("100%");
      } else {
        setShowAnimation(true);
        setAnimationHeight("100%");
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Initial adjustment

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div
      className="h-screen flex flex-col justify-center items-center"
      style={{ position: "relative" }}
    >
      {showAnimation ? (
        <Lottie
          animationData={backgroundAnimation}
          loop={true}
          autoplay={true}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: animationHeight,
            zIndex: -1,
          }}
        />
      ) : (
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundRepeat: "no-repeat",
            backgroundSize: "100%",
            zIndex: -1,
            backgroundImage:
              'url("https://i.ibb.co/1snj6GR/desktop-wallpaper-artificial-int.png")',
          }}
        />
      )}

      <div className="text-center text-white px-4 sm:px-8 md:px-12 lg:px:16 xl:px-20 w-full md:w-1/2">
        <h5 className="text-base sm:text-lg md:text-xl lg:text-2xl">
          For Business Success
        </h5>
        <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold my-2 text-dharosh">
          We collaborate with you & identify business needs
        </h1>
        <p className="text-xs sm:text-sm md:text-base lg:text-lg">
          Laoreet sit amet cursus sit amet dictum. Ac tortor vitae purus
          faucibus ornare suspendisse sed. Fermentum et sollicitudin ac orci
          phasellus egestas tellus. Pha egestas tellus rutrum tellus pellente
          tortor.
        </p>
        <div className="grid md:grid-cols-2 gap-2 items-center mt-4">
          <button className="bg-[#6F4E37] text-white hover:bg-[#855f45] px-4 py-2 rounded-lg mb-4 sm:mb-0 sm:mr-4 transition-transform transform hover:scale-105 flex items-center w-1/2 mx-auto">
            Talk Now
            <FaArrowRight className="ml-2" />
          </button>
          <button className="bg-transparent text-dharosh border border-dharosh px-4 hover:text-white hover:bg-black py-2 rounded-lg sm:ml-4 transition-transform transform hover:scale-105 w-1/2 mx-auto flex items-center">
            Follow Us
            <FaArrowRight className="ml-2" />
          </button>
        </div>
        <div>
          <h5 className="text-lg sm:text-xl mt-12 font-semibold">
            <span className="text-dharosh">500+</span> Outstanding{" "}
            <span className="text-dharosh">Companies</span> Trusted Us Globally
          </h5>
        </div>
      </div>
      <div className="w-full md:w-2/3 text-white p-4 my-8">
        <marquee
          className="text-sm sm:text-base"
          scrollamount="4"
          direction="left"
          vspace="10"
        >
          {technologyCompanies.map((company, index) => (
            <span
              className="text-md sm:text-lg font-bold mx-4 uppercase"
              key={index}
            >
              {company}
            </span>
          ))}
        </marquee>
      </div>
    </div>
  );
};

export default SuccessPage;
