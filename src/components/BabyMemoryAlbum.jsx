import React, { useState, useEffect } from 'react'; 
import BabyTrackerCard from './BabyTrackerCard'; 
 
const BabyMemoryAlbum = () => { 
  const [memories, setMemories] = useState([]); 
  const [newMemory, setNewMemory] = useState({ 
    title: '', 
    date: new Date().toISOString().split('T')[0], 
    description: '' 
  }); 
 
  useEffect(() => { 
    const saved = localStorage.getItem('babyMemories'); 
    if (saved) { 
      setMemories(JSON.parse(saved)); 
    } 
  }, []); 
 
  useEffect(() => { 
    localStorage.setItem('babyMemories', JSON.stringify(memories)); 
  }, [memories]); 
 
  const addMemory = () => { 
    if (newMemory.title) { 
      setMemories(prev => [...prev, { ...newMemory, id: Date.now() }]); 
      setNewMemory({ title: '', date: new Date().toISOString().split('T')[0], description: '' }); 
    } 
  }; 
 
  return ( 
    <BabyTrackerCard title="Memory Album" gradient="from-amber-400 to-orange-500"> 
      <div className="space-y-4"> 
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4"> 
          <div> 
            <label className="block text-sm font-medium text-gray-700 mb-1"> 
              Memory Title 
            </label> 
            <input 
              type="text" 
              value={newMemory.title} 
              onChange={(e) => setNewMemory(prev => ({ ...prev, title: e.target.value }))} 
              className="w-full px-3 py-2 border border-amber-200 rounded-lg focus:ring-2 
amber-500 focus:border-transparent" 
              placeholder="e.g., First ultrasound, Baby shower" 
            /> 
          </div> 
           
          <div> 
            <label className="block text-sm font-medium text-gray-700 mb-1"> 
              Date 
            </label> 
            <input 
              type="date" 
              value={newMemory.date} 
              onChange={(e) => setNewMemory(prev => ({ ...prev, date: e.target.value }))} 
              className="w-full px-3 py-2 border border-amber-200 rounded-lg focus:ring-2 
amber-500 focus:border-transparent" 
            /> 
          </div> 
        </div> 
 
        <div> 
          <label className="block text-sm font-medium text-gray-700 mb-1"> 
            Description 
          </label> 
          <textarea 
            value={newMemory.description} 
            onChange={(e) => setNewMemory(prev => ({ ...prev, description: e.target.value }))} 
            rows="3" 
            className="w-full px-3 py-2 border border-amber-200 rounded-lg focus:ring-2 
amber-500 focus:border-transparent" 
            placeholder="Share your special memory..." 
          /> 
        </div> 
 
        <button 
          onClick={addMemory} 
          className="w-full bg-gradient-to-r from-amber-400 to-orange-500 text-white py-2 rounded-lg 
hover:shadow-lg transition-all" 
        > 
          Add Memory 
        </button> 
 
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6 max-h-80 overflow-y-auto"> 
          {memories.map((memory) => ( 
            <div 
              key={memory.id} 
              className="bg-amber-50 border border-amber-200 rounded-lg p-4 hover:shadow-md 
transition-all" 
            > 
              <div className="flex justify-between items-start mb-2"> 
                <h4 className="font-medium text-amber-800">{memory.title}</h4> 
                <span className="text-xs text-amber-600 bg-amber-100 px-2 py-1 rounded"> 
                  {memory.date} 
                </span> 
              </div> 
              {memory.description && ( 
                <p className="text-sm text-gray-700">{memory.description}</p> 
              )} 
              <div className="mt-3 text-center text-amber-600 text-sm"> 
                [Photo placeholder - upload feature ready] 
              </div> 
            </div> 
          ))} 
        </div> 
      </div> 
    </BabyTrackerCard> 
  ); 
}; 
 
export default BabyMemoryAlbum; 
