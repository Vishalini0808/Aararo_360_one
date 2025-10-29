import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import AppointmentCard from '../components/AppointmentCard';
import { checkUpcomingReminders } from '../utils/ReminderUtils';
import { BABY_TIPS } from '../Data/AppointmentHospitals';

const Dashboard = () => {
  const [appointments, setAppointments] = useState([]);
  const [currentMonth, setCurrentMonth] = useState(5); // Example current month
  const [upcomingReminders, setUpcomingReminders] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    // Load appointments from localStorage
    const savedAppointments = JSON.parse(localStorage.getItem('appointments') || '[]');
    setAppointments(savedAppointments);

    // Check for upcoming reminders
    const reminders = checkUpcomingReminders();
    setUpcomingReminders(reminders);

    // Show reminder alerts
    reminders.forEach(reminder => {
      alert(reminder.message);
    });
  }, []);

  const calculateProgress = () => {
    return (currentMonth / 9) * 100;
  };

  const getUpcomingAppointments = () => {
    return appointments.filter(appt => !appt.completed);
  };

  const getCompletedAppointments = () => {
    return appointments.filter(appt => appt.completed);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-purple-100 py-8 px-4">
      
      {/* 🔙 Back Button Added Here */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
        <button
          onClick={() => navigate(-1)}
          className="px-5 rounded-xl text-3xl font-semibold hover:text-purple-700 transition-all duration-300"
        >
          ←
        </button>
      </div>

      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-8">
          {/* <h1 className="text-4xl font-bold text-purple-900 mb-2">
            Hello, Aadhira 💕
          </h1> */}
          <p className="text-xl text-purple-700 mb-6">
            You are in Month {currentMonth} of your pregnancy
          </p>

          {/* Progress Bar */}
          <div className="max-w-2xl mx-auto mb-6">
            <div className="flex justify-between text-sm text-purple-800 mb-2">
              <span>Month 1</span>
              <span>Month 9</span>
            </div>
            <div className="bg-white rounded-full h-4 shadow-inner">
              <div
                className="bg-gradient-to-r from-pink-500 to-purple-600 h-4 rounded-full transition-all duration-1000"
                style={{ width: `${calculateProgress()}%` }}
              ></div>
            </div>
            <div className="flex justify-between text-xs text-purple-600 mt-1">
              {[1, 2, 3, 4, 5, 6, 7, 8, 9].map(month => (
                <span key={month}>{month}</span>
              ))}
            </div>
          </div>

          {/* Baby Tip */}
          <div className="bg-white bg-opacity-80 rounded-2xl p-4 max-w-2xl mx-auto mb-6">
            <p className="text-purple-800">
              <span className="font-semibold">👶 Baby Update:</span> {BABY_TIPS[currentMonth]}
            </p>
          </div>
        </div>

        {/* Reminder Alerts */}
        {upcomingReminders.length > 0 && (
          <div className="max-w-4xl mx-auto mb-8">
            <div className="bg-yellow-100 border border-yellow-400 rounded-2xl p-4">
              <h3 className="font-semibold text-yellow-800 mb-2">🔔 Upcoming Reminders</h3>
              {upcomingReminders.map(reminder => (
                <p key={reminder.id} className="text-yellow-700">
                  {reminder.message}
                </p>
              ))}
            </div>
          </div>
        )}

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-8">
          <div className="bg-white rounded-2xl p-6 text-center shadow-lg">
            <div className="text-3xl mb-2">📅</div>
            <h3 className="text-lg font-semibold text-purple-900">Total Appointments</h3>
            <p className="text-2xl font-bold text-pink-600">{appointments.length}</p>
          </div>

          <div className="bg-white rounded-2xl p-6 text-center shadow-lg">
            <div className="text-3xl mb-2">⏳</div>
            <h3 className="text-lg font-semibold text-purple-900">Upcoming</h3>
            <p className="text-2xl font-bold text-yellow-600">{getUpcomingAppointments().length}</p>
          </div>

          <div className="bg-white rounded-2xl p-6 text-center shadow-lg">
            <div className="text-3xl mb-2">✅</div>
            <h3 className="text-lg font-semibold text-purple-900">Completed</h3>
            <p className="text-2xl font-bold text-green-600">{getCompletedAppointments().length}</p>
          </div>
        </div>

        {/* Appointments Grid */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-purple-900 mb-6 text-center">
            Your Appointments 🤰
          </h2>

          {appointments.length === 0 ? (
            <div className="text-center py-12">
              <div className="text-6xl mb-4">📝</div>
              <h3 className="text-xl font-semibold text-purple-900 mb-2">
                No appointments yet
              </h3>
              <p className="text-purple-700 mb-6">
                Start by adding your first prenatal appointment!
              </p>
              <Link
                to="/add"
                className="bg-gradient-to-r from-pink-500 to-purple-600 text-white font-semibold py-3 px-8 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 inline-block"
              >
                + Add Your First Appointment
              </Link>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {appointments.map(appointment => (
                <AppointmentCard key={appointment.id} appointment={appointment} />
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Floating Add Button */}
      <Link
        to="/add"
        className="fixed bottom-8 right-8 bg-gradient-to-r from-pink-500 to-purple-600 text-white w-16 h-16 rounded-full shadow-2xl hover:shadow-3xl transform hover:scale-110 transition-all duration-300 flex items-center justify-center text-2xl font-bold z-50"
        title="Add New Appointment"
      >
        +
      </Link>
    </div>
  );
};

export default Dashboard;
