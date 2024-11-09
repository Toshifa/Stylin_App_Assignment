import React from 'react';
import expertImage from '../assets/expertImage.png';
import favoriteIcon from '../assets/heartIcon.png'; 

//  type for professional data
interface Professional {
  id: number;
  name: string;
  rating: number;
  reviews: number;
  status: string;
  role: string;
  experience: string;
  salon: string;
  for: string;
  badge: string;
  availability: string;
}

const professionals: Professional[] = [
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
      id: 3,
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
      id: 4,
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
        id: 5,
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
        id: 6,
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
        id: 7,
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
        id: 8,
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
        id: 9,
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
  ];

const ProfessionalList: React.FC = () => {

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {professionals.map((pro) => (
        <div key={pro.id} className="border border-gray-200 rounded-lg shadow-lg overflow-hidden p-4">
          <div className="relative text-center mb-4">
            <img src={expertImage} alt={pro.name} className="w-24 h-24 rounded-full mx-auto object-cover" />
            <div className="absolute top-2 left-2 bg-yellow-500 text-white text-sm px-2 py-1 rounded">{pro.badge}</div>
            <button className="absolute top-2 right-2 bg-white rounded-full p-1 shadow-md">
              <img src={favoriteIcon} alt="Favorite" className="w-5 h-5 text-gray-600" />
            </button>
          </div>
          <div className="text-center">
            <h3 className="font-semibold text-lg">{pro.name}</h3>
            <div className="flex items-center justify-center text-sm text-gray-500 mb-1">
              <span className="flex items-center">
                {pro.rating} <span className="text-yellow-500 ml-1">★</span> ({pro.reviews})
              </span>
            </div>
            <p className="text-sm text-green-500">{pro.availability}</p>
            <p className="text-sm text-gray-500">{pro.role} • {pro.experience}</p>
            <p className="text-sm text-gray-500">{pro.salon}</p>
            <span className="mt-2 px-2 py-1 border rounded text-gray-700 text-xs">{pro.for}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProfessionalList;
