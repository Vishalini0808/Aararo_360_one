import { useState } from 'react'; 
import DadChecklist from './DadChecklist'; 
import DadJournal from './DadJournal'; 
 
const FatherRoleAfterDelivery = () => { 
  const [showTaskModal, setShowTaskModal] = useState(false); 
  const [newTask, setNewTask] = useState(''); 
  const [customTasks, setCustomTasks] = useState([ 
    { id: 1, text: 'Handle nighttime diaper changes', completed: false }, 
    { id: 2, text: 'Prepare bottles for feeding', completed: false }, 
    { id: 3, text: 'Manage household chores', completed: false }, 
  ]); 
 
  const addCustomTask = () => { 
    if (newTask.trim()) { 
      setCustomTasks([ 
        ...customTasks, 
        { 
          id: Date.now(), 
          text: newTask, 
          completed: false, 
        }, 
      ]); 
      setNewTask(''); 
      setShowTaskModal(false); 
    } 
  }; 
 
  const toggleCustomTask = (id) => { 
    setCustomTasks(customTasks.map(task => 
      task.id === id ? { ...task, completed: !task.completed } : task 
    )); 
  }; 
 
  return ( 
    <div className="space-y-8"> 
      {/* Title */} 
      <div className="text-center"> 
        <h2 className="text-3xl font-bold text-purple-700 mb-2"> 
          After Delivery — Father's Role 
        </h2> 
        <p className="text-pink-600"> 
          Your partnership shines in these precious early days 
        </p> 
      </div> 
 
      {/* Reminder Banner */} 
      <div className="bg-gradient-to-r from-purple-100 to-pink-100 border-l-4 border-pink-400 p-4 
rounded-lg shadow-md"> 
        <p className="text-purple-800 font-semibold text-center"> 
          💞 Remember: Rest and recovery are team efforts. Your support matters now more than ever! 
        </p> 
      </div> 
 
      <div className="grid md:grid-cols-2 gap-6"> 
        {/* Care & Bonding Card */} 
        <div className="bg-gradient-to-br from-purple-100 to-pink-100 p-6 rounded-2xl shadow-md 
hover:scale-105 transition-transform duration-300"> 
          <h3 className="text-xl font-semibold text-purple-700 mb-4"> 
            👶 Care & Bonding 
          </h3> 
          <ul className="space-y-2 text-purple-800"> 
            <li className="flex items-start"> 
              <span className="mr-2">•</span> 
              <span>Participate in diaper changes and bathing</span> 
            </li> 
            <li className="flex items-start"> 
              <span className="mr-2">•</span> 
              <span>Practice skin-to-skin contact with baby</span> 
            </li> 
            <li className="flex items-start"> 
              <span className="mr-2">•</span> 
              <span>Help with feeding routines and burping</span> 
            </li> 
            <li className="flex items-start"> 
              <span className="mr-2">•</span> 
              <span>Learn baby's cues and comfort techniques</span> 
            </li> 
          </ul> 
        </div> 
 
        {/* Emotional & Mental Support Card */} 
        <div className="bg-gradient-to-br from-purple-100 to-pink-100 p-6 rounded-2xl shadow-md 
hover:scale-105 transition-transform duration-300"> 
          <h3 className="text-xl font-semibold text-purple-700 mb-4"> 
            💕 Emotional & Mental Support 
          </h3> 
          <ul className="space-y-2 text-purple-800"> 
            <li className="flex items-start"> 
              <span className="mr-2">•</span> 
              <span>Watch for postpartum depression signs</span> 
            </li> 
            <li className="flex items-start"> 
              <span className="mr-2">•</span> 
              <span>Offer breaks and self-care time</span> 
            </li> 
            <li className="flex items-start"> 
              <span className="mr-2">•</span> 
              <span>Be patient with emotional changes</span> 
            </li> 
            <li className="flex items-start"> 
              <span className="mr-2">•</span> 
              <span>Communicate openly and listen actively</span> 
            </li> 
          </ul> 
        </div> 
 
        {/* Work-Life Balance Card */} 
        <div className="bg-gradient-to-br from-purple-100 to-pink-100 p-6 rounded-2xl shadow-md 
hover:scale-105 transition-transform duration-300 md:col-span-2"> 
          <h3 className="text-xl font-semibold text-purple-700 mb-4"> 
            ⚖️ Work-Life Balance 
          </h3> 
          <ul className="space-y-2 text-purple-800 grid md:grid-cols-2 gap-4"> 
            <li className="flex items-start"> 
              <span className="mr-2">•</span> 
              <span>Coordinate paternity leave and work schedule</span> 
            </li> 
            <li className="flex items-start"> 
              <span className="mr-2">•</span> 
              <span>Share nighttime duties with your partner</span> 
            </li> 
            <li className="flex items-start"> 
              <span className="mr-2">•</span> 
              <span>Plan quality family time together</span> 
            </li> 
            <li className="flex items-start"> 
              <span className="mr-2">•</span> 
              <span>Manage visitors and family support</span> 
            </li> 
          </ul> 
        </div> 
      </div> 
 
      {/* Custom Tasks Section */} 
      <div className="bg-white/80 p-6 rounded-2xl shadow-md"> 
        <div className="flex justify-between items-center mb-4"> 
          <h3 className="text-2xl font-semibold text-purple-700"> 
            Dad's Daily Duties 
          </h3> 
          <button 
            onClick={() => setShowTaskModal(true)} 
            className="bg-gradient-to-r from-pink-400 to-purple-400 text-white rounded-full px-4 py-2 
hover:shadow-lg transition-all duration-300" 
          > 
            + Add Custom Task 
          </button> 
        </div> 
        <DadChecklist 
          checklist={customTasks} 
          onToggle={toggleCustomTask} 
        /> 
      </div> 
 
      {/* Dad's Journal */} 
      <DadJournal storageKey="dadJournalAfter" /> 
 
      {/* Add Task Modal */} 
      {showTaskModal && ( 
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"> 
          <div className="bg-white p-6 rounded-2xl shadow-xl max-w-md w-full mx-4"> 
            <h3 className="text-xl font-semibold text-purple-700 mb-4"> 
              Add New Task 
            </h3> 
            <input 
              type="text" 
              value={newTask} 
              onChange={(e) => setNewTask(e.target.value)} 
              placeholder="Enter your custom task..." 
              className="border border-pink-200 focus:ring-2 ring-pink-400 rounded-lg p-3 w-full mb-4" 
              onKeyPress={(e) => e.key === 'Enter' && addCustomTask()} 
            /> 
            <div className="flex gap-3"> 
              <button 
                onClick={addCustomTask} 
                className="bg-gradient-to-r from-pink-400 to-purple-400 text-white rounded-full px-4 py-2 
flex-1 hover:shadow-lg transition-all duration-300" 
              > 
                Add Task 
              </button> 
              <button 
                onClick={() => setShowTaskModal(false)} 
                className="border border-pink-300 text-pink-600 rounded-full px-4 py-2 flex-1 hover:bg
pink-50 transition-all duration-300" 
              > 
                Cancel 
              </button> 
            </div> 
          </div> 
        </div> 
      )} 
    </div> 
  ); 
}; 
 
export default FatherRoleAfterDelivery;