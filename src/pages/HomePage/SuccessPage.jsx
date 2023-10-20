import React from "react";
import { FaArrowRight } from "react-icons/fa";

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

  return (
    <div
      className="bg-cover bg-center h-screen flex flex-col justify-center items-center"
      style={{
        backgroundImage:
          'url("https://i.ibb.co/Kqm3kRw/ai-artificial-intelligence-wave.png")',
      }}
    >
      <div className="text-center text-white px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 w-full md:w-1/2">
        <h5 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl">
          For Business Success
        </h5>
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold my-2 text-dharosh">
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
          <button className="bg-transparent text-dharosh border border-dharosh px-4 hover:text-white  hover:bg-black py-2 rounded-lg sm:ml-4 transition-transform transform hover:scale-105 w-1/2 mx-auto flex items-center">
            Follow Us
            <FaArrowRight className="ml-2" />
          </button>
        </div>
        <div>
          <h5 className="text-2xl mt-12 font-semibold">
            <span className="text-dharosh">500+</span> Outstanding{" "}
            <span className="text-dharosh">Companies</span> Trusted Us
            Globally
          </h5>
        </div>
      </div>
      <div className="w-full md:w-2/3 text-white p-4 my-8">
        <marquee
          className="text-xl"
          scrollamount="4"
          direction="left"
          vspace="10"
        >
          {technologyCompanies.map((company, index) => (
            <span className="text-2xl font-bold mx-4 uppercase" key={index}>
              {company}
            </span>
          ))}
        </marquee>
      </div>
    </div>
  );
};

export default SuccessPage;
