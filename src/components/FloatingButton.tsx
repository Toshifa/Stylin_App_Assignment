import React, { useEffect, useState } from 'react';
import arrowIcon from '../assets/Floating/arrow.png';

const BackToTopSection: React.FC = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  // Track page scroll to toggle button visibility
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  // Scroll to the top of the page
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <section className="fixed bottom-4 right-4 sm:bottom-6 sm:right-8 lg:bottom-8 lg:right-12 flex justify-end z-50">
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="
            w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 
            rounded-lg lg:rounded-xl 
            bg-white 
            shadow-md lg:shadow-lg
            transition-transform duration-300 ease-in-out 
            hover:scale-105
            focus:outline-none
          "
          aria-label="Back to Top"
        >
          <img 
            src={arrowIcon} 
            alt="Back to Top" 
            className="w-5 h-5 sm:w-6 sm:h-6 lg:w-8 lg:h-8 m-auto"
          />
        </button>
      )}
    </section>
  );
};

export default BackToTopSection;





















// import React, { useEffect, useState } from 'react';
// import arrowIcon from '../assets/Floating/arrow.png';

// const BackToTopSection: React.FC = () => {
//   const [isVisible, setIsVisible] = useState<boolean>(false);

//   // Track page scroll to toggle button visibility
//   useEffect(() => {
//     const toggleVisibility = () => {
//       if (window.scrollY > 300) {
//         setIsVisible(true);
//       } else {
//         setIsVisible(false);
//       }
//     };

//     window.addEventListener('scroll', toggleVisibility);
//     return () => window.removeEventListener('scroll', toggleVisibility);
//   }, []);

//   // Scroll to the top of the page
//   const scrollToTop = () => {
//     window.scrollTo({
//       top: 0,
//       behavior: 'smooth',
//     });
//   };

//   return (
//     <section className="flex justify-end py-8 pr-8 md:pr-20 lg:pr-32">
//       {isVisible && (
//         <button
//           onClick={scrollToTop}
//           className="
//             w-[72px] h-[72px] 
//             rounded-[16px] 
//             bg-[#FFFFFF] 
//             shadow-[rgba(0,0,0,0.3)_0px_4px_8px] 
//             transition-transform duration-300 ease-in-out 
//             hover:scale-105
//             focus:outline-none
//           "
//           aria-label="Back to Top"
//         >
//           <img 
//             src={arrowIcon} 
//             alt="Back to Top" 
//             className="w-[25.53px] h-[26.1px] m-auto"
//           />
//         </button>
//       )}
//     </section>
//   );
// };

// export default BackToTopSection;
