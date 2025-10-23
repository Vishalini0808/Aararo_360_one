import React, { useState } from 'react';
import { Link, useLocation, Outlet, useNavigate } from 'react-router-dom';
import '../../pages/Styles/settings.css';

const SettingsLayout = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const menuItems = [
    { path: '/settings/profile', icon: '👤', label: 'Profile Info' },
    { path: '/settings/premium', icon: '⭐', label: 'Premium Membership' },
    { path: '/settings/options', icon: '⚙️', label: 'Options' },
    { path: '/settings/help', icon: '❓', label: 'Help & Support' },
    { path: '/settings/about', icon: 'ℹ️', label: 'About Aararo 360°' }
  ];

  const handleLogout = () => {
    localStorage.removeItem('aararo_user');
    navigate('/signin');
  };

  const isActive = (path) => location.pathname === path;

  return (
    <div className="settings-container">
      <div className="settings-sidebar">
        <div className="sidebar-header">
          <h2>Settings</h2>
          <button 
            className="mobile-menu-toggle"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            ☰
          </button>
        </div>
        
        <nav className={`sidebar-nav ${isMobileMenuOpen ? 'mobile-open' : ''}`}>
          {menuItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`nav-item ${isActive(item.path) ? 'active' : ''}`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <span className="nav-icon">{item.icon}</span>
              <span className="nav-label">{item.label}</span>
            </Link>
          ))}
          
          <button 
            className="nav-item logout-btn"
            onClick={handleLogout}
          >
            <span className="nav-icon">🚪</span>
            <span className="nav-label">Logout</span>
          </button>
        </nav>
      </div>

      <div className="settings-content">
        <Outlet />
      </div>
    </div>
  );
};

export default SettingsLayout;