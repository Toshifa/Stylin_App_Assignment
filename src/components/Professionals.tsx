import React from 'react';
import expertImage from '../assets/expertImage.png';
import { useNavigate } from 'react-router-dom';

//  data for professionals
const professionals = [
  {
    id: 1,
    name: 'Sai Priya',
    rating: 4.5,
    reviews: 45,
    status: 'Available today',
    role: 'Nail Artist',
    experience: '12+ Yrs Exp.',
    salon: 'Sri Vennela Ladies Salon',
    for: 'For Men',
    badge: 'Popular',
    availability: 'Available today',
  },
  {
    id: 2,
    name: 'Arjun',
    rating: 3.5,
    reviews: 45,
    status: 'Available today',
    role: 'Hair Stylist',
    experience: '12+ Yrs Exp.',
    salon: 'Sri Vennela Ladies Salon',
    for: 'For Men',
    badge: 'Popular',
    availability: 'Available today',
  },
  {
    id: 3,
    name: 'Krishna',
    rating: 4.5,
    reviews: 45,
    status: 'Available in next 8 hrs',
    role: 'Nail Artist',
    experience: '12+ Yrs Exp.',
    salon: 'Sri Vennela Ladies Salon',
    for: 'For Women',
    badge: 'Top Rated',
    availability: 'Available in next 8 hrs',
  },
  {
    id: 4,
    name: 'Imran',
    rating: 4.5,
    reviews: 45,
    status: 'Check Availability',
    role: 'Nail Artist',
    experience: '12+ Yrs Exp.',
    salon: 'Sri Vennela Ladies Salon',
    for: 'For Women',
    badge: 'Top Rated',
    availability: 'Check Availability',
  },
];

const ExpertProfessionalsSection: React.FC = () => {
  const navigate = useNavigate();

  const handleViewAllClick = () => {
    navigate('/salons', { state: { activeTab: 'Professionals' } });
  };

  return (
    <section className="py-10 px-4 sm:px-6 lg:px-20 xl:px-24">
      {/* Header */}
      <div className="flex items-center justify-between mb-6 sm:mb-8 lg:mb-10">
        <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-medium text-[#020202]">Expert Professionals</h2>
        <button
          onClick={handleViewAllClick}
          className="flex items-center text-[#020202] hover:text-black text-base sm:text-lg font-medium"
        >
          View All
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="ml-1 w-4 h-4 sm:w-5 sm:h-5"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      {/* Professional Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {professionals.map((pro) => (
          <div key={pro.id} className="border border-gray-200 rounded-lg shadow-lg overflow-hidden p-4 sm:p-6">
            <div className="relative text-center mb-4">
              <img
                src={expertImage}
                alt={pro.name}
                className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 rounded-full mx-auto object-cover"
              />
              <div className="absolute top-2 left-2 text-white text-xs sm:text-sm px-2 py-1 rounded"
                style={{
                  background: "linear-gradient(90deg, #E7B536 0%, #FFE8AF 100%)"
                }}
              >{pro.badge}</div>
              <button className="absolute top-2 right-2 bg-white rounded-full p-1 shadow-md">
                <svg className="w-4 h-4 sm:w-5 sm:h-5 text-gray-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                </svg>
              </button>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center text-xs sm:text-sm text-gray-500 mb-1">
                <span className="flex items-center">
                  {pro.rating} <span className="text-yellow-500 ml-1">★</span> ({pro.reviews})
                </span>
              </div>
              <h3 className="font-semibold text-base sm:text-lg">{pro.name}</h3>
              
              <p className="text-xs sm:text-sm">
                <span className={`ml-2 ${pro.availability === 'Available today' ? 'text-green-500' : 'text-blue-500'}`}>
                  {pro.availability}
                </span>
              </p>
              <p className="text-xs sm:text-sm text-black font-medium">{pro.role} • {pro.experience}</p>
              <p className="text-xs sm:text-sm text-gray-500">{pro.salon}</p>
              <span className="mt-2 px-2 py-1 border rounded-xl text-gray-700 text-xs sm:text-sm bg-gray-300">{pro.for}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ExpertProfessionalsSection;