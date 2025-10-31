import React, { useState, useEffect } from 'react'; 
import BabyTrackerCard from './BabyTrackerCard'; 
 
const BabyDietTracker = () => { 
  const [diet, setDiet] = useState({ 
    breakfast: '', 
    lunch: '', 
    dinner: '', 
    snacks: '', 
    water: '8', 
    cravings: '' 
  }); 
 
  useEffect(() => { 
    const saved = localStorage.getItem('momDiet'); 
    if (saved) { 
      setDiet(JSON.parse(saved)); 
    } 
  }, []); 
 
  useEffect(() => { 
    localStorage.setItem('momDiet', JSON.stringify(diet)); 
  }, [diet]); 
 
  const handleChange = (field, value) => { 
    setDiet(prev => ({ ...prev, [field]: value })); 
  }; 
 
  return ( 
    <BabyTrackerCard title="Nutrition & Diet" gradient="from-fuchsia-500 to-purple-500"> 
      <div className="space-y-4"> 
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4"> 
          <div> 
            <label className="block text-sm font-medium text-gray-700 mb-1"> 
              Breakfast 
            </label> 
            <input 
              type="text" 
              value={diet.breakfast} 
              onChange={(e) => handleChange('breakfast', e.target.value)} 
              className="w-full px-3 py-2 border border-fuchsia-200 rounded-lg focus:ring-2 
fuchsia-500 focus:border-transparent" 
              placeholder="What did you have for breakfast?" 
            /> 
          </div> 
           
          <div> 
            <label className="block text-sm font-medium text-gray-700 mb-1"> 
              Lunch 
            </label> 
            <input 
              type="text" 
              value={diet.lunch} 
              onChange={(e) => handleChange('lunch', e.target.value)} 
              className="w-full px-3 py-2 border border-fuchsia-200 rounded-lg focus:ring-2 
fuchsia-500 focus:border-transparent" 
              placeholder="What did you have for lunch?" 
            /> 
          </div> 
        </div> 
 
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4"> 
          <div> 
            <label className="block text-sm font-medium text-gray-700 mb-1"> 
              Dinner 
            </label> 
            <input 
              type="text" 
              value={diet.dinner} 
              onChange={(e) => handleChange('dinner', e.target.value)} 
              className="w-full px-3 py-2 border border-fuchsia-200 rounded-lg focus:ring-2 
fuchsia-500 focus:border-transparent" 
              placeholder="What did you have for dinner?" 
            /> 
          </div> 
 
          <div> 
            <label className="block text-sm font-medium text-gray-700 mb-1"> 
              Water Intake (glasses) 
            </label> 
            <select 
              value={diet.water} 
              onChange={(e) => handleChange('water', e.target.value)} 
              className="w-full px-3 py-2 border border-fuchsia-200 rounded-lg focus:ring-2 
fuchsia-500 focus:border-transparent" 
            > 
              {[1,2,3,4,5,6,7,8,9,10].map(num => ( 
                <option key={num} value={num}>{num} glass{num !== 1 ? 'es' : ''}</option> 
              ))} 
            </select> 
          </div> 
        </div> 
 
        <div> 
          <label className="block text-sm font-medium text-gray-700 mb-1"> 
            Healthy Snacks 
          </label> 
          <input 
            type="text" 
            value={diet.snacks} 
            onChange={(e) => handleChange('snacks', e.target.value)} 
            className="w-full px-3 py-2 border border-fuchsia-200 rounded-lg focus:ring-2 
fuchsia-500 focus:border-transparent" 
            placeholder="Fruits, nuts, yogurt..." 
          /> 
        </div> 
 
        <div> 
          <label className="block text-sm font-medium text-gray-700 mb-1"> 
            Current Cravings 
          </label> 
          <input 
            type="text" 
            value={diet.cravings} 
            onChange={(e) => handleChange('cravings', e.target.value)} 
            className="w-full px-3 py-2 border border-fuchsia-200 rounded-lg focus:ring-2 
fuchsia-500 focus:border-transparent" 
            placeholder="What are you craving today?" 
          /> 
        </div> 
      </div> 
    </BabyTrackerCard> 
  ); 
}; 
 
export default BabyDietTracker;