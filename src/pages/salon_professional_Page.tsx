import React, { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import filterIcon from '../assets/salon-list-icon/filterIcon.png';
import sortIcon from '../assets/salon-list-icon/sortIcon.png';
import SalonList from './SalonList';
import ProfessionalList from './ProfessionalList';

const SalonListingPage: React.FC = () => {
  const location = useLocation();

  const [activeTab, setActiveTab] = useState("Salons");
  const [showFilterOptions, setShowFilterOptions] = useState(false);
  const [showSortOptions, setShowSortOptions] = useState(false);

  const toggleFilterOptions = () => setShowFilterOptions((prev) => !prev);
  const toggleSortOptions = () => setShowSortOptions((prev) => !prev);

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to top on load
    if (location.state && location.state.activeTab) {
      setActiveTab(location.state.activeTab);
    }
  }, [location.state]);

  return (
    <div className="container mx-auto py-6 px-4 sm:px-6 lg:px-16 xl:px-20">
      {/* Breadcrumb and Title */}
      <div className="mb-6 mt-20">
        <nav aria-label="breadcrumb" className="text-xs sm:text-sm text-gray-500 flex items-center gap-1 mb-4">
          <Link to="/" className="hover:text-black">Home</Link>
          <span className="text-gray-400"> &gt; </span>
          <span className="text-black font-semibold">Salons</span>
        </nav>

        {/* Tabs for Salons and Professionals */}
        <div className="flex justify-center space-x-4 sm:space-x-8 border-b border-gray-300 pb-2 mb-6">
          <button
            onClick={() => setActiveTab("Salons")}
            className={`${
              activeTab === "Salons" ? "text-black font-semibold border-b-2 border-black" : "text-gray-500"
            } text-sm sm:text-base pb-1 sm:pb-2`}
          >
            Salons
          </button>
          <button
            onClick={() => setActiveTab("Professionals")}
            className={`${
              activeTab === "Professionals" ? "text-black font-semibold border-b-2 border-black" : "text-gray-500"
            } text-sm sm:text-base pb-1 sm:pb-2`}
          >
            Professionals
          </button>
        </div>
      </div>

      {/* Search and Filters Section */}
      <div className="mb-6 bg-white shadow-md rounded-lg p-4 border border-gray-200">
        <div className="flex flex-wrap gap-4 items-center">
          <input
            type="text"
            placeholder="Location"
            className="w-full sm:w-auto p-2 border border-gray-300 rounded-md"
          />
          <input
            type="text"
            placeholder="Find services or salons here"
            className="flex-grow p-2 border border-gray-300 rounded-md"
          />
          
          {/* Filter Button */}
          <div className="relative">
            <button
              onClick={toggleFilterOptions}
              className="p-2 bg-gray-100 border border-gray-300 rounded-md flex items-center justify-center"
            >
              <img src={filterIcon} alt="Filter" className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>
            {showFilterOptions && (
              <div className="absolute top-full mt-2 w-40 bg-white border border-gray-300 rounded-md shadow-lg z-10">
                {['Unisex Salon', "Men's Salon", "Women's Salon", 'Open Now', 'Deals'].map((option) => (
                  <div
                    key={option}
                    className="px-4 py-2 cursor-pointer hover:bg-gray-100"
                    onClick={() => {
                      
                      setShowFilterOptions(false); 
                    }}
                  >
                    {option}
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Sort Button */}
          <div className="relative">
            <button
              onClick={toggleSortOptions}
              className="p-2 bg-gray-100 border border-gray-300 rounded-md flex items-center justify-center"
            >
              <img src={sortIcon} alt="Sort" className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>
            {showSortOptions && (
              <div className="absolute top-full mt-2 w-40 bg-white border border-gray-300 rounded-md shadow-lg z-10">
                {['Nearest', 'High Rated', 'Lowest Cost', 'Highest Cost'].map((option) => (
                  <div
                    key={option}
                    className="px-4 py-2 cursor-pointer hover:bg-gray-100"
                    onClick={() => {
                     
                      setShowSortOptions(false); 
                    }}
                  >
                    {option}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Filters for Different Salon Types */}
        <div className="flex flex-wrap gap-2 mt-4 justify-center">
          {['All', 'Hair Salons', 'Spas', 'Nail Centres', 'Tattoo Studios', 'Makeup Studios'].map((filter, index) => (
            <button
              key={index}
              className={`px-4 py-2 rounded-full border ${
                filter === 'All' ? 'bg-black text-white' : 'bg-gray-100 text-gray-700'
              } text-xs sm:text-sm`}
            >
              {filter}
            </button>
          ))}
        </div>
      </div>

      {/* Conditional Rendering for Salon and Professional Lists */}
      {activeTab === "Salons" ? <SalonList /> : <ProfessionalList />}
    </div>
  );
};

export default SalonListingPage;
