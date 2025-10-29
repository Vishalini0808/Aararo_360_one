import React, { useState } from 'react';

const MonthContent = ({ activeMonth, onMonthChange }) => {
  const [selectedMonth, setSelectedMonth] = useState(activeMonth);

   // Image paths for each month
  const monthImages = {
    1: "/bf1.jpg",
    2: "/bf2.jpg",
    3: "/bf3.jpg",
    4: "/bf4.jpg",
    5: "/bf5.jpg",
    6: "/bf6.jpg",
    7: "/bf7.jpg",
    8: "/bf8.jpg",
    9: "/bf9.jpg"
  };

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

  const currentMonth = monthData[selectedMonth];
  const currentImage = monthImages[selectedMonth];

  const handleMonthChange = (month) => {
    setSelectedMonth(month);
    if (onMonthChange) {
      onMonthChange(month);
    }
  };

  if (!currentMonth) {
    return (
      <div className="h-full flex items-center justify-center bg-gradient-to-br from-slate-50 to-blue-50/30 rounded-2xl shadow-sm border border-slate-200 p-8">
        <div className="text-center">
          <div className="w-20 h-20 bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-inner">
            <span className="text-3xl">👶</span>
          </div>
          <h2 className="text-2xl font-bold text-slate-800 mb-3">Select a Month</h2>
          <p className="text-slate-600 max-w-md">
            Choose a month from the navigation to explore detailed pregnancy information
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="h-full flex flex-col">
      {/* Month Selection Tabs - Horizontal */}
      <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-4 mb-4 flex-shrink-0">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center shadow-sm">
              <span className="text-white font-bold text-lg">{selectedMonth}</span>
            </div>
            <div>
              <h2 className="text-xl font-bold text-slate-800">
                {currentMonth.title}
              </h2>
              <div className="flex items-center space-x-4 mt-1">
                <span className="text-sm text-slate-600">
                  Month {selectedMonth} of 9
                </span>
                <span className="text-sm font-semibold text-blue-600">
                  {((selectedMonth / 9) * 100).toFixed(0)}% Complete
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Month Selection Tabs */}
        <div className="flex space-x-2 overflow-x-auto pb-2">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((month) => (
            <button
              key={month}
              onClick={() => handleMonthChange(month)}
              className={`flex-shrink-0 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                selectedMonth === month
                  ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-sm'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              Month {month}
            </button>
          ))}
        </div>

        {/* Progress Bar */}
        <div className="mt-3">
          <div className="w-full bg-slate-200 rounded-full h-1.5 shadow-inner">
            <div
              className="bg-gradient-to-r from-blue-500 to-purple-500 h-1.5 rounded-full transition-all duration-700"
              style={{ width: `${(selectedMonth / 9) * 100}%` }}
            ></div>
          </div>
        </div>
      </div>

      {/* Scrollable Content */}
      <div className="flex-1 overflow-y-auto space-y-4">
       {/* Image Section */}
<div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
  <div className="relative h-64 sm:h-72 md:h-80 lg:h-96 flex items-center justify-center p-4">
    {/* Previous Month Arrow */}
    {selectedMonth > 1 && (
      <button
        onClick={() => handleMonthChange(selectedMonth - 1)}
        className="absolute left-4 z-10 w-10 h-10 bg-white/80 hover:bg-white rounded-full shadow-md flex items-center justify-center transition-all duration-200 hover:scale-110 border border-slate-200"
      >
        <svg className="w-5 h-5 text-slate-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
    )}

    {/* Next Month Arrow */}
    {selectedMonth < 9 && (
      <button
        onClick={() => handleMonthChange(selectedMonth + 1)}
        className="absolute right-4 z-10 w-10 h-10 bg-white/80 hover:bg-white rounded-full shadow-md flex items-center justify-center transition-all duration-200 hover:scale-110 border border-slate-200"
      >
        <svg className="w-5 h-5 text-slate-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>
    )}

    <img 
      src={currentImage} 
      alt={`Pregnancy development at month ${selectedMonth}`}
      className="max-w-full max-h-full object-contain rounded-2xl"
      onError={(e) => {
        e.target.style.display = 'none';
        e.target.nextSibling.style.display = 'flex';
      }}
    />
    
    {/* Fallback if image fails to load */}
    <div 
      className="hidden w-full h-full items-center justify-center"
    >
      <div className="text-center">
        <span className="text-4xl mb-2 block">👶</span>
        <p className="text-slate-600 text-sm">Month {selectedMonth} Image</p>
      </div>
    </div>
  </div>
</div>
        {/* Cards Grid */}
        <div className="grid lg:grid-cols-3 gap-4">
          {/* Baby Development Card */}
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-4 border border-blue-200 shadow-sm">
            <div className="flex items-center mb-3">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center mr-3 shadow-sm">
                <span className="text-white text-sm">👶</span>
              </div>
              <h3 className="text-base font-bold text-slate-800">Baby Development</h3>
            </div>
            <ul className="space-y-2">
              {currentMonth.babyDevelopment.map((item, index) => (
                <li key={index} className="flex items-start text-slate-700 text-xs leading-relaxed">
                  <span className="text-blue-500 mr-2 mt-0.5 flex-shrink-0 text-sm">•</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Mother's Changes Card */}
          <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-4 border border-purple-200 shadow-sm">
            <div className="flex items-center mb-3">
              <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mr-3 shadow-sm">
                <span className="text-white text-sm">🤰</span>
              </div>
              <h3 className="text-base font-bold text-slate-800">Your Changes</h3>
            </div>
            <ul className="space-y-2">
              {currentMonth.motherChanges.map((item, index) => (
                <li key={index} className="flex items-start text-slate-700 text-xs leading-relaxed">
                  <span className="text-purple-500 mr-2 mt-0.5 flex-shrink-0 text-sm">•</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Health Tips Card */}
          <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-xl p-4 border border-emerald-200 shadow-sm">
            <div className="flex items-center mb-3">
              <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-lg flex items-center justify-center mr-3 shadow-sm">
                <span className="text-white text-sm">💖</span>
              </div>
              <h3 className="text-base font-bold text-slate-800">Health Tips</h3>
            </div>
            <ul className="space-y-2">
              {currentMonth.healthTips.map((item, index) => (
                <li key={index} className="flex items-start text-slate-700 text-xs leading-relaxed">
                  <span className="text-emerald-500 mr-2 mt-0.5 flex-shrink-0 text-sm">•</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Additional Sections */}
        <div className="grid lg:grid-cols-2 gap-4">
          {/* Monthly Milestone */}
          <div className="bg-gradient-to-r from-indigo-50 to-blue-50 rounded-xl p-4 border border-indigo-200 shadow-sm">
            <h3 className="text-base font-bold text-slate-800 mb-2 flex items-center">
              <div className="w-8 h-8 bg-indigo-500 rounded flex items-center justify-center mr-2">
                <span className="text-white text-xs">⭐</span>
              </div>
              Monthly Milestone
            </h3>
            <p className="text-slate-700 text-xs leading-relaxed">
              {selectedMonth === 1 && "Your baby's heart begins to beat! This foundational milestone marks the beginning of an incredible developmental journey."}
              {selectedMonth === 2 && "All major organ systems are forming. Your little one is rapidly developing into a complex, tiny human being."}
              {selectedMonth === 3 && "First trimester complete! Your baby has graduated from embryo to fetus and is now entering a rapid growth phase."}
              {selectedMonth >= 4 && "Each week brings new developments as your baby grows stronger and more responsive to the world around them."}
            </p>
          </div>

          {/* Next Steps */}
          <div className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-xl p-4 border border-amber-200 shadow-sm">
            <h3 className="text-base font-bold text-slate-800 mb-2 flex items-center">
              <div className="w-8 h-8 bg-amber-500 rounded flex items-center justify-center mr-2">
                <span className="text-white text-xs">📋</span>
              </div>
              Next Steps
            </h3>
            <p className="text-slate-700 text-xs leading-relaxed">
              {selectedMonth === 1 && "Schedule your initial prenatal consultation and establish a consistent routine with prenatal vitamins and balanced nutrition."}
              {selectedMonth === 2 && "Maintain regular medical check-ups and consider documenting your journey through journaling or photography."}
              {selectedMonth === 3 && "Prepare to share your pregnancy news while establishing healthy lifestyle habits for the coming months."}
              {selectedMonth >= 4 && "Continue regular prenatal care and consider joining pregnancy support groups for shared experiences and advice."}
            </p>
          </div>
        </div>

        {/* Professional Guidance */}
        <div className="bg-gradient-to-r from-slate-50 to-gray-100 rounded-xl p-4 border border-slate-300 shadow-sm">
          <h3 className="text-base font-bold text-slate-800 mb-2 flex items-center">
            <div className="w-8 h-8 bg-slate-600 rounded flex items-center justify-center mr-2">
              <span className="text-white text-xs">💡</span>
            </div>
            Professional Guidance
          </h3>
          <p className="text-slate-700 text-xs leading-relaxed">
            Always consult with your healthcare provider for personalized medical advice. 
            This information serves as a general guide to help you understand typical pregnancy progression.
          </p>
        </div>
      </div>
    </div>
  );
};

export default MonthContent;