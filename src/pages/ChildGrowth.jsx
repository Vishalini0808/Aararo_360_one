import React, { useState } from 'react';
import './ChildGrowth.css';

const ChildGrowth = () => {
  const [activeAge, setActiveAge] = useState('0-3');

  const growthData = {
    '0-3': {
      title: 'Newborn to 3 Months',
      milestones: [
        'Lifts head briefly during tummy time',
        'Follows objects with eyes',
        'Smiles responsively',
        'Makes cooing sounds',
        'Brings hands to mouth'
      ],
      development: {
        physical: 'Rapid weight gain, head control improves',
        cognitive: 'Recognizes faces, follows moving objects',
        social: 'Social smiles, enjoys facial interaction',
        language: 'Coos and gurgles, different cries for different needs'
      },
      tips: [
        'Practice tummy time daily',
        'Talk and sing to your baby',
        'Provide high-contrast toys',
        'Respond to baby\'s cues promptly'
      ]
    },
    '4-6': {
      title: '4 to 6 Months',
      milestones: [
        'Rolls over in both directions',
        'Sits with support',
        'Reaches for and grasps toys',
        'Babbles and makes sounds',
        'Recognizes familiar people'
      ],
      development: {
        physical: 'Improved coordination, may start teething',
        cognitive: 'Curious about surroundings, explores with mouth',
        social: 'Enjoys social play, may show stranger anxiety',
        language: 'Babbling with consonants, responds to sounds'
      },
      tips: [
        'Provide safe objects to mouth',
        'Play peek-a-boo games',
        'Read colorful board books',
        'Encourage reaching and grasping'
      ]
    },
    '7-9': {
      title: '7 to 9 Months',
      milestones: [
        'Sits without support',
        'Starts crawling',
        'Pulls to stand',
        'Uses pincer grasp',
        'Understands "no"'
      ],
      development: {
        physical: 'Mobile exploration, fine motor skills develop',
        cognitive: 'Object permanence develops, problem-solving begins',
        social: 'Separation anxiety may appear, imitates actions',
        language: 'Understands common words, may say "mama/dada"'
      },
      tips: [
        'Create safe exploration space',
        'Play with stacking toys',
        'Use simple sign language',
        'Establish consistent routines'
      ]
    },
    '10-12': {
      title: '10 to 12 Months',
      milestones: [
        'Stands alone briefly',
        'May take first steps',
        'Points to objects',
        'Says 1-2 words',
        'Follows simple commands'
      ],
      development: {
        physical: 'May walk independently, improved coordination',
        cognitive: 'Solves simple problems, imitates activities',
        social: 'Shows preferences, may have tantrums',
        language: 'First words emerge, understands simple phrases'
      },
      tips: [
        'Encourage walking practice',
        'Provide push toys',
        'Name objects during play',
        'Set clear, consistent limits'
      ]
    }
  };

  const currentData = growthData[activeAge];

  return (
    <div className="child-growth-page">
      <div className="page-hero">
        <div className="container">
          <div className="hero-content">
            <h1>Child Growth & Milestones 📈</h1>
            <p>Track your child's development and celebrate every achievement</p>
          </div>
        </div>
      </div>

      <div className="growth-content">
        <div className="container">
          <div className="age-selector">
            <h3>Select Age Range:</h3>
            <div className="age-buttons">
              <button 
                className={`age-btn ${activeAge === '0-3' ? 'active' : ''}`}
                onClick={() => setActiveAge('0-3')}
              >
                0-3 Months
              </button>
              <button 
                className={`age-btn ${activeAge === '4-6' ? 'active' : ''}`}
                onClick={() => setActiveAge('4-6')}
              >
                4-6 Months
              </button>
              <button 
                className={`age-btn ${activeAge === '7-9' ? 'active' : ''}`}
                onClick={() => setActiveAge('7-9')}
              >
                7-9 Months
              </button>
              <button 
                className={`age-btn ${activeAge === '10-12' ? 'active' : ''}`}
                onClick={() => setActiveAge('10-12')}
              >
                10-12 Months
              </button>
            </div>
          </div>

          <div className="growth-section">
            <div className="section-header">
              <h2>{currentData.title}</h2>
              <p>Key developmental milestones and activities</p>
            </div>

            <div className="growth-grid">
              <div className="milestones-card">
                <h3>Key Milestones 🎯</h3>
                <ul className="milestones-list">
                  {currentData.milestones.map((milestone, index) => (
                    <li key={index} className="milestone-item">
                      <span className="checkmark">✓</span>
                      {milestone}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="development-card">
                <h3>Development Areas</h3>
                <div className="development-areas">
                  <div className="area">
                    <h4>Physical 🏃‍♂️</h4>
                    <p>{currentData.development.physical}</p>
                  </div>
                  <div className="area">
                    <h4>Cognitive 🧠</h4>
                    <p>{currentData.development.cognitive}</p>
                  </div>
                  <div className="area">
                    <h4>Social 👥</h4>
                    <p>{currentData.development.social}</p>
                  </div>
                  <div className="area">
                    <h4>Language 💬</h4>
                    <p>{currentData.development.language}</p>
                  </div>
                </div>
              </div>

              <div className="tips-card">
                <h3>Parent Tips 💡</h3>
                <div className="tips-list">
                  {currentData.tips.map((tip, index) => (
                    <div key={index} className="tip-item">
                      <span className="tip-number">{index + 1}</span>
                      <p>{tip}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="growth-tools">
            <h2>Growth Tracking Tools</h2>
            <div className="tools-grid">
              <div className="tool-card">
                <div className="tool-icon">📊</div>
                <h4>Growth Charts</h4>
                <p>Track weight, height, and head circumference percentiles</p>
                <button className="tool-btn">View Charts</button>
              </div>
              <div className="tool-card">
                <div className="tool-icon">📝</div>
                <h4>Milestone Tracker</h4>
                <p>Log and celebrate developmental achievements</p>
                <button className="tool-btn">Start Tracking</button>
              </div>
              <div className="tool-card">
                <div className="tool-icon">🎮</div>
                <h4>Activity Ideas</h4>
                <p>Age-appropriate play and learning activities</p>
                <button className="tool-btn">Get Ideas</button>
              </div>
              <div className="tool-card">
                <div className="tool-icon">👨‍⚕️</div>
                <h4>Expert Advice</h4>
                <p>Consult pediatricians about development concerns</p>
                <button className="tool-btn">Ask Expert</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChildGrowth;