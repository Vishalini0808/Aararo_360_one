import React from 'react'; 
import { useNavigate } from 'react-router-dom'; 
 
const LandingPage = () => { 
  const navigate = useNavigate(); 
 
  const handleExploreNow = () => { 
    navigate('/pregnancy-guide'); 
  }; 
 
  return ( 
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-pink-100 flex 
items-center justify-center p-8"> 
      <div className="max-w-4xl mx-auto text-center"> 
        {/* Header */} 
        <div className="mb-12"> 
          <h1 className="text-5xl md:text-6xl font-bold text-purple-800 mb-6"> 
            🌸 Pregnancy Journey Guide 🌸 
          </h1> 
          <p className="text-xl md:text-2xl text-purple-600 mb-8"> 
            Your trusted companion through every stage of pregnancy 
          </p> 
        </div> 
 
        {/* Main Card */} 
        <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 mb-8 border-2 border-purple
200"> 
          <div className="flex flex-col md:flex-row items-center justify-between"> 
            <div className="flex-1 mb-8 md:mb-0 md:mr-8"> 
              <div className="flex items-center mb-6"> 
                <div className="w-16 h-16 bg-gradient-to-r from-pink-400 to-purple-500 rounded-full flex 
items-center justify-center mr-4"> 
                  <span className="text-white text-2xl">👶</span> 
                </div> 
                <div> 
                  <h2 className="text-3xl font-bold text-purple-800">Complete Pregnancy Guide</h2> 
                  <p className="text-purple-600 text-lg">Everything you need to know in one place</p> 
                </div> 
              </div> 
               
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6"> 
                <div className="text-center p-4 bg-pink-50 rounded-xl"> 
                  <div className="text-2xl font-bold text-pink-500">9</div> 
                  <div className="text-sm text-purple-600">Months Guide</div> 
                </div> 
                <div className="text-center p-4 bg-purple-50 rounded-xl"> 
                  <div className="text-2xl font-bold text-purple-500">3</div> 
                  <div className="text-sm text-purple-600">Trimesters</div> 
                </div> 
                <div className="text-center p-4 bg-pink-50 rounded-xl"> 
                  <div className="text-2xl font-bold text-pink-500">50+</div> 
                  <div className="text-sm text-purple-600">Tips & Exercises</div> 
                </div> 
                <div className="text-center p-4 bg-purple-50 rounded-xl"> 
                  <div className="text-2xl font-bold text-purple-500">24/7</div> 
                  <div className="text-sm text-purple-600">Support</div> 
                </div> 
              </div> 
 
              <p className="text-purple-700 text-lg mb-6 leading-relaxed"> 
                Access comprehensive month-by-month guides, nutrition plans, exercise routines,  
                and prepare for labor with confidence. Your journey to motherhood starts here. 
              </p> 
            </div> 
 
            <div className="flex flex-col space-y-4"> 
              <button 
                onClick={handleExploreNow} 
                className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-12 py-4 rounded
2xl font-bold text-xl hover:from-pink-600 hover:to-purple-700 transition-all duration-300 transform 
hover:scale-105 shadow-lg" 
              > 
                Explore Now 🌸 
              </button> 
              <button className="bg-white text-purple-700 px-12 py-4 rounded-2xl font-bold text-xl 
border-2 border-purple-300 hover:bg-purple-50 transition-all duration-300"> 
                Learn More 
              </button> 
            </div> 
          </div> 
        </div> 
 
        {/* Features Grid */} 
        <div className="grid md:grid-cols-3 gap-6"> 
          <div className="bg-white p-6 rounded-2xl shadow-lg border border-purple-100"> 
            <div className="text-3xl mb-3">📚</div> 
            <h3 className="font-bold text-purple-800 mb-2">Monthly Guides</h3> 
            <p className="text-purple-600 text-sm">Track your baby's development week by week</p> 
          </div> 
          <div className="bg-white p-6 rounded-2xl shadow-lg border border-purple-100"> 
            <div className="text-3xl mb-3">🥗</div> 
            <h3 className="font-bold text-purple-800 mb-2">Nutrition Plans</h3> 
            <p className="text-purple-600 text-sm">Trimester-specific diet recommendations</p> 
          </div> 
          <div className="bg-white p-6 rounded-2xl shadow-lg border border-purple-100"> 
            <div className="text-3xl mb-3">🧘♀️</div> 
            <h3 className="font-bold text-purple-800 mb-2">Exercise & Yoga</h3> 
            <p className="text-purple-600 text-sm">Safe workouts for mom and baby</p> 
          </div> 
        </div> 
      </div> 
    </div> 
  ); 
}; 
 
export default LandingPage;