import React, { useState } from 'react';
import logo from '../assets/stylin.png';
import { Link } from 'react-router-dom';
import menuIcon from '../assets/menu.png';

const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed w-full custom-header-shadow z-50 bg-[#FEFFFF] h-[48px] px-4 py-3 md:h-[64px] md:px-6 lg:h-[80px] lg:px-[83px]">
      <div className="flex justify-between items-center max-w-[1440px] mx-auto">
        
        {/* Logo as Image */}
        <div className="w-[80px] h-[24px] md:w-[123px] md:h-[32px] lg:w-[196px] lg:h-[40px]">
          <Link to="/">
            <img src={logo} alt="Stylin Logo" className="w-full h-full object-contain" />
          </Link>
        </div>

        {/* Navigation Links for Desktop */}
        <nav className="hidden lg:flex items-center space-x-8 text-[#020202] font-medium">
          <a href="#about" className="text-[16px] leading-[19.36px]">About Us</a>
          <a href="#blogs" className="text-[16px] leading-[19.36px]">Blogs</a>
          <a href="#contact" className="text-[16px] leading-[19.36px]">Contact Us</a>
          
          {/* For Business button */}
          <a
            href="#business"
            className="border border-[#020202] rounded hover:bg-gray-100 font-medium flex items-center justify-center w-[133px] h-[44px]"
          >
            For Business
          </a>
          
          {/* Sign Up button */}
          <a
            href="#signup"
            className="bg-black text-white rounded font-semibold hover:bg-gray-900 flex items-center justify-center w-[109px] h-[43px]"
          >
            Sign Up
          </a>
        </nav>

        {/* Tablet and Mobile Menu Icon */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="lg:hidden text-gray-700"
        >
          <img src={menuIcon} alt="Menu Icon" className="w-6 h-6" />
        </button>
      </div>

      {/* Mobile and Tablet Menu (Visible when menuOpen is true) */}
      {menuOpen && (
        <div className="lg:hidden bg-white shadow-lg p-4 space-y-4">
          <a href="#about" className="block text-lg hover:text-black">About Us</a>
          <a href="#blogs" className="block text-lg hover:text-black">Blogs</a>
          <a href="#contact" className="block text-lg hover:text-black">Contact Us</a>
          <a href="#business" className="block border border-black px-4 py-2 rounded hover:bg-gray-100 text-lg">
            For Business
          </a>
          <a href="#signup" className="block bg-black text-white px-4 py-2 rounded hover:bg-gray-900 text-lg">
            Sign Up
          </a>
        </div>
      )}
    </header>
  );
};

export default Header;
