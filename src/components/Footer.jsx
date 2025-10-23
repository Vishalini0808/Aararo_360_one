import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-gray-900 to-gray-800 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="flex justify-center items-center mb-12">
          <div className="text-center max-w-2xl">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="p-2 rounded-xl">
                <img 
                  src="aararo_logo.png" 
                  alt="ஆராரோ 360°" 
                  className="h-12 w-auto"
                />
              </div>
              <div className="text-2xl font-bold bg-gradient-to-r from-pink-500 to-blue-500 bg-clip-text text-transparent">
                ஆராரோ 360°
              </div>
            </div>
            <p className="text-gray-300 leading-relaxed mb-8 text-lg">
              Your trusted companion in the journey of motherhood, providing comprehensive 
              guidance from pregnancy through the first five years.
            </p>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8">
          <div className="flex justify-center items-center">
            <p className="text-gray-400 text-center">
              &copy; 2025 Aararo 360. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;