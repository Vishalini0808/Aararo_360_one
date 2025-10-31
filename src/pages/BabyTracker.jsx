import React from 'react'; 
import BabyTrackerProfile from '../components/BabyTrackerProfile';
import BabyRoutineTracker from '../components/BabyRoutineTracker';
import BabyGrowthTracker from '../components/BabyGrowthTracker';
import BabyDietTracker from '../components/BabyDietTracker';
import BabyHealthTracker from '../components/BabyHealthTracker';
import BabyMilestoneTracker from '../components/BabyMilestoneTracker';
import BabyMemoryAlbum from '../components/BabyMemoryAlbum';
// import BabyDashBoardSummary from '../components/BabyDashBoardSummary';
 
const BabyTracker = () => { 
  return ( 
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-purple-50 py-8"> 
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> 
        {/* Header */} 
        <div className="text-center mb-8"> 
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2"> 
            Baby Tracker Dashboard 
          </h1> 
          <p className="text-gray-600 max-w-2xl mx-auto"> 
            Track your pregnancy journey, monitor your health, and capture precious memories all in one 
place. 
          </p> 
        </div> 
 
        {/* Dashboard Grid */} 
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-6"> 
          {/* Left Column */} 
          <div className="xl:col-span-2 space-y-6"> 
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6"> 
              <BabyTrackerProfile /> 
              <BabyRoutineTracker /> 
            </div> 
             
            <BabyGrowthTracker /> 
             
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6"> 
              <BabyDietTracker /> 
              <BabyHealthTracker /> 
            </div> 
             
             <div className="grid grid-cols-1 lg:grid-cols-2 gap-6"> 
             <BabyMilestoneTracker /> 
            <BabyMemoryAlbum />
            </div> 
             
          </div> 
 
          {/* Right Column - Summary */} 
          {/* <div className="space-y-6">  */}
            {/* <BabyDashBoardSummary />  */}
             
            {/* Quick Actions */} 
            {/* <div className="bg-white rounded-2xl shadow-sm border border-pink-100 p-6"> 
              <h3 className="font-semibold text-gray-800 mb-4">Quick Actions</h3> 
              <div className="space-y-3"> 
                <button className="w-full text-left p-3 rounded-lg bg-pink-50 text-pink-700 hover:bg-pink
100 transition-colors"> 
                  Add Doctor Appointment 
                </button> 
                <button className="w-full text-left p-3 rounded-lg bg-purple-50 text-purple-700 hover:bg
purple-100 transition-colors"> 
                  Log Today's Symptoms 
                </button> 
                <button className="w-full text-left p-3 rounded-lg bg-blue-50 text-blue-700 hover:bg-blue
100 transition-colors"> 
                  Update Weight Tracking 
                </button> 
                <button className="w-full text-left p-3 rounded-lg bg-amber-50 text-amber-700 hover:bg
amber-100 transition-colors"> 
                  Add New Memory 
                </button> 
              </div> 
            </div>  */}
          {/* </div>  */}
        </div> 
      </div> 
    </div> 
  ); 
}; 
 
export default BabyTracker; 