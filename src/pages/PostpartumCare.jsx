// import React, { useState } from 'react';

// const PostpartumCare = () => {
//   const [activeSection, setActiveSection] = useState('recovery');

//   const postpartumData = {
//     recovery: {
//       title: "Physical Recovery",
//       image: "https://images.unsplash.com/photo-1544006656-7cc555bfd9b6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
//       timeline: [
//         {
//           period: "First 24 Hours",
//           changes: [
//             "Vaginal bleeding (lochia) begins",
//             "Uterus starts shrinking back",
//             "Breast milk may come in",
//             "Perineal soreness if vaginal delivery"
//           ],
//           care: [
//             "Use peri bottle for cleaning",
//             "Apply ice packs to perineum",
//             "Start walking gently",
//             "Use hospital-provided pads"
//           ]
//         },
//         {
//           period: "First Week",
//           changes: [
//             "Lochia continues, changes color",
//             "Breast engorgement may occur",
//             "Uterus shrinks noticeably",
//             "Stitches may cause discomfort"
//           ],
//           care: [
//             "Take prescribed pain medication",
//             "Use nursing pads for leakage",
//             "Practice gentle pelvic floor exercises",
//             "Stay hydrated and eat fiber-rich foods"
//           ]
//         },
//         {
//           period: "2-6 Weeks",
//           changes: [
//             "Lochia lightens and stops",
//             "Body slowly returns to pre-pregnancy state",
//             "Hormonal changes may cause mood swings",
//             "Hair loss may begin"
//           ],
//           care: [
//             "Gradually increase activity level",
//             "Continue pelvic floor exercises",
//             "Eat nutritious meals",
//             "Get as much rest as possible"
//           ]
//         }
//       ]
//     },
//     breastfeeding: {
//       title: "Breastfeeding Guide",
//       image: "https://images.unsplash.com/photo-1549056572-75914d6d7e1a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
//       basics: [
//         {
//           topic: "Getting Started",
//           tips: [
//             "Start breastfeeding within first hour after birth",
//             "Practice proper latch technique",
//             "Feed on demand, 8-12 times per day",
//             "Listen for swallowing sounds"
//           ]
//         },
//         {
//           topic: "Common Challenges",
//           solutions: [
//             "Sore nipples: Check latch, use lanolin cream",
//             "Engorgement: Frequent feeding, warm compresses",
//             "Low supply: Nurse frequently, stay hydrated",
//             "Mastitis: Continue nursing, see doctor if fever"
//           ]
//         },
//         {
//           topic: "Pumping & Storage",
//           guidelines: [
//             "Wait 3-4 weeks before introducing bottles",
//             "Store milk in sterile containers",
//             "Fresh milk: 4 hours room temp, 4 days fridge",
//             "Frozen milk: 6-12 months in deep freeze"
//           ]
//         }
//       ]
//     },
//     mentalHealth: {
//       title: "Mental Wellness",
//       image: "https://images.unsplash.com/photo-1485546246426-74dc88dec4d9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
//       aspects: [
//         {
//           condition: "Baby Blues",
//           symptoms: ["Mood swings", "Anxiety", "Sadness", "Crying spells"],
//           duration: "2-3 weeks",
//           management: ["Rest when baby sleeps", "Accept help", "Talk about feelings", "Be patient"]
//         },
//         {
//           condition: "Postpartum Depression",
//           symptoms: ["Severe mood swings", "Withdrawal", "Loss of appetite", "Thoughts of harming self/baby"],
//           duration: "Professional help needed",
//           management: ["See healthcare provider", "Therapy", "Support groups", "Medication if prescribed"]
//         },
//         {
//           condition: "Postpartum Anxiety",
//           symptoms: ["Constant worry", "Racing thoughts", "Sleep problems", "Physical symptoms"],
//           duration: "Varies",
//           management: ["Practice relaxation", "Limit visitors", "Establish routine", "Seek professional help"]
//         }
//       ]
//     }
//   };

//   const currentData = postpartumData[activeSection];

//   return (
//     <div className="page-postpartum">
//       <div className="page-header">
//         <h1>Postpartum Care & Recovery</h1>
//         <p>Comprehensive guide for mother's recovery after delivery</p>
//       </div>

//       {/* Navigation */}
//       <div className="postpartum-navigation">
//         {Object.keys(postpartumData).map(section => (
//           <button
//             key={section}
//             className={`nav-btn ${activeSection === section ? 'active' : ''}`}
//             onClick={() => setActiveSection(section)}
//           >
//             {postpartumData[section].title}
//           </button>
//         ))}
//       </div>

//       <div className="postpartum-content">
//         {/* Hero Section */}
//         <div className="postpartum-hero">
//           <img src={currentData.image} alt={currentData.title} />
//           <div className="hero-content">
//             <h2>{currentData.title}</h2>
//             <p>Essential information for your postpartum journey</p>
//           </div>
//         </div>

//         {/* Content Sections */}
//         {activeSection === 'recovery' && (
//           <div className="recovery-timeline">
//             <h3>Recovery Timeline</h3>
//             <div className="timeline">
//               {currentData.timeline.map((period, index) => (
//                 <div key={index} className="timeline-item">
//                   <div className="timeline-header">
//                     <h4>{period.period}</h4>
//                   </div>
//                   <div className="timeline-content">
//                     <div className="changes">
//                       <h5>Physical Changes</h5>
//                       <ul>
//                         {period.changes.map((change, i) => (
//                           <li key={i}>{change}</li>
//                         ))}
//                       </ul>
//                     </div>
//                     <div className="care">
//                       <h5>Care Tips</h5>
//                       <ul>
//                         {period.care.map((tip, i) => (
//                           <li key={i}>{tip}</li>
//                         ))}
//                       </ul>
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         )}

//         {activeSection === 'breastfeeding' && (
//           <div className="breastfeeding-guide">
//             <div className="guide-sections">
//               {currentData.basics.map((section, index) => (
//                 <div key={index} className="guide-section">
//                   <h4>{section.topic}</h4>
//                   <ul>
//                     {section.tips.map((tip, i) => (
//                       <li key={i}>{tip}</li>
//                     ))}
//                   </ul>
//                 </div>
//               ))}
//             </div>

//             {/* Additional Resources */}
//             <div className="resources">
//               <h4>Additional Resources</h4>
//               <div className="resource-cards">
//                 <div className="resource-card">
//                   <h5>Lactation Consultants</h5>
//                   <p>Professional support for breastfeeding challenges</p>
//                 </div>
//                 <div className="resource-card">
//                   <h5>Support Groups</h5>
//                   <p>Connect with other breastfeeding mothers</p>
//                 </div>
//                 <div className="resource-card">
//                   <h5>Hotlines</h5>
//                   <p>24/7 breastfeeding support available</p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         )}

//         {activeSection === 'mentalHealth' && (
//           <div className="mental-health">
//             <div className="condition-cards">
//               {currentData.aspects.map((condition, index) => (
//                 <div key={index} className="condition-card">
//                   <h4>{condition.condition}</h4>
//                   <div className="condition-details">
//                     <div className="symptoms">
//                       <h5>Symptoms</h5>
//                       <ul>
//                         {condition.symptoms.map((symptom, i) => (
//                           <li key={i}>{symptom}</li>
//                         ))}
//                       </ul>
//                     </div>
//                     <div className="duration">
//                       <h5>Duration</h5>
//                       <p>{condition.duration}</p>
//                     </div>
//                     <div className="management">
//                       <h5>Management</h5>
//                       <ul>
//                         {condition.management.map((strategy, i) => (
//                           <li key={i}>{strategy}</li>
//                         ))}
//                       </ul>
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </div>

//             {/* Emergency Help */}
//             <div className="emergency-help">
//               <h4>🚨 Immediate Help Available</h4>
//               <div className="help-contacts">
//                 <div className="contact">
//                   <strong>National Suicide Prevention Lifeline:</strong> 1-800-273-8255
//                 </div>
//                 <div className="contact">
//                   <strong>Crisis Text Line:</strong> Text HOME to 741741
//                 </div>
//                 <div className="contact">
//                   <strong>Postpartum Support International:</strong> 1-800-944-4773
//                 </div>
//               </div>
//             </div>
//           </div>
//         )}
//       </div>

//       {/* Quick Tips Section */}
//       <div className="quick-tips">
//         <h3>Quick Postpartum Tips</h3>
//         <div className="tips-grid">
//           <div className="tip">
//             <span className="tip-icon">💤</span>
//             <p>Sleep when baby sleeps</p>
//           </div>
//           <div className="tip">
//             <span className="tip-icon">💧</span>
//             <p>Stay hydrated and eat regularly</p>
//           </div>
//           <div className="tip">
//             <span className="tip-icon">🤝</span>
//             <p>Accept help from family and friends</p>
//           </div>
//           <div className="tip">
//             <span className="tip-icon">🚶‍♀️</span>
//             <p>Take short walks when possible</p>
//           </div>
//           <div className="tip">
//             <span className="tip-icon">📞</span>
//             <p>Don't hesitate to ask for help</p>
//           </div>
//           <div className="tip">
//             <span className="tip-icon">❤️</span>
//             <p>Be patient with yourself and your body</p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default PostpartumCare;