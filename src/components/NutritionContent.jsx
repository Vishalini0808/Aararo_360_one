import React, { useState } from 'react'; 

const NutritionContent = () => { 
  const [activeTrimester, setActiveTrimester] = useState(1); 

  const nutritionData = { 
    trimesters: { 
      1: { 
        title: "First Trimester (Week 1-12)", 
        focus: "Foundation Building & Managing Symptoms", 
        foods: [ 
          "🍃 Leafy greens (spinach, kale) for folate", 
          "🥑 Avocado for healthy fats and fiber", 
          "🍊 Citrus fruits for Vitamin C and hydration", 
          "🥛 Fortified dairy for calcium", 
          "🌰 Nuts and seeds for zinc and protein", 
          "🍗 Lean meats for iron and B12", 
          "🥚 Eggs for choline and protein", 
          "🍞 Whole grains for sustained energy", 
          "🐟 Low-mercury fish for Omega-3", 
          "💧 Water and herbal teas for hydration" 
        ], 
        avoid: [ 
          "🚫 Raw or undercooked meats and eggs", 
          "🚫 High-mercury fish (tuna, swordfish)", 
          "🚫 Unpasteurized dairy products", 
          "🚫 Excessive caffeine (limit 200mg/day)", 
          "🚫 Alcohol and smoking", 
          "🚫 Processed foods with additives", 
          "🚫 Raw sprouts", 
          "🚫 Unwashed fruits and vegetables" 
        ], 
        tips: [ 
          "Eat small, frequent meals to combat nausea", 
          "Stay hydrated with water, herbal teas, and broths", 
          "Include ginger or peppermint for morning sickness", 
          "Don't skip breakfast - it helps stabilize blood sugar", 
          "Listen to your cravings within reason", 
          "Keep crackers by your bed for morning nausea", 
          "Focus on nutrient-dense foods when you can eat" 
        ], 
        reminders: [ 
          "💧 Drink 8-10 glasses of water daily", 
          "🧘 Include folate-rich foods every day", 
          "🍎 Eat every 2-3 hours to maintain energy", 
          "🌿 Prenatal vitamins are essential", 
          "💫 Rest when you feel tired" 
        ] 
      }, 
      2: { 
        title: "Second Trimester (Week 13-26)", 
        focus: "Supporting Rapid Growth & Development", 
        foods: [ 
          "🐟 Fatty fish (salmon, sardines) for Omega-3", 
          "🍠 Sweet potatoes for Vitamin A", 
          "🥛 Greek yogurt for calcium and protein", 
          "🧘 Lean red meat for iron", 
          "🧘 Berries for antioxidants", 
          "🌾 Whole grains for fiber and energy", 
          "🧘 Colorful vegetables for variety", 
          "🥜 Nuts and seeds for healthy fats", 
          "🍗 Poultry for protein", 
          "🧘 Broccoli for calcium and folate" 
        ], 
        avoid: [ 
          "🚫 Empty calorie snacks", 
          "🚫 Excessive sugar and processed foods", 
          "🚫 Raw sprouts", 
          "🚫 Unwashed fruits and vegetables", 
          "🚫 Artificial sweeteners", 
          "🚫 High-sodium processed foods" 
        ], 
        tips: [ 
          "Aim for 75-100g protein daily", 
          "Include iron-rich foods with Vitamin C for absorption", 
          "Stay active to support circulation", 
          "Monitor weight gain (1 pound per week)", 
          "Enjoy your increased appetite wisely", 
          "Include healthy snacks between meals", 
          "Focus on calcium for baby's bone development" 
        ], 
        reminders: [ 
          "💪 Protein supports baby's growth", 
          "❤ Iron helps prevent anemia", 
          "🧘 Calcium builds strong bones", 
          "🧘 Omega-3 supports brain development", 
          "💃 Stay active and energized" 
        ] 
      }, 
      3: { 
        title: "Third Trimester (Week 27-40)", 
        focus: "Final Preparation & Energy Storage", 
        foods: [ 
          "🥑 Healthy fats for brain development", 
          "🍌 Complex carbohydrates for energy", 
          "🍗 Lean proteins for tissue building", 
          "💧 Water-rich fruits and vegetables", 
          "🌿 Iron-rich foods for blood loss preparation", 
          "🥛 Calcium for bone development", 
          "🍎 Fiber-rich foods for digestion", 
          "🐟 Omega-3 for brain development", 
          "🧘 Green vegetables for nutrients", 
          "🍚 Whole grains for sustained energy" 
        ], 
        avoid: [ 
          "🚫 Large, heavy meals", 
          "🚫 Spicy foods if causing heartburn", 
          "🚫 Gas-producing foods if uncomfortable", 
          "🚫 Late-night large meals", 
          "🚫 Excessive salt", 
          "🚫 Undercooked foods", 
          "🚫 High-sugar treats" 
        ], 
        tips: [ 
          "Eat smaller, more frequent meals", 
          "Stay upright after eating to reduce heartburn", 
          "Include probiotic foods for digestion", 
          "Focus on nutrient-dense foods", 
          "Prepare freezer meals for postpartum", 
          "Stay hydrated to support amniotic fluid", 
          "Include dates which may help with labor" 
        ], 
        reminders: [ 
          "🍽 Small meals reduce discomfort", 
          "💧 Hydration supports amniotic fluid", 
          "🌿 Fiber helps with constipation", 
          "💝 You're in the home stretch!", 
          "🎉 Prepare for your baby's arrival" 
        ] 
      } 
    }
  }; 

  const currentTrimester = nutritionData.trimesters[activeTrimester]; 

  return ( 
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100 py-8 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Enhanced Header */}
        <div className="text-center mb-7">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent mb-4">
            Nutrition & Trimester Diet
          </h1>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Proper nutrition during pregnancy supports your baby's growth and keeps you healthy.  
            Each trimester has different nutritional needs to support your journey.
          </p>
          <div className="w-32 h-1.5 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full mx-auto mt-6 shadow-sm"></div>
        </div>

        {/* Main Content Container */}
        <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl border border-white/50 overflow-hidden">
          {/* Enhanced Trimester Navigation */}
          <div className="bg-gradient-to-r from-slate-50 to-slate-100 px-4 py-3 border-b border-slate-200/60">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
              <div>
                <h2 className="text-2xl font-bold text-slate-800">Trimester Nutrition Guide</h2>
                <p className="text-slate-600 mt-0.5">Select your current pregnancy stage</p>
              </div>
              <div className="flex gap-3 bg-white/60 backdrop-blur-sm  rounded-2xl shadow-inner border border-slate-200/50">
                {[1, 2, 3].map((trimester) => (
                  <button
                    key={trimester}
                    onClick={() => setActiveTrimester(trimester)}
                    className={`px-8 py-4 rounded-xl font-semibold transition-all duration-500 transform hover:scale-105 ${
                      activeTrimester === trimester
                        ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg scale-105'
                        : 'text-slate-700 hover:bg-white/80 hover:shadow-md border border-transparent hover:border-slate-200'
                    }`}
                  >
                    <div className="flex flex-col items-center">
                      <span className="text-xs opacity-90 font-medium">TRIMESTER</span>
                      <span className="text-base">
                        {trimester === 1 && 'First'}
                        {trimester === 2 && 'Second'}
                        {trimester === 3 && 'Third'}
                      </span>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="p-8">
            {/* Video Section - MOVED TO TOP */}
            <div className="group bg-gradient-to-br from-slate-50 to-slate-100 rounded-2xl p-7 shadow-lg hover:shadow-xl transition-all duration-500 border border-slate-200/50 mb-8">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-red-400 to-red-600 rounded-2xl flex items-center justify-center mr-4 shadow-lg">
                  <span className="text-white text-xl">🎬</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-800">Pregnancy Nutrition Guide</h3>
                  <p className="text-slate-500 text-sm">Comprehensive video guide for all trimesters</p>
                </div>
              </div>
              <div className="relative rounded-2xl overflow-hidden shadow-lg group-hover:shadow-xl transition-shadow duration-500">
                <video 
                  controls 
                  className="w-full rounded-2xl"
                  poster="/images/nutrition-video-thumbnail.jpg"
                >
                  <source src="/public/longvideo1.mp4" type="video/mp4" />
                  <source src="/videos/pregnancy-nutrition-guide.webm" type="video/webm" />
                  <source src="/videos/pregnancy-nutrition-guide.ogg" type="video/ogg" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>

            {/* Enhanced Current Trimester Header */}
            <div className="bg-gradient-to-r from-blue-50/80 to-purple-50/80 rounded-2xl p-8 mb-8 border border-blue-200/50 shadow-sm relative overflow-hidden">
              <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-blue-200/30 to-purple-200/30 rounded-full -translate-y-20 translate-x-20"></div>
              <div className="relative">
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-4">
                  <div>
                    <h3 className="text-3xl font-bold text-slate-800 mb-1">{currentTrimester.title}</h3>
                    <div className="inline-flex items-center px-2 py-1 bg-white/60 rounded-full border border-blue-200/50">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mr-2 animate-pulse"></div>
                      <span className="text-blue-700 font-medium text-sm">{currentTrimester.focus}</span>
                    </div>
                  </div>
                  <div className="mt-4 lg:mt-0 lg:text-right">
                    <div className="text-sm text-slate-500 font-medium">Weeks</div>
                    <div className="text-2xl font-bold text-slate-700">
                      {activeTrimester === 1 ? '1-12' : activeTrimester === 2 ? '13-26' : '27-40'}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Enhanced Nutrition Grid */}
            <div className="grid xl:grid-cols-2 gap-8 mb-5">
              {/* Enhanced Recommended Foods */}
              <div className="group bg-white rounded-2xl p-7 shadow-lg hover:shadow-xl transition-all duration-500 border border-emerald-100/50 hover:border-emerald-200 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-emerald-400 to-green-500"></div>
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-emerald-400 to-green-500 rounded-2xl flex items-center justify-center mr-4 shadow-lg">
                    <span className="text-white text-xl">✓</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-800">Recommended Foods</h3>
                    <p className="text-slate-500 text-sm">Essential nutrients for this stage</p>
                  </div>
                </div>
                <div className="grid gap-4">
                  {currentTrimester.foods.map((food, index) => (
                    <div key={index} className="flex items-start p-1 rounded-xl bg-gradient-to-r from-emerald-50/50 to-white hover:from-emerald-50 transition-all duration-300 group/item border border-emerald-100/30 hover:border-emerald-200">
                      <span className="text-2xl mr-4 flex-shrink-0 group-hover/item:scale-110 transition-transform duration-300">{food.split(' ')[0]}</span>
                      <span className="text-slate-700 leading-relaxed flex-1">{food.split(' ').slice(1).join(' ')}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Enhanced Foods to Avoid */}
              <div className="group bg-white rounded-2xl p-7 shadow-lg hover:shadow-xl transition-all duration-500 border border-rose-100/50 hover:border-rose-200 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-rose-400 to-red-500"></div>
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-rose-400 to-red-500 rounded-2xl flex items-center justify-center mr-4 shadow-lg">
                    <span className="text-white text-xl">✗</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-800">Foods to Avoid</h3>
                    <p className="text-slate-500 text-sm">Safety precautions & restrictions</p>
                  </div>
                </div>
                <div className="grid gap-4">
                  {currentTrimester.avoid.map((item, index) => (
                    <div key={index} className="flex items-start p-1 rounded-xl bg-gradient-to-r from-rose-50/50 to-white hover:from-rose-50 transition-all duration-300 group/item border border-rose-100/30 hover:border-rose-200">
                      <span className="text-2xl mr-4 flex-shrink-0 group-hover/item:scale-110 transition-transform duration-300">{item.split(' ')[0]}</span>
                      <span className="text-slate-700 leading-relaxed flex-1">{item.split(' ').slice(1).join(' ')}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Enhanced Tips & Reminders Section */}
            <div className="grid lg:grid-cols-2 gap-8 mb-10">
              {/* Enhanced Nutrition Tips */}
              <div className="group bg-gradient-to-br from-blue-50/50 to-cyan-50/50 rounded-2xl p-7 shadow-lg hover:shadow-xl transition-all duration-500 border border-blue-200/50">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-cyan-500 rounded-2xl flex items-center justify-center mr-4 shadow-lg">
                    <span className="text-white text-xl">💡</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-800">Nutrition Tips</h3>
                    <p className="text-slate-500 text-sm">Practical guidelines & advice</p>
                  </div>
                </div>
                <div className="space-y-4">
                  {currentTrimester.tips.map((tip, index) => (
                    <div key={index} className="flex items-start p-1 rounded-xl bg-white/60 hover:bg-white/80 transition-all duration-300 group/item border border-blue-100/50">
                      <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0 group-hover/item:bg-blue-200 transition-colors duration-300">
                        <span className="text-blue-600 font-bold text-sm">{index + 1}</span>
                      </div>
                      <span className="text-slate-700 leading-relaxed flex-1">{tip}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Enhanced Daily Reminders */}
              <div className="group bg-gradient-to-br from-purple-50/50 to-pink-50/50 rounded-2xl p-7 shadow-lg hover:shadow-xl transition-all duration-500 border border-purple-200/50">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-pink-500 rounded-2xl flex items-center justify-center mr-4 shadow-lg">
                    <span className="text-white text-xl">⏰</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-800">Daily Reminders</h3>
                    <p className="text-slate-500 text-sm">Key priorities for today</p>
                  </div>
                </div>
                <div className="grid gap-4">
                  {currentTrimester.reminders.map((reminder, index) => (
                    <div key={index} className="flex items-center p-1 rounded-xl bg-white/60 hover:bg-white/80 transition-all duration-300 group/item border border-purple-100/50 hover:border-purple-200">
                      <span className="text-2xl mr-4 flex-shrink-0 group-hover/item:scale-110 transition-transform duration-300">{reminder.split(' ')[0]}</span>
                      <span className="text-slate-700 font-medium flex-1">{reminder.split(' ').slice(1).join(' ')}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Enhanced Additional Resources */}
            <div className="grid md:grid-cols-2 gap-6">
              <div className="group bg-gradient-to-br from-emerald-50/50 to-green-50/50 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-500 border border-emerald-200/50">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-emerald-500 rounded-2xl flex items-center justify-center mr-3 shadow-md">
                    <span className="text-white text-lg">🥗</span>
                  </div>
                  <h4 className="font-bold text-slate-800 text-lg">General Nutrition Tips</h4>
                </div>
                <ul className="text-slate-700 space-y-3">
                  <li className="flex items-center p-2 rounded-lg hover:bg-white/50 transition-colors duration-300">
                    <div className="w-6 h-6 bg-emerald-100 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                      <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                    </div>
                    Eat a variety of colorful fruits and vegetables
                  </li>
                  <li className="flex items-center p-2 rounded-lg hover:bg-white/50 transition-colors duration-300">
                    <div className="w-6 h-6 bg-emerald-100 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                      <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                    </div>
                    Include protein with every meal
                  </li>
                  <li className="flex items-center p-2 rounded-lg hover:bg-white/50 transition-colors duration-300">
                    <div className="w-6 h-6 bg-emerald-100 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                      <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                    </div>
                    Choose whole grains over refined grains
                  </li>
                  <li className="flex items-center p-2 rounded-lg hover:bg-white/50 transition-colors duration-300">
                    <div className="w-6 h-6 bg-emerald-100 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                      <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                    </div>
                    Stay hydrated throughout the day
                  </li>
                </ul>
              </div>

              <div className="group bg-gradient-to-br from-purple-50/50 to-pink-50/50 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-500 border border-purple-200/50">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-purple-500 rounded-2xl flex items-center justify-center mr-3 shadow-md">
                    <span className="text-white text-lg">💖</span>
                  </div>
                  <h4 className="font-bold text-slate-800 text-lg">Wellness Notes</h4>
                </div>
                <ul className="text-slate-700 space-y-3">
                  <li className="flex items-center p-2 rounded-lg hover:bg-white/50 transition-colors duration-300">
                    <div className="w-6 h-6 bg-purple-100 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                      <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                    </div>
                    Weight gain is normal and healthy
                  </li>
                  <li className="flex items-center p-2 rounded-lg hover:bg-white/50 transition-colors duration-300">
                    <div className="w-6 h-6 bg-purple-100 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                      <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                    </div>
                    Food aversions and cravings are common
                  </li>
                  <li className="flex items-center p-2 rounded-lg hover:bg-white/50 transition-colors duration-300">
                    <div className="w-6 h-6 bg-purple-100 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                      <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                    </div>
                    Small, frequent meals often work best
                  </li>
                  <li className="flex items-center p-2 rounded-lg hover:bg-white/50 transition-colors duration-300">
                    <div className="w-6 h-6 bg-purple-100 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                      <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                    </div>
                    Every pregnancy journey is unique
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  ); 
}; 

export default NutritionContent;