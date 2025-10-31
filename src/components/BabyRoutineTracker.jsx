import React, { useState, useEffect } from 'react'; 
import BabyTrackerCard from './BabyTrackerCard';

const BabyRoutineTracker = () => { 
const [routine, setRoutine] = useState({ 
sleep: '', 
feeding: '', 
activity: '', 
notes: '' 
}); 
useEffect(() => { 
const saved = localStorage.getItem('babyRoutine'); 
if (saved) { 
setRoutine(JSON.parse(saved)); 
} 
}, []); 
useEffect(() => { 
localStorage.setItem('babyRoutine', JSON.stringify(routine)); 
}, [routine]); 
const handleChange = (field, value) => { 
setRoutine(prev => ({ ...prev, [field]: value })); 
}; 
  return ( 
    <BabyTrackerCard title="Daily Routine" gradient="from-purple-500 to-indigo-500"> 
      <div className="space-y-4"> 
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4"> 
          <div> 
            <label className="block text-sm font-medium text-gray-700 mb-1"> 
              Sleep Pattern 
            </label> 
            <input 
              type="text" 
              value={routine.sleep} 
              onChange={(e) => handleChange('sleep', e.target.value)} 
              className="w-full px-3 py-2 border border-purple-200 rounded-lg focus:ring-2 
purple-500 focus:border-transparent" 
              placeholder="e.g., 8 hours at night" 
            /> 
          </div> 
           
          <div> 
            <label className="block text-sm font-medium text-gray-700 mb-1"> 
              Feeding Schedule 
            </label> 
            <input 
              type="text" 
              value={routine.feeding} 
              onChange={(e) => handleChange('feeding', e.target.value)} 
              className="w-full px-3 py-2 border border-purple-200 rounded-lg focus:ring-2 
purple-500 focus:border-transparent" 
              placeholder="e.g., Every 3 hours" 
            /> 
          </div> 
        </div> 
 
        <div> 
          <label className="block text-sm font-medium text-gray-700 mb-1"> 
            Activity Time 
          </label> 
          <input 
            type="text" 
            value={routine.activity} 
            onChange={(e) => handleChange('activity', e.target.value)} 
            className="w-full px-3 py-2 border border-purple-200 rounded-lg focus:ring-2 
purple-500 focus:border-transparent" 
            placeholder="e.g., Morning walks, Tummy time" 
          /> 
        </div> 
 
        <div> 
          <label className="block text-sm font-medium text-gray-700 mb-1"> 
            Notes 
          </label> 
          <textarea 
            value={routine.notes} 
            onChange={(e) => handleChange('notes', e.target.value)} 
            rows="3" 
            className="w-full px-3 py-2 border border-purple-200 rounded-lg focus:ring-2 
purple-500 focus:border-transparent" 
            placeholder="Any special routines or patterns..." 
          /> 
        </div> 
      </div> 
    </BabyTrackerCard> 
  ); 
}; 
export default BabyRoutineTracker;