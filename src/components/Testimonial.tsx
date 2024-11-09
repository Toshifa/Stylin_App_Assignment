import React, { useState } from 'react';
import testimonial1 from '../assets/Testimonial/testimonial1.png';
import testimonial2 from '../assets/Testimonial/testimonial2.png';
import testimonial3 from '../assets/Testimonial/testimonial3.png';

interface Testimonial {
  name: string;
  image: string;
  text: string;
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    name: 'Sneha',
    image: testimonial1,
    text: "Whether it's a haircut, nail extensions, or a spa treatment, I trust Stylin to lead me to the best options available. Thanks to Stylin, I not only look my best but also feel confident.",
    rating: 5,
  },
  {
    name: 'Arjun',
    image: testimonial2,
    text: "Stylin goes beyond being just a salon discovery platform; it’s the ultimate companion for all my beauty needs. Stylin has everything I need in one place!",
    rating: 4,
  },
  {
    name: 'Pavan',
    image: testimonial3,
    text: "Stylin has transformed my beauty routine. Every salon recommendation from the platform has exceeded my expectations with top-notch service and results.",
    rating: 3,
  },
  
  {
    name: 'Sneha',
    image: testimonial1,
    text: "Whether it's a haircut, nail extensions, or a spa treatment, I trust Stylin to lead me to the best options available. Thanks to Stylin, I not only look my best but also feel confident.",
    rating: 5,
  },
  {
    name: 'Arjun',
    image: testimonial2,
    text: "Stylin goes beyond being just a salon discovery platform; it’s the ultimate companion for all my beauty needs. Stylin has everything I need in one place!",
    rating: 4,
  },
  {
    name: 'Pavan',
    image: testimonial3,
    text: "Stylin has transformed my beauty routine. Every salon recommendation from the platform has exceeded my expectations with top-notch service and results.",
    rating: 3,
  },
];

const TrustSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const testimonialsPerSlide = 3;
  const totalDots = Math.ceil(testimonials.length / testimonialsPerSlide);

  const handleDotClick = (index: number) => {
    setActiveIndex(index);
  };

  // Calculate which testimonials to display
  const currentTestimonials = testimonials.slice(
    activeIndex * testimonialsPerSlide,
    activeIndex * testimonialsPerSlide + testimonialsPerSlide
  );

  return (
    <section className="py-12 px-4 sm:px-6 lg:px-24 bg-white text-center">
      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-normal mb-8 text-gray-800">Why Trust Us?</h2>

      {/* Counters */}
      <div className="flex flex-col sm:flex-row justify-center gap-6 sm:gap-8 lg:gap-16 mb-12">
        <div className="text-center">
          <p className="text-base sm:text-lg font-normal text-gray-600">Bookings</p>
          <p className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900">500+</p>
        </div>
        <div className="text-center">
          <p className="text-base sm:text-lg font-normal text-gray-600">Partners</p>
          <p className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900">500+</p>
        </div>
        <div className="text-center">
          <p className="text-base sm:text-lg font-normal text-gray-600">Rating</p>
          <div className="flex items-center justify-center space-x-2">
            <p className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900">4.8</p>
            <span className="text-2xl sm:text-3xl text-yellow-500">★</span>
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
        {currentTestimonials.map((testimonial, index) => (
          <div key={index} className="p-4 sm:p-6 border border-gray-300 rounded-lg max-w-sm bg-gray-50">
            <p className="text-gray-700 text-sm sm:text-base mb-6">
              "{testimonial.text}"
            </p>
            <div className="flex items-center justify-center space-x-2">
              <img src={testimonial.image} alt={testimonial.name} className="w-8 h-8 sm:w-10 sm:h-10 rounded-full" />
              <div>
                <p className="text-gray-900 font-medium">{testimonial.name}</p>
                <p className="text-yellow-500 text-sm">
                  {'★'.repeat(testimonial.rating)}
                  {'☆'.repeat(5 - testimonial.rating)}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Dots */}
      <div className="flex justify-center mt-6">
        {Array.from({ length: totalDots }).map((_, index) => (
          <span
            key={index}
            onClick={() => handleDotClick(index)}
            className={`mx-1 cursor-pointer rounded-full transition-all duration-300 ${
              activeIndex === index
                ? 'w-8 h-2 bg-black' // Active dot style
                : 'w-2 h-2 bg-gray-400' // Inactive dot style
            }`}
          ></span>
        ))}
      </div>
    </section>
  );
};

export default TrustSection;