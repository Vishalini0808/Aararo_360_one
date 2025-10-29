// components/DashboardOverview.js
import React from 'react';

const DashboardOverview = ({ availableCount, onHireClick, onRegisterClick }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
      {/* Hire Babysitter Card */}
      <div 
        className="bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl p-8 shadow-lg cursor-pointer transform transition-transform hover:scale-105 hover:shadow-xl"
        onClick={onHireClick}
      >
        <div className="text-white">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold">Hire Babysitter</h2>
            <div className="bg-white bg-opacity-20 rounded-full p-3">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
          </div>
          
          <div className="mb-6">
            <div className="text-4xl font-bold mb-2">{availableCount}</div>
            <div className="text-purple-100">Available Babysitters</div>
          </div>
          
          <div className="space-y-2 mb-6">
            <div className="flex items-center text-purple-100">
              <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
              Verified & background checked
            </div>
            <div className="flex items-center text-purple-100">
              <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
              Real-time availability
            </div>
            <div className="flex items-center text-purple-100">
              <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
              Secure booking system
            </div>
          </div>
          
          <button className="w-full bg-white text-purple-600 py-3 px-6 rounded-xl font-semibold hover:bg-purple-50 transition-colors">
            Find & Book Babysitter
          </button>
        </div>
      </div>

      {/* Babysitter Registration Card */}
      <div 
        className="bg-gradient-to-br from-pink-500 to-pink-600 rounded-2xl p-8 shadow-lg cursor-pointer transform transition-transform hover:scale-105 hover:shadow-xl"
        onClick={onRegisterClick}
      >
        <div className="text-white">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold">Register as Babysitter</h2>
            <div className="bg-white bg-opacity-20 rounded-full p-3">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
              </svg>
            </div>
          </div>
          
          <div className="mb-6">
            <div className="text-xl font-semibold mb-4">Join Our Trusted Community</div>
          </div>
          
          <div className="space-y-2 mb-6">
            <div className="flex items-center text-pink-100">
              <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
              Set your own rates & schedule
            </div>
            <div className="flex items-center text-pink-100">
              <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
              Connect with local families
            </div>
            <div className="flex items-center text-pink-100">
              <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
              Build your caregiver profile
            </div>
            <div className="flex items-center text-pink-100">
              <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
              Secure payment processing
            </div>
          </div>
          
          <button className="w-full bg-white text-pink-600 py-3 px-6 rounded-xl font-semibold hover:bg-pink-50 transition-colors">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default DashboardOverview;