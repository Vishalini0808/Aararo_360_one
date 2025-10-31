import React, { useState } from 'react'; 
import { Link } from 'react-router-dom'; 
 
const BabyTrackerNavbar = () => { 
  const [isOpen, setIsOpen] = useState(false); 
 
  return ( 
    <nav className="bg-white/80 backdrop-blur-md border-b border-pink-200 sticky top-0 z-50"> 
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> 
        <div className="flex justify-between h-16"> 
          <div className="flex items-center"> 
            <Link to="/monitoringpage" className="flex-shrink-0 flex items-center"> 
              <span className="px-5 rounded-xl text-3xl font-semibold"> 
                ← 
              </span> 
            </Link> 
          </div> 
           
          {/* Desktop Menu */} 
          <div className="hidden md:flex items-center space-x-8"> 
            
            
            <button className="text-gray-700 hover:text-pink-500 transition-colors"> 
              Community 
            </button> 
          </div> 
 
          {/* Mobile menu button */} 
          <div className="md:hidden flex items-center"> 
            <button 
              onClick={() => setIsOpen(!isOpen)} 
              className="text-gray-700 hover:text-pink-500" 
            > 
              <span className="text-xl font-bold">☰</span> 
            </button> 
          </div> 
        </div> 
 
        {/* Mobile Menu */} 
        {isOpen && ( 
          <div className="md:hidden bg-white/95 backdrop-blur-md border-t border-pink-200"> 
            <div className="px-2 pt-2 pb-3 space-y-1"> 
              

             
              <button className="block px-3 py-2 text-gray-700 hover:text-pink-500 w-full text-left"> 
                Community 
              </button> 
            </div> 
          </div> 
        )} 
      </div> 
    </nav> 
  ); 
}; 
 
export default BabyTrackerNavbar;