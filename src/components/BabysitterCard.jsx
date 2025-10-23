import React from 'react';

export default function BabysitterCard({ babysitter, onBookNow }) { 
  return ( 
    <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group hover:-translate-y-1"> 
      {/* Avatar Section */} 
      <div className="relative bg-gradient-to-br from-pink-400 to-purple-500 h-48 flex items-center justify-center"> 
        <div className="w-32 h-32 rounded-full bg-white flex items-center justify-center text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-pink-500 to-purple-600 shadow-xl"> 
          {babysitter.image} 
        </div> 
        {/* Rating Badge */} 
        <div className="absolute top-4 right-4 bg-white rounded-full px-3 py-1 flex items-center gap-1 shadow-lg"> 
          <span className="text-yellow-400">★</span>
          <span className="text-sm font-bold text-gray-800">{babysitter.rating}</span> 
        </div> 
      </div> 
 
      {/* Content Section */} 
      <div className="p-6"> 
        <h3 className="text-2xl font-bold text-gray-800 mb-2">{babysitter.name}</h3> 
 
        {/* Location */} 
        <div className="flex items-center gap-2 text-gray-600 mb-3"> 
          <span className="text-pink-500">📍</span>
          <span className="text-sm font-medium">{babysitter.location}</span> 
        </div> 
 
        {/* Info Grid */} 
        <div className="grid grid-cols-2 gap-3 mb-4"> 
          <div className="flex items-center gap-2 text-gray-600"> 
            <div className="w-8 h-8 rounded-lg bg-pink-100 flex items-center justify-center"> 
              <span className="text-sm font-semibold text-pink-600">{babysitter.age}</span> 
            </div> 
            <span className="text-sm">years old</span> 
          </div> 
 
          <div className="flex items-center gap-2 text-gray-600"> 
            <div className="w-8 h-8 rounded-lg bg-purple-100 flex items-center justify-center"> 
              <span className="text-purple-600">💼</span>
            </div> 
            <span className="text-sm">{babysitter.experience} yrs exp</span> 
          </div> 
        </div> 
 
        {/* Hourly Rate */} 
        <div className="flex items-center gap-2 mb-4 p-3 bg-gradient-to-r from-pink-50 to-purple-50 rounded-lg"> 
          <span className="text-purple-600">₹</span>
          <span className="text-xl font-bold text-gray-800">{babysitter.hourlyRate}</span> 
          <span className="text-gray-600">/hour</span> 
        </div> 
 
        {/* Description */} 
        <p className="text-gray-600 text-sm mb-6 line-clamp-3"> 
          {babysitter.description} 
        </p> 
 
        {/* Book Now Button */} 
        <button 
          onClick={() => onBookNow(babysitter)} 
          className="w-full bg-gradient-to-r from-pink-500 to-purple-600 text-white py-3 rounded-xl font-semibold hover:from-pink-600 hover:to-purple-700 transition-all duration-300 shadow-md hover:shadow-lg transform hover:scale-[1.02]" 
        > 
          Book Now 
        </button> 
      </div> 
    </div> 
  ); 
} 