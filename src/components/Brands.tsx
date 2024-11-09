import React from 'react';
import looksLogo from '../assets/brands/looks.png';
import naturalsLogo from '../assets/brands/naturals.png';
import juiceLogo from '../assets/brands/juice.png';
import lorealLogo from '../assets/brands/loreal.png';
import lakmeLogo from '../assets/brands/lakme.png';
import greentrendsLogo from '../assets/brands/greentrends.png';
import shahnazLogo from '../assets/brands/shahnaz.png';
import studio11Logo from '../assets/brands/studio11.png';

interface Brand {
  name: string;
  logo: string;
}

const brands: Brand[] = [
  { name: 'Looks Salon', logo: looksLogo },
  { name: 'Naturals', logo: naturalsLogo },
  { name: 'Juice', logo: juiceLogo },
  { name: 'L\'Oreal Professionnel', logo: lorealLogo },
  { name: 'Lakme Salon', logo: lakmeLogo },
  { name: 'Green Trends', logo: greentrendsLogo },
  { name: 'Shahnaz Husain', logo: shahnazLogo },
  { name: 'Studio 11', logo: studio11Logo },
];

const FeaturedBrands: React.FC = () => {
  return (
    <section className="py-10 px-4 sm:px-6 lg:px-24 bg-white text-center">
      <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-normal mb-8 text-gray-800">Featured Brands</h2>
      
      <div className="overflow-hidden relative">
        {/* Scrolling logos container */}
        <div className="flex items-center gap-8 sm:gap-10 lg:gap-16 animate-scroll">
          {/* Repeat brands array twice for seamless looping */}
          {[...brands, ...brands].map((brand, index) => (
            <div key={index} className="flex-shrink-0 w-16 h-16 sm:w-20 sm:h-20 md:w-28 md:h-28 lg:w-36 lg:h-36">
              <img src={brand.logo} alt={brand.name} className="w-full h-full object-contain" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedBrands;
