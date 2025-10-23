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
          "❤️ Iron helps prevent anemia", 
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
          "🍽️ Small meals reduce discomfort", 
          "💧 Hydration supports amniotic fluid", 
          "🌿 Fiber helps with constipation", 
          "💝 You're in the home stretch!", 
          "🎉 Prepare for your baby's arrival" 
        ] 
      } 
    }, 
    videoEmbed: "https://www.youtube.com/embed/XO-rq7U36_c" 
  }; 
 
  const currentTrimester = nutritionData.trimesters[activeTrimester]; 
 
  return ( 
    <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8 transition-all 
duration-500"> 
      <div className="mb-8"> 
        <h2 className="text-2xl md:text-3xl font-bold text-purple-800 mb-4"> 
          Nutrition & Trimester Diet 
        </h2> 
        <p className="text-purple-600 mb-6"> 
          Proper nutrition during pregnancy supports your baby's growth and 
keeps you healthy.  
          Each trimester has different nutritional needs. 
        </p> 
        <div className="w-20 h-1 bg-gradient-to-r from-pink-400 to-purple-500 
rounded-full"></div> 
      </div> 
 
      {/* Trimester Selector */} 
      <div className="flex space-x-2 mb-8 bg-purple-50 p-2 rounded-xl"> 
        {[1, 2, 3].map((trimester) => ( 
          <button 
            key={trimester} 
            onClick={() => setActiveTrimester(trimester)} 
            className={`flex-1 py-3 px-4 rounded-lg font-semibold transition-all 
duration-300 ${ 
              activeTrimester === trimester 
                ? 'bg-purple-600 text-white shadow-md transform scale-105' 
                : 'bg-white text-purple-700 hover:bg-purple-100' 
            }`} 
          > 
            {trimester === 1 && '1st Trimester'} 
            {trimester === 2 && '2nd Trimester'} 
            {trimester === 3 && '3rd Trimester'} 
          </button> 
        ))} 
      </div> 
 
      {/* Current Trimester Focus */} 
      <div className="bg-gradient-to-r from-pink-100 to-purple-100 rounded-xl 
p-6 mb-6 border border-pink-200"> 
        <h3 className="text-xl font-bold text-purple-800 mb
2">{currentTrimester.title}</h3> 
        <p className="text-purple-700"> 
          <span className="font-semibold">Focus:</span> 
{currentTrimester.focus} 
        </p> 
      </div> 
 
      {/* Nutrition Cards Grid */} 
      <div className="grid md:grid-cols-2 gap-6 mb-8"> 
        {/* Recommended Foods */} 
        <div className="bg-green-50 rounded-xl p-6 border-l-4 border-green-400 
hover:shadow-md transition-all duration-300"> 
          <div className="flex items-center mb-4"> 
            <div className="w-10 h-10 bg-green-400 rounded-full flex items-center 
justify-center mr-3"> 
              <span className="text-white text-lg">✅</span> 
            </div> 
            <h3 className="text-lg font-bold text-purple-800">Eat These 
Foods</h3> 
          </div> 
          <ul className="space-y-3"> 
            {currentTrimester.foods.map((food, index) => ( 
              <li key={index} className="flex items-center text-purple-700"> 
                <span className="text-lg mr-3">{food.split(' ')[0]}</span> 
                <span className="text-sm flex-1">{food.split(' ').slice(1).join(' ')}</span> 
              </li> 
            ))} 
          </ul> 
        </div> 
 
        {/* Foods to Avoid */} 
        <div className="bg-red-50 rounded-xl p-6 border-l-4 border-red-400 
hover:shadow-md transition-all duration-300"> 
          <div className="flex items-center mb-4"> 
            <div className="w-10 h-10 bg-red-400 rounded-full flex items-center 
justify-center mr-3"> 
              <span className="text-white text-lg">🚫</span> 
            </div> 
            <h3 className="text-lg font-bold text-purple-800">Avoid These</h3> 
          </div> 
          <ul className="space-y-3"> 
            {currentTrimester.avoid.map((item, index) => ( 
              <li key={index} className="flex items-center text-purple-700"> 
                <span className="text-lg mr-3">{item.split(' ')[0]}</span> 
                <span className="text-sm flex-1">{item.split(' ').slice(1).join(' ')}</span> 
              </li> 
            ))} 
          </ul> 
        </div> 
      </div> 
 
      {/* Nutrition Tips */} 
      <div className="bg-blue-50 rounded-xl p-6 border-l-4 border-blue-400 mb
6 hover:shadow-md transition-all duration-300"> 
        <div className="flex items-center mb-4"> 
          <div className="w-10 h-10 bg-blue-400 rounded-full flex items-center 
justify-center mr-3"> 
            <span className="text-white text-lg">💡</span> 
          </div> 
          <h3 className="text-lg font-bold text-purple-800">Nutrition Tips & 
Guidelines</h3> 
        </div> 
        <ul className="space-y-3"> 
          {currentTrimester.tips.map((tip, index) => ( 
            <li key={index} className="flex items-start text-purple-700"> 
              <span className="text-blue-500 mr-2 text-lg">•</span> 
              <span className="flex-1">{tip}</span> 
            </li> 
          ))} 
        </ul> 
      </div> 
 
      {/* Interactive Reminders */} 
      <div className="mb-8"> 
        <h3 className="text-lg font-bold text-purple-800 mb-4 text-center">Daily 
Reminders</h3> 
        <div className="grid md:grid-cols-5 gap-3"> 
          {currentTrimester.reminders.map((reminder, index) => ( 
            <div 
              key={index} 
              className="bg-gradient-to-br from-pink-100 to-purple-100 rounded-xl 
p-4 text-center border border-pink-200 hover:shadow-md transition-all 
duration-300 hover:scale-105" 
            > 
              <p className="text-sm text-purple-700 font-medium">{reminder}</p> 
            </div> 
          ))} 
        </div> 
      </div> 
 
      {/* YouTube Video */} 
<div className="bg-purple-50 rounded-xl p-6 hover:shadow-md transition-all duration-300"> 
  <h3 className="text-lg font-bold text-purple-800 mb-4 text-center"> 
    📺 Pregnancy Nutrition Guide Video 
  </h3> 
  <div className="relative pb-[56.25%] h-0"> 
    <iframe 
      src={`https://www.youtube.com/embed/_dVuHFdUN0c`}
      title="Pregnancy Nutrition Guide" 
      className="absolute top-0 left-0 w-full h-full rounded-lg shadow-md" 
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
      allowFullScreen 
    ></iframe> 
  </div> 
  <p className="text-center text-purple-600 text-sm mt-3"> 
    Watch this comprehensive guide to pregnancy nutrition for more tips and information
  </p>
</div>
 
      {/* General Pregnancy Nutrition Tips */} 
      <div className="mt-6 grid md:grid-cols-2 gap-4"> 
        <div className="bg-pink-50 p-4 rounded-xl border border-pink-200"> 
          <h4 className="font-bold text-purple-800 mb-2">🥗 General Tips</h4> 
          <ul className="text-sm text-purple-700 space-y-1"> 
            <li>• Eat a variety of colorful fruits and vegetables</li> 
            <li>• Include protein with every meal</li> 
            <li>• Choose whole grains over refined grains</li> 
            <li>• Stay hydrated throughout the day</li> 
            <li>• Listen to your hunger and fullness cues</li> 
          </ul> 
        </div> 
        <div className="bg-purple-50 p-4 rounded-xl border border-purple-200"> 
          <h4 className="font-bold text-purple-800 mb-2">💖 Wellness 
Notes</h4> 
          <ul className="text-sm text-purple-700 space-y-1"> 
            <li>• Weight gain is normal and healthy</li> 
            <li>• Food aversions and cravings are common</li> 
            <li>• Small, frequent meals often work best</li> 
            <li>• Your body knows what it needs - trust it</li> 
            <li>• Every pregnancy journey is unique</li> 
          </ul> 
        </div> 
      </div> 
    </div> 
  ); 
}; 
 
export default NutritionContent;