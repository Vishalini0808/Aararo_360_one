import React from 'react'; 
import BabyTrackerCard from './BabyTrackerCard'; 
 
const BabyDashBoardSummary = () => { 
  const stats = [ 
    { label: 'Weeks Pregnant', value: '18', color: 'from-pink-500 to-rose-500' }, 
    { label: 'Days to Go', value: '154', color: 'from-purple-500 to-indigo-500' }, 
    { label: 'Milestones Reached', value: '6', color: 'from-blue-500 to-cyan-500' }, 
    { label: 'Memories Saved', value: '12', color: 'from-amber-500 to-orange-500' } 
  ]; 
 
  const upcomingAppointments = [ 
    { date: '2024-01-15', title: 'Routine Checkup', doctor: 'Dr. Smith' }, 
    { date: '2024-01-22', title: 'Ultrasound Scan', doctor: 'Dr. Johnson' }, 
    { date: '2024-02-05', title: 'Prenatal Class', doctor: 'Nurse Williams' } 
  ]; 
 
  return ( 
    <BabyTrackerCard title="Pregnancy Overview" gradient="from-pink-500 to-purple-600"> 
      <div className="space-y-6"> 
        {/* Stats Grid */} 
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4"> 
          {stats.map((stat, index) => ( 
            <div 
              key={index} 
              className={`bg-gradient-to-br ${stat.color} rounded-xl p-4 text-white text-center shadow
sm`} 
            > 
              <div className="text-2xl font-bold">{stat.value}</div> 
              <div className="text-xs opacity-90">{stat.label}</div> 
            </div> 
          ))} 
        </div> 
 
        {/* Progress */} 
        <div> 
          <h4 className="font-medium text-gray-800 mb-3">Baby's Development</h4> 
          <div className="bg-pink-50 rounded-lg p-4"> 
            <p className="text-sm text-pink-800 mb-2"> 
              Your baby is now the size of a bell pepper! 🫑 
            </p> 
            <div className="w-full bg-pink-200 rounded-full h-2"> 
              <div  
                className="bg-gradient-to-r from-pink-500 to-purple-600 h-2 rounded-full transition-all 
duration-500" 
                style={{ width: '45%' }} 
              ></div> 
            </div> 
            <p className="text-xs text-pink-700 mt-2 text-center"> 
              Week 18 of 40 • 45% complete 
            </p> 
          </div> 
        </div> 
 
        {/* Upcoming Appointments */} 
        <div> 
          <h4 className="font-medium text-gray-800 mb-3">Upcoming Appointments</h4> 
          <div className="space-y-2"> 
            {upcomingAppointments.map((appointment, index) => ( 
              <div 
                key={index} 
                className="flex items-center justify-between p-3 bg-white border border-pink-100 
rounded-lg hover:shadow-sm transition-all" 
              > 
                <div> 
                  <p className="font-medium text-gray-800">{appointment.title}</p> 
                  <p className="text-sm text-gray-600">{appointment.doctor}</p> 
                </div> 
                <span className="text-sm text-pink-600 bg-pink-50 px-2 py-1 rounded"> 
                  {appointment.date} 
                </span> 
              </div> 
            ))} 
          </div> 
        </div> 
 
        {/* Quick Tips */} 
        <div className="bg-purple-50 rounded-lg p-4"> 
          <h4 className="font-medium text-purple-800 mb-2">Today's Tip</h4> 
          <p className="text-sm text-purple-700"> 
            Stay hydrated and include iron-rich foods in your diet. Your baby is developing rapidly and 
needs plenty of nutrients! 
          </p> 
        </div> 
      </div> 
    </BabyTrackerCard> 
  ); 
}; 
 
export default BabyDashBoardSummary; 