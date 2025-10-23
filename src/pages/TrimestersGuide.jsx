import React, { useState } from 'react';

const TrimestersGuide = ({ trimester }) => {
  const [activeWeek, setActiveWeek] = useState(1);

  const trimesterData = {
    'first-trimester': {
      title: 'First Trimester',
      weeks: 'Weeks 1-13',
      description: 'The beginning of your pregnancy journey with rapid development',
      weeksData: [
        {
          week: 1,
          title: '1 Week Pregnant',
          description: 'Your body is preparing for pregnancy. The countdown begins!',
          development: 'Egg prepares for fertilization, uterine lining builds up',
          symptoms: ['No noticeable symptoms yet', 'Normal menstrual cycle'],
          tips: ['Start taking folic acid', 'Track your menstrual cycle']
        },
        {
          week: 2,
          title: '2 Weeks Pregnant', 
          description: 'Ovulation occurs and conception happens',
          development: 'Fertilization occurs, zygote begins cell division',
          symptoms: ['Possible ovulation pain', 'Increased cervical mucus'],
          tips: ['Continue healthy habits', 'Avoid alcohol and smoking']
        }
        // Add more weeks...
      ]
    },
    'second-trimester': {
      title: 'Second Trimester',
      weeks: 'Weeks 14-27',
      description: 'The golden period with more energy and baby movements',
      weeksData: [
        // Second trimester weeks data
      ]
    },
    'third-trimester': {
      title: 'Third Trimester', 
      weeks: 'Weeks 28-40',
      description: 'Final preparation for birth with rapid growth',
      weeksData: [
        // Third trimester weeks data
      ]
    }
  };

  const currentTrimester = trimesterData[trimester] || trimesterData['first-trimester'];
  const currentWeek = currentTrimester.weeksData.find(w => w.week === activeWeek) || currentTrimester.weeksData[0];

  return (
    <div className="trimesters-guide">
      <div className="trimester-header">
        <h1>{currentTrimester.title}</h1>
        <p className="trimester-subtitle">{currentTrimester.weeks} • {currentTrimester.description}</p>
      </div>

      {/* Week Navigation */}
      <div className="week-navigation">
        <div className="week-scroll">
          {currentTrimester.weeksData.map(week => (
            <button
              key={week.week}
              className={`week-tab ${activeWeek === week.week ? 'active' : ''}`}
              onClick={() => setActiveWeek(week.week)}
            >
              <span className="week-number">Week {week.week}</span>
              <span className="week-title">{week.title.split('Pregnant')[0]}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Week Details */}
      <div className="week-details">
        <div className="week-hero">
          <h2>{currentWeek.title}</h2>
          <p className="week-description">{currentWeek.description}</p>
        </div>

        <div className="week-content">
          <div className="content-section">
            <h3>Baby's Development</h3>
            <p>{currentWeek.development}</p>
          </div>

          <div className="content-section">
            <h3>Common Symptoms</h3>
            <ul>
              {currentWeek.symptoms.map((symptom, index) => (
                <li key={index}>{symptom}</li>
              ))}
            </ul>
          </div>

          <div className="content-section">
            <h3>This Week's Tips</h3>
            <ul>
              {currentWeek.tips.map((tip, index) => (
                <li key={index}>{tip}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Related Articles */}
      <div className="related-articles">
        <h3>Read More About {currentTrimester.title}</h3>
        <div className="articles-grid">
          <div className="article-card">
            <h4>What to Expect During {currentTrimester.title}</h4>
            <p>Complete guide to physical and emotional changes</p>
          </div>
          <div className="article-card">
            <h4>Nutrition Guide for {currentTrimester.title}</h4>
            <p>Essential foods and nutrients you need</p>
          </div>
          <div className="article-card">
            <h4>Exercise and {currentTrimester.title}</h4>
            <p>Safe workouts and activities</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrimestersGuide;