// Dashboard.js
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const navigate = useNavigate();
  const userData = JSON.parse(localStorage.getItem('aararo_user'));

  const handleLogout = () => {
    localStorage.removeItem('aararo_user');
    navigate('/signin');
  };

  return (
    <div className="dashboard-container">
      <header className="dashboard-header">
        <h1>Welcome to Your Dashboard, {userData?.name}!</h1>
        <button onClick={handleLogout} className="logout-btn">
          Logout
        </button>
      </header>
      
      <div className="dashboard-content">
        <h2>Aararo 360° Dashboard</h2>
        <p>Your personalized pregnancy and parenting journey starts here.</p>
        {/* Add your dashboard components here */}
      </div>
    </div>
  );
};

export default Dashboard;