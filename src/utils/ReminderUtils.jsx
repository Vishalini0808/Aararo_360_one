// Helper functions for handling reminders 
export const scheduleReminder = (appointment, daysBefore = 1) => { 
  const appointmentDate = new Date(`${appointment.date}T${appointment.time}`); 
  const reminderTime = appointmentDate.getTime() - (daysBefore * 24 * 60 * 60 * 1000); 
   
  const reminder = { 
    id: `reminder_${appointment.id}`, 
    appointmentId: appointment.id, 
    triggerTime: reminderTime, 
    message: `Hi Aadhira! You have an appointment ${daysBefore === 1 ? 'tomorrow' : 'in 2 days'} at 
${appointment.time} with ${appointment.doctor} 💖` 
  }; 
   
  localStorage.setItem(reminder.id, JSON.stringify(reminder)); 
  return reminder; 
}; 
 
export const removeReminder = (appointmentId) => { 
  localStorage.removeItem(`reminder_${appointmentId}`); 
}; 
 
export const checkUpcomingReminders = () => { 
  const now = Date.now(); 
  const upcomingReminders = []; 
   
  for (let i = 0; i < localStorage.length; i++) { 
    const key = localStorage.key(i); 
    if (key.startsWith('reminder_')) { 
      try { 
        const reminder = JSON.parse(localStorage.getItem(key)); 
        if (reminder.triggerTime <= now + (24 * 60 * 60 * 1000)) { // Next 24 hours 
          upcomingReminders.push(reminder); 
        } 
 
      } catch (error) { 
        console.error('Error parsing reminder:', error); 
      } 
    } 
  } 
   
  return upcomingReminders; 
}; 
 
export const getReminderForAppointment = (appointmentId) => { 
  const reminder = localStorage.getItem(`reminder_${appointmentId}`); 
  return reminder ? JSON.parse(reminder) : null; 
};