import React, { useState, useEffect } from 'react'; 
import BabyTrackerCard from './BabyTrackerCard'; 
 
const BabyMilestoneTracker = () => { 
  const [milestones, setMilestones] = useState([]); 
  const [newMilestone, setNewMilestone] = useState({ 
    title: '', 
    date: '', 
    description: '', 
    completed: false 
  }); 
 
  useEffect(() => { 
    const saved = localStorage.getItem('babyMilestones'); 
    if (saved) { 
      setMilestones(JSON.parse(saved)); 
    } 
  }, []); 
 
  useEffect(() => { 
    localStorage.setItem('babyMilestones', JSON.stringify(milestones)); 
  }, [milestones]); 
 
  const addMilestone = () => { 
    if (newMilestone.title && newMilestone.date) { 
      setMilestones(prev => [...prev, { ...newMilestone, id: Date.now() }]); 
      setNewMilestone({ title: '', date: '', description: '', completed: false }); 
    } 
  }; 
 
  const toggleMilestone = (id) => { 
    setMilestones(prev =>  
      prev.map(m => m.id === id ? { ...m, completed: !m.completed } : m) 
    ); 
  }; 
 
  return ( 
    <BabyTrackerCard title="Milestones" gradient="from-violet-500 to-purple-600"> 
      <div className="space-y-4"> 
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4"> 
          <div> 
            <label className="block text-sm font-medium text-gray-700 mb-1"> 
              Milestone 
            </label> 
            <input 
              type="text" 
              value={newMilestone.title} 
              onChange={(e) => setNewMilestone(prev => ({ ...prev, title: e.target.value }))} 
              className="w-full px-3 py-2 border border-violet-200 rounded-lg focus:ring-2 
violet-500 focus:border-transparent" 
              placeholder="e.g., First kick, First ultrasound" 
            /> 
          </div> 
           
          <div> 
            <label className="block text-sm font-medium text-gray-700 mb-1"> 
              Date 
            </label> 
            <input 
              type="date" 
              value={newMilestone.date} 
              onChange={(e) => setNewMilestone(prev => ({ ...prev, date: e.target.value }))} 
              className="w-full px-3 py-2 border border-violet-200 rounded-lg focus:ring-2 
violet-500 focus:border-transparent" 
            /> 
          </div> 
        </div> 
 
        <div> 
          <label className="block text-sm font-medium text-gray-700 mb-1"> 
            Description 
          </label> 
          <textarea 
            value={newMilestone.description} 
            onChange={(e) => setNewMilestone(prev => ({ ...prev, description: e.target.value }))} 
            rows="2" 
            className="w-full px-3 py-2 border border-violet-200 rounded-lg focus:ring-2
violet-500 focus:border-transparent" 
            placeholder="Share your experience..." 
          /> 
        </div> 
 
        <button 
          onClick={addMilestone} 
          className="w-full bg-gradient-to-r from-violet-500 to-purple-600 text-white py-2 rounded-lg 
hover:shadow-lg transition-all" 
        > 
          Add Milestone 
        </button> 
 
        <div className="space-y-3 mt-6 max-h-60 overflow-y-auto"> 
          {milestones.map((milestone) => ( 
            <div 
              key={milestone.id} 
              className={`p-3 rounded-lg border ${ 
                milestone.completed  
                  ? 'bg-green-50 border-green-200'  
                  : 'bg-violet-50 border-violet-200' 
              }`} 
            > 
              <div className="flex items-center justify-between"> 
                <div className="flex items-center space-x-3"> 
                  <input 
                    type="checkbox" 
                    checked={milestone.completed} 
                    onChange={() => toggleMilestone(milestone.id)} 
                    className="w-4 h-4 text-violet-600 rounded focus:ring-violet-500" 
                  /> 
                  <div> 
                    <h4 className={`font-medium ${ 
                      milestone.completed ? 'text-green-800 line-through' : 'text-gray-800' 
                    }`}> 
                      {milestone.title} 
                    </h4> 
                    <p className="text-sm text-gray-600">{milestone.date}</p> 
                  </div> 
                </div> 
              </div> 
              {milestone.description && ( 
                <p className="text-sm text-gray-700 mt-2 ml-7">{milestone.description}</p> 
              )} 
            </div> 
          ))} 
        </div> 
      </div> 
    </BabyTrackerCard> 
  ); 
}; 
 
export default BabyMilestoneTracker;