import React, { useState } from 'react';
import beardGrooming from '../assets/beardGrooming.png';
import hairCut from '../assets/hairCut.png';
import hairRemoval from '../assets/hairRemoval.png';
import facial from '../assets/facial.png';
import pedicure from '../assets/pedicure.png';
import massage from '../assets/massage.png';

const services = [
  { image: beardGrooming, title: 'Beard Grooming' },
  { image: hairCut, title: 'Hair Cut' },
  { image: hairRemoval, title: 'Hair Removal' },
  { image: facial, title: 'Facial' },
  { image: pedicure, title: 'Pedicure' },
  { image: massage, title: 'Massage' },
];

const ServicesSection: React.FC = () => {
  const [visibleIndex, setVisibleIndex] = useState(0);

  // Function to move left in the list
  const moveLeft = () => {
    setVisibleIndex((prevIndex) =>
      prevIndex === 0 ? services.length - 3 : prevIndex - 1
    );
  };

  // Function to move right in the list
  const moveRight = () => {
    setVisibleIndex((prevIndex) =>
      prevIndex >= services.length - 3 ? 0 : prevIndex + 1
    );
  };

  return (
    <section className="mt-8 sm:mt-12 lg:mt-16 px-4 sm:px-6 lg:px-16 xl:px-24">
      {/* Header */}
      <div className="flex items-center justify-between mb-4 sm:mb-6 lg:mb-10">
        <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-5xl sm:font-medium font-normal lg:font-normal text-[#020202]">
          Services
        </h2>
        <div className="flex space-x-2">
          <button
            onClick={moveLeft}
            className="text-gray-500 hover:text-black focus:outline-none"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-5 h-5 sm:w-6 sm:h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
          <button
            onClick={moveRight}
            className="text-gray-500 hover:text-black focus:outline-none"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-5 h-5 sm:w-6 sm:h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Services List */}
      <div className="flex justify-center items-center">
        <div className="flex justify-center items-center space-x-4 sm:space-x-6 lg:space-x-8 gap-4 sm:gap-6 lg:gap-8">
          {services.slice(visibleIndex, visibleIndex + 4).map((service, index) => (
            <div key={index} className="text-center min-w-[180px] sm:min-w-[220px] md:min-w-[250px]">
              <div className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 lg:w-36 lg:h-36 rounded-full overflow-hidden border border-gray-300 mx-auto">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="mt-3 text-base sm:text-lg md:text-xl font-medium text-[#020202]">
                {service.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
