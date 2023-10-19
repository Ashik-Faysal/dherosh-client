import React, { useEffect, useState } from "react";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";

const ClientPage = () => {
  const [clients, setClients] = useState([]);
  const [hoveredClient, setHoveredClient] = useState(null);

  useEffect(() => {
    fetch("/clients.json")
      .then((res) => res.json())
      .then((data) => setClients(data));
  }, []);

  const handleCardHover = (client) => {
    setHoveredClient(client);
  };

  const handleCardLeave = () => {
    setHoveredClient(null);
  };

  return (
    <div className="my-8">
      <div className="text-center">
        <h4 className="text-xl font-bold">Partnership</h4>
        <h1 className="text-4xl font-bold uppercase">
          Our Client <span className="text-[#6F4E37]">Partners</span>
        </h1>
      </div>
      <div className="flex flex-wrap my-8 justify-center">
        {clients.map((client, index) => (
          <div
            key={index}
            className="m-4 relative cursor-pointer transition-transform transform hover:scale-105"
            onMouseEnter={() => handleCardHover(client)}
            onMouseLeave={handleCardLeave}
          >
            <div className="relative">
              {hoveredClient === client ? (
                <>
                  <img
                    src={client.img2}
                    alt={client.name}
                    className="w-80 h-80 object-cover"
                  />
                  <div className="absolute top-0 left-0 w-full bg-opacity-80 p-2 text-white">
                    <marquee
                      behavior="scroll"
                      direction="left"
                      scrollamount="5"
                    >
                      {client.profession}
                    </marquee>
                  </div>
                </>
              ) : (
                <img
                  src={client.img1}
                  alt={client.name}
                  className="w-80 h-80 object-cover"
                />
              )}
            </div>
            <div className="flex items-center justify-between bg-gray-100 p-2">
              <div>
                <h3 className="font-semibold">{client.name}</h3>
              </div>
              {hoveredClient === client && (
                <div className="flex space-x-2">
                  {client.facebookLink && (
                    <a
                      href={client.facebookLink}
                      className="text-blue-500 hover:text-blue-700 transform transition-transform hover:scale-110"
                    >
                      <FaFacebook />
                    </a>
                  )}
                  {client.instagramLink && (
                    <a
                      href={client.instagramLink}
                      className="text-red-500 hover:text-red-700 transform transition-transform hover:scale-110"
                    >
                      <FaInstagram />
                    </a>
                  )}
                  {client.linkedinLink && (
                    <a
                      href={client.linkedinLink}
                      className="text-indigo-500 hover:text-indigo-700 transform transition-transform hover:scale-110"
                    >
                      <FaLinkedin />
                    </a>
                  )}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ClientPage;
