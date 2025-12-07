// components/CircleImage.tsx
import Image from 'next/image';
import React from 'react';

interface CircleImageProps {
  src: string;
  alt: string;
  // This prop will accept Tailwind height/width classes, e.g., 'w-32 h-32'
  className?: string; 
}

// The component now accepts the dimensions via the className prop
const CircleImage: React.FC<CircleImageProps> = ({ src, alt, className = 'w-32 h-32' }) => {
  return (
    // The wrapper div uses the passed className for dimensions
    <div className={`${className} rounded-full overflow-hidden relative shadow-md`}>
      <Image
        src={src}
        alt={alt}
        fill // Use the modern 'fill' prop
        objectFit="cover"    
        className=" transform transition duration-300"
      />
    </div>
  );
};

export default CircleImage;
