import React, { useState, useEffect } from 'react'; 
import BabyTrackerCard from './BabyTrackerCard'; 
 
const BabyTrackerProfile = () => { 
  const [profile, setProfile] = useState({ 
    name: '', 
    dueDate: '', 
    gender: '', 
    nickname: '' 
  }); 
 
  useEffect(() => { 
    const saved = localStorage.getItem('babyProfile'); 
    if (saved) { 
      setProfile(JSON.parse(saved)); 
    } 
  }, []); 
 
  useEffect(() => { 
    localStorage.setItem('babyProfile', JSON.stringify(profile)); 
  }, [profile]); 
 
  const handleChange = (field, value) => { 
    setProfile(prev => ({ ...prev, [field]: value })); 
  }; 
 
  return ( 
    <BabyTrackerCard title="Baby Profile" gradient="from-pink-400 to-rose-400"> 
      <div className="space-y-4"> 
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4"> 
          <div> 
            <label className="block text-sm font-medium text-gray-700 mb-1"> 
              Baby's Name 
            </label> 
            <input 
              type="text" 
              value={profile.name} 
              onChange={(e) => handleChange('name', e.target.value)} 
              className="w-full px-3 py-2 border border-pink-200 rounded-lg focus:ring-2 focus:ring-pink
500 focus:border-transparent" 
              placeholder="Enter baby's name" 
            /> 
          </div> 
           
          <div> 
            <label className="block text-sm font-medium text-gray-700 mb-1"> 
              Due Date 
            </label> 
            <input 
              type="date" 
              value={profile.dueDate} 
              onChange={(e) => handleChange('dueDate', e.target.value)} 
              className="w-full px-3 py-2 border border-pink-200 rounded-lg focus:ring-2 focus:ring-pink
500 focus:border-transparent" 
            /> 
          </div> 
        </div> 
 
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4"> 
          <div> 
            <label className="block text-sm font-medium text-gray-700 mb-1"> 
              Gender 
            </label> 
            <select 
              value={profile.gender} 
              onChange={(e) => handleChange('gender', e.target.value)} 
              className="w-full px-3 py-2 border border-pink-200 rounded-lg focus:ring-2 focus:ring-pink
500 focus:border-transparent" 
            > 
              <option value="">Select gender</option> 
              <option value="girl">Girl</option> 
              <option value="boy">Boy</option> 
              <option value="surprise">Surprise!</option> 
            </select> 
          </div> 
           
          <div> 
            <label className="block text-sm font-medium text-gray-700 mb-1"> 
              Nickname 
            </label> 
            <input 
              type="text" 
              value={profile.nickname} 
              onChange={(e) => handleChange('nickname', e.target.value)} 
              className="w-full px-3 py-2 border border-pink-200 rounded-lg focus:ring-2 focus:ring-pink
500 focus:border-transparent" 
              placeholder="Cute nickname" 
            /> 
          </div> 
        </div> 
 
        {profile.dueDate && ( 
          <div className="bg-pink-50 rounded-lg p-4 mt-4"> 
            <h4 className="font-medium text-pink-800 mb-2">Pregnancy Progress</h4> 
            <div className="w-full bg-pink-200 rounded-full h-2"> 
              <div  
                className="bg-pink-500 h-2 rounded-full transition-all duration-500" 
                style={{ width: '45%' }} 
              ></div> 
            </div> 
            <p className="text-sm text-pink-700 mt-2">Week 18 of 40 • 45% complete</p> 
          </div> 
        )} 
      </div> 
    </BabyTrackerCard> 
); 
}; 
export default BabyTrackerProfile; 