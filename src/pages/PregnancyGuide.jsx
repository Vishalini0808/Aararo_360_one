import React, { useState } from 'react'; 
import { useNavigate } from 'react-router-dom'; 
import Sidebar from '../components/Sidebar'; 
import MonthContent from '../components/MonthContent';
import NutritionContent from '../components/NutritionContent';
import ExerciseContent from '../components/ExerciseContent';
import LaborContent from '../components/LaborContent';
 
const PregnancyGuide = () => { 
  const navigate = useNavigate(); 
  const [activeSection, setActiveSection] = useState('month-guide'); 
  const [activeMonth, setActiveMonth] = useState(1); 
 
  const handleBackToHome = () => { 
    navigate('/'); 
  }; 
 
  const renderContent = () => { 
    switch (activeSection) { 
      case 'month-guide': 
        return <MonthContent activeMonth={activeMonth} setActiveMonth={setActiveMonth} />; 
      case 'nutrition': 
        return <NutritionContent />; 
      case 'exercise': 
        return <ExerciseContent />; 
      case 'labor': 
        return <LaborContent />; 
      default: 
        return <MonthContent activeMonth={activeMonth} setActiveMonth={setActiveMonth} />; 
    } 
  }; 
 
  return ( 
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-purple-100"> 
      {/* Fixed Header */} 
      <header className="bg-white shadow-lg border-b border-purple-200 fixed top-0 left-0 right-0 z-50"> 
        <div className="max-w-7xl mx-auto px-6"> 
          <div className="flex justify-between items-center py-4"> 
            <button 
              onClick={handleBackToHome} 
              className="flex items-center text-purple-700 hover:text-purple-900 transition-colors hover:bg-purple-50 rounded-lg px-3 py-2" 
            > 
              <span className="text-2xl mr-1">←</span> 
              <span className="text-sm font-medium">Back</span>
            </button> 
            <h1 className="text-2xl md:text-3xl font-bold text-purple-800 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text "> 
              Pregnancy Journey Guide 
            </h1> 
            <div className="w-20 flex justify-end">
              <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                👶
              </div>
            </div>
          </div> 
        </div> 
      </header> 
 
      {/* Main Content Area */}
      <div className="max-w-7xl mx-auto pt-24 pb-8 px-6">
        <div className="flex gap-8">
          {/* Fixed Sidebar - Professional Width */}
          <div className="w-80 flex-shrink-0">
            <div className="sticky top-28">
              <Sidebar  
                activeSection={activeSection}  
                setActiveSection={setActiveSection} 
                activeMonth={activeMonth} 
                setActiveMonth={setActiveMonth} 
              /> 
            </div>
          </div>
 
          {/* Main Content */}
          <div className="flex-1 min-w-0 mt-4 ">   {/*added margin top for this alignment */}
            <div className="bg-white rounded-2xl shadow-lg border border-purple-100 overflow-hidden">
              {renderContent()}
            </div>
          </div>
        </div>
      </div> 
    </div> 
  ); 
}; 
 
export default PregnancyGuide;