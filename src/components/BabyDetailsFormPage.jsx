import React from 'react';
import { useNavigate } from 'react-router-dom';

const BabyDetailsFormPage = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted');
    // After submission, you can navigate back or to another page
    navigate('/');
  };

  const handleBack = () => {
    navigate(-1); // Go back to previous page
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-pink-50 to-purple-50 py-8 px-4">
      <div className="max-w-2xl mx-auto">
        {/* Form Container */}
        <div className="bg-white/95 backdrop-blur-xl rounded-3xl w-full overflow-hidden shadow-2xl border border-white/40 animate-modalEnter">
          {/* Form Header */}
          <div className="bg-gradient-to-r from-pink-500 to-purple-600 text-white p-8 rounded-t-3xl text-center relative">
            <button 
              onClick={handleBack}
              className="absolute top-6 left-6 w-10 h-10 bg-white/20 rounded-full flex items-center justify-center text-white text-xl hover:bg-white/30 transition-colors duration-200"
            >
              ←
            </button>
            <h3 className="text-2xl font-bold">Tell Us About Your Little One 👶</h3>
            <p className="text-white/80 mt-2">We'll create a personalized tracking experience</p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="p-6 space-y-6">
            {/* Basic Information */}
            <div className="bg-white/60 rounded-2xl p-6 border border-white/40">
              <h4 className="text-lg font-bold text-gray-800 mb-4 flex items-center gap-2">
                👤 Basic Information
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Baby&apos;s Name</label>
                  <input 
                    type="text" 
                    placeholder="Enter baby's name"
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all duration-200 bg-white/80"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Date of Birth</label>
                  <input 
                    type="date" 
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all duration-200 bg-white/80"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Gender</label>
                  <div className="grid grid-cols-2 gap-2">
                    <label className="flex items-center gap-2 p-3 border border-gray-200 rounded-xl cursor-pointer hover:border-pink-300 transition-colors duration-200 has-[:checked]:border-pink-500 has-[:checked]:bg-pink-50">
                      <input type="radio" name="gender" value="boy" className="hidden" required />
                      <span>👦 Boy</span>
                    </label>
                    <label className="flex items-center gap-2 p-3 border border-gray-200 rounded-xl cursor-pointer hover:border-pink-300 transition-colors duration-200 has-[:checked]:border-pink-500 has-[:checked]:bg-pink-50">
                      <input type="radio" name="gender" value="girl" className="hidden" required />
                      <span>👧 Girl</span>
                    </label>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Birth Weight (kg)</label>
                  <input 
                    type="number" 
                    step="0.1" 
                    placeholder="e.g., 3.2"
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all duration-200 bg-white/80"
                    required
                  />
                </div>
              </div>
            </div>

            {/* Current Details */}
            <div className="bg-white/60 rounded-2xl p-6 border border-white/40">
              <h4 className="text-lg font-bold text-gray-800 mb-4 flex items-center gap-2">
                📏 Current Details
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Current Weight (kg)</label>
                  <input 
                    type="number" 
                    step="0.1" 
                    placeholder="Current weight"
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all duration-200 bg-white/80"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Current Height (cm)</label>
                  <input 
                    type="number" 
                    placeholder="Current height"
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all duration-200 bg-white/80"
                  />
                </div>
              </div>
            </div>

            {/* Feeding & Health */}
            <div className="bg-white/60 rounded-2xl p-6 border border-white/40">
              <h4 className="text-lg font-bold text-gray-800 mb-4 flex items-center gap-2">
                🍼 Feeding & Health
              </h4>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-3">Feeding Type</label>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                    <label className="flex items-center gap-2 p-3 border border-gray-200 rounded-xl cursor-pointer hover:border-pink-300 transition-colors duration-200 has-[:checked]:border-pink-500 has-[:checked]:bg-pink-50">
                      <input type="checkbox" className="hidden" />
                      <span>🤱 Breastfeeding</span>
                    </label>
                    <label className="flex items-center gap-2 p-3 border border-gray-200 rounded-xl cursor-pointer hover:border-pink-300 transition-colors duration-200 has-[:checked]:border-pink-500 has-[:checked]:bg-pink-50">
                      <input type="checkbox" className="hidden" />
                      <span>🍼 Formula</span>
                    </label>
                    <label className="flex items-center gap-2 p-3 border border-gray-200 rounded-xl cursor-pointer hover:border-pink-300 transition-colors duration-200 has-[:checked]:border-pink-500 has-[:checked]:bg-pink-50">
                      <input type="checkbox" className="hidden" />
                      <span>🥣 Solid Foods</span>
                    </label>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Any Health Concerns?</label>
                  <textarea 
                    placeholder="Tell us about any health concerns or special needs..."
                    rows={3}
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all duration-200 bg-white/80 resize-none"
                  ></textarea>
                </div>
              </div>
            </div>

            {/* Form Actions */}
            <div className="flex flex-col sm:flex-row gap-4 justify-end pt-6 border-t border-gray-200">
              <button 
                type="button"
                onClick={handleBack}
                className="px-6 py-3 border border-gray-300 text-gray-700 rounded-xl font-semibold hover:border-gray-400 hover:bg-gray-50 transition-all duration-200"
              >
                Maybe Later
              </button>
              <button 
                type="submit"
                className="px-6 py-3 bg-gradient-to-r from-pink-500 to-purple-600 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-200 hover:-translate-y-0.5"
              >
                Start Tracking Development ✅
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Custom Animation */}
      <style jsx>{`
        @keyframes modalEnter {
          from {
            opacity: 0;
            transform: translateY(50px) scale(0.9);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
        
        .animate-modalEnter {
          animation: modalEnter 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }
      `}</style>
    </div>
  );
};

export default BabyDetailsFormPage;