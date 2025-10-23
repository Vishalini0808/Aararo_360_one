import React, { useState } from 'react';
import './Pregnancy.css';

// Import page components
import PregnancyOverview from './PregnancyOverview';
import WeeklyDevelopment from './WeeklyDevelopment';
import TrimestersGuide from './TrimestersGuide';
import PregnancySymptoms from './PregnancySymptoms';
import MorningSickness from './MorningSickness';
import HealthWellness from './HealthWellness';

const Pregnancy = () => {
  const [activePage, setActivePage] = useState('overview');

  const navigationItems = [
    {
      id: 'overview',
      title: 'Pregnancy Week by Week',
      description: 'Baby development, symptoms, and weekly tasks'
    },
    {
      id: 'first-trimester',
      title: 'First Trimester',
      description: 'Weeks 1-13: Early pregnancy phase'
    },
    {
      id: 'second-trimester',
      title: 'Second Trimester',
      description: 'Weeks 14-27: Growth and movement'
    },
    {
      id: 'third-trimester',
      title: 'Third Trimester',
      description: 'Weeks 28-40: Preparation for birth'
    },
    {
      id: 'symptoms',
      title: 'Pregnancy Symptoms',
      description: 'Common side effects and relief'
    },
    {
      id: 'morning-sickness',
      title: 'Morning Sickness',
      description: 'Managing nausea and queasiness'
    },
    {
      id: 'health-wellness',
      title: 'Health & Wellness',
      description: 'Staying healthy during pregnancy'
    },
    {
      id: 'baby-showers',
      title: 'Baby Showers & Reveals',
      description: 'Celebrating your pregnancy'
    },
    {
      id: 'labor-delivery',
      title: 'Labor & Delivery',
      description: 'Preparing for childbirth'
    }
  ];

  const renderPage = () => {
    switch (activePage) {
      case 'overview':
        return <PregnancyOverview />;
      case 'first-trimester':
      case 'second-trimester':
      case 'third-trimester':
        return <TrimestersGuide trimester={activePage} />;
      case 'symptoms':
        return <PregnancySymptoms />;
      case 'morning-sickness':
        return <MorningSickness />;
      case 'health-wellness':
        return <HealthWellness />;
      default:
        return <PregnancyOverview />;
    }
  };

  return (
    <div className="pregnancy-container">
      <div className="pregnancy-layout">
        {/* Sidebar Navigation */}
        <div className="pregnancy-sidebar">
          <div className="sidebar-header">
            <h3>Pregnancy</h3>
          </div>
          <nav className="sidebar-nav">
            {navigationItems.map((item) => (
              <button
                key={item.id}
                className={`nav-item ${activePage === item.id ? 'active' : ''}`}
                onClick={() => setActivePage(item.id)}
              >
                <div className="nav-content">
                  <div className="nav-title">{item.title}</div>
                  <div className="nav-description">{item.description}</div>
                </div>
              </button>
            ))}
          </nav>

          {/* Registry Ad */}
          <div className="sidebar-ad">
            <div className="ad-header">
              <h4>the BUMP</h4>
              <p>Personalize your registry with a theme, photo and custom URL.</p>
            </div>
            <button className="ad-button">Start Your Registry</button>
            <div className="brand-logos">
              <span>Amazon</span>
              <span>Target</span>
              <span>Walmart</span>
              <span>Pottery Barn</span>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="pregnancy-main">
          <div className="main-content">
            {renderPage()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pregnancy;