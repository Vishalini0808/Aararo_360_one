import React, { useState, useEffect } from 'react';
import '../../pages/Styles/settings.css';

const Options = () => {
  const [options, setOptions] = useState({
    notifications: true,
    darkMode: false,
    privacy: true
  });
  const [message, setMessage] = useState('');

  useEffect(() => {
    const saved = localStorage.getItem('aararo_options');
    if (saved) {
      try { 
        setOptions(JSON.parse(saved)); 
      } catch (error) {
        console.warn('Failed to parse saved options:', error);
      }
    }
  }, []);

  const toggle = (key) => {
    const updated = { ...options, [key]: !options[key] };
    setOptions(updated);
    localStorage.setItem('aararo_options', JSON.stringify(updated));
    setMessage('Options saved');
    setTimeout(() => setMessage(''), 1500);
  };

  return (
    <div className="options-page">
      <div className="page-header">
        <h1>Options</h1>
        <p>Control notifications, theme, and privacy preferences</p>
      </div>

      {message && <div className="message success">{message}</div>}

      <div className="options-list">
        <div className="option-row">
          <div className="option-info">
            <div className="option-title">Notifications</div>
            <div className="option-desc">Receive reminders and helpful tips</div>
          </div>
          <label className="switch">
            <input type="checkbox" checked={options.notifications} onChange={() => toggle('notifications')} />
            <span className="slider"></span>
          </label>
        </div>

        <div className="option-row">
          <div className="option-info">
            <div className="option-title">Dark Mode</div>
            <div className="option-desc">Reduce eye strain with a darker theme</div>
          </div>
          <label className="switch">
            <input type="checkbox" checked={options.darkMode} onChange={() => toggle('darkMode')} />
            <span className="slider"></span>
          </label>
        </div>

        <div className="option-row">
          <div className="option-info">
            <div className="option-title">Privacy Settings</div>
            <div className="option-desc">Keep your data private within the app</div>
          </div>
          <label className="switch">
            <input type="checkbox" checked={options.privacy} onChange={() => toggle('privacy')} />
            <span className="slider"></span>
          </label>
        </div>
      </div>
    </div>
  );
};

export default Options;


