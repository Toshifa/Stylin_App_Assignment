import React from 'react';
import EffortlessIcon from '../assets/icons/effortless-discovery.png';
import BookingIcon from '../assets/icons/convenient-booking.png';
import PricesIcon from '../assets/icons/competitive-prices.png';
import ExperienceIcon from '../assets/icons/enhanced-experience.png';

const features = [
  {
    icon: EffortlessIcon,
    title: "Effortless Discovery",
    description: "Simply find and explore the best salons based on your preference and requirements.",
  },
  {
    icon: BookingIcon,
    title: "Convenient Booking",
    description: "With just a few clicks, schedule your appointments seamlessly and hassle-free.",
  },
  {
    icon: PricesIcon,
    title: "Competitive Prices",
    description: "Unlock special offers with every use, gaining points and rewards on the way.",
  },
  {
    icon: ExperienceIcon,
    title: "Enhanced Experience",
    description: "Enhance your salon experience with transparent high-quality services.",
  },
];

const WhyChoose: React.FC = () => {
  return (
    <section className="py-10 px-4 sm:px-6 lg:px-16 bg-white">
      {/* Section Title */}
      <div className="text-center mb-10 sm:mb-12">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-900">Why Choose STYLIN?</h2>
      </div>

      {/* Feature Cards */}
      <div className="grid gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-4 max-w-7xl mx-auto">
        {features.map((feature, index) => (
          <div
            key={index}
            className="flex flex-col items-center p-6 bg-white border border-gray-200 rounded-lg shadow-md hover:shadow-lg transition-shadow"
          >
            <img
              src={feature.icon}
              alt={`${feature.title} icon`}
              className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 mb-4"
            />
            <h3 className="text-lg sm:text-xl font-medium text-gray-800 mt-2 mb-2">{feature.title}</h3>
            <p className="text-sm sm:text-base text-gray-600 text-center">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyChoose;
