import React from 'react'; 
 
const MonthContent = ({ activeMonth }) => { 
 const monthData = {
  1: { 
    title: "1st Month (Week 1-4)", 
    babyDevelopment: [ 
      "Baby is now an embryo about the size of a poppy seed", 
      "Neural tube forms (will become brain and spinal cord)", 
      "Heart begins to form and may start beating by week 4", 
      "Basic facial features start developing", 
      "Arm and leg buds appear" 
    ], 
    motherChanges: [ 
      "Missed period is usually the first sign", 
      "Fatigue and extreme tiredness are common", 
      "Tender, swollen breasts", 
      "Morning sickness may begin", 
      "Frequent urination", 
      "Food cravings or aversions" 
    ], 
    healthTips: [ 
      "Start taking prenatal vitamins with folic acid", 
      "Schedule your first prenatal appointment", 
      "Avoid alcohol, smoking, and certain medications", 
      "Eat small, frequent meals to manage nausea", 
      "Stay hydrated and get plenty of rest", 
      "Begin tracking your pregnancy journey" 
    ] 
  },
  2: { 
    title: "2nd Month (Week 5-8)", 
    babyDevelopment: [ 
      "Baby grows from poppy seed to raspberry size", 
      "All major organs begin to form", 
      "Facial features become more distinct", 
      "Fingers and toes start to develop", 
      "Neural tube closes completely" 
    ], 
    motherChanges: [ 
      "Morning sickness may intensify", 
      "Breasts continue to grow and become tender", 
      "Increased fatigue and mood swings", 
      "Heightened sense of smell", 
      "Weight gain begins (1-2 kg)" 
    ], 
    healthTips: [ 
      "Continue prenatal vitamins daily", 
      "Eat protein-rich foods for baby's development", 
      "Practice gentle exercises like walking", 
      "Get plenty of sleep and rest", 
      "Stay hydrated with water and healthy fluids" 
    ] 
  },
  3: { 
    title: "3rd Month (Week 9-12)", 
    babyDevelopment: [ 
      "Baby is now about the size of a plum", 
      "All vital organs are formed and functioning", 
      "Fingers and toes are fully separated", 
      "Baby can make fist movements", 
      "Sex organs begin to differentiate" 
    ], 
    motherChanges: [ 
      "Morning sickness usually starts to improve", 
      "Uterus expands to the size of a grapefruit", 
      "Energy levels may begin to return", 
      "Weight gain continues gradually", 
      "Visible baby bump may start showing" 
    ], 
    healthTips: [ 
      "First trimester screening tests", 
      "Continue balanced nutrition", 
      "Wear comfortable, loose clothing", 
      "Practice pelvic floor exercises", 
      "Stay active with moderate exercise" 
    ] 
  },
  4: { 
    title: "4th Month (Week 13-16)", 
    babyDevelopment: [ 
      "Baby is now the size of an avocado", 
      "Can suck thumb and make facial expressions", 
      "Hair, eyebrows, and eyelashes begin to grow", 
      "Bones are hardening", 
      "Nervous system starts functioning" 
    ], 
    motherChanges: [ 
      "Second trimester energy boost begins", 
      "Baby bump becomes more noticeable", 
      "Skin changes and glow may appear", 
      "Appetite increases", 
      "Quickening - first fetal movements may be felt" 
    ], 
    healthTips: [ 
      "Increase calcium intake for baby's bones", 
      "Sleep on your side for better circulation", 
      "Continue regular prenatal checkups", 
      "Start planning maternity leave", 
      "Practice relaxation techniques" 
    ] 
  },
  5: { 
    title: "5th Month (Week 17-20)", 
    babyDevelopment: [ 
      "Baby is now the size of a banana", 
      "Hearing develops - can hear mother's voice", 
      "Vernix caseosa protects the skin", 
      "Regular sleep-wake cycles begin", 
      "Gender can usually be determined" 
    ], 
    motherChanges: [ 
      "Fetal movements become stronger and regular", 
      "Backaches may begin due to growing belly", 
      "Skin stretching may cause itching", 
      "Increased vaginal discharge", 
      "Nasal congestion and nosebleeds possible" 
    ], 
    healthTips: [ 
      "Anatomy scan ultrasound around week 20", 
      "Use moisturizer for stretching skin", 
      "Practice good posture", 
      "Wear supportive maternity bras", 
      "Stay hydrated to prevent cramps" 
    ] 
  },
  6: { 
    title: "6th Month (Week 21-24)", 
    babyDevelopment: [ 
      "Baby is now about the size of an ear of corn", 
      "Lungs are developing rapidly", 
      "Eyes begin to open and close", 
      "Fingerprints and footprints form", 
      "Responds to sounds and touch" 
    ], 
    motherChanges: [ 
      "Weight gain accelerates", 
      "Braxton Hicks contractions may begin", 
      "Shortness of breath possible", 
      "Leg cramps and swelling in feet/ankles", 
      "Linea nigra may appear on abdomen" 
    ], 
    healthTips: [ 
      "Gestational diabetes screening", 
      "Elevate feet when sitting", 
      "Practice prenatal yoga", 
      "Monitor blood pressure regularly", 
      "Eat iron-rich foods to prevent anemia" 
    ] 
  },
  7: { 
    title: "7th Month (Week 25-28)", 
    babyDevelopment: [ 
      "Baby is now the size of an eggplant", 
      "Brain development accelerates", 
      "Eyes can perceive light", 
      "Lungs continue maturing", 
      "Can recognize mother's voice" 
    ], 
    motherChanges: [ 
      "Third trimester fatigue may return", 
      "Increased back pain and discomfort", 
      "Heartburn and indigestion common", 
      "Frequent urination returns", 
      "Stretch marks may appear" 
    ], 
    healthTips: [ 
      "Start childbirth education classes", 
      "Practice Kegel exercises regularly", 
      "Sleep with extra pillows for support", 
      "Prepare hospital bag", 
      "Monitor baby's movement patterns" 
    ] 
  },
  8: { 
    title: "8th Month (Week 29-32)", 
    babyDevelopment: [ 
      "Baby is now the size of a squash", 
      "Rapid weight gain begins", 
      "Bones are fully developed but soft", 
      "Can distinguish between light and dark", 
      "Most organs are mature except lungs" 
    ], 
    motherChanges: [ 
      "Breathing may become more difficult", 
      "Increased Braxton Hicks contractions", 
      "Swelling in hands and feet", 
      "Trouble sleeping comfortably", 
      "Baby drops lower in preparation for birth" 
    ], 
    healthTips: [ 
      "Bi-weekly prenatal visits begin", 
      "Practice breathing techniques for labor", 
      "Eat smaller, more frequent meals", 
      "Stay cool and hydrated", 
      "Finalize birth plan" 
    ] 
  },
  9: { 
    title: "9th Month (Week 33-40)", 
    babyDevelopment: [ 
      "Baby is now full-term and ready for birth", 
      "Lungs are fully mature", 
      "Continues to gain weight (about 250g per week)", 
      "Head positions down for birth", 
      "Vernix and lanugo start to disappear" 
    ], 
    motherChanges: [ 
      "Lightening - baby drops into pelvis", 
      "Increased pelvic pressure", 
      "Nesting instinct may kick in", 
      "Cervix begins to efface and dilate", 
      "Mucus plug may be lost" 
    ], 
    healthTips: [ 
      "Weekly prenatal visits", 
      "Watch for signs of labor", 
      "Rest as much as possible", 
      "Final preparations for baby's arrival", 
      "Know when to go to the hospital" 
    ] 
  }
};
 
  const currentMonth = monthData[activeMonth]; 
 
  if (!currentMonth) { 
    return ( 
      <div className="bg-white rounded-2xl shadow-lg p-8 text-center"> 
        <div className="text-6xl mb-4">👶</div> 
        <h2 className="text-2xl font-bold text-purple-800 mb-4">Select a Month</h2> 
        <p className="text-purple-600">Choose a month from the sidebar to see detailed information about your pregnancy journey</p> 
      </div> 
    ); 
  } 
 
  return ( 
    <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8 transition-all duration-500"> 
      <div className="mb-8"> 
        <h2 className="text-2xl md:text-3xl font-bold text-purple-800 mb-4"> 
          {currentMonth.title} 
        </h2> 
        <div className="w-20 h-1 bg-gradient-to-r from-pink-400 to-purple-500 rounded-full"></div> 
      </div> 
 
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8"> 
        {/* Baby Development Card */} 
        <div className="bg-pink-50 rounded-xl p-6 border-l-4 border-pink-400 hover:shadow-md transition-all duration-300"> 
          <div className="flex items-center mb-4"> 
            <div className="w-10 h-10 bg-pink-400 rounded-full flex items-center justify-center mr-3"> 
              <span className="text-white text-lg">👶</span> 
            </div> 
            <h3 className="text-lg font-bold text-purple-800">Baby&apos;s Development</h3> 
          </div> 
          <ul className="space-y-3"> 
            {currentMonth.babyDevelopment.map((item, index) => ( 
              <li key={index} className="flex items-start"> 
                <span className="text-pink-500 mr-2 text-lg">•</span> 
                <span className="text-purple-700 text-sm">{item}</span> 
              </li> 
            ))} 
          </ul> 
        </div> 
 
        {/* Mother's Changes Card */} 
        <div className="bg-purple-50 rounded-xl p-6 border-l-4 border-purple-400 hover:shadow-md transition-all duration-300"> 
          <div className="flex items-center mb-4"> 
            <div className="w-10 h-10 bg-purple-400 rounded-full flex items-center justify-center mr-3"> 
              <span className="text-white text-lg">🤰</span> 
            </div> 
            <h3 className="text-lg font-bold text-purple-800">Mother&apos;s Body Changes</h3> 
          </div> 
          <ul className="space-y-3"> 
            {currentMonth.motherChanges.map((item, index) => ( 
              <li key={index} className="flex items-start"> 
                <span className="text-purple-500 mr-2 text-lg">•</span> 
                <span className="text-purple-700 text-sm">{item}</span> 
              </li> 
            ))} 
          </ul> 
        </div> 
 
        {/* Health Tips Card */} 
        <div className="bg-pink-50 rounded-xl p-6 border-l-4 border-pink-400 hover:shadow-md transition-all duration-300"> 
          <div className="flex items-center mb-4"> 
            <div className="w-10 h-10 bg-pink-500 rounded-full flex items-center justify-center mr-3"> 
              <span className="text-white text-lg">💖</span> 
            </div> 
            <h3 className="text-lg font-bold text-purple-800">Health & Care Tips</h3> 
          </div> 
          <ul className="space-y-3"> 
            {currentMonth.healthTips.map((item, index) => ( 
              <li key={index} className="flex items-start"> 
                <span className="text-pink-500 mr-2 text-lg">•</span> 
                <span className="text-purple-700 text-sm">{item}</span> 
              </li> 
            ))} 
          </ul> 
        </div> 
      </div> 
 
      {/* Monthly Milestone */} 
      <div className="bg-gradient-to-r from-pink-100 to-purple-100 rounded-xl p-6 mb-6 border border-pink-200"> 
        <h3 className="text-lg font-bold text-purple-800 mb-3">Monthly Milestone</h3> 
        <p className="text-purple-700"> 
          {activeMonth === 1 && "Your baby's heart begins to beat! This is a magical moment in your pregnancy journey."} 
          {activeMonth === 2 && "All major organs are forming. Your little one is rapidly developing into a tiny human."} 
          {activeMonth === 3 && "First trimester complete! Your baby is now fully formed and entering a growth phase."} 
        </p> 
      </div> 
 
      {/* Progress Indicator */} 
      <div className="mt-8 pt-6 border-t border-purple-100"> 
        <div className="flex items-center justify-between mb-2"> 
          <span className="text-sm text-purple-600">Pregnancy Progress</span> 
          <span className="text-sm font-semibold text-purple-700"> 
            Month {activeMonth} of 9 
          </span> 
        </div> 
        <div className="w-full bg-purple-200 rounded-full h-3 mb-2"> 
          <div 
            className="bg-gradient-to-r from-pink-400 to-purple-500 h-3 rounded-full transition-all duration-500" 
            style={{ width: `${(activeMonth / 9) * 100}%` }} 
          ></div> 
        </div> 
        <div className="flex justify-between text-xs text-purple-500"> 
          <span>Start</span> 
          <span>{((activeMonth / 9) * 100).toFixed(0)}% Complete</span> 
          <span>Due Date</span> 
        </div> 
      </div> 
 
      {/* Next Steps */} 
      <div className="mt-6 p-4 bg-blue-50 rounded-xl border border-blue-200"> 
        <h4 className="font-bold text-purple-800 mb-2">Next Steps</h4> 
        <p className="text-purple-700 text-sm"> 
          {activeMonth === 1 && "Schedule your first prenatal appointment and start taking prenatal vitamins daily."} 
          {activeMonth === 2 && "Continue with healthy eating habits and consider starting a pregnancy journal."} 
          {activeMonth === 3 && "Prepare to share your exciting news with family and friends if you choose to."} 
        </p> 
      </div> 
    </div> 
  ); 
}; 
 
export default MonthContent;