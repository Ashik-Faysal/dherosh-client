import React from "react";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaGithub,
  FaLinkedin,
  FaTwitch,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#000080] px-2 sm:px-3 md:px-8 py-2 md:py-6">
      <div className="container mx-auto grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="text-left">
          <h2 className="text-4xl text-[#6F4E37] font-bold">Dherosh</h2>
          <p className="text-gray-400 mt-2">
            Tech Innovators. We create software solutions that shape the future
          </p>
        </div>
        <div className="mt-6 md:mt-0">
          <h3 className="text-xl text-white font-semibold">Quick Links</h3>
          <ul className="mt-3">
            <li className="mt-2">
              <a href="#" className="text-gray-400 hover:text-white">
                Home
              </a>
            </li>
            <li className="mt-2">
              <a href="#" className="text-gray-400 hover:text-white">
                Services
              </a>
            </li>
            <li className="mt-2">
              <a href="#" className="text-gray-400 hover:text-white">
                About Us
              </a>
            </li>
            <li className="mt-2">
              <a href="#" className="text-gray-400 hover:text-white">
                Contact
              </a>
            </li>
          </ul>
        </div>
        <div className="mt-6 md:mt-0">
          <h3 className="text-xl text-white font-semibold">Social Media</h3>
          <ul className="mt-3 flex gap-2">
            <li className="mt-2">
              <a
                href="#"
                className="text-blue-400 hover:text-blue-600 transform hover:scale-110 transition-transform duration-300"
              >
                <FaFacebook size={32} />
              </a>
            </li>
            <li className="mt-2">
              <a
                href="#"
                className="text-blue-400 hover:text-blue-600 transform hover:scale-110 transition-transform duration-300"
              >
                <FaTwitter size={32} />
              </a>
            </li>
            <li className="mt-2">
              <a
                href="#"
                className="text-red-400 hover:text-red-600 transform hover:scale-110 transition-transform duration-300"
              >
                <FaInstagram size={32} />
              </a>
            </li>
            <li className="mt-2">
              <a
                href="#"
                className="text-green-400 hover:text-green-600 transform hover:scale-110 transition-transform duration-300"
              >
                <FaLinkedin size={32} />
              </a>
            </li>
            <li className="mt-2">
              <a
                href="#"
                className="text-gray-600 hover:text-gray-800 transform hover:scale-110 transition-transform duration-300"
              >
                <FaGithub size={32} />
              </a>
            </li>
          </ul>
        </div>
        <div className="mt-6 md:mt-0">
          <h3 className="text-xl text-white font-semibold">Contact</h3>
          <p className="text-gray-400 mt-2">
            123 Main St
            <br />
            City, State, ZIP
            <br />
            Email: example@email.com
            <br />
            Phone: (123) 456-7890
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
