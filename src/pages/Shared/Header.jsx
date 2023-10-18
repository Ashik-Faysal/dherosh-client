import React, { useContext, useState } from "react";
import { FaBars, FaTimes, FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
const Header = () => {
  const { user, logOut } = useContext(AuthContext);

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  // const [isLoggedIn, setIsLoggedIn] = useState(false);
    const handleLogOut = () => {
      // setIsLoggedIn(false);
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
    <header className="bg-blue-900 md:py-4 px-2 sm:px-3 md:px-8 py-2 ">
      <div className="container mx-auto flex items-center justify-between">
        <h1 className="text-2xl text-white font-semibold">Dherosh</h1>
        <nav className="hidden md:flex space-x-4">
          <a href="#" className="text-gray-300 hover:text-white">
            Home
          </a>
          <a href="#" className="text-gray-300 hover:text-white">
            Services
          </a>
          <a href="#" className="text-gray-300 hover:text-white">
            About Us
          </a>
          <a href="#" className="text-gray-300 hover:text-white">
            Contact
          </a>
        </nav>
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-white">
            {isMenuOpen ? <FaTimes /> : <FaBars />}
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
                alt=""
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
              <button className="btn-secondary">Home</button>
            </li>
            <li>
              <button className="btn-secondary">Services</button>
            </li>
            <li>
              <button className="btn-secondary">About Us</button>
            </li>
            <li>
              <button className="btn-secondary">Contact</button>
            </li>
            <li>
              <input
                type="text"
                placeholder="Search"
                className="w-3/4 bg-gray-200 text-black rounded p-2"
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
