import React from 'react';
import Professional1 from '../assets/images/professional1.png';
import Professional2 from '../assets/images/professional2.png';
import Professional3 from '../assets/images/professional3.png';
import stylinBusiness from '../assets/Stylin for Business.png';
import Star1 from '../assets/stars/star1.png';
import Star2 from '../assets/stars/star2.png';
import Star3 from '../assets/stars/star3.png';
import Star4 from '../assets/stars/star4.png';

const ForBusiness: React.FC = () => {
  return (
    <section className="bg-black text-white py-12 px-4 sm:px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center space-y-8 md:space-y-0">
        
        {/* Left Side */}
        <div className="md:w-1/2 space-y-4 sm:space-y-6 text-center md:text-left">
          <img src={stylinBusiness} alt="Stylin Logo" className="w-44 sm:w-56 md:w-[283px] h-auto" />
          <p className="text-gray-400 leading-relaxed mx-auto md:mx-0 max-w-[400px] sm:max-w-[514px]">
            As we revolutionize the landscape of styling, we invite passionate professionals and forward-thinking businesses to partner with us on this transformative journey.
          </p>
          <button className="px-5 py-2 sm:px-6 sm:py-3 mt-4 bg-white text-black font-medium rounded hover:bg-gray-200 transition">
            List your Business
          </button>
        </div>

        {/* Right Side with Images and Stars */}
        <div className="md:w-1/2 flex justify-center relative space-x-2 sm:space-x-4">
          
          {/* Left Column Images */}
          <div className="flex flex-col space-y-4">
            <img src={Professional1} alt="Professional 1" className="w-44 h-36 sm:w-60 sm:h-44 rounded-lg object-cover" />
            <img src={Professional3} alt="Professional 3" className="w-52 h-40 sm:w-80 sm:h-56 rounded-lg object-cover" />
          </div>

          {/* Right Column Image */}
          <div className="flex items-center">
            <img src={Professional2} alt="Professional 2" className="w-36 h-48 sm:w-52 sm:h-64 rounded-lg object-cover" />
          </div>

          {/* Decorative Stars */}
          <img src={Star1} alt="Star 1" className="absolute top-0 right-10 sm:right-20 w-10 h-10 sm:w-14 sm:h-14" />
          <img src={Star2} alt="Star 2" className="absolute top-1/2 -left-8 sm:-left-16 w-8 h-8 sm:w-10 sm:h-10" />
          <img src={Star3} alt="Star 3" className="absolute top-4 right-4 sm:right-8 w-6 h-6 sm:w-8 sm:h-8" />
          <img src={Star4} alt="Star 4" className="absolute bottom-4 right-10 sm:right-24 w-5 h-5 sm:w-6 sm:h-6" />
        </div>
      </div>
    </section>
  );
};

export default ForBusiness;
