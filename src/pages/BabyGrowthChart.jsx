// GrowthReport.js
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const BabyGrowthChart = () => {
  const navigate = useNavigate();
  const [growthData, setGrowthData] = useState([]);
  const [babyProfile, setBabyProfile] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const savedData = localStorage.getItem('babyGrowthData');
    const savedProfile = localStorage.getItem('babyProfile');
    
    if (savedData) {
      const data = JSON.parse(savedData);
      setGrowthData(data.sort((a, b) => new Date(a.date) - new Date(b.date)));
    }
    
    if (savedProfile) {
      setBabyProfile(JSON.parse(savedProfile));
    }
    
    setLoading(false);
  }, []);

  const calculateGrowthStats = () => {
    if (growthData.length < 2) return null;
    
    const first = growthData[0];
    const latest = growthData[growthData.length - 1];
    
    const weightGain = (latest.weight - first.weight).toFixed(2);
    const heightGain = (latest.height - first.height).toFixed(1);
    const headGain = (latest.headCircumference - first.headCircumference).toFixed(1);
    
    return { weightGain, heightGain, headGain };
  };

  const growthStats = calculateGrowthStats();

  const printReport = () => {
    window.print();
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading growth report...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50 py-8 print:bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-8 print:mb-4">
          <button
            onClick={() => navigate('/')}
            className="mb-4 text-blue-600 hover:text-blue-800 font-semibold flex items-center gap-2 print:hidden"
          >
            ← Back to Dashboard
          </button>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Baby Growth Report
          </h1>
          <p className="text-gray-600">
            Comprehensive growth analysis and tracking
          </p>
        </div>

        {/* Print Button */}
        <div className="flex justify-end mb-6 print:hidden">
          <button
            onClick={printReport}
            className="bg-green-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-green-700 transition-colors"
          >
            🖨️ Print Report
          </button>
        </div>

        {/* Baby Summary */}
        {babyProfile && (
          <div className="bg-white rounded-2xl shadow-md p-6 mb-6 print:shadow-none print:border">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Baby Summary</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <strong>Name:</strong> {babyProfile.name}
              </div>
              <div>
                <strong>Birth Date:</strong> {new Date(babyProfile.birthDate).toLocaleDateString()}
              </div>
              <div>
                <strong>Total Measurements:</strong> {growthData.length}
              </div>
            </div>
          </div>
        )}

        {/* Growth Statistics */}
        {growthData.length > 0 && (
          <div className="bg-white rounded-2xl shadow-md p-6 mb-6 print:shadow-none print:border">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Growth Statistics</h2>
            
            {/* Current Measurements */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              <div className="text-center p-4 bg-blue-50 rounded-lg">
                <div className="text-2xl font-bold text-blue-600">
                  {growthData[growthData.length - 1].weight} kg
                </div>
                <div className="text-sm text-gray-600">Current Weight</div>
              </div>
              <div className="text-center p-4 bg-green-50 rounded-lg">
                <div className="text-2xl font-bold text-green-600">
                  {growthData[growthData.length - 1].height} cm
                </div>
                <div className="text-sm text-gray-600">Current Height</div>
              </div>
              <div className="text-center p-4 bg-purple-50 rounded-lg">
                <div className="text-2xl font-bold text-purple-600">
                  {growthData[growthData.length - 1].headCircumference} cm
                </div>
                <div className="text-sm text-gray-600">Current Head Circ.</div>
              </div>
            </div>

            {/* Growth Progress */}
            {growthStats && (
              <div className="bg-gradient-to-r from-blue-50 to-green-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">📈 Total Growth Progress</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="text-center">
                    <div className="text-xl font-bold text-blue-600">+{growthStats.weightGain} kg</div>
                    <div className="text-sm text-gray-600">Weight Gain</div>
                  </div>
                  <div className="text-center">
                    <div className="text-xl font-bold text-green-600">+{growthStats.heightGain} cm</div>
                    <div className="text-sm text-gray-600">Height Gain</div>
                  </div>
                  <div className="text-center">
                    <div className="text-xl font-bold text-purple-600">+{growthStats.headGain} cm</div>
                    <div className="text-sm text-gray-600">Head Growth</div>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}

        {/* Measurement History */}
        <div className="bg-white rounded-2xl shadow-md p-6 print:shadow-none print:border">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Measurement History</h2>
          
          {growthData.length > 0 ? (
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-4 py-3 text-left font-semibold">Date</th>
                    <th className="px-4 py-3 text-left font-semibold">Weight (kg)</th>
                    <th className="px-4 py-3 text-left font-semibold">Height (cm)</th>
                    <th className="px-4 py-3 text-left font-semibold">Head Circ. (cm)</th>
                    <th className="px-4 py-3 text-left font-semibold">Notes</th>
                  </tr>
                </thead>
                <tbody>
                  {growthData.map((measurement) => (
                    <tr key={measurement.id} className="border-b hover:bg-gray-50">
                      <td className="px-4 py-3">{new Date(measurement.date).toLocaleDateString()}</td>
                      <td className="px-4 py-3">{measurement.weight}</td>
                      <td className="px-4 py-3">{measurement.height}</td>
                      <td className="px-4 py-3">{measurement.headCircumference}</td>
                      <td className="px-4 py-3 text-xs max-w-xs">{measurement.notes || '-'}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <div className="text-center py-8">
              <div className="text-6xl mb-4">📊</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">No Data Available</h3>
              <p className="text-gray-600 mb-4">Start tracking your baby's growth to see reports here.</p>
              <button
                onClick={() => navigate('/add-measurement')}
                className="bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
              >
                Add First Measurement
              </button>
            </div>
          )}
        </div>

        {/* Growth Recommendations */}
        {growthData.length > 0 && (
          <div className="bg-yellow-50 border border-yellow-200 rounded-2xl p-6 mt-6 print:mt-4">
            <h3 className="font-semibold text-yellow-800 mb-3">💡 Growth Recommendations</h3>
            <ul className="text-yellow-700 space-y-2">
              <li>• Continue regular measurements every 2-4 weeks</li>
              <li>• Maintain consistent feeding and sleep schedules</li>
              <li>• Consult pediatrician for personalized growth assessment</li>
              <li>• Ensure proper nutrition and hydration</li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default BabyGrowthChart;