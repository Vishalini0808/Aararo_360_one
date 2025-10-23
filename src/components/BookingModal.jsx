import React, { useState } from 'react'; 
import { X, Calendar, Clock, User, Mail, Phone, Check, MapPin, IndianRupee } from 'lucide-react'; 

export default function BookingModal({ babysitter, onClose }) { 
  const [formData, setFormData] = useState({ 
    parentName: '', 
    email: '', 
    phone: '', 
    date: '', 
    time: '', 
    duration: '2' 
  }); 
  const [isSubmitted, setIsSubmitted] = useState(false); 

  const handleSubmit = (e) => { 
    e.preventDefault(); 
    setIsSubmitted(true); 
    setTimeout(() => { 
      onClose(); 
    }, 2000); 
  }; 
 
  const handleChange = (e) => { 
    setFormData({ 
      ...formData, 
      [e.target.name]: e.target.value 
    }); 
  }; 
 
  return ( 
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50 animate-fadeIn"> 
      <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto animate-slideUp"> 
        {/* Header */} 
        <div className="sticky top-0 bg-gradient-to-r from-pink-500 to-purple-600 text-white p-6 rounded-t-2xl flex justify-between items-center"> 
          <div> 
            <h2 className="text-2xl font-bold mb-1">Book Your Babysitter</h2> 
            <p className="text-pink-100">Complete the form to confirm your booking</p> 
          </div> 
          <button 
            onClick={onClose} 
            className="w-10 h-10 rounded-full bg-white bg-opacity-20 hover:bg-opacity-30 transition-all duration-200 flex items-center justify-center" 
          > 
            <X className="w-6 h-6" /> 
          </button> 
        </div> 
 
        {!isSubmitted ? ( 
          <form onSubmit={handleSubmit} className="p-6"> 
            {/* Babysitter Info */} 
            <div className="bg-gradient-to-r from-pink-50 to-purple-50 rounded-xl p-4 mb-6"> 
              <div className="flex items-center gap-4"> 
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-pink-400 to-purple-500 flex items-center justify-center text-white text-xl font-bold"> 
                  {babysitter.image} 
                </div> 
                <div> 
                  <h3 className="text-xl font-bold text-gray-800">{babysitter.name}</h3> 
                  <p className="text-gray-600 flex items-center gap-1">
                    <MapPin className="w-3 h-3" />
                    {babysitter.location} • {babysitter.experience} years exp
                  </p> 
                  <p className="text-purple-600 font-semibold flex items-center gap-1">
                    <IndianRupee className="w-4 h-4" />
                    {babysitter.hourlyRate}/hour
                  </p> 
                </div> 
              </div> 
            </div> 
 
            {/* Form Fields */} 
            <div className="space-y-4"> 
              {/* Parent Name */} 
              <div> 
                <label className="flex items-center gap-2 text-gray-700 font-semibold mb-2"> 
                  <User className="w-4 h-4 text-pink-500" /> 
                  Your Name 
                </label> 
                <input 
                  type="text" 
                  name="parentName" 
                  value={formData.parentName} 
                  onChange={handleChange} 
                  required 
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-purple-500 focus:outline-none transition-colors duration-200" 
                  placeholder="Enter your full name" 
                /> 
              </div> 
 
              {/* Email */} 
              <div> 
                <label className="flex items-center gap-2 text-gray-700 font-semibold mb-2"> 
                  <Mail className="w-4 h-4 text-pink-500" /> 
                  Email Address 
                </label> 
                <input 
                  type="email" 
                  name="email" 
                  value={formData.email} 
                  onChange={handleChange} 
                  required 
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-purple-500 focus:outline-none transition-colors duration-200" 
                  placeholder="your.email@example.com" 
                /> 
              </div> 
 
              {/* Phone */} 
              <div> 
                <label className="flex items-center gap-2 text-gray-700 font-semibold mb-2"> 
                  <Phone className="w-4 h-4 text-pink-500" /> 
                  Phone Number 
                </label> 
                <input 
                  type="tel" 
                  name="phone" 
                  value={formData.phone} 
                  onChange={handleChange} 
                  required 
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-purple-500 focus:outline-none transition-colors duration-200" 
                  placeholder="+91 98765 43210" 
                /> 
              </div> 
 
              {/* Date and Time */} 
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4"> 
                <div> 
                  <label className="flex items-center gap-2 text-gray-700 font-semibold mb-2"> 
                    <Calendar className="w-4 h-4 text-pink-500" /> 
                    Date 
                  </label> 
                  <input 
                    type="date" 
                    name="date" 
                    value={formData.date} 
                    onChange={handleChange} 
                    required 
                    min={new Date().toISOString().split('T')[0]} 
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-purple-500 focus:outline-none transition-colors duration-200" 
                  /> 
                </div> 
 
                <div> 
                  <label className="flex items-center gap-2 text-gray-700 font-semibold mb-2"> 
                    <Clock className="w-4 h-4 text-pink-500" /> 
                    Start Time 
                  </label> 
                  <input 
                    type="time" 
                    name="time" 
                    value={formData.time} 
                    onChange={handleChange} 
                    required 
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-purple-500 focus:outline-none transition-colors duration-200" 
                  /> 
                </div> 
              </div> 
 
              {/* Duration */} 
              <div> 
                <label className="flex items-center gap-2 text-gray-700 font-semibold mb-2"> 
                  <Clock className="w-4 h-4 text-pink-500" /> 
                  Duration (hours) 
                </label> 
                <select 
                  name="duration" 
                  value={formData.duration} 
                  onChange={handleChange} 
                  required 
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-purple-500 focus:outline-none transition-colors duration-200" 
                > 
                  <option value="1">1 hour</option> 
                  <option value="2">2 hours</option> 
                  <option value="3">3 hours</option> 
                  <option value="4">4 hours</option> 
                  <option value="5">5 hours</option> 
                  <option value="6">6 hours</option> 
                  <option value="8">8 hours</option> 
                </select> 
              </div> 
 
              {/* Total Cost */} 
              <div className="bg-gradient-to-r from-pink-50 to-purple-50 rounded-xl p-4"> 
                <div className="flex justify-between items-center"> 
                  <span className="text-gray-700 font-semibold">Estimated Total:</span> 
                  <span className="text-2xl font-bold bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent flex items-center gap-1"> 
                    <IndianRupee className="w-6 h-6" />
                    {babysitter.hourlyRate * parseInt(formData.duration || '2')} 
                  </span> 
                </div> 
              </div> 
            </div> 
 
            {/* Submit Button */} 
            <button 
              type="submit" 
              className="w-full mt-6 bg-gradient-to-r from-pink-500 to-purple-600 text-white py-4 rounded-xl font-bold text-lg hover:from-pink-600 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-[1.02]" 
            > 
              Confirm Booking 
            </button> 
          </form> 
        ) : ( 
          <div className="p-12 text-center"> 
            <div className="w-20 h-20 rounded-full bg-gradient-to-r from-pink-500 to-purple-600 flex items-center justify-center mx-auto mb-6 animate-bounce"> 
              <Check className="w-10 h-10 text-white" /> 
            </div> 
            <h3 className="text-2xl font-bold text-gray-800 mb-2">Booking Confirmed!</h3> 
            <p className="text-gray-600"> 
              We've sent a confirmation email to {formData.email}. {babysitter.name} will contact you shortly. 
            </p> 
          </div> 
        )} 
      </div> 
    </div> 
  ); 
}