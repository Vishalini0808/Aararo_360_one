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
        dilation: "0-4 cm",
        signs: [
          "Mild, irregular contractions (20-30 minutes apart)",
          "Backache and cramping similar to period pain",
          "Softening and early dilation of cervix",
          "Possible diarrhea as body prepares",
          "Bloody show may appear"
        ],
        action: "Rest, hydrate, eat light meals, time contractions, pack hospital bag"
      },
      {
        stage: "Active Labor",
        duration: "4-8 hours",
        dilation: "4-7 cm",
        signs: [
          "Strong, regular contractions (3-5 minutes apart)",
          "Increased pain intensity with each contraction",
          "Cervix continues dilating",
          "Difficulty talking through contractions",
          "Water may break if it hasn't already"
        ],
        action: "Go to hospital/birth center, use breathing techniques, change positions frequently"
      },
      {
        stage: "Transition Phase",
        duration: "30 minutes - 2 hours",
        dilation: "8-10 cm",
        signs: [
          "Very strong contractions (2-3 minutes apart)",
          "Cervix completes dilation",
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
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50/20 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl shadow-lg mb-6">
            <span className="text-2xl text-white">👶</span>
          </div>
          <h1 className="text-4xl font-bold bg-gradient-to-r from-gray-900 to-blue-800 bg-clip-text text-transparent mb-4">
            Labor & Delivery Guide
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Comprehensive medical information to prepare you for labor, delivery, and postpartum recovery
          </p>
          <div className="w-32 h-1.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mx-auto mt-6 shadow-sm"></div>
        </div>

        {/* Early Signs Section */}
        <section className="mb-16">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl border border-gray-100 p-8">
            <div className="flex items-center mb-8">
              <div className="w-14 h-14 bg-gradient-to-br from-blue-100 to-blue-200 rounded-2xl flex items-center justify-center shadow-inner mr-4">
                <span className="text-2xl text-blue-600">🔍</span>
              </div>
              <div>
                <h2 className="text-3xl font-bold text-gray-900">Early Signs of Labor</h2>
                <p className="text-gray-600 text-lg mt-1">Recognize the initial signals that labor is approaching</p>
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {laborData.earlySigns.map((sign, index) => (
                <div key={index} className="group relative">
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-100 to-purple-100 rounded-2xl blur opacity-0 group-hover:opacity-100 transition duration-300"></div>
                  <div className="relative bg-white rounded-xl p-6 border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300 group-hover:border-blue-200">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center shadow-md mr-4">
                        <span className="text-xl text-white">{sign.icon}</span>
                      </div>
                      <h3 className="font-bold text-gray-900 text-lg">{sign.title}</h3>
                    </div>
                    <p className="text-gray-700 mb-4 leading-relaxed">{sign.description}</p>
                    <div className="inline-flex items-center px-3 py-1.5 bg-blue-50 rounded-full border border-blue-200">
                      <span className="text-blue-700 text-sm font-medium">⏰ {sign.timing}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Labor Stages */}
        <section className="mb-16">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl border border-gray-100 p-8">
            <div className="flex items-center mb-8">
              <div className="w-14 h-14 bg-gradient-to-br from-purple-100 to-purple-200 rounded-2xl flex items-center justify-center shadow-inner mr-4">
                <span className="text-2xl text-purple-600">📈</span>
              </div>
              <div>
                <h2 className="text-3xl font-bold text-gray-900">Stages of Labor</h2>
                <p className="text-gray-600 text-lg mt-1">Understand the progression from early labor to delivery</p>
              </div>
            </div>

            <div className="space-y-8">
              {laborData.laborStages.map((stage, index) => (
                <div key={index} className="group relative">
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-50 to-blue-50 rounded-2xl blur opacity-0 group-hover:opacity-100 transition duration-300"></div>
                  <div className="relative bg-gradient-to-br from-white to-gray-50 rounded-2xl p-8 border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300">
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
                      <div className="flex items-center mb-4 lg:mb-0">
                        <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-blue-600 rounded-2xl flex items-center justify-center shadow-lg mr-6">
                          <span className="text-2xl font-bold text-white">{index + 1}</span>
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold text-gray-900">{stage.stage}</h3>
                          <div className="flex items-center space-x-6 mt-2">
                            <span className="text-gray-600 font-medium">⏱ {stage.duration}</span>
                            <span className="text-blue-600 font-bold text-lg">Dilation: {stage.dilation}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="grid lg:grid-cols-2 gap-8">
                      <div>
                        <h4 className="font-bold text-gray-900 mb-4 flex items-center text-lg">
                          <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center mr-3">
                            <span className="text-blue-600 text-lg">✓</span>
                          </div>
                          Signs & Symptoms
                        </h4>
                        <ul className="space-y-3">
                          {stage.signs.map((sign, signIndex) => (
                            <li key={signIndex} className="flex items-start group/item hover:translate-x-1 transition-transform duration-200">
                              <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                                <span className="text-green-600 text-sm">•</span>
                              </div>
                              <span className="text-gray-700 leading-relaxed">{sign}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900 mb-4 flex items-center text-lg">
                          <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center mr-3">
                            <span className="text-green-600 text-lg">💡</span>
                          </div>
                          Recommended Actions
                        </h4>
                        <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-6 border border-green-200 shadow-sm">
                          <p className="text-gray-700 leading-relaxed font-medium">{stage.action}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* C-section Information */}
        <section className="mb-16">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl border border-gray-100 p-8">
            <div className="flex items-center mb-8">
              <div className="w-14 h-14 bg-gradient-to-br from-amber-100 to-amber-200 rounded-2xl flex items-center justify-center shadow-inner mr-4">
                <span className="text-2xl text-amber-600">👩‍⚕</span>
              </div>
              <div>
                <h2 className="text-3xl font-bold text-gray-900">Cesarean Section Information</h2>
                <p className="text-gray-600 text-lg mt-1">Understanding planned and emergency C-sections</p>
              </div>
            </div>

            <div className="grid lg:grid-cols-2 gap-8 mb-8">
              {/* Planned C-section */}
              <div className="group relative">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-green-100 to-emerald-100 rounded-2xl blur opacity-0 group-hover:opacity-100 transition duration-300"></div>
                <div className="relative bg-gradient-to-br from-white to-green-50 rounded-2xl p-6 border border-green-200 shadow-sm hover:shadow-md transition-all duration-300">
                  <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                    <div className="w-12 h-12 bg-green-500 rounded-2xl flex items-center justify-center shadow-md mr-4">
                      <span className="text-white text-lg">📅</span>
                    </div>
                    Planned C-section Reasons
                  </h3>
                  <ul className="space-y-4">
                    {laborData.cSection.planned.map((reason, index) => (
                      <li key={index} className="flex items-start group/item hover:translate-x-1 transition-transform duration-200">
                        <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                          <span className="text-green-600 text-sm">•</span>
                        </div>
                        <span className="text-gray-700 leading-relaxed">{reason}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Emergency C-section */}
              <div className="group relative">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-red-100 to-orange-100 rounded-2xl blur opacity-0 group-hover:opacity-100 transition duration-300"></div>
                <div className="relative bg-gradient-to-br from-white to-red-50 rounded-2xl p-6 border border-red-200 shadow-sm hover:shadow-md transition-all duration-300">
                  <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                    <div className="w-12 h-12 bg-red-500 rounded-2xl flex items-center justify-center shadow-md mr-4">
                      <span className="text-white text-lg">🚨</span>
                    </div>
                    Emergency C-section Reasons
                  </h3>
                  <ul className="space-y-4">
                    {laborData.cSection.emergency.map((reason, index) => (
                      <li key={index} className="flex items-start group/item hover:translate-x-1 transition-transform duration-200">
                        <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                          <span className="text-red-600 text-sm">•</span>
                        </div>
                        <span className="text-gray-700 leading-relaxed">{reason}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Recovery Tips */}
            <div className="group relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-100 to-indigo-100 rounded-2xl blur opacity-0 group-hover:opacity-100 transition duration-300"></div>
              <div className="relative bg-gradient-to-br from-white to-blue-50 rounded-2xl p-8 border border-blue-200 shadow-sm hover:shadow-md transition-all duration-300">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <div className="w-14 h-14 bg-blue-500 rounded-2xl flex items-center justify-center shadow-md mr-4">
                    <span className="text-white text-xl">💖</span>
                  </div>
                  C-section Recovery Guidelines
                </h3>
                <div className="grid md:grid-cols-2 gap-6">
                  {laborData.cSection.recovery.map((tip, index) => (
                    <div key={index} className="flex items-start group/item hover:translate-x-1 transition-transform duration-200">
                      <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-4 mt-0.5 flex-shrink-0">
                        <span className="text-blue-600 text-sm">✓</span>
                      </div>
                      <span className="text-gray-700 leading-relaxed font-medium">{tip}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* When to Call Doctor */}
        <section className="mb-16">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl border border-gray-100 p-8">
            <div className="flex items-center mb-8">
              <div className="w-14 h-14 bg-gradient-to-br from-orange-100 to-orange-200 rounded-2xl flex items-center justify-center shadow-inner mr-4">
                <span className="text-2xl text-orange-600">📞</span>
              </div>
              <div>
                <h2 className="text-3xl font-bold text-gray-900">When to Contact Your Healthcare Provider</h2>
                <p className="text-gray-600 text-lg mt-1">Immediate signs that require medical attention</p>
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {laborData.whenToCall.map((reason, index) => (
                <div key={index} className="group">
                  <div className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-xl p-5 border border-orange-200 shadow-sm hover:shadow-md transition-all duration-300 group-hover:border-orange-300">
                    <div className="flex items-center justify-center w-10 h-10 bg-orange-500 rounded-lg shadow-md mx-auto mb-3">
                      <span className="text-white font-bold">!</span>
                    </div>
                    <p className="text-gray-700 text-center font-medium leading-relaxed">{reason}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Emergency Alert */}
        <div className="mb-12 group relative">
          <div className="absolute -inset-0.5 bg-gradient-to-r from-red-200 to-pink-200 rounded-2xl blur opacity-0 group-hover:opacity-100 transition duration-300"></div>
          <div className="relative bg-gradient-to-br from-red-50 to-orange-50 rounded-2xl p-8 border border-red-300 shadow-xl">
            <div className="flex items-center mb-4">
              <div className="w-16 h-16 bg-red-500 rounded-2xl flex items-center justify-center shadow-lg mr-6">
                <span className="text-2xl text-white">🚨</span>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900">Emergency Warning Signs</h3>
                <p className="text-red-600 font-semibold mt-1">Seek immediate medical attention</p>
              </div>
            </div>
            <p className="text-gray-700 text-lg leading-relaxed mb-4">
              Severe abdominal pain, heavy bleeding (soaking a pad per hour), decreased fetal movement, 
              high fever, or your water breaks with green/brown fluid.
            </p>
            <div className="bg-white/80 rounded-xl p-4 border border-red-200">
              <p className="text-red-600 font-bold text-center">
                Call your healthcare provider immediately or go to the nearest emergency room
              </p>
            </div>
          </div>
        </div>

        {/* Professional Footer */}
        <div className="text-center bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-gray-200 p-8">
          <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-blue-600 rounded-2xl flex items-center justify-center shadow-lg mx-auto mb-6">
            <span className="text-2xl text-white">✨</span>
          </div>
          <h3 className="text-2xl font-bold text-gray-900 mb-4">You're Prepared and Supported</h3>
          <p className="text-gray-600 text-lg leading-relaxed max-w-2xl mx-auto mb-4">
            Remember that every labor experience is unique. Trust your body, your instincts, and your medical team. 
            You have the strength and knowledge to navigate this incredible journey.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full mx-auto"></div>
        </div>
      </div>
    </div>
  );
};

export default LaborContent;