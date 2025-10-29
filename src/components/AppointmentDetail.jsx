import React, { useState, useEffect } from 'react'; 
import { useParams, useNavigate } from 'react-router-dom'; 
import { scheduleReminder, removeReminder, getReminderForAppointment } from 
'../utils/ReminderUtils'; 
import { BABY_TIPS } from '../Data/AppointmentHospitals'; 
 
const AppointmentDetail = () => { 
  const { id } = useParams(); 
  const navigate = useNavigate(); 
  const [appointment, setAppointment] = useState(null); 
  const [showReminderOptions, setShowReminderOptions] = useState(false); 
  const [currentReminder, setCurrentReminder] = useState(null); 
 
  useEffect(() => { 
    const appointments = JSON.parse(localStorage.getItem('appointments') || '[]'); 
    const foundAppointment = appointments.find(appt => appt.id === parseInt(id)); 
     
    if (foundAppointment) { 
      setAppointment(foundAppointment); 
      // Check if reminder exists 
      const reminder = getReminderForAppointment(foundAppointment.id); 
      setCurrentReminder(reminder); 
    } 
  }, [id]); 
 
  const handleMarkCompleted = () => { 
    const appointments = JSON.parse(localStorage.getItem('appointments') || '[]'); 
    const updatedAppointments = appointments.map(appt => 
      appt.id === parseInt(id) ? { ...appt, completed: !appt.completed } : appt 
    ); 
     
    localStorage.setItem('appointments', JSON.stringify(updatedAppointments)); 
    setAppointment(prev => ({ ...prev, completed: !prev.completed })); 
  }; 
 
  const handleSetReminder = (daysBefore) => { 
    if (appointment) { 
      const reminder = scheduleReminder(appointment, daysBefore); 
      setCurrentReminder(reminder); 
      setShowReminderOptions(false); 
      alert(`🔔 Reminder set! You'll be notified ${daysBefore} day${daysBefore > 1 ? 's' : ''} 
before your appointment.`); 
    } 
  }; 
 
  const handleRemoveReminder = () => { 
    if (appointment) { 
      removeReminder(appointment.id); 
      setCurrentReminder(null); 
      alert('🔕 Reminder removed.'); 
    } 
  }; 
 
  const handleDeleteAppointment = () => { 
    if (window.confirm('Are you sure you want to delete this appointment?')) { 
      const appointments = JSON.parse(localStorage.getItem('appointments') || '[]'); 
      const filteredAppointments = appointments.filter(appt => appt.id !== parseInt(id)); 
      localStorage.setItem('appointments', JSON.stringify(filteredAppointments)); 
       
      // Remove associated reminder 
      if (currentReminder) { 
        removeReminder(appointment.id); 
      } 
       
      navigate('/'); 
    } 
  }; 
 
  const formatDate = (dateString) => { 
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }; 
    return new Date(dateString).toLocaleDateString('en-IN', options); 
  }; 
 
  const getGoogleMapsLink = (hospital) => { 
    const hospitalName = hospital.split('–')[0].trim(); 
    return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(hospitalName + ' Chennai')}`; 
  }; 
 
  if (!appointment) { 
    return ( 
      <div className="min-h-screen bg-gradient-to-br from-pink-50 to-purple-100 flex items
center justify-center"> 
        <div className="text-center"> 
          <div className="text-6xl mb-4">🤰</div> 
          <h2 className="text-2xl font-bold text-purple-900 mb-2">Appointment Not 
Found</h2> 
          <p className="text-purple-700 mb-4">The appointment you're looking for doesn't 
exist.</p> 
          <button 
            onClick={() => navigate('/')} 
            className="mt-6 text-purple-700 hover:text-purple-900 font-semibold gap-2 mx-auto" 
          > 
            Back to Dashboard 
          </button> 
        </div> 
      </div> 
    ); 
  } 
 
  return ( <div className='bg-gradient-to-br from-pink-50 to-purple-100 py-3 px-6'>
     {/* Back Button */} 
        <button 
          onClick={() => navigate('/appointments')} 
         className="mt-6 text-purple-700 hover:text-purple-900 font-semibold gap-2 mx-auto" 
        > 
          ← Back to Dashboard 
        </button> 
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-purple-100 py-8 px-4"> 
      <div className="max-w-4xl mx-auto"> 
        {/* Header */} 
        <div className="text-center mb-8"> 
          <h1 className="text-4xl font-bold text-purple-900 mb-2"> 
            Appointment Details 🌸 
          </h1> 
          <p className="text-purple-700 text-lg"> 
            Your prenatal care information 
          </p> 
        </div> 
 
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8"> 
          {/* Main Content */} 
          <div className="lg:col-span-2"> 
            <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8 mb-6"> 
              {/* Appointment Header */} 
              <div className="flex items-center justify-between mb-6"> 
                <div className="flex items-center gap-3"> 
                  <span className="text-4xl">🤰</span> 
                  <div> 
                    <h2 className="text-2xl font-bold text-purple-900"> 
                      Month {appointment.month} Checkup 
                    </h2> 
                    <div className="flex items-center gap-2 mt-1"> 
                      <span className={`px-3 py-1 rounded-full text-sm font-semibold ${ 
                        appointment.completed  
                          ? 'bg-green-100 text-green-800'  
                          : 'bg-yellow-100 text-yellow-800' 
                      }`}> 
                        {appointment.completed ? 'Completed ✅' : 'Upcoming ✨'} 
                      </span> 
                      {currentReminder && ( 
                        <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm 
font-semibold"> 
                          Reminder Set 🔔 
                        </span> 
                      )} 
                    </div> 
                  </div> 
                </div> 
              </div> 
 
              {/* Details Grid */} 
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6"> 
                <div className="space-y-4"> 
                  <div> 
                    <h3 className="text-purple-900 font-semibold mb-2">🏥 Hospital</h3> 
                    <p className="text-purple-800">{appointment.hospital}</p> 
                    <a 
                      href={getGoogleMapsLink(appointment.hospital)} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-pink-600 hover:text-pink-800 text-sm mt-1 inline-block" 
                    > 
                      📍 Open in Google Maps 
                    </a> 
                  </div> 
                   
                  <div> 
                    <h3 className="text-purple-900 font-semibold mb-2">👩🤱 Doctor</h3> 
                    <p className="text-purple-800">{appointment.doctor}</p> 
                  </div> 
                </div> 
                 
                <div className="space-y-4"> 
                  <div> 
                    <h3 className="text-purple-900 font-semibold mb-2">📅 Date & Time</h3> 
                    <p className="text-purple-800">{formatDate(appointment.date)}</p> 
                    <p className="text-purple-800 font-medium">⏰ {appointment.time}</p> 
                  </div> 
                </div> 
              </div> 
 
              {/* Reminder Notes */} 
              {appointment.reminder && ( 
                <div className="mb-6"> 
                  <h3 className="text-purple-900 font-semibold mb-2">📝 Reminder Notes</h3> 
                  <div className="bg-pink-50 border border-pink-200 rounded-xl p-4"> 
                    <p className="text-purple-800">{appointment.reminder}</p> 
                  </div> 
                </div> 
              )} 
 
              {/* Action Buttons */} 
              <div className="flex flex-wrap gap-4 mt-8"> 
                <button 
                  onClick={handleMarkCompleted} 
                  className={`flex-1 min-w-[200px] py-3 px-6 rounded-xl font-semibold shadow-lg 
hover:shadow-xl transition-all ${ 
                    appointment.completed 
                      ? 'bg-yellow-500 hover:bg-yellow-600 text-white' 
                      : 'bg-green-500 hover:bg-green-600 text-white' 
                  }`} 
                > 
                  {appointment.completed ? 'Mark as Pending ⏳' : 'Mark as Completed ✅'} 
                </button> 
                 
                <button 
                  onClick={() => setShowReminderOptions(!showReminderOptions)} 
                  className="flex-1 min-w-[200px] bg-blue-500 hover:bg-blue-600 text-white py-3 
px-6 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all" 
                > 
                  {currentReminder ? 'Change Reminder 🔔' : 'Set Reminder 🔔'} 
                </button> 
              </div> 
 
              {/* Reminder Options */} 
              {showReminderOptions && ( 
                <div className="mt-6 bg-purple-50 border border-purple-200 rounded-xl p-6"> 
                  <h3 className="text-purple-900 font-semibold mb-4">Set Reminder</h3> 
                  <div className="flex flex-wrap gap-3"> 
                    <button 
                      onClick={() => handleSetReminder(1)} 
                      className="bg-pink-500 hover:bg-pink-600 text-white py-2 px-4 rounded-lg 
font-semibold transition-colors" 
                    > 
                      1 Day Before 
                    </button> 
                    <button 
                      onClick={() => handleSetReminder(2)} 
                      className="bg-purple-500 hover:bg-purple-600 text-white py-2 px-4 rounded-lg 
font-semibold transition-colors" 
                    > 
                      2 Days Before 
                    </button> 
                    {currentReminder && ( 
                      <button 
                        onClick={handleRemoveReminder} 
                        className="bg-gray-500 hover:bg-gray-600 text-white py-2 px-4 rounded-lg 
font-semibold transition-colors" 
                      > 
                        Remove Reminder 
                      </button> 
                    )} 
                  </div> 
                </div> 
              )} 
            </div> 
 
            {/* Delete Button */} 
            <button 
              onClick={handleDeleteAppointment} 
              className="w-full bg-red-500 hover:bg-red-600 text-white py-3 px-6 rounded-xl 
font-semibold shadow-lg hover:shadow-xl transition-all" 
            > 
              🗑️ Delete Appointment 
            </button> 
          </div> 
 
          {/* Sidebar - Baby Tip */} 
          <div className="lg:col-span-1"> 
            <div className="bg-gradient-to-br from-pink-200 to-purple-300 rounded-2xl shadow
lg p-6 md:p-8 sticky top-8"> 
              <div className="text-center"> 
                <span className="text-6xl mb-4 block">👶</span> 
                <h3 className="text-xl font-bold text-purple-900 mb-4"> 
                  Month {appointment.month} Update 
                </h3> 
                <p className="text-purple-800 leading-relaxed"> 
                  {BABY_TIPS[appointment.month] || "Your baby is growing beautifully! 🌟"} 
                </p> 
                <div className="mt-6 bg-white bg-opacity-50 rounded-xl p-4"> 
                  <p className="text-purple-900 font-semibold text-sm"> 
                    Good luck for your appointment! You're doing amazing, mama! 💕 
                  </p> 
                </div> 
              </div> 
            </div> 
          </div> 
        </div> 
 
       
      </div> 
    </div> 
    </div>
  ); 
}; 
 
export default AppointmentDetail;