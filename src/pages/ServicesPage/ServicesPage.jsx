import React, { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";

const ServicesPage = () => {
  const [services, setServices] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [searchTerm, setSearchTerm] = useState("");
  const servicesPerPage = 8;

  useEffect(() => {
    fetch("https://dherosh-server.vercel.app/services-sections")
      .then((response) => response.json())
      .then((data) => setServices(data))
      .catch((error) => console.log(error));
  }, []);

  const handlePageChange = ({ selected }) => {
    setCurrentPage(selected);
  };

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
    setCurrentPage(0); 
    searchTerm("")
  };

  const filteredServices = services.filter((service) =>
    service.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const offset = currentPage * servicesPerPage;
  const paginatedServices = filteredServices.slice(
    offset,
    offset + servicesPerPage
  );

  return (
    <div className="bg-gradient-to-b from-violet-950 to-black min-h-screen py-10">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl text-center text-white font-bold mb-8">
          Our Services
        </h1>
        <div className="flex">
          <input
            type="text"
            className="py-2 px-4 rounded-md w-full md:w-1/4 mx-auto my-4"
            placeholder="Search by name..."
            value={searchTerm}
            onChange={handleSearch}
          />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-8">
          {paginatedServices.map((service, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-lg p-6 shadow-lg hover:shadow-xl"
            >
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-dharosh">
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

        {/* Pagination - Conditionally render based on the number of filtered services */}
        {filteredServices.length > servicesPerPage && (
          <ReactPaginate
            previousLabel={"<"}
            nextLabel={">"}
            pageCount={Math.ceil(filteredServices.length / servicesPerPage)}
            marginPagesDisplayed={2}
            pageRangeDisplayed={3}
            onPageChange={handlePageChange}
            containerClassName="pagination flex justify-center flex-wrap gap-2 mt-4"
            subContainerClassName="pages pagination"
            activeClassName="active"
            previousClassName={currentPage === 0 ? "disabled" : ""}
            nextClassName={
              currentPage ===
              Math.ceil(filteredServices.length / servicesPerPage) - 1
                ? "disabled"
                : ""
            }
            previousLinkClassName="px-3 text-2xl py-2 rounded-lg bg-green-950 text-white hover:bg-blue-950"
            nextLinkClassName="px-3 py-2 text-2xl rounded-lg bg-green-950 text-white hover:bg-blue-950"
            pageLinkClassName="px-3 py-2 text-2xl rounded-lg bg-green-950 text-white hover:bg-blue-950"
          />
        )}
      </div>
    </div>
  );
};

export default ServicesPage;
