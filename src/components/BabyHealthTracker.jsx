import React, { useState, useEffect } from 'react'; 
import BabyTrackerCard from './BabyTrackerCard';
 
const BabyHealthTracker = () => { 
const [health, setHealth] = useState({ 
bloodPressure: '', 
heartRate: '', 
temperature: '', 
symptoms: '', 
mood: 'good', 
notes: '' 
}); 
useEffect(() => { 
const saved = localStorage.getItem('momHealth'); 
if (saved) { 
setHealth(JSON.parse(saved)); 
} 
}, []); 
useEffect(() => { 
localStorage.setItem('momHealth', JSON.stringify(health)); 
}, [health]); 
const handleChange = (field, value) => { 
setHealth(prev => ({ ...prev, [field]: value })); 
}; 
const moods = [ 
{ value: 'excellent', label: 'Excellent', color: 'bg-green-500' }, 
{ value: 'good', label: 'Good', color: 'bg-blue-500' }, 
    { value: 'okay', label: 'Okay', color: 'bg-yellow-500' }, 
    { value: 'tired', label: 'Tired', color: 'bg-orange-500' }, 
    { value: 'unwell', label: 'Unwell', color: 'bg-red-500' } 
  ]; 
 
  return ( 
    <BabyTrackerCard title="Health & Wellness" gradient="from-blue-400 to-cyan-500"> 
      <div className="space-y-4"> 
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4"> 
          <div> 
            <label className="block text-sm font-medium text-gray-700 mb-1"> 
              Blood Pressure 
            </label> 
            <input 
              type="text" 
              value={health.bloodPressure} 
              onChange={(e) => handleChange('bloodPressure', e.target.value)} 
              className="w-full px-3 py-2 border border-blue-200 rounded-lg focus:ring-2 focus:ring-blue
500 focus:border-transparent" 
              placeholder="e.g., 120/80" 
            /> 
          </div> 
           
          <div> 
            <label className="block text-sm font-medium text-gray-700 mb-1"> 
              Heart Rate (bpm) 
            </label> 
            <input 
              type="number" 
              value={health.heartRate} 
              onChange={(e) => handleChange('heartRate', e.target.value)} 
              className="w-full px-3 py-2 border border-blue-200 rounded-lg focus:ring-2 focus:ring-blue
500 focus:border-transparent" 
              placeholder="e.g., 75" 
            /> 
          </div> 
 
          <div> 
            <label className="block text-sm font-medium text-gray-700 mb-1"> 
              Temperature (°C) 
            </label> 
            <input 
              type="number" 
              step="0.1" 
              value={health.temperature} 
              onChange={(e) => handleChange('temperature', e.target.value)} 
              className="w-full px-3 py-2 border border-blue-200 rounded-lg focus:ring-2 focus:ring-blue
500 focus:border-transparent" 
              placeholder="e.g., 36.6" 
            /> 
          </div> 
        </div> 
 
        <div> 
          <label className="block text-sm font-medium text-gray-700 mb-3"> 
            How are you feeling today? 
          </label> 
          <div className="grid grid-cols-2 md:grid-cols-5 gap-2"> 
            {moods.map((mood) => ( 
              <button 
                key={mood.value} 
                onClick={() => handleChange('mood', mood.value)} 
                className={`p-2 rounded-lg text-white text-sm font-medium transition-all ${ 
                  health.mood === mood.value  
                    ? `${mood.color} ring-2 ring-offset-2 ring-blue-500 transform scale-105`  
                    : `${mood.color} opacity-70 hover:opacity-90` 
                }`} 
              > 
                {mood.label} 
              </button> 
            ))} 
          </div> 
        </div> 
 
        <div> 
          <label className="block text-sm font-medium text-gray-700 mb-1"> 
            Symptoms & Notes 
          </label> 
          <textarea 
            value={health.symptoms} 
            onChange={(e) => handleChange('symptoms', e.target.value)} 
            rows="3" 
            className="w-full px-3 py-2 border border-blue-200 rounded-lg focus:ring-2 focus:ring-blue
500 focus:border-transparent" 
            placeholder="Any symptoms, concerns, or notes for your doctor..." 
          /> 
        </div> 
      </div> 
    </BabyTrackerCard> 
  ); 
}; 
 
export default BabyHealthTracker;