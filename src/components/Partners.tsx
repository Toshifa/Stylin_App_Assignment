import React from 'react';
import nasscom from '../assets/partners/nasscom.png';
import wadhwani from '../assets/partners/wadhwani.png';
import mahindra from '../assets/partners/mahindra.png';

interface Partner {
  name: string;
  logo: string;
  description: string;
}

const partners: Partner[] = [
    {
        name: 'AIC Mahindra',
        logo: mahindra,
        description:
          'We are currently incubated at AIC Mahindra, specifically designed to help early-stage start-ups.',
    },
    {
        name: 'NASSCOM for Startups',
        logo: nasscom,
        description:
        'We are a part of the NASSCOM Tech.WE program, which supports tech startups with required resources.',
    },
    {
        name: 'DECODE 2.0',
        logo: wadhwani,
        description:
        'Pre-incubated with Wadhwani Foundation in collaboration with Innovation Mission Punjab.',
    },
];

const GrowingTogether: React.FC = () => {
    return (
      <section className="py-10 px-4 sm:px-6 lg:px-24 bg-white text-center">
        <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-normal mb-8 text-gray-800">Growing Together</h2>
        
        <div className="grid gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="p-4 sm:p-6 rounded-lg border border-gray-300 hover:shadow-md transition-shadow duration-300"
            >
              <div className="flex justify-center items-center mb-4">
                <img src={partner.logo} alt={partner.name} className="w-24 h-auto sm:w-32 md:w-36 lg:w-40 object-contain" />
              </div>
              <h3 className="text-base sm:text-lg md:text-xl font-semibold text-gray-900 mb-2">{partner.name}</h3>
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed">{partner.description}</p>
            </div>
          ))}
        </div>
      </section>
    );
  };
  
export default GrowingTogether;
