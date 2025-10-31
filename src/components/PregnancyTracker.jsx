import React, { useState, useEffect } from 'react';

const PregnancyTracker = () => {
  const [currentWeek, setCurrentWeek] = useState(16);
  const [dueDate, setDueDate] = useState('');
//   const [userData, setUserData] = useState(null);
  const [activeTab, setActiveTab] = useState('development');
  const [weeksUntilDue, setWeeksUntilDue] = useState(null);

  // Calculate weeks based on due date
  const calculateWeeksFromDueDate = (dueDate) => {
    const today = new Date();
    const due = new Date(dueDate);
    const diffTime = due - today;
    const diffWeeks = Math.ceil(diffTime / (1000 * 60 * 60 * 24 * 7));
    const currentWeek = 40 - diffWeeks;
    return Math.max(4, Math.min(40, currentWeek));
  };

  // Handle due date change
  const handleDueDateChange = (date) => {
    setDueDate(date);
    if (date) {
      const calculatedWeek = calculateWeeksFromDueDate(date);
      setCurrentWeek(calculatedWeek);

      const today = new Date();
      const due = new Date(date);
      const diffTime = due - today;
      const diffWeeks = Math.ceil(diffTime / (1000 * 60 * 60 * 24 * 7));
      setWeeksUntilDue(diffWeeks);

      // Store in local storage
      localStorage.setItem('pregnancyDueDate', date);
      localStorage.setItem('pregnancyCurrentWeek', calculatedWeek.toString());
    }
  };

  // Load saved data on component mount
  useEffect(() => {
    const savedDueDate = localStorage.getItem('pregnancyDueDate');
    const savedWeek = localStorage.getItem('pregnancyCurrentWeek');

    if (savedDueDate) {
      setDueDate(savedDueDate);
      const calculatedWeek = calculateWeeksFromDueDate(savedDueDate);
      setCurrentWeek(calculatedWeek);

      const today = new Date();
      const due = new Date(savedDueDate);
      const diffTime = due - today;
      const diffWeeks = Math.ceil(diffTime / (1000 * 60 * 60 * 24 * 7));
      setWeeksUntilDue(diffWeeks);
    } else if (savedWeek) {
      setCurrentWeek(parseInt(savedWeek, 10));
    }
  }, []);

  // Complete pregnancy week data
  const pregnancyData = {
    4: {
      size: "Poppy Seed",
      weight: "0.04 oz",
      length: "0.04 inches",
      development: "The blastocyst has completed its journey from the fallopian tube to the uterus and is now implanting in the uterine wall. The amniotic sac is forming, and the placenta begins development. This week, the neural tube starts forming, which will become your baby's brain and spinal cord.",
      symptoms: "You might not notice many symptoms yet, but some women experience implantation bleeding, mild cramping, breast tenderness, fatigue, or mood swings. Your body is producing more progesterone, which can cause sleepiness.",
      tip: "Start taking a prenatal vitamin with at least 400 mcg of folic acid. Avoid alcohol, smoking, and limit caffeine to 200mg per day.",
      milestones: ["Implantation completes", "Neural tube formation begins", "Amniotic sac forms"],
      checklist: ["Schedule first prenatal appointment", "Start prenatal vitamins", "Calculate due date"]
    },
    8: {
      size: "Raspberry",
      weight: "0.04 oz",
      length: "0.63 inches",
      development: "Your baby's arms and legs are growing longer, and fingers have begun to form. The ears, upper lip, and nose have become more distinct. All essential organs have begun to form. The heart is beating at a steady rhythm, and primitive neural pathways are forming in the brain.",
      symptoms: "Morning sickness may be at its peak. You might experience food aversions, heightened sense of smell, fatigue, and frequent urination. Your uterus is expanding, which can cause cramping.",
      tip: "Eat small, frequent meals to manage nausea. Ginger tea or candies can help with morning sickness. Stay hydrated with water and electrolyte drinks.",
      milestones: ["Fingers begin forming", "All essential organs present", "Heart beats steadily"],
      checklist: ["First prenatal visit", "Discuss genetic screening", "Adjust diet for nausea"]
    },
    12: {
      size: "Lime",
      weight: "0.49 oz",
      length: "2.13 inches",
      development: "Your baby's nerves and muscles are starting to work together. Your baby can make a fist and might be sucking their thumb. The eyes have moved to the front of the face, and the ears are close to their final position. The intestines, which have been growing in the umbilical cord, are starting to move into the abdomen.",
      symptoms: "Morning sickness may start to improve. You might notice your waistline expanding and some weight gain. Energy levels may begin to return. Hormonal changes can cause skin changes and mood swings.",
      tip: "Consider announcing your pregnancy to family and friends. Start doing gentle pregnancy exercises like walking or prenatal yoga.",
      milestones: ["Reflexes develop", "Can make fist", "Intestines move to abdomen"],
      checklist: ["First trimester screening", "Consider pregnancy announcement", "Update wardrobe"]
    },
    16: {
      size: "Avocado",
      weight: "3.53 oz",
      length: "4.57 inches",
      development: "Your baby's head is more erect than before, and the eyes are moving closer to the front of the face. The ears are close to their final position. The patterning of the scalp has begun, though the hair isn't visible yet. Your baby's heart is pumping about 25 quarts of blood each day. Limb movements are becoming more coordinated.",
      symptoms: "You might feel round ligament pain as your uterus expands. Increased appetite and weight gain are common. Some women feel the first flutters of movement (quickening). Nasal congestion and nosebleeds might occur due to increased blood flow.",
      tip: "Focus on calcium-rich foods for baby's bone development. Sleep on your side to improve circulation. Consider a pregnancy pillow for better sleep.",
      milestones: ["Hearing developing", "Scalp patterning begins", "Coordinated limb movements"],
      checklist: ["Anatomy scan scheduled", "Consider genetic testing", "Plan maternity leave"]
    },
    20: {
      size: "Banana",
      weight: "10.58 oz",
      length: "6.46 inches",
      development: "Your baby is covered in vernix caseosa, a creamy white substance that protects the skin. Hair and nails are growing. If you're having a girl, her uterus is fully formed. Your baby is more active now, and you'll likely feel movements. The baby can hear your voice and heartbeat.",
      symptoms: "You'll likely feel regular movements now. Backaches and stretch marks might appear. Your belly button might pop out. Some women experience leg cramps and swelling in ankles and feet.",
      tip: "Do Kegel exercises to strengthen pelvic floor muscles. Stay hydrated to reduce swelling. Consider a prenatal massage for back pain.",
      milestones: ["Vernix covers skin", "Can hear sounds", "Regular movement"],
      checklist: ["Anatomy ultrasound", "Register for childbirth classes", "Plan nursery"]
    },
    24: {
      size: "Corn",
      weight: "1.32 lb",
      length: "11.81 inches",
      development: "Your baby's skin is translucent and wrinkled but will become more opaque soon. The lungs are developing branches and cells that produce surfactant, which helps air sacs inflate. The baby has regular sleep and wake cycles and might respond to sounds with movement.",
      symptoms: "Your uterus is the size of a soccer ball. Braxton Hicks contractions might begin. You might experience shortness of breath as the uterus pushes on your diaphragm. Heartburn and indigestion are common.",
      tip: "Sleep propped up with pillows to ease breathing. Eat smaller meals to manage heartburn. Start monitoring baby's movement patterns.",
      milestones: ["Lungs developing surfactant", "Regular sleep cycles", "Responds to sound"],
      checklist: ["Glucose screening test", "Create birth plan", "Install car seat"]
    },
    28: {
      size: "Eggplant",
      weight: "2.22 lb",
      length: "14.80 inches",
      development: "Your baby's eyes can open and close, and they can perceive light filtering through your womb. The brain is developing billions of neurons. The baby is gaining fat and starting to look more like a newborn. If born now, the baby would have a good chance of survival with medical care.",
      symptoms: "You might feel more tired as your body works harder. Back pain, leg cramps, and swelling might increase. Some women develop varicose veins. Your breasts might start producing colostrum.",
      tip: "Start counting fetal kicks. Sleep on your left side to maximize blood flow. Consider taking a hospital tour.",
      milestones: ["Eyes open and close", "Brain developing rapidly", "Survival possible if born"],
      checklist: ["Rh factor test if needed", "Begin kick counts", "Pre-register at hospital"]
    },
    32: {
      size: "Squash",
      weight: "3.75 lb",
      length: "16.69 inches",
      development: "Your baby's bones are fully formed but still soft. The baby is practicing breathing movements. Most of the lanugo (fine hair) has disappeared. The baby is running out of room to move but should still be active. The baby is storing minerals like iron and calcium.",
      symptoms: "You might experience more Braxton Hicks contractions. Shortness of breath might continue as the baby pushes on your diaphragm. Heartburn, backache, and trouble sleeping are common. The baby's movements might feel different as space gets tighter.",
      tip: "Pack your hospital bag. Finalize your birth plan. Rest when possible and practice relaxation techniques.",
      milestones: ["Bones fully formed", "Practicing breathing", "Storing minerals"],
      checklist: ["Group B strep test", "Pack hospital bag", "Finalize baby names"]
    },
    36: {
      size: "Honeydew",
      weight: "5.78 lb",
      length: "18.66 inches",
      development: "Your baby is gaining about an ounce a day. The vernix and lanugo continue to disappear. Most babies position themselves head-down for birth. The lungs are nearly fully developed. The baby's immune system is developing, receiving antibodies from you.",
      symptoms: "You might feel increased pelvic pressure as the baby drops. Fatigue increases as your body prepares for labor. Nesting instincts might kick in. Swelling might be more noticeable.",
      tip: "Rest as much as possible. Practice perineal massage to reduce tearing risk. Finalize childcare for older siblings.",
      milestones: ["Head-down position", "Lungs nearly mature", "Receiving antibodies"],
      checklist: ["Weekly prenatal visits", "Install infant car seat", "Prepare postpartum supplies"]
    },
    40: {
      size: "Watermelon",
      weight: "7.63 lb",
      length: "20.16 inches",
      development: "Your baby is fully developed and ready for life outside the womb. The bones in the skull are soft and flexible to ease delivery. Most of the vernix has disappeared. Your baby's organs are fully functional. The baby is practicing breathing, sucking, and blinking.",
      symptoms: "You might experience increased Braxton Hicks contractions. The baby might drop lower into your pelvis. You might lose your mucus plug or have your water break. Fatigue and discomfort are at their peak.",
      tip: "Stay active with walking to encourage labor. Rest when you can. Finalize any last-minute preparations. Contact your healthcare provider with any concerns.",
      milestones: ["Fully developed", "Ready for birth", "Practicing life skills"],
      checklist: ["Final hospital bag check", "Confirm birth plan", "Have healthcare provider number handy"]
    }
  };

  const currentData = pregnancyData[currentWeek] || pregnancyData[16];

  // Trimester information
  const trimesters = [
    {
      name: "First Trimester",
      weeks: "Weeks 1-13",
      description: "The first trimester is a period of rapid development. Your baby grows from a single cell to a fully formed fetus with all major organs. You'll experience significant hormonal changes that can cause morning sickness, fatigue, and emotional fluctuations.",
      keyDevelopments: [
        "Formation of all major organs",
        "Development of placenta",
        "Heart begins beating",
        "Basic brain structure forms"
      ],
      maternalChanges: [
        "Missed period",
        "Morning sickness",
        "Fatigue",
        "Breast tenderness"
      ]
    },
    {
      name: "Second Trimester",
      weeks: "Weeks 14-27",
      description: "Often called the 'honeymoon period' of pregnancy, the second trimester brings relief from early pregnancy symptoms for many women. Your baby's organs mature, and you'll likely feel the first movements. Your belly becomes noticeably pregnant.",
      keyDevelopments: [
        "Baby's movements become felt",
        "Sex organs differentiate",
        "Hearing develops",
        "Vernix and lanugo appear"
      ],
      maternalChanges: [
        "Increased energy",
        "Visible baby bump",
        "Feeling baby move",
        "Glowing skin"
      ]
    },
    {
      name: "Third Trimester",
      weeks: "Weeks 28-40+",
      description: "The final stretch of pregnancy brings rapid weight gain for your baby and physical challenges for you as your body prepares for birth. Your baby's organs mature, and they position for delivery.",
      keyDevelopments: [
        "Rapid brain development",
        "Lungs mature",
        "Fat stores increase",
        "Bones fully form but remain flexible"
      ],
      maternalChanges: [
        "Increased discomfort",
        "Braxton Hicks contractions",
        "Shortness of breath",
        "Nesting instinct"
      ]
    }
  ];

  // Nutrition information
  const nutritionTips = [
    {
      category: "Essential Nutrients",
      items: [
        { name: "Folic Acid", importance: "Prevents neural tube defects", sources: "Leafy greens, citrus fruits, beans", dosage: "600 mcg daily" },
        { name: "Iron", importance: "Supports increased blood volume", sources: "Lean red meat, spinach, lentils", dosage: "27 mg daily" },
        { name: "Calcium", importance: "Builds baby's bones and teeth", sources: "Dairy, fortified plant milks, broccoli", dosage: "1000 mg daily" },
        { name: "Omega-3 DHA", importance: "Brain and eye development", sources: "Salmon, walnuts, chia seeds", dosage: "200-300 mg daily" }
      ]
    },
    {
      category: "Foods to Limit",
      items: [
        { name: "Caffeine", reason: "Crosses placenta, limit intake", recommendation: "Less than 200mg daily" },
        { name: "High-mercury fish", reason: "Can harm baby's nervous system", recommendation: "Avoid shark, swordfish, king mackerel" },
        { name: "Raw or undercooked foods", reason: "Risk of foodborne illness", recommendation: "Avoid sushi, raw eggs, unpasteurized dairy" },
        { name: "Alcohol", reason: "Causes birth defects", recommendation: "Complete avoidance" }
      ]
    }
  ];

  // Common symptoms and remedies
  const symptoms = [
    {
      symptom: "Morning Sickness",
      description: "Nausea and vomiting, often worst in the first trimester but can occur throughout pregnancy.",
      remedies: [
        "Eat small, frequent meals",
        "Avoid strong odors",
        "Try ginger tea or candies",
        "Keep crackers by your bed"
      ],
      whenToWorry: "If you can't keep any fluids down for 24 hours"
    },
    {
      symptom: "Fatigue",
      description: "Overwhelming tiredness, especially in first and third trimesters.",
      remedies: [
        "Rest when possible",
        "Take short naps",
        "Delegate tasks",
        "Eat iron-rich foods"
      ],
      whenToWorry: "If accompanied by shortness of breath or dizziness"
    },
    {
      symptom: "Back Pain",
      description: "Aches in lower back due to shifting center of gravity and relaxin hormone.",
      remedies: [
        "Practice good posture",
        "Wear supportive shoes",
        "Use pregnancy pillow",
        "Try prenatal yoga"
      ],
      whenToWorry: "If severe or accompanied by bleeding"
    },
    {
      symptom: "Heartburn",
      description: "Burning sensation in chest due to relaxed esophageal sphincter and pressure from growing uterus.",
      remedies: [
        "Eat smaller meals",
        "Avoid spicy and fatty foods",
        "Don't lie down after eating",
        "Sleep propped up"
      ],
      whenToWorry: "If interferes with eating or sleeping"
    }
  ];

  // Exercise recommendations
  const exercises = [
    {
      name: "Walking",
      benefits: "Low-impact, improves circulation, can be done throughout pregnancy",
      precautions: "Stay hydrated, wear supportive shoes, avoid overheating",
      frequency: "30 minutes most days"
    },
    {
      name: "Prenatal Yoga",
      benefits: "Improves flexibility, reduces stress, prepares body for labor",
      precautions: "Avoid deep twists and lying flat on back after first trimester",
      frequency: "2-3 times per week"
    },
    {
      name: "Swimming",
      benefits: "Supports weight, reduces swelling, full-body workout",
      precautions: "Avoid hot tubs, use proper form",
      frequency: "30 minutes 3-4 times per week"
    },
    {
      name: "Pelvic Floor Exercises",
      benefits: "Prepares for labor, reduces incontinence risk, aids recovery",
      precautions: "Don't hold your breath, focus on proper technique",
      frequency: "Daily, multiple sets"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-blue-50 py-8">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-pink-500 to-blue-500 bg-clip-text text-transparent mb-6">
            Pregnancy Tracker
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8">
            Follow your baby's incredible journey from poppy seed to watermelon with our comprehensive week-by-week guide. Get personalized insights, expert tips, and supportive resources every step of the way.
          </p>

          {/* Due Date Input */}
          <div className="bg-white rounded-2xl p-6 shadow-lg max-w-md mx-auto mb-12">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Start Your Journey</h3>
            <p className="text-gray-600 mb-6">Enter your due date to get personalized weekly updates</p>

            <div className="space-y-4">
              <input
                type="date"
                value={dueDate}
                onChange={(e) => handleDueDateChange(e.target.value)}
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-pink-400 focus:ring-2 focus:ring-pink-200 transition-all duration-200"
              />
              <button 
                onClick={() => handleDueDateChange(dueDate)}
                className="w-full bg-gradient-to-r from-pink-500 to-blue-500 hover:from-pink-600 hover:to-blue-600 text-white py-3 px-6 rounded-xl font-semibold transform hover:scale-105 transition-all duration-200 shadow-lg"
              >
                {dueDate ? 'Update My Tracking' : 'Start Tracking My Pregnancy'}
              </button>
            </div>

            {dueDate && weeksUntilDue !== null && (
              <div className="mt-4 p-3 bg-pink-50 rounded-lg border border-pink-200">
                <p className="text-pink-700 text-sm">
                  You're in <span className="font-semibold">Week {currentWeek}</span> of pregnancy. 
                  Approximately <span className="font-semibold">{weeksUntilDue} weeks</span> until your due date.
                </p>
              </div>
            )}
          </div>
        </section>

        {/* Main Tracker Section */}
        <section className="mb-16">
          <div className="grid lg:grid-cols-3 gap-8">
            
            {/* Week Navigation & Progress */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-2xl p-6 shadow-lg sticky top-6">
                <h2 className="text-2xl font-bold text-gray-800 mb-6">Your Pregnancy Journey</h2>
                
                {/* Progress Bar */}
                <div className="mb-8">
                  <div className="flex justify-between text-sm text-gray-600 mb-2">
                    <span>First Trimester</span>
                    <span>Second Trimester</span>
                    <span>Third Trimester</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3 mb-2">
                    <div 
                      className="bg-gradient-to-r from-pink-500 to-blue-500 h-3 rounded-full transition-all duration-500"
                      style={{ width: `${(currentWeek / 40) * 100}%` }}
                    ></div>
                  </div>
                  <div className="flex justify-between text-xs text-gray-500">
                    <span>Week 1</span>
                    <span>Week 20</span>
                    <span>Week 40</span>
                  </div>
                </div>
                
                {/* Week Selector */}
                <div className="mb-6">
                  <h3 className="font-semibold text-gray-700 mb-3">Jump to Week</h3>
                  <div className="grid grid-cols-5 gap-2">
                    {[4, 8, 12, 16, 20, 24, 28, 32, 36, 40].map(week => (
                      <button
                        key={week}
                        onClick={() => {
                          setCurrentWeek(week);
                          localStorage.setItem('pregnancyCurrentWeek', week.toString());
                        }}
                        className={`py-2 rounded-lg transition-all ${currentWeek === week 
                          ? 'bg-gradient-to-r from-pink-500 to-blue-500 text-white shadow-md' 
                          : 'bg-gray-100 hover:bg-gray-200 text-gray-700'}`}
                      >
                        {week}
                      </button>
                    ))}
                  </div>
                </div>
                
                {/* Week Navigation */}
                <div className="flex gap-2">
                  <button 
                    onClick={() => {
                      const newWeek = Math.max(currentWeek - 1, 4);
                      setCurrentWeek(newWeek);
                      localStorage.setItem('pregnancyCurrentWeek', newWeek.toString());
                    }}
                    className="flex-1 bg-gray-100 hover:bg-gray-200 py-3 rounded-xl font-semibold transition-all duration-200"
                    disabled={currentWeek === 4}
                  >
                    Previous Week
                  </button>
                  <button 
                    onClick={() => {
                      const newWeek = Math.min(currentWeek + 1, 40);
                      setCurrentWeek(newWeek);
                      localStorage.setItem('pregnancyCurrentWeek', newWeek.toString());
                    }}
                    className="flex-1 bg-gray-100 hover:bg-gray-200 py-3 rounded-xl font-semibold transition-all duration-200"
                    disabled={currentWeek === 40}
                  >
                    Next Week
                  </button>
                </div>
              </div>
            </div>
            
            {/* Week Details */}
            <div className="lg:col-span-2">
              <div className="bg-gradient-to-br from-pink-400 via-purple-400 to-blue-500 rounded-3xl p-8 text-white shadow-2xl mb-8">
                
                {/* Week Header */}
                <div className="flex flex-wrap items-center justify-between mb-6">
                  <div className="inline-flex items-center px-4 py-2 bg-white/20 rounded-full backdrop-blur-sm">
                    <span className="text-sm font-semibold">Week</span>
                    <span className="text-2xl font-bold ml-2">{currentWeek}</span>
                  </div>
                  <div className="mt-2 md:mt-0">
                    <span className="text-lg font-semibold bg-white/20 px-3 py-1 rounded-xl">
                      {currentData.size}
                    </span>
                  </div>
                </div>

                <h2 className="text-3xl font-bold mb-2">
                  Your baby is the size of a {currentData.size}
                </h2>
                
                <div className="grid md:grid-cols-2 gap-4 mb-4">
                  <div className="bg-white/10 rounded-xl p-4">
                    <h3 className="font-semibold text-pink-100 mb-1">Length</h3>
                    <p className="text-white/90">{currentData.length}</p>
                  </div>
                  <div className="bg-white/10 rounded-xl p-4">
                    <h3 className="font-semibold text-pink-100 mb-1">Weight</h3>
                    <p className="text-white/90">{currentData.weight}</p>
                  </div>
                </div>

                {/* Tab Navigation */}
                <div className="flex border-b border-white/20 mb-6">
                  {['development', 'symptoms', 'tips', 'checklist'].map(tab => (
                    <button
                      key={tab}
                      onClick={() => setActiveTab(tab)}
                      className={`px-4 py-2 font-medium capitalize ${activeTab === tab 
                        ? 'text-white border-b-2 border-white' 
                        : 'text-white/70 hover:text-white'}`}
                    >
                      {tab}
                    </button>
                  ))}
                </div>

                {/* Tab Content */}
                <div className="max-h-96 overflow-y-auto pr-2 custom-scrollbar">
                  {activeTab === 'development' && (
                    <div>
                      <h3 className="font-semibold text-pink-100 mb-2 text-lg">Baby's Development</h3>
                      <p className="text-white/90 leading-relaxed mb-4">{currentData.development}</p>
                      
                      <h4 className="font-semibold text-pink-100 mb-2">Key Milestones</h4>
                      <ul className="text-white/90 list-disc pl-5 mb-4 space-y-1">
                        {currentData.milestones.map((milestone, index) => (
                          <li key={index}>{milestone}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                  
                  {activeTab === 'symptoms' && (
                    <div>
                      <h3 className="font-semibold text-pink-100 mb-2 text-lg">How You Might Be Feeling</h3>
                      <p className="text-white/90 leading-relaxed">{currentData.symptoms}</p>
                    </div>
                  )}
                  
                  {activeTab === 'tips' && (
                    <div>
                      <h3 className="font-semibold text-pink-100 mb-2 text-lg">This Week's Tip</h3>
                      <p className="text-white/90 leading-relaxed">{currentData.tip}</p>
                    </div>
                  )}
                  
                  {activeTab === 'checklist' && (
                    <div>
                      <h3 className="font-semibold text-pink-100 mb-2 text-lg">This Week's Checklist</h3>
                      <ul className="text-white/90 list-disc pl-5 space-y-1">
                        {currentData.checklist.map((item, index) => (
                          <li key={index}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
              
              {/* Additional Resources */}
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white rounded-2xl p-6 shadow-lg">
                  <h3 className="text-xl font-bold text-gray-800 mb-4">Weekly To-Do</h3>
                  <ul className="space-y-3">
                    {currentData.checklist.map((item, index) => (
                      <li key={index} className="flex items-start">
                        <div className="bg-pink-100 text-pink-600 rounded-full p-1 mr-3 mt-1">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                          </svg>
                        </div>
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="bg-white rounded-2xl p-6 shadow-lg">
                  <h3 className="text-xl font-bold text-gray-800 mb-4">Questions for Your Doctor</h3>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start">
                      <div className="bg-blue-100 text-blue-600 rounded-full p-1 mr-3 mt-1">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                        </svg>
                      </div>
                      <span>What screening tests are recommended for this stage?</span>
                    </li>
                    <li className="flex items-start">
                      <div className="bg-blue-100 text-blue-600 rounded-full p-1 mr-3 mt-1">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                        </svg>
                      </div>
                      <span>Is my weight gain on track?</span>
                    </li>
                    <li className="flex items-start">
                      <div className="bg-blue-100 text-blue-600 rounded-full p-1 mr-3 mt-1">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                        </svg>
                      </div>
                      <span>What exercises are safe for me right now?</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
        

        {/* Trimester Overview */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-2">Pregnancy Trimesters</h2>
          <p className="text-gray-600 text-center max-w-2xl mx-auto mb-8">Pregnancy is divided into three trimesters, each with unique developments and changes.</p>
          
          <div className="grid md:grid-cols-3 gap-6">
            {trimesters.map((trimester, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
                <div className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-semibold mb-4 ${
                  index === 0 ? 'bg-pink-100 text-pink-700' : 
                  index === 1 ? 'bg-purple-100 text-purple-700' : 
                  'bg-blue-100 text-blue-700'
                }`}>
                  {trimester.weeks}
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">{trimester.name}</h3>
                <p className="text-gray-600 mb-4">{trimester.description}</p>
                
                <div className="mb-4">
                  <h4 className="font-semibold text-gray-700 mb-2">Baby's Development</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    {trimester.keyDevelopments.map((dev, i) => (
                      <li key={i} className="flex items-start">
                        <svg className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        {dev}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-700 mb-2">Maternal Changes</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    {trimester.maternalChanges.map((change, i) => (
                      <li key={i} className="flex items-start">
                        <svg className="w-4 h-4 text-pink-500 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        {change}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Nutrition Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-2">Pregnancy Nutrition</h2>
          <p className="text-gray-600 text-center max-w-2xl mx-auto mb-8">Eating well during pregnancy helps support your baby's growth and development and keeps you healthy.</p>
          
          <div className="grid md:grid-cols-2 gap-8">
            {nutritionTips.map((category, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-lg">
                <h3 className="text-xl font-bold text-gray-800 mb-4">{category.category}</h3>
                <div className="space-y-4">
                  {category.items.map((item, i) => (
                    <div key={i} className="border-l-4 border-pink-400 pl-4 py-1">
                      <h4 className="font-semibold text-gray-700">{item.name}</h4>
                      <p className="text-gray-600 text-sm">{item.importance || item.reason}</p>
                      <div className="flex justify-between text-sm mt-1">
                        <span className="text-gray-500">{item.sources || item.recommendation}</span>
                        {item.dosage && <span className="font-medium text-pink-600">{item.dosage}</span>}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Symptoms & Remedies */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-2">Common Symptoms & Remedies</h2>
          <p className="text-gray-600 text-center max-w-2xl mx-auto mb-8">Many pregnancy symptoms are normal, but it's important to know when to seek medical advice.</p>
          
          <div className="grid md:grid-cols-2 gap-6">
            {symptoms.map((symptom, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-lg">
                <h3 className="text-xl font-bold text-gray-800 mb-3">{symptom.symptom}</h3>
                <p className="text-gray-600 mb-4">{symptom.description}</p>
                
                <div className="mb-4">
                  <h4 className="font-semibold text-gray-700 mb-2">Remedies</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    {symptom.remedies.map((remedy, i) => (
                      <li key={i} className="flex items-start">
                        <svg className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        {remedy}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded">
                  <h4 className="font-semibold text-gray-700 mb-1">When to Contact Your Doctor</h4>
                  <p className="text-sm text-gray-600">{symptom.whenToWorry}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Exercise Recommendations */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-2">Pregnancy-Safe Exercises</h2>
          <p className="text-gray-600 text-center max-w-2xl mx-auto mb-8">Staying active during pregnancy can help reduce discomfort, improve mood, and prepare your body for labor.</p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {exercises.map((exercise, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
                <h3 className="text-xl font-bold text-gray-800 mb-3">{exercise.name}</h3>
                
                <div className="mb-4">
                  <h4 className="font-semibold text-gray-700 mb-2">Benefits</h4>
                  <p className="text-sm text-gray-600">{exercise.benefits}</p>
                </div>
                
                <div className="mb-4">
                  <h4 className="font-semibold text-gray-700 mb-2">Precautions</h4>
                  <p className="text-sm text-gray-600">{exercise.precautions}</p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-700 mb-2">Frequency</h4>
                  <p className="text-sm text-gray-600">{exercise.frequency}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>

      <style >{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(255, 255, 255, 0.1);
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(255, 255, 255, 0.3);
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: rgba(255, 255, 255, 0.5);
        }
      `}</style>
    </div>
  );
};

export default PregnancyTracker;
