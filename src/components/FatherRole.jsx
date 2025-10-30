import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import FatherRoleBeforeDelivery from './FatherRoleBeforeDelivery';
import FatherRoleAfterDelivery from './FatherRoleAfterDelivery';

const FatherRole = () => {
  const [activeTab, setActiveTab] = useState('during');
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 via-pink-200 to-purple-200 py-8 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8 relative">
          <button
            onClick={() => navigate(-1)}
            className="absolute left-0 top-0 bg-gradient-to-r from-pink-400 to-purple-400 text-white px-4 py-2 rounded-full shadow-md hover:bg-pink-500 transition"
          >
            ← Back
          </button>
          <h1 className="text-4xl font-bold text-pink-800 mb-4">
            Father's Journey
          </h1>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-8">
          <div className="bg-white/60 rounded-full p-1 shadow-md">
            <button
              onClick={() => setActiveTab('during')}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                activeTab === 'during'
                  ? 'bg-gradient-to-r from-pink-400 to-purple-400 text-white shadow-lg'
                  : 'text-pink-700 hover:text-purple-600'
              }`}
            >
              During Pregnancy
            </button>
            <button
              onClick={() => setActiveTab('after')}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                activeTab === 'after'
                  ? 'bg-gradient-to-r from-pink-400 to-purple-400 text-white shadow-lg'
                  : 'text-pink-700 hover:text-purple-600'
              }`}
            >
              After Delivery
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="transition-all duration-500">
          {activeTab === 'during' ? (
            <FatherRoleBeforeDelivery />
          ) : (
            <FatherRoleAfterDelivery />
          )}
        </div>
      </div>
    </div>
  );
};

export default FatherRole;
