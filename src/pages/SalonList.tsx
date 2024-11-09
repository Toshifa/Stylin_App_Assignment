import React, { useState } from 'react';
import salonImage from '../assets/salonImage.png';
import favoriteIcon from '../assets/heartIcon.png'; 

//  type for salon data
interface Salon {
  id: number;
  name: string;
  rating: number;
  reviews: number;
  status: string;
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
      id: 2,
      name: 'Sri Vennala Mens Salon',
      rating: 4.5,
      reviews: 45,
      status: 'Closed',
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
      id: 2,
      name: 'Ladies Salon',
      rating: 4.5,
      reviews: 45,
      status: 'Open',
      location: 'Madhapur, Hyderabad',
      distance: '5.2 km',
      timings: '10:00 am - 8:00 pm',
      price: '₹1099',
      discount: '30% off on bookings above ₹1200',
      image: salonImage,
      tag: "Ladies's Salon",
    },
    {
      id: 2,
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
  

const SalonList: React.FC = () => {
  const [hoveredSalonId, setHoveredSalonId] = useState<number | null>(null);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {salons.map((salon) => (
        <div
          key={salon.id}
          className="border border-gray-200 rounded-lg shadow-lg overflow-hidden relative"
          onMouseEnter={() => salon.status === 'Closed' && setHoveredSalonId(salon.id)}
          onMouseLeave={() => setHoveredSalonId(null)}
        >
          <div className="relative">
            <img src={salon.image} alt={salon.name} className="w-full h-48 object-cover" />
            <span className="absolute top-4 left-4 bg-black text-white text-xs font-semibold px-3 py-1 rounded">
              {salon.tag}
            </span>
            <button className="absolute top-4 right-4 bg-white rounded-full p-1 shadow-md">
              <img src={favoriteIcon} alt="Favorite" className="w-6 h-6" />
            </button>
          </div>

          <div className="p-4">
            <div className="flex items-center justify-between mb-2">
              <h3 className="font-semibold text-lg">{salon.name}</h3>
              <div className="flex items-center text-sm">
                <span className="flex items-center">
                  {salon.rating} <span className="text-yellow-500 ml-1">★</span> ({salon.reviews})
                </span>
                <span className={`ml-2 ${salon.status === 'Open' ? 'text-green-500' : 'text-red-500'}`}>
                  {salon.status}
                </span>
              </div>
            </div>
            <p className="text-sm text-gray-500">{salon.location} • {salon.distance}</p>
            <p className="text-sm text-gray-500 mb-4">{salon.timings}</p>

            <div className="flex items-center justify-between mt-2">
              <span className="text-lg font-semibold">{salon.price}</span>
              <button className="bg-black text-white px-4 py-2 rounded hover:bg-gray-900">Book Now</button>
            </div>
            <p className="text-sm text-blue-500 mt-2">{salon.discount}</p>
          </div>

          {hoveredSalonId === salon.id && salon.status === 'Closed' && (
            <div className="absolute top-2 left-2 bg-blue-100 border border-blue-500 text-blue-700 rounded-lg p-4 w-60 z-10 shadow-md">
              <h4 className="font-semibold">Coming Soon</h4>
              <p className="text-sm">This service is unavailable currently. Please look out in the future.</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default SalonList;
