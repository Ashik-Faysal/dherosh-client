import React, { useContext, useState } from "react";
import { FaBars,FaRegEyeSlash, FaTimes, FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
const Header = () => {
  const { user, logOut } = useContext(AuthContext);

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
    const handleLogOut = () => {
      logOut()
        .then(() => {})
        .then((error) => console.log(error));
    };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
  };

  return (
    <header className="bg-black text-white  md:py-4  px-2 sm:px-3 md:px-8 py-2 ">
      <div className="container mx-auto flex items-center justify-between">
        <Link to="/" className="text-4xl text-dharosh font-bold">
          Dherosh
        </Link>
        <nav className="hidden md:flex space-x-4">
          <Link to="/" className="btn-outline">
            Home
          </Link>
          <Link to="/services-sections" className="btn-outline">
            Services
          </Link>
          <Link to="/about" className="btn-outline">
            About Us
          </Link>
          <Link to="/contact" className="btn-outline">
            Contact
          </Link>
        </nav>
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-white">
            {isMenuOpen ? <FaRegEyeSlash size={24} /> : <FaBars size={24} />}
          </button>
        </div>
        <div className="hidden md:block">
          <div className="md:hidden">
            <button onClick={toggleSearch} className="text-white">
              {isSearchOpen ? <FaTimes /> : <FaSearch />}
            </button>
          </div>
          {user ? (
            <div className="flex items-center gap-2">
              <img
                className="w-8 h-8 rounded-full"
                src={user.photoURL}
                alt={user.name}
                loading="lazy"
              />
              <button
                onClick={handleLogOut}
                className="btn-danger md:ml-0 mt-4 md:mt-0"
              >
                Sign Out
              </button>
            </div>
          ) : (
            <Link to="/login">
              <button className="btn-primary">Sign In</button>
            </Link>
          )}
        </div>

        {/* Conditional rendering based on login status */}
      </div>
      {isMenuOpen && (
        <nav className="md:hidden text-center py-4">
          <ul className="mt-4 space-y-2">
            <li>
              <Link to="/">
                <button className="w-full btn-outline">Home</button>
              </Link>
            </li>
            <li>
              <Link to="/services-sections">
                <button className="w-full btn-outline">Services</button>
              </Link>
            </li>
            <li>
              <Link to="/about">
                <button className="w-full btn-outline">About Us</button>
              </Link>
            </li>
            <li>
              <Link to="/contact">
                <button className="w-full btn-outline">Contact</button>
              </Link>
            </li>
            <li>
              <input
                type="text"
                placeholder="Search"
                className="w-full bg-gray-200 text-black rounded p-2"
              />
            </li>
            <li>
              {user ? (
                <div className="text-white">
                  <img
                    className="w-12 mx-auto rounded-full transition duration-300 ease-in-out transform hover:scale-105"
                    src={user.photoURL}
                    alt=""
                  />
                  <button
                    onClick={handleLogOut}
                    className="btn-danger md:ml-0 mt-4 md:mt-0 transition duration-300 ease-in-out transform hover:scale-105"
                  >
                    Sign Out
                  </button>
                </div>
              ) : (
                <Link to="/login">
                  <button className="btn-primary transition duration-300 ease-in-out transform hover:scale-105">
                    Sign In
                  </button>
                </Link>
              )}
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;
