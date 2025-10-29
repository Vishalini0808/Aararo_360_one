// components/BookedSessions.js
import React, { useState } from 'react';

const BookedSessions = ({ bookedSessions, onBack, onUpdateBooking }) => {
  const [activeTab, setActiveTab] = useState('upcoming');
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('date');

  const filteredSessions = bookedSessions.filter(session => {
    const matchesSearch = session.babysitterName.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesTab = 
      activeTab === 'all' ? true :
      activeTab === 'upcoming' ? session.status === 'upcoming' :
      activeTab === 'completed' ? session.status === 'completed' : true;
    
    return matchesSearch && matchesTab;
  });

  const sortedSessions = [...filteredSessions].sort((a, b) => {
    switch (sortBy) {
      case 'date':
        return new Date(a.date) - new Date(b.date);
      case 'babysitter':
        return a.babysitterName.localeCompare(b.babysitterName);
      case 'status':
        return a.status.localeCompare(b.status);
      default:
        return 0;
    }
  });

  const handleCancelBooking = (bookingId) => {
    if (window.confirm('Are you sure you want to cancel this booking?')) {
      onUpdateBooking(bookingId, 'cancelled');
    }
  };

  const handleReschedule = () => {
    // This would open a rescheduling modal in a real implementation
    alert('Reschedule functionality would open here');
  };

  const handleAddReview = (bookingId) => {
    // This would open a review modal in a real implementation
    const rating = prompt('Please rate this babysitter (1-5):');
    if (rating) {
      alert(`Thank you for your ${rating} star rating!`);
      onUpdateBooking(bookingId, 'completed', parseInt(rating));
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'upcoming': return 'bg-green-100 text-green-600';
      case 'completed': return 'bg-blue-100 text-blue-600';
      case 'cancelled': return 'bg-gray-100 text-gray-600';
      default: return 'bg-gray-100 text-gray-600';
    }
  };

  const calculateDuration = (startTime, endTime) => {
    const start = new Date(`2000-01-01T${startTime}`);
    const end = new Date(`2000-01-01T${endTime}`);
    return (end - start) / (1000 * 60 * 60);
  };

  return (
    <div className="max-w-6xl mx-auto">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <button 
          onClick={onBack}
          className="flex items-center text-green-600 hover:text-green-700 font-semibold"
        >
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to Dashboard
        </button>
        
        <div className="flex items-center space-x-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Search babysitter..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 pr-4 py-2 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent"
            />
            <svg className="w-5 h-5 text-gray-400 absolute left-3 top-2.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
          
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent"
          >
            <option value="date">Sort by Date</option>
            <option value="babysitter">Sort by Babysitter</option>
            <option value="status">Sort by Status</option>
          </select>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <div className="bg-white rounded-2xl p-6 shadow-lg border border-green-100">
          <div className="text-2xl font-bold text-green-600">{bookedSessions.length}</div>
          <div className="text-gray-600">Total Sessions</div>
        </div>
        <div className="bg-white rounded-2xl p-6 shadow-lg border border-green-100">
          <div className="text-2xl font-bold text-green-600">
            {bookedSessions.filter(s => s.status === 'upcoming').length}
          </div>
          <div className="text-gray-600">Upcoming</div>
        </div>
        <div className="bg-white rounded-2xl p-6 shadow-lg border border-green-100">
          <div className="text-2xl font-bold text-blue-600">
            {bookedSessions.filter(s => s.status === 'completed').length}
          </div>
          <div className="text-gray-600">Completed</div>
        </div>
        <div className="bg-white rounded-2xl p-6 shadow-lg border border-green-100">
          <div className="text-2xl font-bold text-gray-600">
            {bookedSessions.filter(s => s.status === 'cancelled').length}
          </div>
          <div className="text-gray-600">Cancelled</div>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex space-x-1 bg-gray-100 rounded-xl p-1 mb-8">
        {['upcoming', 'completed', 'all'].map(tab => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`flex-1 py-3 px-6 rounded-xl font-semibold transition-colors ${
              activeTab === tab
                ? 'bg-white text-green-600 shadow-sm'
                : 'text-gray-600 hover:text-green-600'
            }`}
          >
            {tab.charAt(0).toUpperCase() + tab.slice(1)}
          </button>
        ))}
      </div>

      {/* Sessions Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {sortedSessions.map(booking => (
          <div key={booking.id} className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200">
            {/* Header */}
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-teal-500 rounded-full flex items-center justify-center text-white font-semibold">
                  {booking.babysitterName.split(' ').map(n => n[0]).join('')}
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">{booking.babysitterName}</h3>
                  <div className="flex items-center space-x-2 mt-1">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(booking.status)}`}>
                      {booking.status.charAt(0).toUpperCase() + booking.status.slice(1)}
                    </span>
                  </div>
                </div>
              </div>
              <div className="text-right">
                <div className="text-2xl font-bold text-green-600">₹{booking.totalCost}</div>
                <div className="text-xs text-gray-500">total</div>
              </div>
            </div>

            {/* Booking Details */}
            <div className="space-y-3 mb-4">
              <div className="flex items-center text-gray-600">
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                {new Date(booking.date).toLocaleDateString('en-IN', { 
                  weekday: 'short', 
                  year: 'numeric', 
                  month: 'short', 
                  day: 'numeric' 
                })}
              </div>
              
              <div className="flex items-center text-gray-600">
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                {booking.startTime} - {booking.endTime} ({calculateDuration(booking.startTime, booking.endTime)} hours)
              </div>
              
              <div className="flex items-center text-gray-600">
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                {booking.children} {booking.children === 1 ? 'child' : 'children'}
              </div>

              {booking.specialInstructions && (
                <div className="text-gray-600 text-sm">
                  <div className="font-medium mb-1">Special Instructions:</div>
                  <p className="line-clamp-2">{booking.specialInstructions}</p>
                </div>
              )}
            </div>

            {/* Action Buttons */}
            <div className="flex space-x-2">
              {booking.status === 'upcoming' && (
                <>
                  <button
                    onClick={() => handleCancelBooking(booking.id)}
                    className="flex-1 bg-red-500 text-white py-2 px-4 rounded-xl font-semibold hover:bg-red-600 transition-colors text-sm"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={() => handleReschedule(booking.id)}
                    className="flex-1 bg-yellow-500 text-white py-2 px-4 rounded-xl font-semibold hover:bg-yellow-600 transition-colors text-sm"
                  >
                    Reschedule
                  </button>
                </>
              )}
              
              {booking.status === 'completed' && !booking.rating && (
                <button
                  onClick={() => handleAddReview(booking.id)}
                  className="flex-1 bg-blue-500 text-white py-2 px-4 rounded-xl font-semibold hover:bg-blue-600 transition-colors text-sm"
                >
                  Add Review
                </button>
              )}

              {booking.rating && (
                <div className="flex-1 flex items-center justify-center text-yellow-500 font-semibold">
                  Rated: {booking.rating} ★
                </div>
              )}

              <button className="flex-1 bg-gray-100 text-gray-700 py-2 px-4 rounded-xl font-semibold hover:bg-gray-200 transition-colors text-sm">
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Empty State */}
      {sortedSessions.length === 0 && (
        <div className="text-center py-12">
          <div className="text-gray-400 text-6xl mb-4">📅</div>
          <h3 className="text-xl font-semibold text-gray-600 mb-2">No Bookings Found</h3>
          <p className="text-gray-500">
            {activeTab === 'upcoming' 
              ? "You don't have any upcoming bookings. Book a babysitter to get started!"
              : "No bookings match your current filters."}
          </p>
        </div>
      )}
    </div>
  );
};

export default BookedSessions;