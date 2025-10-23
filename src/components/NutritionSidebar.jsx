import React from 'react'; 
 
const NutritionSidebar = ({ activeWeek, setActiveWeek }) => { 
  const weekLabels = { 
    1: "Week 1-4", 
    2: "Week 5-8",  
    3: "Week 9-12", 
    4: "Week 13-16", 
    5: "Week 17-20", 
    6: "Week 21-24", 
    7: "Week 25-28", 
    8: "Week 29-32", 
    9: "Week 33-40" 
  }; 
 
  return ( 
    <div className="lg:w-1/4"> 
      <div className="bg-white rounded-2xl shadow-lg p-6 sticky top-6"> 
        <h2 className="text-xl font-bold text-purple-800 mb-6 text-center"> 
          🍎 Weekly Nutrition Guide 
        </h2> 
        <nav className="space-y-2"> 
          {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((week) => ( 
            <button 
              key={week} 
              onClick={() => setActiveWeek(week)} 
              className={`w-full text-left px-4 py-3 rounded-xl transition-all duration
300 ${ 
                activeWeek === week 
                  ? 'bg-pink-500 text-white shadow-md transform scale-105' 
                  : 'bg-purple-50 text-purple-700 hover:bg-purple-100 hover:shadowsm' 
              }`} 
            > 
              <span className="font-semibold"> 
                {weekLabels[week]} 
              </span> 
            </button> 
          ))} 
        </nav> 
         
        {/* Daily Reminder */} 
        <div className="mt-6 p-4 bg-gradient-to-r from-pink-100 to-purple-100 
rounded-xl"> 
          <p className="text-sm text-purple-700 text-center"> 
            {[ 
              "💖 You're doing an amazing job!", 
              "🌸 Stay hydrated and listen to your body", 
              "🌺 Every healthy choice matters", 
              "💫 You're growing miracles!", 
              "🌼 Rest when you need to" 
            ][Math.floor(Math.random() * 5)]} 
          </p> 
        </div> 
      </div> 
    </div> 
  ); 
}; 
 
export default NutritionSidebar; 