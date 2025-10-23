// import React, { useState } from 'react';

// const FitnessYoga = () => {
//   const [activeTrimester, setActiveTrimester] = useState('all');

//   const fitnessData = {
//     exercises: {
//       first: [
//         {
//           name: "Walking",
//           duration: "20-30 minutes",
//           frequency: "Daily",
//           benefits: "Improves circulation, boosts mood, maintains fitness",
//           precautions: "Wear supportive shoes, stay hydrated",
//           image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
//         },
//         {
//           name: "Pelvic Floor Exercises",
//           duration: "5-10 minutes",
//           frequency: "Daily",
//           benefits: "Prevents incontinence, supports delivery",
//           precautions: "Don't hold your breath, focus on technique",
//           image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
//         }
//       ],
//       second: [
//         {
//           name: "Prenatal Yoga",
//           duration: "30-45 minutes",
//           frequency: "3-4 times weekly",
//           benefits: "Increases flexibility, reduces stress, prepares for labor",
//           precautions: "Avoid deep twists, use props for support",
//           image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
//         },
//         {
//           name: "Swimming",
//           duration: "30 minutes",
//           frequency: "2-3 times weekly",
//           benefits: "Supports weight, reduces joint pain, full-body workout",
//           precautions: "Avoid diving, watch water temperature",
//           image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
//         }
//       ],
//       third: [
//         {
//           name: "Birth Ball Exercises",
//           duration: "15-20 minutes",
//           frequency: "Daily",
//           benefits: "Relieves back pain, opens pelvis, encourages baby positioning",
//           precautions: "Use stable ball, have support nearby",
//           image: "https://images.unsplash.com/photo-1571019614243-c4cdb7e57f12?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
//         },
//         {
//           name: "Gentle Stretching",
//           duration: "10-15 minutes",
//           frequency: "Daily",
//           benefits: "Relieves muscle tension, improves circulation",
//           precautions: "Avoid overstretching, move slowly",
//           image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
//         }
//       ]
//     },
//     yogaPoses: {
//       all: [
//         {
//           pose: "Cat-Cow Stretch",
//           benefits: "Relieves back pain, improves spine flexibility",
//           instructions: "On hands and knees, alternate between arching and rounding your back. Inhale for cow pose, exhale for cat pose.",
//           image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
//           trimester: "All Trimesters"
//         },
//         {
//           pose: "Butterfly Pose",
//           benefits: "Opens hips, improves circulation, relieves sciatica",
//           instructions: "Sit with soles of feet together, gently press knees toward floor. Keep back straight and breathe deeply.",
//           image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
//           trimester: "All Trimesters"
//         }
//       ],
//       second: [
//         {
//           pose: "Modified Triangle Pose",
//           benefits: "Strengthens legs, improves balance, opens hips",
//           instructions: "Stand with legs wide, place hand on shin or block, other arm up. Keep chest open and breathe.",
//           image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
//           trimester: "Second & Third Trimester"
//         }
//       ],
//       third: [
//         {
//           pose: "Supported Squat",
//           benefits: "Opens pelvis, strengthens legs, prepares for labor",
//           instructions: "Hold onto chair or wall, squat as low as comfortable. Keep heels down and back straight.",
//           image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
//           trimester: "Third Trimester"
//         }
//       ]
//     }
//   };

//   const safetyGuidelines = [
//     "Always consult your doctor before starting any exercise program",
//     "Stay hydrated and drink water before, during, and after exercise",
//     "Avoid exercises lying flat on your back after first trimester",
//     "Stop immediately if you feel pain, dizziness, or shortness of breath",
//     "Wear comfortable, supportive clothing and proper footwear",
//     "Listen to your body and don't push beyond your comfort level"
//   ];

//   return (
//     <div className="page-fitness">
//       <div className="page-header">
//         <h1>Fitness & Yoga</h1>
//         <p>Safe exercises and yoga poses for a healthy pregnancy</p>
//       </div>

//       {/* Trimester Filter */}
//       <div className="trimester-filter">
//         <button 
//           className={activeTrimester === 'all' ? 'active' : ''}
//           onClick={() => setActiveTrimester('all')}
//         >
//           All Trimesters
//         </button>
//         <button 
//           className={activeTrimester === 'first' ? 'active' : ''}
//           onClick={() => setActiveTrimester('first')}
//         >
//           First Trimester
//         </button>
//         <button 
//           className={activeTrimester === 'second' ? 'active' : ''}
//           onClick={() => setActiveTrimester('second')}
//         >
//           Second Trimester
//         </button>
//         <button 
//           className={activeTrimester === 'third' ? 'active' : ''}
//           onClick={() => setActiveTrimester('third')}
//         >
//           Third Trimester
//         </button>
//       </div>

//       <div className="fitness-content">
//         {/* Exercises Section */}
//         <div className="exercises-section">
//           <h2>Recommended Exercises</h2>
//           <div className="exercises-grid">
//             {(activeTrimester === 'all' 
//               ? [...fitnessData.exercises.first, ...fitnessData.exercises.second, ...fitnessData.exercises.third]
//               : fitnessData.exercises[activeTrimester]
//             ).map((exercise, index) => (
//               <div key={index} className="exercise-card">
//                 <img src={exercise.image} alt={exercise.name} />
//                 <div className="exercise-info">
//                   <h3>{exercise.name}</h3>
//                   <div className="exercise-details">
//                     <p><strong>Duration:</strong> {exercise.duration}</p>
//                     <p><strong>Frequency:</strong> {exercise.frequency}</p>
//                     <p><strong>Benefits:</strong> {exercise.benefits}</p>
//                     <p><strong>Precautions:</strong> {exercise.precautions}</p>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Yoga Section */}
//         <div className="yoga-section">
//           <h2>Prenatal Yoga Poses</h2>
//           <div className="yoga-grid">
//             {(activeTrimester === 'all' 
//               ? [...fitnessData.yogaPoses.all, ...fitnessData.yogaPoses.second, ...fitnessData.yogaPoses.third]
//               : [
//                   ...fitnessData.yogaPoses.all,
//                   ...(fitnessData.yogaPoses[activeTrimester] || [])
//                 ].filter(pose => 
//                   activeTrimester === 'all' || 
//                   pose.trimester.includes(activeTrimester) || 
//                   pose.trimester === 'All Trimesters'
//                 )
//             ).map((pose, index) => (
//               <div key={index} className="yoga-card">
//                 <img src={pose.image} alt={pose.pose} />
//                 <div className="yoga-info">
//                   <h3>{pose.pose}</h3>
//                   <p><strong>Benefits:</strong> {pose.benefits}</p>
//                   <p><strong>How to do:</strong> {pose.instructions}</p>
//                   <span className="trimester-badge">{pose.trimester}</span>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Safety Guidelines */}
//         <div className="safety-section">
//           <h2>Safety Guidelines</h2>
//           <div className="safety-cards">
//             {safetyGuidelines.map((guideline, index) => (
//               <div key={index} className="safety-card">
//                 <span className="safety-icon">⚠️</span>
//                 <p>{guideline}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default FitnessYoga;