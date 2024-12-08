import { Outlet, Link } from "react-router-dom";
import { useState } from "react";
import Logo from "../images/Logo.png";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      {/* Navbar */}
      <nav className="flex justify-between items-center px-8 py-4 w-full bg-white shadow-md">
        {/* Logo Section */}
        <div className="flex items-center">
          <img src={Logo} className="w-12 h-12" alt="Entretech Logo" />
          <div className="ml-4">
            <Link to="/" className="text-2xl font-bold text-black">
              EntreTech
            </Link>
            <p className="text-sm text-gray-600">Your passion is our mission</p>
          </div>
        </div>
        {/* Navigation Links */}
        <div className="hidden md:flex">
          <ul className="flex space-x-6 text-lg">
            <li>
              <Link to="/" className="text-black hover:text-gray-700">Home</Link>
            </li>
            <li>
              <Link to="/tracks" className="text-black hover:text-gray-700">Tracks</Link>
            </li>
            <li>
              <Link to="" className="text-black hover:text-gray-700">FAQ</Link>
            </li>
            <li>
              <Link to="" className="text-black hover:text-gray-700">Kontakt</Link>
            </li>
          </ul>
        </div>
        {/* Hamburger Menu Button */}
        <div 
          id="hamburgerMenu" 
          className="md:hidden cursor-pointer" 
          onClick={toggleMenu}
        >
          <div className="space-y-2">
            <span className="block w-8 h-1 bg-black rounded"></span>
            <span className="block w-8 h-1 bg-black rounded"></span>
            <span className="block w-8 h-1 bg-black rounded"></span>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <ul
        className={`${
          isMenuOpen ? "flex" : "hidden"
        } flex-col space-y-4 items-center bg-white w-full py-4 shadow-md absolute z-10`}
      >
        <li>
          <Link to="/" onClick={toggleMenu} className="text-black hover:text-gray-700">
            Home
          </Link>
        </li>
        <li>
          <Link to="/tracks" onClick={toggleMenu} className="text-black hover:text-gray-700">
            Tracks
          </Link>
        </li>
        <li>
          <Link to="" onClick={toggleMenu} className="text-black hover:text-gray-700">
            FAQ
          </Link>
        </li>
        <li>
          <Link to="" onClick={toggleMenu} className="text-black hover:text-gray-700">
            Kontakt
          </Link>
        </li>
      </ul>

      <Outlet />
    </>
  );
}

export default Navbar;
