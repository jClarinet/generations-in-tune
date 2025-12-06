'use client';

import { useState, useEffect } from 'react';
// Import the images directly as modules
import genintunepic from '../public/genintunepic.webp';
import genpic from '../public/genpic.jpg';
import Image from 'next/image';

// Now, store the imported objects in the array
const images = [
  genintunepic,
  genpic,
];


export default function BackgroundSliderTailwind() {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  // ... (rest of your useEffect hook remains the same) ...
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(intervalId);
  }, []);


  return (
    <div className="relative w-full h-screen overflow-hidden">
      {images.map((imgObj, index) => ( // Note: we map an object now, not a string src
        <Image
          key={index} // Use index or imgObj.src for key
          src={imgObj} // Pass the imported image object
          alt={`Background image ${index + 1}`}
          fill
          className={`
            absolute top-0 left-0 w-full h-full object-cover z-0
            transition-opacity duration-1000 ease-in-out
            ${index === currentIndex ? 'opacity-100' : 'opacity-0'}
          `}
          priority={index === 0}
        />
      ))}
      <div className="absolute inset-0 bg-lightcolor opacity-60 z-10"></div>
      
      {/* ... (rest of the overlay content) ... */}
      <div className="relative z-10 flex items-center justify-center h-full">
      </div>
    </div>
  );

}
