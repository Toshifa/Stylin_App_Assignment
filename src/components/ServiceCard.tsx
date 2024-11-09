import React from 'react';
import { useNavigate } from 'react-router-dom'; // using React Router for navigation
import salonImage from '../assets/salonImage.png';
import favoriteIcon from '../assets/heartIcon.png';
import locationIcon from '../assets/servicecardicons/pin_drop.png'; 
import timeIcon from '../assets/servicecardicons/schedule.png';          
import offerIcon from '../assets/servicecardicons/bxs_offer.png'; 

interface Salon {
  id: number;
  name: string;
  rating: number;
  reviews: number;
  status: 'Open' | 'Closed';
  location: string;
  distance: string;
  timings: string;
  price: string;
  discount: string;
  image: string;
  tag: string;
}

const salons: Salon[] = [
  {
    id: 1,
    name: 'Sri Vennala Ladies Salon',
    rating: 4.5,
    reviews: 45,
    status: 'Open',
    location: 'Madhapur, Hyderabad',
    distance: '5.2 km',
    timings: '10:00 am - 8:00 pm',
    price: '₹1099',
    discount: '30% off on bookings above ₹1200',
    image: salonImage,
    tag: "Men's Salon",
  },
  {
    id: 1,
    name: 'Sri Vennala Ladies Salon',
    rating: 4.5,
    reviews: 45,
    status: 'Open',
    location: 'Madhapur, Hyderabad',
    distance: '5.2 km',
    timings: '10:00 am - 8:00 pm',
    price: '₹1099',
    discount: '30% off on bookings above ₹1200',
    image: salonImage,
    tag: "Men's Salon",
  },
  {
    id: 1,
    name: 'Sri Vennala Ladies Salon',
    rating: 4.5,
    reviews: 45,
    status: 'Open',
    location: 'Madhapur, Hyderabad',
    distance: '5.2 km',
    timings: '10:00 am - 8:00 pm',
    price: '₹1099',
    discount: '30% off on bookings above ₹1200',
    image: salonImage,
    tag: "Men's Salon",
  },
 
];

const TopSalonsSection: React.FC = () => {
  const navigate = useNavigate();

  const handleViewAllClick = () => {
    navigate('/salons');
  };

  return (
    <section className="py-10 px-4 sm:px-6 md:px-8 lg:px-20 xl:px-24">
      {/* Header */}
      <div className="flex items-center justify-between mb-6 sm:mb-8 lg:mb-10">
        <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-5xl sm:font-medium font-normal lg:font-normal text-[#020202]">Top Salons</h2>
        <button
          onClick={handleViewAllClick}
          className="flex items-center text-[#020202] hover:text-black text-xs sm:text-xs md:text-sm lg:text-base font-medium"
        >
          View All
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="ml-1 w-5 h-5"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      {/* Salon Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {salons.map((salon) => (
          <div key={salon.id} className="border border-gray-200 rounded-lg shadow-lg overflow-hidden relative">
            {/* Image with Tags and Favorite Icon */}
            <div className="relative">
              <img src={salon.image} alt={salon.name} className="w-full h-40 sm:h-48 md:h-56 object-cover" />
              {/* Men's Salon Tag */}
              <span className="absolute top-4 left-4 bg-black text-white text-xs font-semibold px-2 py-1 sm:px-3 sm:py-1 rounded-xl">
                {salon.tag}
              </span>
              {/* Favorite Icon */}
              <button className="absolute top-4 right-4 bg-white rounded-full p-1 shadow-md">
                <img src={favoriteIcon} alt="Favorite" className="w-5 h-5 sm:w-6 sm:h-6" />
              </button>
            </div>

            {/* Salon Details */}
            <div className="p-3 sm:p-4">
              {/* Name, Rating, and Status */}
              <div className="flex items-center justify-between mb-1 sm:mb-2">
                <h3 className="font-semibold text-base sm:text-lg">{salon.name}</h3>
                <div className="flex items-center text-xs sm:text-sm">
                  <span className="flex items-center">
                    {salon.rating} <span className="text-yellow-500 ml-1">★</span> ({salon.reviews})
                  </span>
                  <span className={`ml-2 ${salon.status === 'Open' ? 'text-green-500' : 'text-red-500'}`}>
                    {salon.status}
                  </span>
                </div>
              </div>

              {/* Location and Distance */}
              <div className="flex items-center text-xs sm:text-sm text-gray-500 mb-1">
                <img src={locationIcon} alt="Location" className="w-3 h-3 sm:w-4 sm:h-4 mr-1" />
                <span>{salon.location}</span>
                <span className="mx-1">•</span>
                <span>{salon.distance}</span>
              </div>

              {/* Timings */}
              <p className="text-xs sm:text-sm text-gray-500 flex items-center mb-3 sm:mb-4">
                <img src={timeIcon} alt="Timings" className="w-3 h-3 sm:w-4 sm:h-4 mr-1" />
                {salon.timings}
              </p>

              {/* Price and Book Now Button */}
              <div className="flex items-center justify-between mt-2">
                <div className="flex items-baseline space-x-1">
                  <span className="text-xs sm:text-sm text-gray-500">Starts @</span>
                  <span className="text-base sm:text-lg font-semibold">{salon.price}</span>
                </div>
                <button className="bg-black text-white px-3 py-1 sm:px-4 sm:py-2 rounded hover:bg-gray-900 text-xs sm:text-sm">
                  Book Now
                </button>
              </div>

              {/* Discount */}
              <p className="text-xs sm:text-sm text-blue-500 flex items-center mt-2">
                <img src={offerIcon} alt="Offer" className="w-3 h-3 sm:w-4 sm:h-4 mr-1" />
                {salon.discount}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TopSalonsSection;
