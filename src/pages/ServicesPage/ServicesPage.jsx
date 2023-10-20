import React, { useEffect, useState } from "react";

const ServicesPage = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("/servicesSection.json")
      .then((response) => response.json())
      .then((data) => setServices(data))
      .catch((error) => console.log(error));
  }, []);

  const itemsPerPage = 16;
  const [currentPage, setCurrentPage] = useState(1);
  const indexOfLastService = currentPage * itemsPerPage;
  const indexOfFirstService = indexOfLastService - itemsPerPage;
  const currentServices = services.slice(
    indexOfFirstService,
    indexOfLastService
  );

  const canGoNext = indexOfLastService < services.length;
  const canGoPrev = currentPage > 1;

  return (
    <div className="bg-gradient-to-b from-blue-400 to-purple-600 min-h-screen py-10">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl text-center text-white font-bold mb-8">
          Our Services
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {currentServices.map((service, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-lg p-6 shadow-lg"
            >
              <h2 className="text-2xl font-bold text-dharosh">
                {service.name}
              </h2>
              <p className="text-gray-600 mt-2">{service.description}</p>
              <div className="absolute inset-0 bg-blue-400 opacity-0 group-hover:opacity-90 transition-opacity duration-300"></div>
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="text-white font-bold">Learn More</p>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center mt-6">
          <button
            onClick={() => setCurrentPage(currentPage - 1)}
            disabled={!canGoPrev}
            className="bg-blue-500 text-white py-2 px-4 rounded-md mr-2"
          >
            Previous
          </button>
          <button
            onClick={() => setCurrentPage(currentPage + 1)}
            disabled={!canGoNext}
            className="bg-blue-500 text-white py-2 px-4 rounded-md"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;
