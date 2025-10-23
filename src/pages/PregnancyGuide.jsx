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
        return <MonthContent activeMonth={activeMonth} 
setActiveMonth={setActiveMonth} />; 
      case 'nutrition': 
        return <NutritionContent />; 
      case 'exercise': 
        return <ExerciseContent />; 
      case 'labor': 
        return <LaborContent />; 
      default: 
        return <MonthContent activeMonth={activeMonth} 
setActiveMonth={setActiveMonth} />; 
    } 
  }; 
 
  return ( 
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-purple
100"> 
      {/* Header */} 
      <header className="bg-white shadow-sm border-b border-purple-200"> 
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> 
          <div className="flex justify-between items-center py-4"> 
            <button 
              onClick={handleBackToHome} 
              className="flex items-center text-purple-700 hover:text-purple-900 
transition-colors" 
            > 
              <span className="text-3xl mr-2">←</span> 
            </button> 
            <h1 className="text-2xl md:text-3xl font-bold text-purple-800"> 
              Pregnancy Journey Guide 
            </h1> 
            <div className="w-10"></div> {/* Spacer for balance */} 
          </div> 
        </div> 
      </header> 
 
      <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8"> 
        <div className="flex flex-col lg:flex-row gap-6 px-4 sm:px-0"> 
          {/* Sidebar */} 
          <div className="lg:w-1/4"> 
            <Sidebar  
              activeSection={activeSection}  
              setActiveSection={setActiveSection} 
              activeMonth={activeMonth} 
              setActiveMonth={setActiveMonth} 
            /> 
          </div> 
 
          {/* Main Content */} 
          <div className="lg:w-3/4"> 
            {renderContent()} 
          </div> 
        </div> 
      </div> 
    </div> 
  ); 
}; 
 
export default PregnancyGuide;