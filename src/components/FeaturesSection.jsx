import React from 'react';
import './FeaturesSection.css';

const FeaturesSection = () => {
  const features = [
    {
      icon: '📊',
      title: 'Pregnancy Tracker',
      description: 'Week-by-week updates on your baby\'s development and body changes',
      color: '#ff6bcd'
    },
    {
      icon: '🏥',
      title: 'Hospital Finder',
      description: 'Find the best maternity hospitals and doctors near you',
      color: '#6b8cff'
    },
    {
      icon: '👶',
      title: 'Baby Development',
      description: 'Track milestones and development from newborn to 5 years',
      color: '#4cd964'
    },
    {
      icon: '🍼',
      title: 'Lactation Guide',
      description: 'Expert advice on breastfeeding and nutrition',
      color: '#ff9500'
    },
    {
      icon: '👥',
      title: 'Community Support',
      description: 'Connect with other mothers and share experiences',
      color: '#5856d6'
    },
    {
      icon: '📱',
      title: 'Personalized Tips',
      description: 'Get custom recommendations based on your journey',
      color: '#ff3b30'
    }
  ];

  return (
    <section className="features-section">
      <div className="container">
        <div className="section-header">
          <h2>Everything You Need in One Place</h2>
          <p>Comprehensive tools and resources for your parenting journey</p>
        </div>

        <div className="features-grid">
          {features.map((feature, index) => (
            <div key={index} className="feature-card">
              <div 
                className="feature-icon"
                style={{ backgroundColor: `${feature.color}20` }}
              >
                <span>{feature.icon}</span>
              </div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
              <button className="feature-link">
                Learn More →
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;