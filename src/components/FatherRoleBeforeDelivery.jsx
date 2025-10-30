import { useState, useEffect } from 'react'; 
import DadChecklist from './DadChecklist'; 
import DadJournal from './DadJournal'; 
 
const FatherRoleBeforeDelivery = () => { 
  const [checklist, setChecklist] = useState([ 
    { id: 1, text: 'Attend prenatal doctor visits', completed: false }, 
    { id: 2, text: 'Help with pregnancy exercises', completed: false }, 
    { id: 3, text: 'Prepare the nursery room', completed: false }, 
    { id: 4, text: 'Learn about childbirth process', completed: false }, 
    { id: 5, text: 'Pack hospital bag together', completed: false }, 
  ]); 
 
  useEffect(() => { 
    const savedChecklist = localStorage.getItem('dadChecklistBefore'); 
    if (savedChecklist) { 
      setChecklist(JSON.parse(savedChecklist)); 
    } 
  }, []); 
 
  useEffect(() => { 
    localStorage.setItem('dadChecklistBefore', JSON.stringify(checklist)); 
  }, [checklist]); 
 
  const toggleChecklistItem = (id) => { 
    setChecklist(checklist.map(item => 
      item.id === id ? { ...item, completed: !item.completed } : item 
    )); 
  }; 
 
  return ( 
    <div className="space-y-8"> 
      {/* Title */} 
      <div className="text-center"> 
        <h2 className="text-3xl font-bold text-pink-700 mb-2"> 
          Before Delivery — Father's Role 
        </h2> 
        <p className="text-purple-600"> 
          Your support during pregnancy makes all the difference 
        </p> 
      </div> 
 
      <div className="grid md:grid-cols-2 gap-6"> 
        {/* Emotional Support Card */} 
        <div className="bg-white/80 p-6 rounded-2xl shadow-md hover:scale-105 transition-transform 
duration-300"> 
          <h3 className="text-xl font-semibold text-pink-700 mb-4"> 
            💖 Emotional Support 
          </h3> 
          <ul className="space-y-2 text-pink-800"> 
            <li className="flex items-start"> 
              <span className="mr-2">•</span> 
              <span>Listen actively to her concerns and feelings</span> 
            </li> 
            <li className="flex items-start"> 
              <span className="mr-2">•</span> 
              <span>Offer reassurance and positive affirmations</span> 
            </li> 
            <li className="flex items-start"> 
              <span className="mr-2">•</span> 
              <span>Be patient with mood swings and changes</span> 
            </li> 
            <li className="flex items-start"> 
              <span className="mr-2">•</span> 
              <span>Plan special dates and quality time together</span> 
            </li> 
          </ul> 
        </div> 
 
        {/* Health & Lifestyle Card */} 
        <div className="bg-white/80 p-6 rounded-2xl shadow-md hover:scale-105 transition-transform 
duration-300"> 
          <h3 className="text-xl font-semibold text-pink-700 mb-4"> 
            🏃 Health & Lifestyle 
          </h3> 
          <ul className="space-y-2 text-pink-800"> 
            <li className="flex items-start"> 
              <span className="mr-2">•</span> 
              <span>Join her in healthy eating habits</span> 
            </li> 
            <li className="flex items-start"> 
              <span className="mr-2">•</span> 
              <span>Accompany her on walks and light exercises</span> 
            </li> 
            <li className="flex items-start"> 
              <span className="mr-2">•</span> 
              <span>Help with household chores and heavy lifting</span> 
            </li> 
            <li className="flex items-start"> 
              <span className="mr-2">•</span> 
              <span>Attend childbirth education classes together</span> 
            </li> 
          </ul> 
        </div> 
 
        {/* Home Readiness Card */} 
        <div className="bg-white/80 p-6 rounded-2xl shadow-md hover:scale-105 transition-transform 
duration-300 md:col-span-2"> 
          <h3 className="text-xl font-semibold text-pink-700 mb-4"> 
            🏠 Home Readiness 
          </h3> 
          <ul className="space-y-2 text-pink-800 grid md:grid-cols-2 gap-4"> 
            <li className="flex items-start"> 
              <span className="mr-2">•</span> 
              <span>Set up baby furniture and safety equipment</span> 
            </li> 
            <li className="flex items-start"> 
              <span className="mr-2">•</span> 
              <span>Prepare the hospital route and emergency contacts</span> 
            </li> 
            <li className="flex items-start"> 
              <span className="mr-2">•</span> 
              <span>Stock up on essentials and postpartum supplies</span> 
            </li> 
            <li className="flex items-start"> 
              <span className="mr-2">•</span> 
              <span>Install car seat and practice using it</span> 
            </li> 
          </ul> 
        </div> 
      </div> 
 
      {/* Dad's Checklist */} 
      <div className="bg-white/80 p-6 rounded-2xl shadow-md"> 
        <h3 className="text-2xl font-semibold text-pink-700 mb-4 text-center"> 
          Dad's Pregnancy Checklist 
        </h3> 
        <DadChecklist 
          checklist={checklist} 
          onToggle={toggleChecklistItem} 
        /> 
      </div> 
 
      {/* Dad's Journal */} 
      <DadJournal storageKey="dadJournalBefore" /> 
    </div> 
  ); 
}; 
 
export default FatherRoleBeforeDelivery; 