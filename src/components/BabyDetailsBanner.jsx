import React, { useState } from 'react';

const BabyDetailsBanner = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);

  const babyShapes = ['👶', '🐣', '🌟', '🧸', '🚼', '⭐', '💫', '🎀'];

  return (
    <>
      {/* Main Banner Section */}
      <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-blue-50 via-pink-50 to-purple-50 h-150">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-pink-50/50 to-purple-50/50">
          <div className="absolute -top-1/2 -left-1/2 w-[200%] h-[200%] animate-floatBackground">
            <div className="absolute top-[30%] left-[30%] w-64 h-60 bg-pink-200/20 rounded-full blur-xl"></div>
            <div className="absolute top-[70%] left-[70%] w-64 h-60 bg-purple-200/20 rounded-full blur-xl"></div>
            <div className="absolute top-[20%] left-[50%] w-64 h-60 bg-blue-200/15 rounded-full blur-xl"></div>
          </div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* Text Content */}
            <div className="relative">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight text-gray-900 mb-6">
                Track Your Little One&apos;s{' '}
                <span className="bg-gradient-to-r from-gray-900 via-pink-500 to-purple-600 bg-clip-text text-transparent">
                  Amazing Journey
                </span>
              </h2>
              

              {/* Features Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">

                
                <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl border border-white/50 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 relative overflow-hidden group">
                  <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r  from-purple-600 to-pink-500 rounded-t-3xl`}></div>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/60 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                  <h4 className="text-lg font-bold text-gray-800 mb-2">Growth Tracking</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">Monitor weight, height, and development milestones</p>
                </div>

                <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl border border-white/50 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 relative overflow-hidden group">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/60 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                  <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r  from-purple-600 to-pink-500 rounded-t-3xl`}></div>
                  <h4 className="text-lg font-bold text-gray-800 mb-2">Health Monitoring</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">Track vaccinations, health checks, and wellbeing</p>
                </div>

                <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl border border-white/50 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 relative overflow-hidden group">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/60 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                  <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r  from-purple-600 to-pink-500 rounded-t-3xl`}></div>    
                  <h4 className="text-lg font-bold text-gray-800 mb-2">Personalized Tips</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">Get advice tailored to your baby&apos;s specific needs</p>
                </div>

                <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl border border-white/50 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 relative overflow-hidden group">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/60 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                  <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r  from-purple-600 to-pink-500 rounded-t-3xl`}></div>        
                  <h4 className="text-lg font-bold text-gray-800 mb-2">Milestone Alerts</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">Never miss important developmental milestones</p>
                </div>
              </div>

              {/* CTA Button */}
              {/* <div className="flex justify-start">
                <button 
                  onClick={() => setIsFormOpen(true)}
                  className="group relative bg-gradient-to-r from-pink-500 to-purple-600 text-white px-8 py-4 rounded-2xl font-bold text-lg shadow-2xl hover:shadow-3xl transition-all duration-300 hover:-translate-y-1 overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-600"></div>
                  <span className="flex items-center gap-3">
                    👶 Give Your Baby Details
                  </span>
                </button>
              </div> */}
            </div>

            {/* Visual Content */}
            <div className="relative h-[500px] flex items-center justify-center">
              {/* Baby Card */}
              <div className="relative w-80 h-96 bg-gradient-to-r from-blue-600 to-purple-600   rounded-3xl shadow-2xl border border-white/40 p-8 text-center animate-float">
                {/* Baby Avatar */}
                <div className="w-32 h-32 bg-gradient-to-br from-pink-200 to-pink-300 rounded-full mx-auto mb-6 shadow-2xl relative overflow-hidden">
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-10">
                    <div className="flex justify-between mb-2">
                      <div className="w-4 h-4 bg-gray-800 rounded-full animate-blink"></div>
                      <div className="w-4 h-4 bg-gray-800 rounded-full animate-blink" style={{animationDelay: '0.1s'}}></div>
                    </div>
                    <div className="w-8 h-3 bg-pink-400 rounded-b-full mx-auto"></div>
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-white mb-2">Your Baby&apos;s Journey</h3>
                <p className="text-white mb-6">Start tracking today for personalized insights</p>

                <button 
                  onClick={() => setIsFormOpen(true)}
                  className="w-full bg-gradient-to-r from-pink-500 to-purple-600 text-white py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                >
                  👶 Give Your Baby Details
                </button>
              </div>

              {/* Floating Elements */}
              <div className="absolute inset-0 pointer-events-none">
                {babyShapes.map((shape, index) => (
                  <div 
                    key={index}
                    className="absolute text-3xl animate-floatElement"
                    style={{
                      animationDelay: `${index * 0.7}s`,
                      left: `${15 + (index * 10)}%`,
                      top: `${5 + (index * 12)}%`
                    }}
                  >
                    {shape}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Modal */}
      {isFormOpen && (
        <div 
          className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4"
          onClick={() => setIsFormOpen(false)}
        >
          <div 
            className="bg-white/95 backdrop-blur-xl rounded-3xl w-full max-w-2xl max-h-[90vh] overflow-y-auto animate-modalEnter"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="bg-gradient-to-r from-pink-500 to-purple-600 text-white p-8 rounded-t-3xl text-center relative">
              <h3 className="text-2xl font-bold">Tell Us About Your Little One 👶</h3>
              <button 
                className="absolute top-6 right-6 w-10 h-10 bg-white/20 rounded-full flex items-center justify-center text-white text-xl hover:bg-white/30 transition-colors duration-200"
                onClick={() => setIsFormOpen(false)}
              >
                ×
              </button>
            </div>

            {/* Form */}
            <form className="p-6 space-y-6">
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
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Date of Birth</label>
                    <input 
                      type="date" 
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all duration-200 bg-white/80"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Gender</label>
                    <div className="grid grid-cols-2 gap-2">
                      <label className="flex items-center gap-2 p-3 border border-gray-200 rounded-xl cursor-pointer hover:border-pink-300 transition-colors duration-200 has-[:checked]:border-pink-500 has-[:checked]:bg-pink-50">
                        <input type="radio" name="gender" value="boy" className="hidden" />
                        <span>👦 Boy</span>
                      </label>
                      <label className="flex items-center gap-2 p-3 border border-gray-200 rounded-xl cursor-pointer hover:border-pink-300 transition-colors duration-200 has-[:checked]:border-pink-500 has-[:checked]:bg-pink-50">
                        <input type="radio" name="gender" value="girl" className="hidden" />
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
                  onClick={() => setIsFormOpen(false)}
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
      )}

      {/* Custom Animations */}
      <style jsx>{`
        @keyframes floatBackground {
          0%, 100% { transform: translate(0, 0) rotate(0deg); }
          33% { transform: translate(30px, 30px) rotate(120deg); }
          66% { transform: translate(-20px, 40px) rotate(240deg); }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(2deg); }
        }
        
        @keyframes floatElement {
          0%, 100% { transform: translate(0, 0) rotate(0deg) scale(1); }
          25% { transform: translate(20px, -30px) rotate(90deg) scale(1.1); }
          50% { transform: translate(-15px, -50px) rotate(180deg) scale(1.05); }
          75% { transform: translate(25px, -20px) rotate(270deg) scale(1.15); }
        }
        
        @keyframes blink {
          0%, 90%, 100% { transform: scaleY(1); }
          95% { transform: scaleY(0.1); }
        }
        
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
        
        .animate-floatBackground {
          animation: floatBackground 20s ease-in-out infinite;
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        
        .animate-floatElement {
          animation: floatElement 8s ease-in-out infinite;
        }
        
        .animate-blink {
          animation: blink 4s infinite;
        }
        
        .animate-modalEnter {
          animation: modalEnter 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }
      `}</style>
    </>
  );
};

export default BabyDetailsBanner;