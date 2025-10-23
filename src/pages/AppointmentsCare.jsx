// import React, { useState } from 'react';

// const AppointmentsCare = () => {
//   const [activeAppointment, setActiveAppointment] = useState(0);

//   const appointmentsData = [
//     {
//       week: "4-8 weeks",
//       type: "First Prenatal Visit",
//       image: "https://images.unsplash.com/photo-1551601651-2a8555f1a136?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
//       tests: [
//         "Pregnancy confirmation blood test",
//         "Complete blood count (CBC)",
//         "Blood type and Rh factor",
//         "Urine analysis",
//         "STD screening",
//         "First ultrasound"
//       ],
//       preparations: [
//         "List all your questions and concerns",
//         "Know your last menstrual period date",
//         "Bring your medical history",
//         "Bring current medications list",
//         "Consider bringing your partner",
//         "Have insurance information ready"
//       ],
//       questions: [
//         "What prenatal vitamins should I take?",
//         "What foods should I avoid?",
//         "What symptoms are normal vs concerning?",
//         "When should I call the doctor?",
//         "What's my due date?"
//       ]
//     },
//     {
//       week: "11-14 weeks",
//       type: "NT Scan & First Trimester Screening",
//       image: "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
//       tests: [
//         "Nuchal translucency ultrasound",
//         "Blood tests for PAPP-A and hCG",
//         "Genetic screening discussion",
//         "Basic anatomy check"
//       ],
//       preparations: [
//         "Drink water before scan for better images",
//         "Wear comfortable, loose clothing",
//         "Be prepared for possible genetic counseling",
//         "Discuss screening options with partner beforehand"
//       ],
//       questions: [
//         "What does the NT measurement mean?",
//         "What are my genetic screening options?",
//         "How accurate are these tests?",
//         "What happens if results are abnormal?"
//       ]
//     },
//     {
//       week: "18-22 weeks",
//       type: "Anatomy Scan",
//       image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
//       tests: [
//         "Detailed fetal anatomy survey",
//         "Check all major organs development",
//         "Measure amniotic fluid levels",
//         "Check placenta position",
//         "Possible gender reveal"
//       ],
//       preparations: [
//         "Full bladder not usually needed",
//         "Plan for 30-45 minute appointment",
//         "Consider if you want to know baby's gender",
//         "Bring your partner to see baby"
//       ],
//       questions: [
//         "Is everything developing normally?",
//         "Can you explain what you're checking?",
//         "What's the placenta position?",
//         "How's the amniotic fluid level?"
//       ]
//     },
//     {
//       week: "24-28 weeks",
//       type: "Glucose Screening Test",
//       image: "https://images.unsplash.com/photo-1584467735871-8db9ac8d55b4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
//       tests: [
//         "One-hour glucose challenge test",
//         "Follow-up three-hour test if needed",
//         "Rh antibody screening if Rh-negative",
//         "Blood count recheck"
//       ],
//       preparations: [
//         "Follow fasting instructions if given",
//         "Be prepared for sweet glucose drink",
//         "Bring something to read during wait",
//         "Have snacks for after test"
//       ],
//       questions: [
//         "What are the symptoms of gestational diabetes?",
//         "How is gestational diabetes managed?",
//         "What happens if I fail the one-hour test?",
//         "How does this affect my pregnancy?"
//       ]
//     },
//     {
//       week: "32-36 weeks",
//       type: "Growth Scan & Preparation",
//       image: "https://images.unsplash.com/photo-1551601651-2a8555f1a136?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
//       tests: [
//         "Fetal growth ultrasound",
//         "Amniotic fluid level check",
//         "Fetal position assessment",
//         "Group B strep test",
//         "Final blood work if needed"
//       ],
//       preparations: [
//         "Bring your birth plan to discuss",
//         "List questions about labor and delivery",
//         "Discuss postpartum care plans",
//         "Review hospital pre-registration"
//       ],
//       questions: [
//         "Is baby in the head-down position?",
//         "How much does baby weigh?",
//         "When should I go to the hospital?",
//         "What are signs of labor?"
//       ]
//     }
//   ];

//   const selfCareRoutine = {
//     daily: [
//       {
//         activity: "Skin Care",
//         description: "Moisturize belly with pregnancy-safe lotion or oil to prevent stretch marks",
//         tips: ["Use gentle, fragrance-free products", "Massage in circular motions", "Stay hydrated"]
//       },
//       {
//         activity: "Pelvic Floor Exercises",
//         description: "Practice Kegel exercises to support delivery and recovery",
//         tips: ["Do 10-15 repetitions, 3 times daily", "Don't hold your breath", "Focus on proper technique"]
//       }
//     ],
//     weekly: [
//       {
//         activity: "Prenatal Yoga",
//         description: "Gentle stretching and breathing exercises",
//         tips: ["Join a prenatal class", "Follow online videos", "Listen to your body"]
//       },
//       {
//         activity: "Relaxation Time",
//         description: "Dedicated time for stress relief and mental wellness",
//         tips: ["Practice meditation", "Take warm baths", "Read uplifting books"]
//       }
//     ]
//   };

//   return (
//     <div className="page-appointments">
//       <div className="page-header">
//         <h1>Appointments & Care Schedule</h1>
//         <p>Medical checkups and self-care for a healthy pregnancy</p>
//       </div>

//       <div className="appointments-content">
//         {/* Appointment Timeline */}
//         <div className="appointments-timeline">
//           <h2>Pregnancy Appointment Schedule</h2>
//           <div className="timeline-navigation">
//             {appointmentsData.map((appointment, index) => (
//               <button
//                 key={index}
//                 className={`timeline-point ${activeAppointment === index ? 'active' : ''}`}
//                 onClick={() => setActiveAppointment(index)}
//               >
//                 <span className="week">{appointment.week}</span>
//                 <span className="type">{appointment.type}</span>
//               </button>
//             ))}
//           </div>

//           {/* Current Appointment Details */}
//           <div className="appointment-details">
//             <div className="appointment-hero">
//               <img src={appointmentsData[activeAppointment].image} alt={appointmentsData[activeAppointment].type} />
//               <div className="appointment-info">
//                 <h3>{appointmentsData[activeAppointment].type}</h3>
//                 <p className="week">{appointmentsData[activeAppointment].week}</p>
//               </div>
//             </div>

//             <div className="appointment-sections">
//               <div className="section">
//                 <h4>📋 Tests & Procedures</h4>
//                 <ul>
//                   {appointmentsData[activeAppointment].tests.map((test, index) => (
//                     <li key={index}>{test}</li>
//                   ))}
//                 </ul>
//               </div>

//               <div className="section">
//                 <h4>🎯 Preparation Checklist</h4>
//                 <ul>
//                   {appointmentsData[activeAppointment].preparations.map((prep, index) => (
//                     <li key={index}>{prep}</li>
//                   ))}
//                 </ul>
//               </div>

//               <div className="section">
//                 <h4>❓ Questions to Ask</h4>
//                 <ul>
//                   {appointmentsData[activeAppointment].questions.map((question, index) => (
//                     <li key={index}>{question}</li>
//                   ))}
//                 </ul>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Self-Care Section */}
//         <div className="self-care-section">
//           <h2>Daily Self-Care Routine</h2>
          
//           <div className="self-care-grid">
//             <div className="care-category">
//               <h3>Daily Care</h3>
//               {selfCareRoutine.daily.map((item, index) => (
//                 <div key={index} className="care-item">
//                   <h4>{item.activity}</h4>
//                   <p>{item.description}</p>
//                   <div className="care-tips">
//                     <strong>Tips:</strong>
//                     <ul>
//                       {item.tips.map((tip, i) => (
//                         <li key={i}>{tip}</li>
//                       ))}
//                     </ul>
//                   </div>
//                 </div>
//               ))}
//             </div>

//             <div className="care-category">
//               <h3>Weekly Care</h3>
//               {selfCareRoutine.weekly.map((item, index) => (
//                 <div key={index} className="care-item">
//                   <h4>{item.activity}</h4>
//                   <p>{item.description}</p>
//                   <div className="care-tips">
//                     <strong>Tips:</strong>
//                     <ul>
//                       {item.tips.map((tip, i) => (
//                         <li key={i}>{tip}</li>
//                       ))}
//                     </ul>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>

//         {/* Emergency Contact Section */}
//         <div className="emergency-section">
//           <h2>When to Call Your Doctor</h2>
//           <div className="emergency-cards">
//             <div className="emergency-card urgent">
//               <h4>🚨 Call Immediately</h4>
//               <ul>
//                 <li>Heavy vaginal bleeding</li>
//                 <li>Severe abdominal pain</li>
//                 <li>No fetal movement for 12 hours</li>
//                 <li>Your water breaks</li>
//                 <li>Regular contractions before 37 weeks</li>
//               </ul>
//             </div>
//             <div className="emergency-card consult">
//               <h4>📞 Call Within 24 Hours</h4>
//               <ul>
//                 <li>Mild bleeding or spotting</li>
//                 <li>Persistent headache</li>
//                 <li>Fever over 100.4°F</li>
//                 <li>Painful urination</li>
//                 <li>Significant swelling</li>
//               </ul>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AppointmentsCare;