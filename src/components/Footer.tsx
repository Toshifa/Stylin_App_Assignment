import React from 'react';
import instagram from '../assets/socials/instagram.png';
import linkedin from '../assets/socials/linkedin.png';
import youtube from '../assets/socials/youtube.png';
import stylinWhite from '../assets/StylinWhite.png';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#020202] text-white py-8 sm:py-10 lg:py-12 px-4 sm:px-8 md:px-12 lg:px-20">
      <div className="max-w-screen-xl mx-auto">
        
        {/* Top Section: Logo & Links */}
        <div className="flex flex-col md:flex-row md:justify-between border-b border-gray-700 pb-6 mb-4 space-y-8 md:space-y-0">
          
          {/* Left Section: Branding & Contact Info */}
          <div className="md:w-1/2">
            <img src={stylinWhite} alt="Stylin Logo" className="w-20 sm:w-24 mb-4" />
            <p className="text-xs sm:text-sm text-gray-400">admin@stylin.in</p>
            <p className="text-xs sm:text-sm text-gray-400">Crafted in Hyderabad, India</p>
            <div className="flex space-x-3 sm:space-x-4 mt-4">
              <a href="#" aria-label="Instagram">
                <img src={instagram} alt="Instagram" className="w-5 h-5 sm:w-6 sm:h-6" />
              </a>
              <a href="#" aria-label="LinkedIn">
                <img src={linkedin} alt="LinkedIn" className="w-5 h-5 sm:w-6 sm:h-6" />
              </a>
              <a href="#" aria-label="YouTube">
                <img src={youtube} alt="YouTube" className="w-5 h-5 sm:w-6 sm:h-6" />
              </a>
            </div>
          </div>
          
          {/* Right Section: Navigation Links */}
          <div className="md:w-1/2 grid grid-cols-2 sm:grid-cols-3 gap-6 sm:gap-8">
            <div>
              <h4 className="text-sm sm:text-lg font-semibold text-gray-100 mb-2 sm:mb-3">ABOUT STYLIN</h4>
              <ul className="space-y-1 sm:space-y-2 text-gray-400 text-xs sm:text-sm">
                <li><a href="#">About us</a></li>
                <li><a href="#">Blogs</a></li>
                <li><a href="#">Achievements</a></li>
                <li><a href="#">Careers</a></li>
                <li><a href="#">Contact us</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-sm sm:text-lg font-semibold text-gray-100 mb-2 sm:mb-3">BUSINESS</h4>
              <ul className="space-y-1 sm:space-y-2 text-gray-400 text-xs sm:text-sm">
                <li><a href="#">List your Business</a></li>
                <li><a href="#">Collaborate with Us</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-sm sm:text-lg font-semibold text-gray-100 mb-2 sm:mb-3">LEARN MORE</h4>
              <ul className="space-y-1 sm:space-y-2 text-gray-400 text-xs sm:text-sm">
                <li><a href="#">Help & Support</a></li>
                <li><a href="#">Terms & Conditions</a></li>
                <li><a href="#">Privacy Policy</a></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Section: Copyright */}
        <div className="text-center md:text-left text-gray-500 text-xs mt-4">
          &copy; 2024 Halis Salon Innovations Pvt. Ltd. | All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
