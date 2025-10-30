import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ProfessionalElderlyPregnancyGuide = () => {
  const [activeSection, setActiveSection] = useState('during-pregnancy');
  const navigate = useNavigate();

  const medicalData = {
    risks: [
      {
        title: "Gestational Diabetes",
        prevalence: "2-3x higher risk",
        description: "Increased insulin resistance requires careful glucose monitoring and dietary management.",
        management: "Early screening at 16-18 weeks, repeat at 24-28 weeks"
      },
      {
        title: "Preeclampsia",
        prevalence: "2x higher risk",
        description: "Hypertension disorders requiring close blood pressure monitoring and possible medication.",
        management: "Low-dose aspirin prophylaxis, frequent BP checks"
      },
      {
        title: "Chromosomal Abnormalities",
        prevalence: "1 in 100 at age 40",
        description: "Increased risk of Down syndrome and other chromosomal conditions.",
        management: "NIPT, CVS, or amniocentesis with genetic counseling"
      }
    ],
    screenings: [
      {
        test: "First Trimester Screening",
        timing: "11-14 weeks",
        purpose: "NT measurement + serum markers for aneuploidy risk assessment",
        accuracy: "85-90% detection rate"
      },
      {
        test: "NIPT (Non-Invasive Prenatal Testing)",
        timing: "From 10 weeks",
        purpose: "Cell-free DNA analysis for chromosomal abnormalities",
        accuracy: ">99% for common trisomies"
      },
      {
        test: "Anatomy Scan",
        timing: "18-20 weeks",
        purpose: "Detailed fetal structural assessment",
        accuracy: "Comprehensive organ system evaluation"
      }
    ]
  };

  const trimesterData = [
    {
      trimester: "First Trimester",
      weeks: "Weeks 1-12",
      focus: "Foundation & Risk Assessment",
      tasks: [
        {
          title: "Comprehensive Baseline Assessment",
          timeline: "Weeks 4-8",
          details: "Complete metabolic panel, thyroid function, cardiovascular assessment, and establish care with maternal-fetal medicine specialist.",
          priority: "critical"
        },
        {
          title: "Genetic Counseling Session",
          timeline: "Weeks 8-10",
          details: "Detailed discussion of screening options, risks, benefits, and implications of advanced genetic testing.",
          priority: "high"
        },
        {
          title: "Nutritional Optimization Plan",
          timeline: "Ongoing",
          details: "High-folate (600-800mcg), iron supplementation, calcium 1300mg, and specialized dietary planning.",
          priority: "high"
        }
      ]
    },
    {
      trimester: "Second Trimester",
      weeks: "Weeks 13-26",
      focus: "Monitoring & Development",
      tasks: [
        {
          title: "Advanced Anatomy Scan",
          timeline: "Weeks 18-20",
          details: "Comprehensive ultrasound evaluating fetal brain, heart, spine, and organ development with echocardiography if indicated.",
          priority: "critical"
        },
        {
          title: "Gestational Diabetes Screening",
          timeline: "Weeks 16-18 & 24-28",
          details: "Early 1-hour glucose challenge with follow-up 3-hour test if indicated. Dietary counseling and glucose monitoring.",
          priority: "high"
        },
        {
          title: "Fetal Movement Protocol",
          timeline: "After 20 weeks",
          details: "Formal kick counting system with documentation. Immediate reporting of decreased movement patterns.",
          priority: "medium"
        }
      ]
    },
    {
      trimester: "Third Trimester",
      weeks: "Weeks 27-40+",
      focus: "Preparation & Delivery Planning",
      tasks: [
        {
          title: "Enhanced Fetal Surveillance",
          timeline: "28 weeks onward",
          details: "Bi-weekly NSTs from 32 weeks, weekly BPPs, Doppler studies if indicated. Increased appointment frequency.",
          priority: "critical"
        },
        {
          title: "Comprehensive Birth Planning",
          timeline: "Weeks 32-34",
          details: "Detailed discussion of delivery timing, mode of delivery, pain management options, and potential interventions.",
          priority: "high"
        },
        {
          title: "Preterm Labor Prevention",
          timeline: "Weeks 24-36",
          details: "Cervical length screening, fetal fibronectin testing if symptomatic, and progesterone supplementation if indicated.",
          priority: "high"
        }
      ]
    }
  ];

  const postpartumData = {
    recovery: [
      {
        phase: "Immediate Postpartum (0-6 weeks)",
        focus: "Physical Recovery & Monitoring",
        tasks: [
          "Extended hospitalization monitoring (2-3 days vaginal, 3-4 days cesarean)",
          "Hypertension surveillance for 72 hours postpartum",
          "Comprehensive pain management plan",
          "Thromboprophylaxis with sequential compression devices"
        ]
      },
      {
        phase: "Early Recovery (6 weeks - 3 months)",
        focus: "Systemic Health Restoration",
        tasks: [
          "Complete metabolic panel and thyroid function testing",
          "Cardiovascular risk assessment",
          "Pelvic floor physical therapy evaluation",
          "Mental health screening (Edinburgh Postnatal Scale)"
        ]
      },
      {
        phase: "Long-term Health (3-12 months)",
        focus: "Sustainable Wellness",
        tasks: [
          "Weight management and nutrition counseling",
          "Exercise program progression",
          "Contraception and family planning discussion",
          "Long-term cardiovascular risk reduction plan"
        ]
      }
    ]
  };

  const PriorityBadge = ({ level }) => {
    const styles = {
      critical: "bg-red-100 text-red-800 border border-red-200",
      high: "bg-pink-100 text-pink-800 border border-pink-200",
      medium: "bg-blue-100 text-blue-800 border border-blue-200"
    };

    return (
      <span className={`px-3 py-1 rounded-full text-xs font-semibold ${styles[level]}`}>
        {level.toUpperCase()}
      </span>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-25 to-pink-25 py-8 px-4">

      {/* 🔙 Back Button */}
      <div className="max-w-6xl mx-auto mb-4">
        <button
          onClick={() => navigate(-1)}
          className="bg-gradient-to-r from-blue-500 to-pink-500 text-white px-4 py-2 rounded-full shadow-md hover:bg-pink-500 transition"
        >
          ← Back
        </button>
      </div>

      {/* Header Section */}
      <div className="max-w-6xl mx-auto mb-12 text-center">
        <div className="inline-flex items-center justify-center space-x-2 mb-6">
          <div className="w-2 h-8 bg-blue-400 rounded-full"></div>
          <div className="w-2 h-8 bg-pink-400 rounded-full"></div>
          <div className="w-2 h-8 bg-blue-500 rounded-full"></div>
        </div>
        
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          Advanced Maternal Age Pregnancy Guide
        </h1>
        
        <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
          Professional healthcare guidance for women aged 35+ with comprehensive prenatal care, 
          risk management, and postpartum recovery protocols.
        </p>
      </div>


      {/* Navigation */}
      <div className="max-w-6xl mx-auto mb-8">
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-1 inline-flex">
          {[
            { id: 'during-pregnancy', label: 'Pregnancy Care', icon: '🤰' },
            { id: 'medical', label: 'Medical Protocol', icon: '🏥' },
            { id: 'postpartum', label: 'Postpartum Care', icon: '👶' }
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveSection(item.id)}
              className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                activeSection === item.id
                  ? 'bg-gradient-to-r from-blue-500 to-pink-500 text-white shadow-md'
                  : 'text-gray-600 hover:text-blue-600 hover:bg-gray-50'
              }`}
            >
              <span>{item.icon}</span>
              <span>{item.label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto">
        
        {/* During Pregnancy Section */}
        {activeSection === 'during-pregnancy' && (
          <div className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {trimesterData.map((trimester, index) => (
                <div key={index} className="group">
                  <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 transition-all duration-300 hover:shadow-md hover:border-blue-200">
                    <div className="mb-4 pb-4 border-b border-gray-100">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="text-xl font-semibold text-gray-800">{trimester.trimester}</h3>
                        <span className="text-sm text-blue-600 font-medium bg-blue-50 px-2 py-1 rounded">
                          {trimester.weeks}
                        </span>
                      </div>
                      <p className="text-pink-600 text-sm font-medium">{trimester.focus}</p>
                    </div>
                    
                    <div className="space-y-4">
                      {trimester.tasks.map((task, taskIndex) => (
                        <div key={taskIndex} className="border-l-4 border-blue-200 pl-4 py-2">
                          <div className="flex items-start justify-between mb-2">
                            <h4 className="font-semibold text-gray-800 text-sm">{task.title}</h4>
                            <PriorityBadge level={task.priority} />
                          </div>
                          <p className="text-gray-600 text-xs mb-2 leading-relaxed">{task.details}</p>
                          <div className="text-gray-500 text-xs font-medium bg-gray-50 px-2 py-1 rounded inline-block">
                            ⏰ {task.timeline}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Medical Protocol Section */}
        {activeSection === 'medical' && (
          <div className="space-y-6">
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
              
              {/* Risks Card */}
              <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
                <div className="bg-gradient-to-r from-blue-500 to-blue-600 p-4">
                  <h2 className="text-xl font-semibold text-white flex items-center space-x-2">
                    <span>⚠</span>
                    <span>Enhanced Risk Profile</span>
                  </h2>
                </div>
                <div className="p-4 space-y-4">
                  {medicalData.risks.map((risk, index) => (
                    <div key={index} className="border border-gray-100 rounded-lg p-4 hover:border-blue-200 transition-colors">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="font-semibold text-gray-800">{risk.title}</h3>
                        <span className="bg-red-50 text-red-700 px-2 py-1 rounded text-xs font-medium">
                          {risk.prevalence}
                        </span>
                      </div>
                      <p className="text-gray-600 text-sm mb-3">{risk.description}</p>
                      <div className="bg-blue-50 rounded p-3 border border-blue-100">
                        <p className="text-xs text-blue-800 font-medium">Management: {risk.management}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Screenings Card */}
              <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
                <div className="bg-gradient-to-r from-pink-500 to-pink-600 p-4">
                  <h2 className="text-xl font-semibold text-white flex items-center space-x-2">
                    <span>🔬</span>
                    <span>Essential Screening Protocol</span>
                  </h2>
                </div>
                <div className="p-4 space-y-4">
                  {medicalData.screenings.map((screening, index) => (
                    <div key={index} className="border border-gray-100 rounded-lg p-4 hover:border-pink-200 transition-colors">
                      <div className="flex justify-between items-start mb-3">
                        <h3 className="font-semibold text-gray-800">{screening.test}</h3>
                        <span className="bg-pink-50 text-pink-700 px-2 py-1 rounded text-xs font-medium">
                          {screening.timing}
                        </span>
                      </div>
                      <p className="text-gray-600 text-sm mb-3">{screening.purpose}</p>
                      <div className="flex justify-between items-center">
                        <span className="text-xs text-gray-500">Accuracy</span>
                        <span className="bg-green-50 text-green-700 px-2 py-1 rounded text-xs font-medium">
                          {screening.accuracy}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Postpartum Section */}
        {activeSection === 'postpartum' && (
          <div className="space-y-6">
            <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
              <div className="bg-gradient-to-r from-blue-500 to-pink-500 p-6">
                <h2 className="text-2xl font-semibold text-white flex items-center space-x-3">
                  <span>🌟</span>
                  <span>Comprehensive Postpartum Recovery Protocol</span>
                </h2>
              </div>
              
              <div className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {postpartumData.recovery.map((phase, index) => (
                    <div key={index} className="group">
                      <div className="border border-gray-200 rounded-xl p-5 transition-all duration-300 hover:shadow-md hover:border-blue-300">
                        <div className="mb-4">
                          <div className="w-12 h-12 bg-gradient-to-r from-blue-400 to-pink-400 rounded-xl flex items-center justify-center text-white font-bold text-lg mb-3">
                            {index + 1}
                          </div>
                          <h3 className="font-semibold text-gray-800 mb-1">{phase.phase}</h3>
                          <p className="text-blue-600 text-sm font-medium">{phase.focus}</p>
                        </div>
                        
                        <div className="space-y-2">
                          {phase.tasks.map((task, taskIndex) => (
                            <div key={taskIndex} className="flex items-start space-x-2 p-2 rounded-lg hover:bg-gray-50 transition-colors">
                              <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                              <p className="text-gray-700 text-xs leading-relaxed">{task}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Professional Footer */}
      <div className="max-w-6xl mx-auto mt-12">
        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-3">Recommended Specialist Team</h3>
              <div className="space-y-2">
                {[
                  "Maternal-Fetal Medicine Specialist",
                  "Genetic Counselor",
                  "Perinatal Nutritionist",
                  "Pelvic Health Physiotherapist",
                  "Reproductive Psychiatrist"
                ].map((specialist, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <div className="w-1.5 h-1.5 bg-blue-400 rounded-full"></div>
                    <span className="text-sm text-gray-600">{specialist}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-3">Emergency Indicators</h3>
              <div className="space-y-2">
                {[
                  "Severe headache with visual changes",
                  "Sudden significant swelling",
                  "Decreased fetal movement",
                  "Vaginal bleeding or fluid leakage",
                  "Regular contractions before 37 weeks"
                ].map((indicator, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <div className="w-1.5 h-1.5 bg-pink-400 rounded-full"></div>
                    <span className="text-sm text-gray-600">{indicator}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          <div className="mt-6 pt-4 border-t border-gray-200 text-center">
            <p className="text-gray-500 text-sm">
              This clinical guide is based on ACOG recommendations and should be used in conjunction with 
              personalized medical advice from qualified healthcare providers.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfessionalElderlyPregnancyGuide;