import React from 'react'; 
 
const Sidebar = ({ activeSection, setActiveSection, activeMonth, 
setActiveMonth }) => { 
  const mainSections = [ 
    { id: 'month-guide', label: 'Month-by-Month Guide', icon: '📅' }, 
    { id: 'nutrition', label: 'Nutrition & Trimester Diet', icon: '🥗' }, 
    { id: 'exercise', label: 'Exercise & Yoga', icon: '🧘' }, 
    { id: 'labor', label: 'Labour & C-section Signs', icon: '👶' } 
  ]; 
 
  const months = [ 
    { id: 1, label: '1st Month (Week 1-4)' }, 
    { id: 2, label: '2nd Month (Week 5-8)' }, 
    { id: 3, label: '3rd Month (Week 9-12)' }, 
    { id: 4, label: '4th Month (Week 13-16)' }, 
    { id: 5, label: '5th Month (Week 17-20)' }, 
    { id: 6, label: '6th Month (Week 21-24)' }, 
    { id: 7, label: '7th Month (Week 25-28)' }, 
    { id: 8, label: '8th Month (Week 29-32)' }, 
    { id: 9, label: '9th Month (Week 33-40)' } 
  ]; 
 
  return ( 
    <div className="bg-white rounded-2xl shadow-lg p-6 sticky top-6"> 
      {/* Main Sections */} 
      <div className="mb-8"> 
        <h2 className="text-xl font-bold text-purple-800 mb-4">Pregnancy 
Guide</h2> 
        <nav className="space-y-2"> 
          {mainSections.map((section) => ( 
            <button 
              key={section.id} 
              onClick={() => setActiveSection(section.id)} 
              className={`w-full text-left px-4 py-3 rounded-xl transition-all duration
300 flex items-center ${ 
                activeSection === section.id 
                  ? 'bg-purple-600 text-white shadow-md' 
                  : 'bg-purple-50 text-purple-700 hover:bg-purple-100 hover:shadowsm' 
              }`} 
            > 
              <span className="text-lg mr-3">{section.icon}</span> 
              <span className="font-medium">{section.label}</span> 
            </button> 
          ))} 
        </nav> 
      </div> 
 
      {/* Month Navigation - Only show for month guide */} 
      {activeSection === 'month-guide' && ( 
        <div> 
          <h3 className="text-lg font-bold text-purple-800 mb-4">Months</h3> 
          <nav className="space-y-2"> 
            {months.map((month) => ( 
              <button 
                key={month.id} 
                onClick={() => setActiveMonth(month.id)} 
                className={`w-full text-left px-4 py-3 rounded-xl transition-all 
duration-300 ${ 
                  activeMonth === month.id 
                    ? 'bg-pink-500 text-white shadow-md transform scale-105' 
                    : 'bg-pink-50 text-purple-700 hover:bg-pink-100 hover:shadow-sm' 
                }`} 
              > 
                <span className="font-medium">{month.label}</span> 
              </button> 
            ))} 
          </nav> 
        </div> 
      )} 
 
      {/* Daily Reminder */} 
      <div className="mt-6 p-4 bg-gradient-to-r from-pink-100 to-purple-100 
rounded-xl border border-pink-200"> 
        <p className="text-sm text-purple-700 text-center"> 
          {[ 
            "💖 You're doing amazing, mama!", 
            "🌸 Stay hydrated and listen to your body", 
            "🌺 Every kick is a little hello from your baby", 
            "💫 Trust your instincts - you know best", 
            "🌼 Rest when you need to, grow when you're ready" 
          ][Math.floor(Math.random() * 5)]} 
        </p> 
      </div> 
    </div> 
  ); 
}; 
 
export default Sidebar;