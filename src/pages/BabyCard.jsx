import { Link, useNavigate } from "react-router-dom";

export default function BabyCard() {
  const navigate = useNavigate();

  const babyProfiles = [
    {
      id: 1,
      name: "Emma",
      age: "8 months",
      weight: "8.2 kg",
      height: "68 cm",
      avatar: "👶",
      color: "from-pink-400 to-purple-500"
    },
    {
      id: 2,
      name: "Noah",
      age: "6 months", 
      weight: "7.5 kg",
      height: "65 cm",
      avatar: "👶",
      color: "from-blue-400 to-purple-500"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 via-purple-50 to-white p-6">
      {/* Header with Back Button */}
      <div className="max-w-6xl mx-auto">
        {/* Back Button */}
        <div className="mb-8 pt-4">
          <Link 
            to="/"
            className="inline-flex items-center gap-2 px-4 py-2 text-gray-600 hover:text-[#FF6EA6] transition-colors duration-300 font-medium"
          >
            <svg 
              className="w-5 h-5" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M10 19l-7-7m0 0l7-7m-7 7h18" 
              />
            </svg>
            <span>Back to Home</span>
          </Link>
        </div>

        {/* Main Header Content */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="bg-gradient-to-br from-pink-500 to-purple-500 rounded-full p-3">
              <span className="text-white text-2xl">👶</span>
            </div>
          </div>
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Baby Growth Tracker</h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Track your baby's growth, milestones, and development in one beautiful dashboard
          </p>
        </div>
      </div>

      {/* Baby Profiles Grid */}
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {babyProfiles.map((baby) => (
            <div
              key={baby.id}
              className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-pink-100 cursor-pointer transform hover:scale-105"
              onClick={() => navigate('/baby-tracking')}
            >
              <div className="text-center">
                <div className={`w-20 h-20 bg-gradient-to-br ${baby.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                  <span className="text-3xl text-white">{baby.avatar}</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-2">{baby.name}</h3>
                <p className="text-gray-600 mb-4">{baby.age}</p>
                
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="text-center">
                    <div className="text-gray-500 text-sm">Weight</div>
                    <div className="text-[#FF6EA6] font-bold">{baby.weight}</div>
                  </div>
                  <div className="text-center">
                    <div className="text-gray-500 text-sm">Height</div>
                    <div className="text-[#7C4DFF] font-bold">{baby.height}</div>
                  </div>
                </div>
                
                <button className="w-full bg-gradient-to-r from-pink-500 to-purple-500 text-white py-3 rounded-2xl font-semibold hover:from-pink-600 hover:to-purple-600 transition-all duration-300">
                  View Growth
                </button>
              </div>
            </div>
          ))}
          
          {/* Add New Baby Card */}
          <div className="bg-gradient-to-br from-pink-50 to-purple-50 rounded-3xl p-8 shadow-lg border-2 border-dashed border-pink-200 cursor-pointer hover:border-pink-300 transition-all duration-300 flex flex-col items-center justify-center min-h-[300px]">
            <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mb-4 border-2 border-pink-200">
              <span className="text-3xl text-pink-400">+</span>
            </div>
            <h3 className="text-xl font-semibold text-gray-700 mb-2">Add New Baby</h3>
            <p className="text-gray-500 text-center">Track growth for another little one</p>
          </div>
        </div>

        {/* Features Section */}
        <div className="bg-white rounded-3xl p-8 shadow-lg border border-pink-100">
          <h2 className="text-2xl font-bold text-center text-gray-800 mb-8">Everything You Need to Track</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-pink-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📈</span>
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">Growth Charts</h3>
              <p className="text-gray-600 text-sm">Track weight, height & head circumference</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🎯</span>
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">Milestones</h3>
              <p className="text-gray-600 text-sm">Monitor developmental achievements</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-pink-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">💉</span>
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">Vaccinations</h3>
              <p className="text-gray-600 text-sm">Never miss important immunizations</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📊</span>
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">Reports</h3>
              <p className="text-gray-600 text-sm">Weekly & monthly progress reports</p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-12">
          <div className="bg-gradient-to-r from-pink-500 to-purple-500 rounded-3xl p-8 text-white shadow-lg">
            <h3 className="text-2xl font-bold mb-4">Ready to Start Tracking?</h3>
            <p className="text-pink-100 mb-6 max-w-2xl mx-auto">
              Join thousands of parents who use our app to track their baby's growth journey with confidence and love.
            </p>
            <button 
              onClick={() => navigate('/baby-tracking')}
              className="bg-white text-pink-500 px-8 py-3 rounded-2xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              Start Tracking Now
            </button>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="text-center py-8 mt-12">
        <p className="text-gray-500">Made with 💕 for your little one's journey</p>
      </footer>
    </div>
  );
}