import React from 'react';
import './HowItWorks.css';

const HowItWorks = () => {
  const steps = [
    {
      number: '01',
      title: 'Create Your Profile',
      description: 'Tell us your due date or your child\'s age for personalized guidance',
      icon: '👤'
    },
    {
      number: '02',
      title: 'Track Your Journey',
      description: 'Use our tools to monitor pregnancy progress or child development',
      icon: '📈'
    },
    {
      number: '03',
      title: 'Get Expert Advice',
      description: 'Access articles, videos, and consultations with specialists',
      icon: '🎓'
    },
    {
      number: '04',
      title: 'Join Community',
      description: 'Connect with other parents and share experiences',
      icon: '👥'
    }
  ];

  return (
    <section className="how-it-works">
      <div className="container">
        <div className="section-header">
          <h2>How ஆராரோ 360 Works</h2>
          <p>Simple steps to get the most out of your parenting journey</p>
        </div>

        <div className="steps-container">
          {steps.map((step, index) => (
            <div key={index} className="step-card">
              <div className="step-number">{step.number}</div>
              <div className="step-icon">{step.icon}</div>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </div>
          ))}
        </div>

        <div className="cta-container">
          <button className="cta-btn primary large">
            Start Your Free Journey Today
          </button>
          {/* <p className="cta-note">No credit card required • Free forever plan</p> */}
        </div>
      </div>

      


    </section>
  );
};

export default HowItWorks;