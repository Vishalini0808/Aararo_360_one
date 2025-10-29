import React from 'react'; 
 
const Sidebar = ({ activeSection, setActiveSection }) => { 
  const mainSections = [ 
    { id: 'month-guide', label: 'Month-by-Month Guide', icon: '📅' }, 
    { id: 'nutrition', label: 'Nutrition & Trimester Diet', icon: '🥗' }, 
    { id: 'exercise', label: 'Exercise & Yoga', icon: '🧘' }, 
    { id: 'labor', label: 'Labour & C-section Signs', icon: '👶' } 
  ]; 
 
  return ( 
    <div className="bg-white rounded-2xl shadow-lg p-4 sticky top-6 h-fit"> 
      {/* Main Sections */} 
      <div className="mb-6"> 
        <h2 className="text-xl font-bold text-slate-800 mb-4">Pregnancy Guide</h2> 
        <nav className="space-y-3"> 
          {mainSections.map((section) => ( 
            <button 
              key={section.id} 
              onClick={() => setActiveSection(section.id)} 
              className={`w-full text-left px-4 py-3 rounded-xl transition-all duration-300 flex items-center group ${
                activeSection === section.id 
                  ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-md' 
                  : 'bg-slate-50 text-slate-700 hover:bg-slate-100 hover:shadow-sm border border-slate-200' 
              }`} 
            > 
              <span className={`text-lg mr-3 transition-transform duration-300 group-hover:scale-110 ${
                activeSection === section.id ? 'text-white' : 'text-blue-500'
              }`}>{section.icon}</span> 
              <span className="font-medium">{section.label}</span> 
            </button> 
          ))} 
        </nav> 
      </div> 
 
      {/* Daily Reminder */} 
      <div className="p-4 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl border border-blue-200"> 
        <div className="flex items-center mb-2">
          <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center mr-2">
            <span className="text-white text-sm">💖</span>
          </div>
          <h3 className="text-sm font-semibold text-slate-800">Daily Reminder</h3>
        </div>
        <p className="text-xs text-slate-600 leading-relaxed"> 
          {[ 
            "You're doing amazing, mama! Stay hydrated and listen to your body.", 
            "Every kick is a little hello from your baby. Trust your instincts.", 
            "Rest when you need to, grow when you're ready. You know best!", 
            "Your body is doing incredible work. Be kind to yourself today.", 
            "Each day brings you closer to meeting your little one. Enjoy the journey." 
          ][Math.floor(Math.random() * 5)]} 
        </p> 
      </div> 

      {/* Progress Overview */}
      <div className="mt-4 p-3 bg-slate-50 rounded-xl border border-slate-200">
        <h3 className="text-sm font-semibold text-slate-800 mb-2 flex items-center">
          <span className="text-blue-500 mr-2">📊</span>
          Quick Stats
        </h3>
        <div className="space-y-2 text-xs text-slate-600">
          <div className="flex justify-between">
            <span>Trimesters:</span>
            <span className="font-medium">3</span>
          </div>
          <div className="flex justify-between">
            <span>Total Months:</span>
            <span className="font-medium">9</span>
          </div>
          <div className="flex justify-between">
            <span>Average Weeks:</span>
            <span className="font-medium">40</span>
          </div>
        </div>
      </div>
    </div> 
  ); 
}; 
 
export default Sidebar;