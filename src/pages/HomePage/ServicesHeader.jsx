import React, { useEffect, useState } from "react";
import { FaRegEyeSlash } from "react-icons/fa";
import { AiFillCaretDown } from "react-icons/ai";
import { BsToggleOff, BsToggleOn, BsBoxArrowUpRight } from "react-icons/bs";

const ServicesHeader = () => {
  const [servicesData, setServicesData] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    fetch("https://dherosh-server.vercel.app/services")
      .then((res) => res.json())
      .then((data) => setServicesData(data));
  }, []);

  const [openItem, setOpenItem] = useState(1);

  const filteredServices =
    selectedCategory === "All"
      ? servicesData
      : servicesData.filter((service) => service.category === selectedCategory);

  const toggleAccordion = (itemId) => {
    if (itemId === openItem) {
      setOpenItem(null);
    } else {
      setOpenItem(itemId);
    }
  };

  const openMobile = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="bg-[#222327] text-white px-2 md:px-4">
      <div className="grid md:grid-cols-2">
        <div className="my-4">
          <h4 className="text-xl">Best & User-Friendly</h4>
          <h1 className="text-4xl font-bold pt-2 pb-6">
            OUR &nbsp;<span className="text-dharosh">SERVICES</span>
          </h1>
          <p>
            Molestie nunc non blandit massa enim nec dui nunc mattis. Aliquet
            enim tortor at auctor urna. Sapien eget mi proin sed libero enim sed
            faucibus. Vel pretium lectus quam id leo in vitae turpis massa.
          </p>
        </div>
        <div className="md:hidden">
          <button className="w-full mx-auto h-8 rounded-3xl my-2  bg-gray-500 shadow-lg transform transition hover:scale-105 hover:shadow-xl">
            <button onClick={openMobile} className="text-white">
              {isMenuOpen ? (
                <FaRegEyeSlash size={24} />
              ) : (
                <AiFillCaretDown size={24} />
              )}
            </button>
          </button>

          {isMenuOpen && (
            <div className="md:hidden mx-2 ">
              <button
                onClick={() => setSelectedCategory("Design")}
                className={`btn-outline w-full ${
                  selectedCategory === "Design" && "bg-blue-700"
                }`}
              >
                Design
              </button>
              <button
                onClick={() => setSelectedCategory("Coding")}
                className={`btn-outline w-full ${
                  selectedCategory === "Coding" && "bg-blue-700"
                }`}
              >
                Coding
              </button>
              <button
                onClick={() => setSelectedCategory("Development")}
                className={`btn-outline w-full ${
                  selectedCategory === "Development" && "bg-blue-700"
                }`}
              >
                Development
              </button>
              <button
                onClick={() => setSelectedCategory("Digital Marketing")}
                className={`btn-outline w-full ${
                  selectedCategory === "Digital Marketing" && "bg-blue-700"
                }`}
              >
                Digital Marketing
              </button>
            </div>
          )}
        </div>
        <div className="hidden md:flex md:space-x-2 md:items-center md:justify-center flex-wrap">
          <button
            onClick={() => setSelectedCategory("All")}
            className={`btn-outline ${
              selectedCategory === "All" && "bg-blue-700"
            }`}
          >
            All Services
          </button>
          <button
            onClick={() => setSelectedCategory("Design")}
            className={`btn-outline ${
              selectedCategory === "Design" && "bg-blue-700"
            }`}
          >
            Design
          </button>
          <button
            onClick={() => setSelectedCategory("Coding")}
            className={`btn-outline ${
              selectedCategory === "Coding" && "bg-blue-700"
            }`}
          >
            Coding
          </button>
          <button
            onClick={() => setSelectedCategory("Development")}
            className={`btn-outline ${
              selectedCategory === "Development" && "bg-blue-700"
            }`}
          >
            Development
          </button>
          <button
            onClick={() => setSelectedCategory("Digital Marketing")}
            className={`btn-outline ${
              selectedCategory === "Digital Marketing" && "bg-blue-700"
            }`}
          >
            Digital Marketing
          </button>
        </div>
      </div>
      <div className="accordion my-8 space-y-4">
        {filteredServices?.map((service) => (
          <div
            key={service.id}
            className="bg-white shadow-lg rounded-lg overflow-hidden transform transition-transform duration-500 hover:scale-105"
          >
            <div
              className="accordion-header bg-black from-stone-600 via-stone-400 to-stone-200
               py-6 px-4 cursor-pointer flex justify-between "
              onClick={() => toggleAccordion(service.id)}
            >
              <h2 className="text-xl font-semibold hover-text-amber-700">
                {service.name}
              </h2>
              <span className="accordion-icon text-blue-600">
                {service.id === openItem ? (
                  <BsToggleOn size={36} />
                ) : (
                  <BsToggleOff size={36} />
                )}
              </span>
            </div>
            <div
              className={`accordion-content p-4 bg-black grid md:grid-cols-2 items-center md:gap-8 ${
                service.id === openItem ? "block" : "hidden"
              }`}
              id={service.id}
            >
              <img
                loading="lazy"
                src={service.image}
                alt={service.name}
                className="mt-4 rounded-full"
              />
              <div className="w-4/5 mx-auto">
                <p className="text-3xl mb-2 text-dharosh font-bold">
                  {service.work}
                </p>
                <p className="">{service.description}</p>
                <button className="bg-blue-500 text-white px-4 py-2 rounded-lg flex items-center my-4 space-x-2 hover-bg-blue-600 transition duration-300">
                  <span className="mr-2">View More</span> <BsBoxArrowUpRight />
                </button>
              </div>
            </div>
            <hr />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicesHeader;
