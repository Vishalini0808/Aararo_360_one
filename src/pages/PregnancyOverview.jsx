import React from 'react';

const PregnancyOverview = () => {
  const trimesterData = [
    {
      title: "1st Trimester",
      weeks: "Weeks 1-13",
      image: "https://images.unsplash.com/photo-1516627145497-ae69578cfc06?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      description: "Getting used to the idea of being pregnant, dealing with morning sickness and exhaustion."
    },
    {
      title: "2nd Trimester",
      weeks: "Weeks 14-27", 
      image: "https://images.unsplash.com/photo-1534368959657-84dde2d1283c?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      description: "The 'honeymoon phase' with more energy and feeling baby movements."
    },
    {
      title: "3rd Trimester",
      weeks: "Weeks 28-40",
      image: "https://images.unsplash.com/photo-1549056572-75914d6d7e1a?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      description: "Final preparation for birth, dealing with discomfort and nesting instincts."
    }
  ];

  const weeklyHighlights = [
    { week: 1, title: "1 Week Pregnant", description: "Surprise! One week pregnant is actually not pregnant at all." },
    { week: 2, title: "2 Weeks Pregnant", description: "Think you're 2 weeks pregnant? You might not be—here's why." },
    { week: 3, title: "3 Weeks Pregnant", description: "Sperm met egg last week, and voila—you've made a baby!" },
    { week: 4, title: "4 Weeks Pregnant", description: "Congratulations! You found out the news earlier than a lot of women do..." },
    { week: 5, title: "5 Weeks Pregnant", description: "You've just been initiated to the pregnancy club!" },
    { week: 6, title: "6 Weeks Pregnant", description: "Has the news sunk in yet? It's normal to feel a little emotional..." }
  ];

  return (
    <div className="pregnancy-overview">
      {/* Hero Section */}
      <div className="overview-hero">
        <h1>Pregnancy Week by Week</h1>
        <p className="hero-subtitle">
          Pregnancy is an adventure! Let us help you—find pregnancy week-by-week info on baby's development, 
          pregnancy symptoms week-by-week, and weekly tasks.
        </p>
      </div>

      {/* Trimester Navigation */}
      <div className="trimester-navigation">
        {trimesterData.map((trimester, index) => (
          <div key={index} className="trimester-card">
            <img src={trimester.image} alt={trimester.title} />
            <div className="trimester-content">
              <h3>{trimester.title}</h3>
              <span className="trimester-weeks">{trimester.weeks}</span>
              <p>{trimester.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Weekly Highlights */}
      <div className="weekly-highlights">
        <h2>First Trimester Weeks</h2>
        <p className="section-intro">
          Congrats! During the first trimester, you're getting used to the idea of being pregnant, 
          and pregnancy symptoms week by week can vary big time! Learn how to deal with morning sickness 
          and exhaustion during this early pregnancy phase.
        </p>
        
        <div className="weeks-grid">
          {weeklyHighlights.map((week) => (
            <div key={week.week} className="week-card">
              <h4>{week.title}</h4>
              <p>{week.description}</p>
              <button className="read-more">Read More →</button>
            </div>
          ))}
        </div>
      </div>

      {/* Additional Weeks */}
      <div className="additional-weeks">
        <div className="weeks-row">
          <div className="week-item">
            <h4>7 Weeks Pregnant</h4>
            <p>You're keeping the best kind of secret, aren't you? Now that you're 7 weeks pregnant...</p>
          </div>
          <div className="week-item">
            <h4>8 Weeks Pregnant</h4>
            <p>While you may not be showing yet at 8 weeks pregnant, being pregnant is probably finally starting to feel real...</p>
          </div>
          <div className="week-item">
            <h4>9 Weeks Pregnant</h4>
            <p>Let's get serious for a second. Now that you're 9 weeks pregnant, you're probably starting to think about...</p>
          </div>
        </div>
        <div className="weeks-row">
          <div className="week-item">
            <h4>10 Weeks Pregnant</h4>
            <p>Hello baby bump! Now that you've reached 10 weeks pregnant, you may stop wondering when you'll start to...</p>
          </div>
          <div className="week-item">
            <h4>11 Weeks Pregnant</h4>
            <p>Get on Airbnb and Tripadvisor, start planning a babymoon: a relaxing getaway before baby arrives...</p>
          </div>
          <div className="week-item">
            <h4>12 Weeks Pregnant</h4>
            <p>Things are changing fast at 12 weeks pregnant. You're reaching the home stretch of the first trimester...</p>
          </div>
        </div>
      </div>

      {/* End of Trimester */}
      <div className="trimester-end">
        <div className="end-content">
          <h3>13 Weeks Pregnant</h3>
          <p>
            Congrats! The end of week 13 is the end of the first trimester! We're not just talking about 
            getting through the first three months—you've reached a major pregnancy milestone.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PregnancyOverview;