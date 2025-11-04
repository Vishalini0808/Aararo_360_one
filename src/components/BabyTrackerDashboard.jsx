// BabyTrackerDashboard.js
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const BabyTrackerDashboard = () => {
  const [babyProfile, setBabyProfile] = useState(null);
  const [recentMeasurements, setRecentMeasurements] = useState([]);

  useEffect(() => {
    // Load baby profile from localStorage
    const savedProfile = localStorage.getItem('babyProfile');
    if (savedProfile) {
      setBabyProfile(JSON.parse(savedProfile));
    }

    // Load recent measurements
    const savedMeasurements = localStorage.getItem('babyGrowthData');
    if (savedMeasurements) {
      const measurements = JSON.parse(savedMeasurements);
      setRecentMeasurements(measurements.slice(-3).reverse()); // Last 3 measurements
    }
  }, []);

  const getAge = (birthDate) => {
    if (!birthDate) return 'N/A';
    const birth = new Date(birthDate);
    const now = new Date();
    const months = (now.getFullYear() - birth.getFullYear()) * 12 + 
                  (now.getMonth() - birth.getMonth());
    return `${Math.floor(months/12)}y ${months%12}m`;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50 py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            👶 Baby Growth Tracker
          </h1>
          <p className="text-gray-600 text-lg">
            Monitor your baby's growth and development
          </p>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white rounded-xl shadow-md p-6 text-center">
            <div className="text-3xl font-bold text-blue-600 mb-2">
              {recentMeasurements.length}
            </div>
            <div className="text-gray-600">Measurements</div>
          </div>
          
          <div className="bg-white rounded-xl shadow-md p-6 text-center">
            <div className="text-3xl font-bold text-green-600 mb-2">
              {babyProfile ? getAge(babyProfile.birthDate) : '0'}
            </div>
            <div className="text-gray-600">Baby Age</div>
          </div>
          
          <div className="bg-white rounded-xl shadow-md p-6 text-center">
            <div className="text-3xl font-bold text-purple-600 mb-2">
              {recentMeasurements[0] ? `${recentMeasurements[0].weight}kg` : 'N/A'}
            </div>
            <div className="text-gray-600">Current Weight</div>
          </div>
        </div>

      {/* Action Button (Centered) */}
<div className="flex justify-center mb-12">
  <Link
    to="/add-measurement"
    className="bg-blue-600 hover:bg-blue-700 text-white p-8 rounded-2xl shadow-lg text-center transition-all transform hover:scale-105 w-full sm:w-1/2 md:w-1/3"
  >
    <div className="text-4xl mb-4">➕</div>
    <h3 className="text-xl font-bold mb-2">Add New Measurement</h3>
    <p className="text-blue-100">Record weight, height, and head circumference</p>
  </Link>
</div>

          {/* <Link
            to="/growth-report"
            className="bg-green-600 hover:bg-green-700 text-white p-8 rounded-2xl shadow-lg text-center transition-all transform hover:scale-105"
          >
            <div className="text-4xl mb-4">📊</div>
            <h3 className="text-xl font-bold mb-2">View Growth Report</h3>
            <p className="text-green-100">See charts and growth analysis</p>
          </Link> */}
        </div>

        {/* Baby Profile Section */}
        <div className="bg-white rounded-2xl shadow-md p-6 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Baby Profile</h2>
          {babyProfile ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h3 className="font-semibold text-gray-700">Basic Information</h3>
                <p><strong>Name:</strong> {babyProfile.name}</p>
                <p><strong>Birth Date:</strong> {new Date(babyProfile.birthDate).toLocaleDateString()}</p>
                <p><strong>Gender:</strong> {babyProfile.gender}</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-700">Growth Summary</h3>
                <p><strong>Age:</strong> {getAge(babyProfile.birthDate)}</p>
                <p><strong>Measurements:</strong> {recentMeasurements.length} records</p>
              </div>
            </div>
          ) : (
            <div className="text-center py-4">
              <p className="text-gray-600 mb-4">No baby profile set up yet</p>
              <button 
                onClick={() => {
                  const profile = {
                    name: "My Baby",
                    birthDate: new Date().toISOString().split('T')[0],
                    gender: "unknown"
                  };
                  setBabyProfile(profile);
                  localStorage.setItem('babyProfile', JSON.stringify(profile));
                }}
                className="bg-blue-600 text-white px-4 py-2 rounded-lg"
              >
                Create Default Profile
              </button>
            </div>
          )}
        </div>

        {/* Recent Measurements */}
        {recentMeasurements.length > 0 && (
          <div className="bg-white rounded-2xl shadow-md p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Recent Measurements</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-4 py-2 text-left">Date</th>
                    <th className="px-4 py-2 text-left">Weight</th>
                    <th className="px-4 py-2 text-left">Height</th>
                    <th className="px-4 py-2 text-left">Head Circ.</th>
                  </tr>
                </thead>
                <tbody>
                  {recentMeasurements.map((measurement, index) => (
                    <tr key={index} className="border-b">
                      <td className="px-4 py-2">{new Date(measurement.date).toLocaleDateString()}</td>
                      <td className="px-4 py-2">{measurement.weight} kg</td>
                      <td className="px-4 py-2">{measurement.height} cm</td>
                      <td className="px-4 py-2">{measurement.headCircumference} cm</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    
  );
};

export default BabyTrackerDashboard;