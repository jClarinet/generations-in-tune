// components/Footer.tsx
import React from 'react';
// Import specific icons for Instagram (FaInstagram) and YouTube (FaYoutube)
import { FaInstagram, FaYoutube } from 'react-icons/fa'; 

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const emailAddress = "generationsintune@gmail.com";
  const instagramHandle = "@generationsintune";
  const youtubeHandle = "@generationsintunefoundation";

  return (
    <footer className="bg-secondary text-lightcolor">
      <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          
          {/* Company Info Section */}
          <div className="text-center md:text-left">
            <p className="text-lg font-semibold mb-1">Generations In Tune</p>
            <p className="text-sm text-primary">Potomac, Maryland USA</p>
          </div>

          {/* Social Media Links Section */}
          <div className="flex space-x-6">
            
            {/* Email Link */}
            <a 
              href={`mailto:${emailAddress}`} 
              className="text-lightcolor hover:text-fourth transition duration-300"
              aria-label="Email Us"
              title={emailAddress}
            >
              {/* You can use another icon here if you like, e.g., <FaEnvelope className="h-6 w-6" /> */}
              {emailAddress}
            </a>

            {/* Instagram Link */}
            <a
              href={`instagram.com{instagramHandle.replace('@', '')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:text-fourth transition duration-300"
              aria-label="Visit us on Instagram"
              title={instagramHandle}
            >
              <FaInstagram className="h-6 w-6" />
            </a>

            {/* YouTube Link */}
            <a
              href={`youtube.com{youtubeHandle.replace('@', '')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:text-fourth transition duration-300"
              aria-label="Visit us on YouTube"
              title={youtubeHandle}
            >
              <FaYoutube className="h-6 w-6" />
            </a>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="mt-8 border-t border-lightcolor pt-6 text-center">
          <p className="text-sm text-lightcolor">
            &copy; {currentYear} Generations In Tune. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
