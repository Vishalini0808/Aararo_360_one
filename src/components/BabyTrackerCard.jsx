import React from 'react'; 
 
const BabyTrackerCard = ({ title, children, gradient = 'from-pink-500 to-purple-600' }) => { 
  return ( 
    <div className="bg-white rounded-2xl shadow-sm border border-pink-100 hover:shadow-md 
transition-all duration-300 overflow-hidden"> 
      <div className={`bg-gradient-to-r ${gradient} p-4`}> 
        <h3 className="text-white font-semibold text-lg">{title}</h3> 
      </div> 
      <div className="p-6"> 
        {children} 
      </div> 
    </div> 
  ); 
}; 
 
export default BabyTrackerCard;