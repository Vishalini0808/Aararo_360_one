import React from 'react'; 
import { useNavigate } from 'react-router-dom'; 
 
const AppointmentCard = ({ appointment }) => { 
  const navigate = useNavigate(); 
   
  const handleClick = () => { 
    navigate(`/appointments/${appointment.id}`); 
  }; 
   
  const handleKeyDown = (e) => { 
    if (e.key === 'Enter' || e.key === ' ') { 
      handleClick(); 
    } 
  }; 
   
  const formatDate = (dateString) => { 
    const options = { weekday: 'short', month: 'short', day: 'numeric' }; 
    return new Date(dateString).toLocaleDateString('en-IN', options); 
  }; 
   
  const isUpcoming = () => { 
    const appointmentDate = new Date(`${appointment.date}T${appointment.time}`); 
    const today = new Date(); 
    const tomorrow = new Date(today); 
    tomorrow.setDate(tomorrow.getDate() + 1); 
     
    return appointmentDate.toDateString() === tomorrow.toDateString(); 
  }; 
 
  return ( 
    <div 
      role="button" 
      tabIndex={0} 
      onClick={handleClick} 
      onKeyDown={handleKeyDown} 
      className="bg-gradient-to-br from-pink-200 to-purple-300 rounded-2xl p-6 shadow-md 
hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer border 
pink-300" 
    > 
      {/* Header with month and status */} 
      <div className="flex justify-between items-start mb-4"> 
        <div className="flex items-center gap-2"> 
          <span className="text-2xl">🤰</span> 
          <h3 className="text-lg font-semibold text-purple-900"> 
            Month {appointment.month} Checkup 
          </h3> 
        </div> 
        <div className="flex gap-1"> 
          {appointment.reminder && <span className="text-lg">🔔</span>} 
          {appointment.completed && <span className="text-lg">✅</span>} 
        </div> 
      </div> 
       
      {/* Date and Time */} 
      <div className="mb-3"> 
        <p className="text-purple-800 font-medium"> 
          📅 {formatDate(appointment.date)} 
        </p> 
        <p className="text-purple-700"> 
          ⏰ {appointment.time} 
        </p> 
      </div> 
       
      {/* Hospital and Doctor */} 
      <div className="mb-3"> 
        <p className="text-pink-900 font-medium truncate"> 
          🏥 {appointment.hospital} 
        </p> 
        <p className="text-purple-800"> 
          👩🤱 {appointment.doctor} 
        </p> 
      </div> 
       
      {/* Reminder Note */} 
      {appointment.reminder && ( 
        <p className="text-sm text-purple-700 bg-pink-100 rounded-lg p-2 mb-3"> 
          📝 {appointment.reminder} 
        </p> 
      )} 
       
      {/* Status Badge */} 
      <div className="flex justify-between items-center"> 
        {isUpcoming() && ( 
          <span className="bg-pink-500 text-white text-xs px-2 py-1 rounded-full"> 
            Tomorrow 👶 
          </span> 
        )} 
        {appointment.completed ? ( 
          <span className="bg-green-500 text-white text-xs px-2 py-1 rounded-full"> 
            Completed 🌟 
          </span> 
        ) : ( 
          <span className="bg-yellow-500 text-white text-xs px-2 py-1 rounded-full"> 
            Upcoming ✨ 
          </span> 
        )} 
      </div> 
    </div> 
  ); 
};

export default AppointmentCard; 