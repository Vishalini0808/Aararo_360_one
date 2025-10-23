import React from 'react';

export default function CareCard({ title, subtitle, icon, gradient, onClick }) { 
  return ( 
    <button 
      onClick={onClick} 
      className={`${gradient} rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 text-left w-full hover:scale-[1.03] hover:-translate-y-1 active:scale-[0.98]`} 
    > 
      <div className="flex items-start gap-4"> 
        <div className="flex-shrink-0 bg-white/30 backdrop-blur-sm rounded-xl p-3"> 
          <span className="text-white text-2xl">{icon}</span> 
        </div> 
        <div className="flex-1"> 
          <h3 className="text-white text-lg font-semibold mb-2">{title}</h3> 
          <p className="text-white/90 text-sm leading-relaxed">{subtitle}</p> 
        </div> 
      </div> 
    </button> 
  ); 
}