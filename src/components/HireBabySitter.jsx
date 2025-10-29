// components/HireBabysitter.js
import React, { useState } from 'react';
import BookingModal from './BookingModal';

const HireBabysitter = ({ babysitters, onBook, onBack }) => {
  const [showAll, setShowAll] = useState(false);
  const [selectedBabysitter, setSelectedBabysitter] = useState(null);
  const [showBookingModal, setShowBookingModal] = useState(false);

  const availableBabysitters = babysitters.filter(b => b.available);
  const displayedBabysitters = showAll ? babysitters : availableBabysitters;

  const handleBookNow = (babysitter) => {
    setSelectedBabysitter(babysitter);
    setShowBookingModal(true);
  };

  const handleConfirmBooking = () => {
    onBook(selectedBabysitter.id);
    setShowBookingModal(false);
    setSelectedBabysitter(null);
  };

  return (
    <div className="max-w-6xl mx-auto">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <button 
          onClick={onBack}
          className="flex items-center text-purple-600 hover:text-purple-700 font-semibold"
        >
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to Dashboard
        </button>
        
        <div className="flex items-center space-x-4">
          <label className="flex items-center cursor-pointer">
            <div className="relative">
              <input 
                type="checkbox" 
                className="sr-only"
                checked={showAll}
                onChange={(e) => setShowAll(e.target.checked)}
              />
              <div className={`block w-14 h-8 rounded-full ${showAll ? 'bg-purple-500' : 'bg-gray-300'}`}></div>
              <div className={`dot absolute left-1 top-1 bg-white w-6 h-6 rounded-full transition-transform ${showAll ? 'transform translate-x-6' : ''}`}></div>
            </div>
            <div className="ml-3 text-gray-700 font-medium">Show All Babysitters</div>
          </label>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white rounded-2xl p-6 shadow-lg border border-purple-100">
          <div className="text-2xl font-bold text-purple-600">{availableBabysitters.length}</div>
          <div className="text-gray-600">Available Now</div>
        </div>
        <div className="bg-white rounded-2xl p-6 shadow-lg border border-purple-100">
          <div className="text-2xl font-bold text-purple-600">{babysitters.length}</div>
          <div className="text-gray-600">Total Babysitters</div>
        </div>
        <div className="bg-white rounded-2xl p-6 shadow-lg border border-purple-100">
          <div className="text-2xl font-bold text-purple-600">{Math.round(babysitters.reduce((acc, b) => acc + b.experience, 0) / babysitters.length)}</div>
          <div className="text-gray-600">Avg. Experience (years)</div>
        </div>
      </div>

      {/* Babysitter Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {displayedBabysitters.map(babysitter => (
          <div 
            key={babysitter.id}
            className={`bg-white rounded-2xl p-6 shadow-lg border transition-all ${
              !babysitter.available 
                ? 'opacity-60 border-gray-200' 
                : 'border-purple-100 hover:shadow-xl hover:border-purple-200'
            }`}
          >
            {/* Header */}
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full flex items-center justify-center text-white font-semibold">
                  {babysitter.name.split(' ').map(n => n[0]).join('')}
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">{babysitter.name}</h3>
                  <div className="flex items-center space-x-2 mt-1">
                    <span className="bg-purple-100 text-purple-600 text-xs px-2 py-1 rounded-full">
                      {babysitter.experience} years
                    </span>
                    {!babysitter.available && (
                      <span className="bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded-full">
                        Currently Booked
                      </span>
                    )}
                  </div>
                </div>
              </div>
              <div className="text-right">
                <div className="text-2xl font-bold text-purple-600">${babysitter.rate}</div>
                <div className="text-xs text-gray-500">per hour</div>
              </div>
            </div>

            {/* Description */}
            <p className="text-gray-600 text-sm mb-4 line-clamp-2">
              {babysitter.description}
            </p>

            {/* Skills */}
            <div className="flex flex-wrap gap-2 mb-4">
              {babysitter.skills.slice(0, 3).map((skill, index) => (
                <span 
                  key={index}
                  className="bg-pink-50 text-pink-600 text-xs px-2 py-1 rounded-full"
                >
                  {skill}
                </span>
              ))}
            </div>

            {/* Availability */}
            <div className="mb-4">
              <div className="text-xs text-gray-500 mb-2">Available Days:</div>
              <div className="flex flex-wrap gap-1">
                {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map(day => (
                  <div
                    key={day}
                    className={`w-8 h-8 rounded-full text-xs flex items-center justify-center ${
                      babysitter.availableDays.includes(day)
                        ? 'bg-green-100 text-green-600'
                        : 'bg-gray-100 text-gray-400'
                    }`}
                  >
                    {day[0]}
                  </div>
                ))}
              </div>
            </div>

            {/* Book Button */}
            {babysitter.available ? (
              <button
                onClick={() => handleBookNow(babysitter)}
                className="w-full bg-gradient-to-r from-purple-500 to-purple-600 text-white py-3 rounded-xl font-semibold hover:from-purple-600 hover:to-purple-700 transition-all"
              >
                Book Now
              </button>
            ) : (
              <button
                disabled
                className="w-full bg-gray-300 text-gray-500 py-3 rounded-xl font-semibold cursor-not-allowed"
              >
                Currently Unavailable
              </button>
            )}
          </div>
        ))}
      </div>

      {/* Empty State */}
      {displayedBabysitters.length === 0 && (
        <div className="text-center py-12">
          <div className="text-gray-400 text-6xl mb-4">👶</div>
          <h3 className="text-xl font-semibold text-gray-600 mb-2">No Babysitters Available</h3>
          <p className="text-gray-500">Check back later or try showing all babysitters.</p>
        </div>
      )}

      {/* Booking Modal */}
      {showBookingModal && selectedBabysitter && (
        <BookingModal
          babysitter={selectedBabysitter}
          onClose={() => setShowBookingModal(false)}
          onConfirm={handleConfirmBooking}
        />
      )}
    </div>
  );
};

export default HireBabysitter;