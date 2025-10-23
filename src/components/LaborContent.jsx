import React from 'react'; 
 
const LaborContent = () => { 
  const laborData = { 
    earlySigns: [ 
      { 
        title: "Lightening", 
        description: "Baby drops lower into your pelvis, making breathing easier but increasing pelvic pressure", 
        timing: "2-4 weeks before labor (first-time moms)", 
        icon: "👇" 
      }, 
      { 
        title: "Nesting Instinct", 
        description: "Sudden burst of energy to clean, organize, and prepare for baby's arrival", 
        timing: "Days or hours before labor", 
        icon: "🏠" 
      }, 
      { 
        title: "Bloody Show", 
        description: "Passage of mucus plug, may be tinged with blood - indicates cervix is dilating", 
        timing: "Hours to days before labor", 
        icon: "🔴" 
      }, 
      { 
        title: "Water Breaking", 
        description: "Rupture of amniotic sac - can be a gush or slow trickle of fluid", 
        timing: "Before or during labor", 
        icon: "💧" 
      }, 
      { 
        title: "Regular Contractions", 
        description: "Contractions become regular, longer, stronger, and closer together", 
        timing: "Active labor phase", 
        icon: "⏰" 
      }, 
      { 
        title: "Back Pain", 
        description: "Persistent lower back pain and cramping that doesn't go away", 
        timing: "Early to active labor", 
        icon: "🔙" 
      } 
    ], 
    laborStages: [ 
      { 
        stage: "Early Labor", 
        duration: "Hours to days", 
        signs: [ 
          "Mild, irregular contractions (20-30 minutes apart)", 
          "Backache and cramping similar to period pain", 
          "Softening and early dilation of cervix (0-4 cm)", 
          "Possible diarrhea as body prepares", 
          "Bloody show may appear" 
        ], 
        action: "Rest, hydrate, eat light meals, time contractions, pack hospital bag" 
      }, 
      { 
        stage: "Active Labor", 
        duration: "4-8 hours", 
        signs: [ 
          "Strong, regular contractions (3-5 minutes apart)", 
          "Increased pain intensity with each contraction", 
          "Cervix dilates from 4cm to 7cm", 
          "Difficulty talking through contractions", 
          "Water may break if it hasn't already" 
        ], 
        action: "Go to hospital/birth center, use breathing techniques, change positions frequently" 
      }, 
      { 
        stage: "Transition Phase", 
        duration: "30 minutes - 2 hours", 
        signs: [ 
          "Very strong contractions (2-3 minutes apart)", 
          "Cervix completes dilation (8-10 cm)", 
          "Intense pressure in rectal area", 
          "Shaking, nausea, or vomiting", 
          "Feeling hot and cold alternately" 
        ], 
        action: "Focus on breathing, use comfort measures, listen to your body's pushing urges" 
      } 
    ], 
    cSection: { 
      planned: [ 
        "Breech position (baby not head-down)", 
        "Placenta previa (placenta covering cervix)", 
        "Multiple babies (twins, triplets)", 
        "Maternal health conditions (diabetes, heart issues)", 
        "Previous C-section with certain incision types", 
        "Baby too large for pelvic structure" 
      ], 
      emergency: [ 
        "Fetal distress (baby's heart rate concerns)", 
        "Labor not progressing despite interventions", 
        "Umbilical cord prolapse", 
        "Placental abruption", 
        "Maternal health concerns during labor", 
        "Baby's position making delivery difficult" 
      ], 
      recovery: [ 
        "Rest and avoid heavy lifting for 6 weeks", 
        "Keep incision clean and dry - watch for redness or discharge", 
        "Take pain medication as prescribed by your doctor", 
        "Walk gently to promote circulation and prevent blood clots", 
        "Use pillow for support when coughing or laughing", 
        "Stay hydrated and eat fiber-rich foods to prevent constipation" 
      ] 
    }, 
    whenToCall: [ 
      "Contractions are 5 minutes apart or less", 
      "Your water breaks (clear or any color)", 
      "Decreased fetal movement", 
      "Vaginal bleeding (more than spotting)", 
      "Severe abdominal pain that doesn't go away", 
      "High fever or chills" 
    ] 
  }; 
 
  return ( 
    <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8 transition-all duration-500"> 
      <div className="mb-8"> 
        <h2 className="text-2xl md:text-3xl font-bold text-purple-800 mb-4"> 
          Labour & C-section Signs 
        </h2> 
        <p className="text-purple-600"> 
          Know what to expect and when to seek medical attention during this important phase 
        </p> 
        <div className="w-20 h-1 bg-gradient-to-r from-pink-400 to-purple-500 rounded-full"></div> 
      </div> 
 
      {/* Early Signs of Labor */} 
      <div className="mb-8"> 
        <h3 className="text-xl font-bold text-purple-800 mb-6 flex items-center"> 
          <span className="text-2xl mr-2">🔍</span> 
          Early Signs of Labor 
        </h3> 
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4"> 
          {laborData.earlySigns.map((sign, index) => ( 
            <div key={index} className="bg-pink-50 rounded-xl p-4 border-l-4 border-pink-400 
hover:shadow-md transition-all duration-300"> 
              <div className="flex items-center mb-3"> 
                <span className="text-2xl mr-3">{sign.icon}</span> 
                <h4 className="font-semibold text-purple-800">{sign.title}</h4> 
              </div> 
              <p className="text-purple-700 text-sm mb-3 leading-relaxed">{sign.description}</p> 
              <div className="text-xs text-purple-500 bg-pink-100 px-3 py-1 rounded-full inline-block"> 
                ⏰ {sign.timing} 
              </div> 
            </div> 
          ))} 
        </div> 
      </div> 
 
      {/* Labor Stages */} 
      <div className="mb-8"> 
        <h3 className="text-xl font-bold text-purple-800 mb-6 flex items-center"> 
          <span className="text-2xl mr-2">📈</span> 
          Stages of Labor 
        </h3> 
        <div className="space-y-6"> 
          {laborData.laborStages.map((stage, index) => ( 
            <div key={index} className="bg-purple-50 rounded-xl p-6 hover:shadow-md transition-all 
duration-300"> 
              <div className="flex items-center justify-between mb-4"> 
                <h4 className="text-lg font-bold text-purple-800">{stage.stage}</h4> 
                <span className="bg-purple-200 text-purple-700 px-3 py-1 rounded-full text-sm font
medium"> 
                  ⏱️ Duration: {stage.duration} 
                </span> 
              </div> 
               
              <div className="grid md:grid-cols-2 gap-6"> 
                <div> 
                  <h5 className="font-semibold text-purple-700 mb-3 flex items-center"> 
                    <span className="text-pink-500 mr-2">📋</span> 
                    Signs & Symptoms: 
                  </h5> 
                  <ul className="space-y-2 text-sm text-purple-700"> 
                    {stage.signs.map((sign, signIndex) => ( 
                      <li key={signIndex} className="flex items-start"> 
                        <span className="text-pink-500 mr-2">•</span> 
                        {sign} 
                      </li> 
                    ))} 
                  </ul> 
                </div> 
                <div> 
                  <h5 className="font-semibold text-purple-700 mb-3 flex items-center"> 
                    <span className="text-green-500 mr-2">✅</span> 
                    What to Do: 
                  </h5> 
                  <p className="text-sm text-purple-700 bg-white p-4 rounded-lg border border-purple-200 
leading-relaxed"> 
                    {stage.action} 
                  </p> 
                </div> 
              </div> 
            </div> 
          ))} 
        </div> 
      </div> 
 
      {/* C-section Information */} 
      <div className="mb-8"> 
        <h3 className="text-xl font-bold text-purple-800 mb-6 flex items-center"> 
          <span className="text-2xl mr-2">👩🧘</span> 
          C-section Information 
        </h3> 
        <div className="grid md:grid-cols-2 gap-6"> 
          {/* Planned C-section */} 
          <div className="bg-green-50 rounded-xl p-6 border-l-4 border-green-400"> 
            <h3 className="text-lg font-bold text-purple-800 mb-4 flex items-center"> 
              <span className="text-green-500 mr-2">📅</span> 
              Planned C-section Reasons 
            </h3> 
            <ul className="space-y-3"> 
              {laborData.cSection.planned.map((reason, index) => ( 
                <li key={index} className="flex items-start text-purple-700"> 
                  <span className="text-green-500 mr-2">•</span> 
                  <span>{reason}</span> 
                </li> 
              ))} 
            </ul> 
          </div> 
 
          {/* Emergency C-section */} 
          <div className="bg-red-50 rounded-xl p-6 border-l-4 border-red-400"> 
            <h3 className="text-lg font-bold text-purple-800 mb-4 flex items-center"> 
              <span className="text-red-500 mr-2">🚨</span> 
              Emergency C-section Reasons 
            </h3> 
            <ul className="space-y-3"> 
              {laborData.cSection.emergency.map((reason, index) => ( 
                <li key={index} className="flex items-start text-purple-700"> 
                  <span className="text-red-500 mr-2">•</span> 
                  <span>{reason}</span> 
                </li> 
              ))} 
            </ul> 
          </div> 
        </div> 
      </div> 
 
      {/* Recovery Tips */} 
      <div className="mb-6 bg-blue-50 rounded-xl p-6 border-l-4 border-blue-400"> 
        <h3 className="text-lg font-bold text-purple-800 mb-4 flex items-center"> 
          <span className="text-blue-500 mr-2">💖</span> 
          C-section Recovery Tips 
        </h3> 
        <div className="grid md:grid-cols-2 gap-4"> 
          {laborData.cSection.recovery.map((tip, index) => ( 
            <div key={index} className="flex items-start"> 
              <span className="text-blue-500 mr-2">•</span> 
              <span className="text-purple-700">{tip}</span> 
            </div> 
          ))} 
        </div> 
      </div> 
 
      {/* When to Call Doctor */} 
      <div className="mb-6"> 
        <h3 className="text-xl font-bold text-purple-800 mb-4 flex items-center"> 
          <span className="text-2xl mr-2">📞</span> 
          When to Call Your Doctor 
        </h3> 
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3"> 
          {laborData.whenToCall.map((reason, index) => ( 
            <div key={index} className="bg-orange-50 p-3 rounded-lg border border-orange-200"> 
              <p className="text-sm text-purple-700 text-center">{reason}</p> 
            </div> 
          ))} 
        </div> 
      </div> 
 
      {/* Emergency Contact Reminder */} 
      <div className="p-4 bg-gradient-to-r from-pink-100 to-purple-100 rounded-xl border-2 border
pink-200 text-center"> 
        <h4 className="font-bold text-purple-800 mb-2 text-lg">🚨 Emergency Signs - Call 
Immediately!</h4> 
        <p className="text-purple-700 text-sm mb-2"> 
          Severe abdominal pain, heavy bleeding (soaking a pad per hour),  
          decreased fetal movement, high fever, or your water breaks with green/brown fluid. 
        </p> 
        <p className="text-purple-600 text-xs"> 
          Always trust your instincts - if something doesn't feel right, contact your healthcare provider. 
        </p> 
      </div> 
 
      {/* Positive Message */} 
      <div className="mt-6 text-center"> 
        <p className="text-purple-600 italic"> 
          💫 Remember: Your body is designed for this incredible journey. Trust yourself and your 
medical team.  
          You've got this, mama! 🌸 
        </p> 
      </div> 
    </div> 
  ); 
}; 
 
export default LaborContent;