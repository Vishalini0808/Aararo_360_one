import React, { useState } from 'react'; 
import { useNavigate } from 'react-router-dom'; 
import { HOSPITALS } from '../Data/AppointmentHospitals'; 
 
const AddAppointment = () => { 
  const navigate = useNavigate(); 
  const [formData, setFormData] = useState({ 
    hospital: '', 
    doctor: '', 
    date: '', 
    time: '', 
    month: '', 
    reminder: '' 
  }); 
  const [errors, setErrors] = useState({}); 
  const [showSuccess, setShowSuccess] = useState(false); 
 
  const handleChange = (e) => { 
    const { name, value } = e.target; 
    setFormData(prev => ({ 
      ...prev, 
      [name]: value 
    })); 
     
    // Clear error when user starts typing 
    if (errors[name]) { 
      setErrors(prev => ({ 
        ...prev, 
        [name]: '' 
      })); 
    } 
  }; 
 
  const validateForm = () => { 
    const newErrors = {}; 
     
    if (!formData.hospital) newErrors.hospital = 'Please select a hospital'; 
    if (!formData.doctor.trim()) newErrors.doctor = 'Doctor name is required'; 
    if (!formData.date) newErrors.date = 'Date is required'; 
    if (!formData.time) newErrors.time = 'Time is required'; 
    if (!formData.month || formData.month < 1 || formData.month > 9) { 
      newErrors.month = 'Please enter a valid month (1-9)'; 
    } 
     
    setErrors(newErrors); 
    return Object.keys(newErrors).length === 0; 
  }; 
 
  const handleSubmit = (e) => { 
    e.preventDefault(); 
     
    if (!validateForm()) return; 
     
    // Get existing appointments from localStorage 
    const existingAppointments = JSON.parse(localStorage.getItem('appointments') || '[]'); 
     
    // Create new appointment 
    const newAppointment = { 
      id: Date.now(), // Simple ID generation 
      ...formData, 
      month: parseInt(formData.month), 
      completed: false, 
      createdAt: new Date().toISOString() 
    }; 
     
    // Save to localStorage 
    const updatedAppointments = [...existingAppointments, newAppointment]; 
    localStorage.setItem('appointments', JSON.stringify(updatedAppointments)); 
     
    // Show success message 
    setShowSuccess(true); 
     
    // Redirect after delay 
    setTimeout(() => { 
      navigate('/'); 
    }, 2000); 
  }; 
 
  return ( 
  <div className='bg-gradient-to-br from-pink-50 to-purple-100 py-3 px-6'>
    {/* Back Button */} 
        <button 
          onClick={() => navigate('/appointments')} 
          className="mt-6 text-purple-700 hover:text-purple-900 font-semibold gap-2 mx-auto" 
        > 
          ← Back to Dashboard 
        </button> 
    
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-purple-100 py-8 px-4"> 
      <div className="max-w-2xl mx-auto"> 

        
        

        {/* Header */} 
        <div className="text-center mb-8"> 
          <h1 className="text-3xl font-bold text-purple-900 mb-2"> 
            Add New Appointment 🌸 
          </h1> 
          <p className="text-purple-700"> 
            Schedule your next prenatal checkup with ease 
          </p> 
        </div> 
 
        {/* Success Message */} 
        {showSuccess && ( 
          <div className="bg-green-100 border border-green-400 text-green-800 px-4 py-3 
rounded-lg mb-6 text-center"> 
            <span className="text-lg">✅</span> Appointment added successfully! 
Redirecting... 💖 
          </div> 
        )} 
 
        {/* Form */} 
        <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-lg p-6 
md:p-8"> 
          {/* Hospital Selection */} 
          <div className="mb-6"> 
            <label className="block text-purple-900 font-semibold mb-2"> 
              🏥 Hospital 
            </label> 
            <select 
              name="hospital" 
              value={formData.hospital} 
              onChange={handleChange} 
              className={`w-full p-3 border-2 rounded-xl focus:outline-none focus:border-pink
500 transition-colors ${ 
                errors.hospital ? 'border-red-400' : 'border-pink-200' 
              }`} 
            > 
              <option value="">Select a hospital</option> 
              {HOSPITALS.map((hospital, index) => ( 
                <option key={index} value={hospital}> 
                  {hospital} 
                </option> 
              ))} 
            </select> 
            {errors.hospital && ( 
              <p className="text-red-500 text-sm mt-1">{errors.hospital}</p> 
            )} 
          </div> 
 
          {/* Doctor Name */} 
          <div className="mb-6"> 
            <label className="block text-purple-900 font-semibold mb-2"> 
              🤱 Doctor's Name 
            </label> 
            <input 
              type="text" 
              name="doctor" 
              value={formData.doctor} 
              onChange={handleChange} 
              placeholder="Enter doctor's full name" 
              className={`w-full p-3 border-2 rounded-xl focus:outline-none focus:border-pink
500 transition-colors ${ 
                errors.doctor ? 'border-red-400' : 'border-pink-200' 
              }`} 
            /> 
            {errors.doctor && ( 
              <p className="text-red-500 text-sm mt-1">{errors.doctor}</p> 
            )} 
          </div> 
 
          {/* Date and Time */} 
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6"> 
            <div> 
              <label className="block text-purple-900 font-semibold mb-2"> 
                📅 Date 
              </label> 
              <input 
                type="date" 
                name="date" 
                value={formData.date} 
                onChange={handleChange} 
                className={`w-full p-3 border-2 rounded-xl focus:outline-none focus:border-pink
500 transition-colors ${ 
                  errors.date ? 'border-red-400' : 'border-pink-200' 
                }`} 
              /> 
              {errors.date && ( 
                <p className="text-red-500 text-sm mt-1">{errors.date}</p> 
              )} 
            </div> 
             
            <div> 
              <label className="block text-purple-900 font-semibold mb-2"> 
                ⏰ Time 
              </label> 
              <input 
                type="time" 
                name="time" 
                value={formData.time} 
                onChange={handleChange} 
                className={`w-full p-3 border-2 rounded-xl focus:outline-none focus:border-pink
500 transition-colors ${ 
                  errors.time ? 'border-red-400' : 'border-pink-200' 
                }`} 
              /> 
              {errors.time && ( 
                <p className="text-red-500 text-sm mt-1">{errors.time}</p> 
              )} 
            </div> 
          </div> 
 
          {/* Pregnancy Month */} 
          <div className="mb-6"> 
            <label className="block text-purple-900 font-semibold mb-2"> 
              🤰 Pregnancy Month (1-9) 
            </label> 
            <input 
              type="number" 
              name="month" 
              value={formData.month} 
              onChange={handleChange} 
              min="1" 
              max="9" 
              placeholder="Enter month number" 
              className={`w-full p-3 border-2 rounded-xl focus:outline-none focus:border-pink
500 transition-colors ${ 
                errors.month ? 'border-red-400' : 'border-pink-200' 
              }`} 
            /> 
            {errors.month && ( 
              <p className="text-red-500 text-sm mt-1">{errors.month}</p> 
            )} 
          </div> 
 
          {/* Reminder Notes */} 
          <div className="mb-8"> 
            <label className="block text-purple-900 font-semibold mb-2"> 
              📝 Reminder Notes 
            </label> 
            <textarea 
              name="reminder" 
              value={formData.reminder} 
              onChange={handleChange} 
              placeholder="Any special instructions or things to remember..." 
              rows="4" 
              className="w-full p-3 border-2 border-pink-200 rounded-xl focus:outline-none 
focus:border-pink-500 transition-colors resize-none" 
            /> 
          </div> 
 
          {/* Submit Button */} 
          <button 
            type="submit" 
            className="w-full bg-gradient-to-r from-pink-500 to-purple-600 text-white font
semibold py-4 px-6 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 
transition-all duration-300 text-lg" 
          > 
            💖 Save Appointment 
          </button> 
        </form> 
 
      </div> 
    </div> 
    </div>
  ); 
}; 
 
export default AddAppointment;