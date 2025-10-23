// import React from 'react';

// const HealthNutrition = () => {
//   const nutritionData = {
//     essentialNutrients: [
//       {
//         nutrient: "Folic Acid",
//         importance: "Prevents neural tube defects",
//         sources: "Leafy greens, citrus fruits, beans, fortified cereals",
//         dailyRequirement: "600 mcg",
//         icon: "🥬"
//       },
//       // Add other nutrients
//     ],
//     trimesterDiets: {
//       first: {
//         image: "https://images.unsplash.com/photo-1490818387583-1baba5e638af?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
//         focus: "Nausea management, foundational nutrients",
//         foods: ["Ginger tea", "Crackers", "Small frequent meals", "Vitamin B6 rich foods"]
//       },
//       second: {
//         image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
//         focus: "Growth support, iron and calcium",
//         foods: ["Lean proteins", "Dairy products", "Iron-rich foods", "Omega-3 sources"]
//       },
//       third: {
//         image: "https://images.unsplash.com/photo-1505576633757-0ac1084af824?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
//         focus: "Final growth, energy for labor",
//         foods: ["Complex carbohydrates", "Protein-rich foods", "Hydrating foods", "Fiber-rich options"]
//       }
//     }
//   };

//   return (
//     <div className="page-nutrition">
//       <div className="page-header">
//         <h1>Health & Nutrition Guide</h1>
//         <p>Essential nutrition for you and your baby's health</p>
//       </div>

//       {/* Nutrients Grid */}
//       <div className="nutrients-section">
//         <h2>Essential Nutrients</h2>
//         <div className="nutrients-grid">
//           {nutritionData.essentialNutrients.map((nutrient, index) => (
//             <div key={index} className="nutrient-card">
//               <div className="nutrient-header">
//                 <span className="nutrient-icon">{nutrient.icon}</span>
//                 <h3>{nutrient.nutrient}</h3>
//               </div>
//               <div className="nutrient-details">
//                 <p><strong>Importance:</strong> {nutrient.importance}</p>
//                 <p><strong>Sources:</strong> {nutrient.sources}</p>
//                 <p><strong>Daily Need:</strong> {nutrient.dailyRequirement}</p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Trimester-specific Diet */}
//       <div className="trimester-diets">
//         <h2>Diet by Trimester</h2>
//         <div className="diet-cards">
//           {Object.entries(nutritionData.trimesterDiets).map(([trimester, data]) => (
//             <div key={trimester} className="diet-card">
//               <img src={data.image} alt={`${trimester} trimester diet`} />
//               <div className="diet-content">
//                 <h3>{trimester.charAt(0).toUpperCase() + trimester.slice(1)} Trimester</h3>
//                 <p><strong>Focus:</strong> {data.focus}</p>
//                 <div className="recommended-foods">
//                   <h4>Recommended Foods:</h4>
//                   <ul>
//                     {data.foods.map((food, index) => (
//                       <li key={index}>{food}</li>
//                     ))}
//                   </ul>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default HealthNutrition;