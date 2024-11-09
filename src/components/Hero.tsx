import React, { useState, useEffect } from 'react';
import image1 from '../assets/image1.png';
import image2 from '../assets/image2.png';
import image3 from '../assets/image3.png';
import image4 from '../assets/image4.png';
import image5 from '../assets/image5.png';
import LocationModal from '../model/LocationModal';

const images = [image1, image2, image3, image4, image5];
const locations = ["Banjara Hills", "Jubilee Hills", "Gachibowli", "Kondapur", "Hitech City", "Other"];

const HeroSection: React.FC = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [selectedLocation, setSelectedLocation] = useState("");
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const handleLocationChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const location = e.target.value;
    setSelectedLocation(location);
    if (location === "Other") {
      setShowModal(true);
    }
  };
  
  return (
    <section className="relative flex items-center justify-center bg-black h-[500px] sm:h-[600px] md:h-[700px] lg:h-[760px] overflow-hidden">
      {/* Background Image Slider */}
      <div
        className="absolute inset-0 transition-opacity duration-1000 ease-in-out bg-cover bg-center"
        style={{
          backgroundImage: `url(${images[currentImageIndex]})`,
        }}
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-80"></div>

      {/* Main Content */}
      <div className="relative z-10 text-center max-w-[995px] mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-white font-inter font-extralight text-[36px] sm:text-[50px] sm:leading-[56px] md:text-[60px] md:leading-[68px] lg:text-[75px] lg:leading-[82px]">
          Discover Premium Beauty <br /> Services In Hyderabad
        </h1>

        {/* Search Bar */}
        <div className="mt-6 flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-2 bg-white rounded-lg py-2 px-4 shadow-lg w-full max-w-md sm:max-w-lg md:max-w-2xl lg:max-w-[744px]">
          {/* Location Select */}
          <div className="flex items-center space-x-2 w-full sm:w-auto">
            <select
              className="w-full sm:w-auto text-[14px] sm:text-[16px] bg-transparent outline-none font-medium text-gray-700"
              value={selectedLocation}
              onChange={handleLocationChange}
            >
              <option value="" disabled selected hidden>
                Location
              </option>
              {locations.map((loc) => (
                <option key={loc} value={loc}>
                  {loc}
                </option>
              ))}
            </select>
          </div>

          {/* Search Input */}
          <input
            type="text"
            className="flex-1 text-[14px] sm:text-[16px] leading-[20px] font-medium text-gray-700 placeholder-gray-400 focus:outline-none w-full sm:w-auto"
            placeholder="Explore services, salons, professionals, etc."
          />
        </div>
      </div>

     {/* Location Modal */}
     {showModal && <LocationModal onClose={() => setShowModal(false)} />}
    </section>
  );
};

export default HeroSection;
