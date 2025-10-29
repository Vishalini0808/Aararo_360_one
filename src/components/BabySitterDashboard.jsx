// components/BabysitterDashboard.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import DashboardOverview from './DashboardOverview';
import HireBabysitter from './HireBabysitter';
import BabysitterRegistration from './BabysitterRegistration';

const BabysitterDashboard = () => {
  const [currentView, setCurrentView] = useState('overview');
  const [babysitters, setBabysitters] = useState([
    {
      id: 1,
      name: 'Sarah Johnson',
      experience: 5,
      rate: 25,
      available: true,
      description: 'CPR certified, experienced with newborns and toddlers',
      photo: null,
      skills: ['CPR Certified', 'Newborn Care', 'Toddler Activities'],
      availableDays: ['Mon', 'Wed', 'Fri', 'Sat']
    },
    {
      id: 2,
      name: 'Maria Garcia',
      experience: 3,
      rate: 20,
      available: true,
      description: 'Bilingual, arts and crafts enthusiast',
      photo: null,
      skills: ['Bilingual', 'Arts & Crafts', 'Homework Help'],
      availableDays: ['Tue', 'Thu', 'Sun']
    },
    {
      id: 3,
      name: 'Emily Chen',
      experience: 7,
      rate: 30,
      available: false,
      description: 'Special needs experience, early childhood education',
      photo: null,
      skills: ['Special Needs', 'Early Education', 'Music'],
      availableDays: ['Mon', 'Tue', 'Wed']
    }
  ]);

  const navigate = useNavigate();

  const handleBookBabysitter = (id) => {
    setBabysitters(babysitters.map(babysitter => 
      babysitter.id === id ? { ...babysitter, available: false } : babysitter
    ));
  };

  const handleRegisterBabysitter = (newBabysitter) => {
    const babysitter = {
      ...newBabysitter,
      id: babysitters.length + 1,
      available: true
    };
    setBabysitters([...babysitters, babysitter]);
  };

  const renderView = () => {
    switch (currentView) {
      case 'hire':
        return (
          <HireBabysitter 
            babysitters={babysitters}
            onBook={handleBookBabysitter}
            onBack={() => setCurrentView('overview')}
          />
        );
      case 'register':
        return (
          <BabysitterRegistration 
            onRegister={handleRegisterBabysitter}
            onBack={() => setCurrentView('overview')}
          />
        );
      default:
        return (
          <DashboardOverview 
            availableCount={babysitters.filter(b => b.available).length}
            totalCount={babysitters.length}
            onHireClick={() => setCurrentView('hire')}
            onRegisterClick={() => setCurrentView('register')}
          />
        );
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-purple-50 py-8 px-4">
      {/* Header with Back to Home Button */}
      <div className="max-w-7xl mx-auto mb-8">
        <div className="bg-white shadow-md rounded-lg p-4">
          <button 
            onClick={() => navigate('/')}
            className="flex items-center gap-2 text-gray-700 hover:text-purple-600 transition-colors duration-200"
          >
            <span className="text-xl">←</span>
            <span className="font-semibold">Back to Home</span>
          </button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-4">
            Babysitting Services
          </h1>
          <p className="text-gray-600 text-lg">
            Find trusted caregivers or join our community of professional babysitters
          </p>
        </div>
        {renderView()}
      </div>
    </div>
  );
};

export default BabysitterDashboard;