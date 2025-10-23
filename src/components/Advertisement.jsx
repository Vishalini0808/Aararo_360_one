import React from 'react';
import './Advertisement.css';

const Advertisement = () => {
  return (
    <div> <div className="ad-badge">ADVERTISEMENT</div>
    <div className="advertisement-banner">
         
      <div className="ad-container">
        <div className="ad-content">
        
          <h2 className="ad-title">
            Build your complete pregnancy & parenting journey with <span className="brand-highlight">Aararo 360°</span>
          </h2>
          <p className="ad-subtitle">
            From bump to brilliance - Your trusted 5-year parenting companion
          </p>
          <button className="ad-cta-btn">
            Start Your Free Journey
          </button>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Advertisement;