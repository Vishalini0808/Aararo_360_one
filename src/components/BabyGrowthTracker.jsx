import React, { useState, useEffect } from 'react'; 
import BabyTrackerCard from './BabyTrackerCard'; 

const BabyGrowthTracker = () => { 
const [growth, setGrowth] = useState({ 
weight: '', 
length: '', 
headCircumference: '', 
date: new Date().toISOString().split('T')[0] 
}); 
useEffect(() => { 
const saved = localStorage.getItem('babyGrowth'); 
if (saved) { 
setGrowth(JSON.parse(saved)); 
} 
}, []); 
useEffect(() => { 
localStorage.setItem('babyGrowth', JSON.stringify(growth)); 
}, [growth]); 
const handleChange = (field, value) => { 
setGrowth(prev => ({ ...prev, [field]: value })); 
}; 
return ( 
<BabyTrackerCard title="Growth Tracking" gradient="from-rose-400 to-pink-500"> 
      <div className="space-y-4"> 
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4"> 
          <div> 
            <label className="block text-sm font-medium text-gray-700 mb-1"> 
              Weight (kg) 
            </label> 
            <input 
              type="number" 
              step="0.01" 
              value={growth.weight} 
              onChange={(e) => handleChange('weight', e.target.value)} 
              className="w-full px-3 py-2 border border-rose-200 rounded-lg focus:ring-2 focus:ring-rose
500 focus:border-transparent" 
              placeholder="0.00" 
            /> 
          </div> 
           
          <div> 
            <label className="block text-sm font-medium text-gray-700 mb-1"> 
              Length (cm) 
            </label> 
            <input 
              type="number" 
              value={growth.length} 
              onChange={(e) => handleChange('length', e.target.value)} 
              className="w-full px-3 py-2 border border-rose-200 rounded-lg focus:ring-2 focus:ring-rose
500 focus:border-transparent" 
              placeholder="0" 
            /> 
          </div> 
 
          <div> 
            <label className="block text-sm font-medium text-gray-700 mb-1"> 
              Head Circumference (cm) 
            </label> 
            <input 
              type="number" 
              step="0.1" 
              value={growth.headCircumference} 
              onChange={(e) => handleChange('headCircumference', e.target.value)} 
              className="w-full px-3 py-2 border border-rose-200 rounded-lg focus:ring-2 focus:ring-rose
500 focus:border-transparent" 
              placeholder="0.0" 
            /> 
          </div> 
        </div> 
 
        <div> 
          <label className="block text-sm font-medium text-gray-700 mb-1"> 
            Measurement Date 
          </label> 
          <input 
            type="date" 
            value={growth.date} 
            onChange={(e) => handleChange('date', e.target.value)} 
            className="w-full px-3 py-2 border border-rose-200 rounded-lg focus:ring-2 focus:ring-rose
500 focus:border-transparent" 
          /> 
        </div> 
 
        {growth.weight && growth.length && ( 
          <div className="bg-rose-50 rounded-lg p-4"> 
            <h4 className="font-medium text-rose-800 mb-2">Growth Summary</h4> 
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center"> 
              <div> 
                <p className="text-2xl font-bold text-rose-600">{growth.weight}kg</p> 
                <p className="text-xs text-rose-700">Weight</p> 
              </div> 
              <div> 
                <p className="text-2xl font-bold text-rose-600">{growth.length}cm</p> 
                <p className="text-xs text-rose-700">Length</p> 
              </div> 
              <div> 
                <p className="text-2xl font-bold text-rose-600">{growth.headCircumference}cm</p> 
                <p className="text-xs text-rose-700">Head</p> 
              </div> 
              <div> 
                <p className="text-2xl font-bold text-rose-600">18w</p> 
                <p className="text-xs text-rose-700">Gestation</p> 
              </div> 
            </div> 
          </div> 
        )} 
      </div> 
    </BabyTrackerCard> 
  ); 
}; 
 
export default BabyGrowthTracker;