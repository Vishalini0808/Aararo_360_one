import React, { useState } from 'react'; 
import { useNavigate } from 'react-router-dom'; 
import BabysitterCard from '../components/BabysitterCard'; 
import BookingModal from '../components/BookingModal'; 

const babysitters = [ 
  { 
    id: 1, 
    name: "Anjali Sharma", 
    age: 28, 
    location: "Chennai", 
    experience: 3, 
    hourlyRate: 250, 
    description: "Certified childcare professional with experience in toddler care. Loves teaching rhymes and educational activities to children.", 
    rating: 4.8, 
    image: "AS" 
  }, 
  { 
    id: 2, 
    name: "Meena Krishnan", 
    age: 32, 
    location: "Bangalore", 
    experience: 5, 
    hourlyRate: 300, 
    description: "Former preschool teacher with excellent references. Specializes in newborn and infant care with patience and dedication.", 
    rating: 4.9, 
    image: "MK" 
  }, 
  { 
    id: 3, 
    name: "Kavya Patel", 
    age: 25, 
    location: "Mumbai", 
    experience: 2, 
    hourlyRate: 200, 
    description: "Energetic and creative babysitter. Great with arts, crafts, and keeping children engaged with fun activities.", 
    rating: 4.7, 
    image: "KP" 
  }, 
  { 
    id: 4, 
    name: "Priya Reddy", 
    age: 30, 
    location: "Delhi", 
    experience: 4, 
    hourlyRate: 350, 
    description: "Experienced with multiple children and homework support. CPR certified and first aid trained for child safety.", 
    rating: 5.0, 
    image: "PR" 
  }, 
  { 
    id: 5, 
    name: "Lakshmi Iyer", 
    age: 27, 
    location: "Hyderabad", 
    experience: 3, 
    hourlyRate: 280, 
    description: "Patient and caring babysitter with background in child psychology. Excellent at managing routines and bedtime.", 
    rating: 4.8, 
    image: "LI" 
  }, 
  { 
    id: 6, 
    name: "Divya Mehta", 
    age: 29, 
    location: "Pune", 
    experience: 4, 
    hourlyRate: 320, 
    description: "Professional nanny with cooking skills. Can prepare healthy meals and snacks for children of all ages.", 
    rating: 4.9, 
    image: "DM" 
  } 
]; 

export default function BabysittingPage() { 
  const navigate = useNavigate(); 
  const [selectedBabysitter, setSelectedBabysitter] = useState(null); 
  
  const handleBookNow = (babysitter) => { 
    setSelectedBabysitter(babysitter); 
  }; 
 
  const handleCloseModal = () => { 
    setSelectedBabysitter(null); 
  }; 
 
  return ( 
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-pink-100"> 
      {/* Header */} 
      <div className="bg-white shadow-md"> 
        <div className="container mx-auto px-4 py-4"> 
          <button 
            onClick={() => navigate('/')} 
            className="flex items-center gap-2 text-gray-700 hover:text-purple-600 transition-colors duration-200" 
          > 
            <span className="text-xl">←</span>
            <span className="font-semibold">Back to Home</span> 
          </button> 
        </div> 
      </div> 
 
      {/* Main Content */} 
      <div className="container mx-auto px-4 py-12"> 
        {/* Intro Section */} 
        <div className="text-center mb-12"> 
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4"> 
            Professional <span className="bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">Babysitting Services</span> 
          </h1> 
          <p className="text-lg text-gray-600 max-w-3xl mx-auto"> 
            Nowadays, many women in India are working as babysitters for hourly jobs. Explore trusted babysitters near you below. 
          </p> 
        </div> 
 
        {/* Stats */} 
        {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-12"> 
          <div className="bg-white rounded-xl p-6 shadow-lg text-center"> 
            <div className="text-3xl font-bold bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent mb-2"> 
              50+ 
            </div> 
            <p className="text-gray-600">Verified Babysitters</p> 
          </div> 
          <div className="bg-white rounded-xl p-6 shadow-lg text-center"> 
            <div className="text-3xl font-bold bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent mb-2"> 
              1000+ 
            </div> 
            <p className="text-gray-600">Happy Families</p> 
          </div> 
          <div className="bg-white rounded-xl p-6 shadow-lg text-center"> 
            <div className="text-3xl font-bold bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent mb-2"> 
              4.9★ 
            </div> 
            <p className="text-gray-600">Average Rating</p> 
          </div> 
        </div>  */}
 
        {/* Babysitter Grid */} 
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto"> 
          {babysitters.map((babysitter) => ( 
            <BabysitterCard 
              key={babysitter.id} 
              babysitter={babysitter} 
              onBookNow={handleBookNow} 
            /> 
          ))} 
        </div> 
      </div> 
 
      {/* Booking Modal */} 
      {selectedBabysitter && ( 
        <BookingModal 
          babysitter={selectedBabysitter} 
          onClose={handleCloseModal} 
        /> 
      )} 
    </div> 
  ); 
}