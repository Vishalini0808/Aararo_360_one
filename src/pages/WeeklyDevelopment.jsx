import React, { useState } from 'react';

const WeeklyDevelopment = () => {
  const [currentWeek, setCurrentWeek] = useState(1);

  const weeklyData = [
    {
      week: 1,
      title: "The Beginning",
      babySize: "Size of a pinhead",
      babyWeight: "Less than 1 gram",
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      development: "Your body is preparing for ovulation. The egg and sperm haven't met yet, but your journey begins here!",
      motherChanges: "Your menstrual period has just ended, and your body is preparing for ovulation.",
      tips: ["Start taking folic acid supplements", "Track your menstrual cycle", "Begin healthy eating habits"],
      milestones: ["Conception preparation", "Uterine lining builds up"]
    },
    // Add all other weeks with similar structure
  ];

  const currentWeekData = weeklyData.find(week => week.week === currentWeek) || weeklyData[0];

  return (
    <div className="page-weekly">
      <div className="page-header">
        <h1>Week by Week Development</h1>
        <p>Track your baby's amazing growth journey</p>
      </div>

      {/* Week Selector */}
      <div className="week-navigation">
        <div className="week-selector">
          <label>Select Week:</label>
          <select value={currentWeek} onChange={(e) => setCurrentWeek(parseInt(e.target.value))}>
            {Array.from({ length: 40 }, (_, i) => i + 1).map(week => (
              <option key={week} value={week}>Week {week}</option>
            ))}
          </select>
        </div>
        <div className="week-progress">
          <div className="progress-bar">
            <div 
              className="progress-fill" 
              style={{ width: `${(currentWeek / 40) * 100}%` }}
            ></div>
          </div>
          <span>Week {currentWeek} of 40</span>
        </div>
      </div>

      {/* Week Details */}
      <div className="week-details">
        <div className="week-hero">
          <img src={currentWeekData.image} alt={`Week ${currentWeek}`} />
          <div className="week-info">
            <h2>Week {currentWeek}: {currentWeekData.title}</h2>
            <div className="baby-stats">
              <div className="stat">
                <span className="label">Baby Size</span>
                <span className="value">{currentWeekData.babySize}</span>
              </div>
              <div className="stat">
                <span className="label">Weight</span>
                <span className="value">{currentWeekData.babyWeight}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="development-grid">
          <div className="development-card">
            <h3>👶 Baby's Development</h3>
            <p>{currentWeekData.development}</p>
            <div className="milestones">
              <h4>Key Milestones</h4>
              <ul>
                {currentWeekData.milestones.map((milestone, index) => (
                  <li key={index}>{milestone}</li>
                ))}
              </ul>
            </div>
          </div>

          <div className="development-card">
            <h3>🤰 Mother's Changes</h3>
            <p>{currentWeekData.motherChanges}</p>
          </div>

          <div className="development-card tips">
            <h3>💡 This Week's Tips</h3>
            <ul>
              {currentWeekData.tips.map((tip, index) => (
                <li key={index}>{tip}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeeklyDevelopment;