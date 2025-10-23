import React from 'react';

const MorningSickness = () => {
  const articles = [
    {
      title: "What May Be Behind Morning Sickness, According to a New Study",
      description: "Latest research reveals potential causes and new treatment approaches"
    },
    {
      title: "8 Foods That Fight Nausea During Pregnancy",
      description: "Natural remedies to help settle your stomach"
    },
    {
      title: "Is Taking Zofran in Pregnancy the Answer to Your Morning Sickness?",
      description: "Weighing the benefits and risks of medication"
    },
    {
      title: "When Morning Sickness Becomes Serious: HG Explained",
      description: "Understanding Hyperemesis Gravidarum and when to seek help"
    }
  ];

  const tips = [
    "Eat small, frequent meals throughout the day",
    "Keep crackers by your bed and eat before getting up",
    "Stay hydrated with water, ginger ale, or electrolyte drinks",
    "Avoid strong smells that trigger nausea",
    "Try acupressure wrist bands",
    "Get plenty of fresh air and rest"
  ];

  return (
    <div className="morning-sickness">
      <div className="ms-header">
        <h1>Morning Sickness</h1>
        <p className="ms-subtitle">
          Morning sickness is a common pregnancy side effect, but that doesn't make it any less unpleasant. 
          Check out our articles for top tips on how to quell the queasiness and advice on when it's time to call your doctor.
        </p>
      </div>

      <div className="divider"></div>

      {/* Featured Articles */}
      <div className="ms-articles">
        {articles.map((article, index) => (
          <div key={index} className="ms-article">
            <div className="article-content">
              <h3>{article.title}</h3>
              <p>{article.description}</p>
            </div>
            <div className="article-divider"></div>
          </div>
        ))}
      </div>

      <button className="view-all-button">View All Articles →</button>

      {/* Quick Tips */}
      <div className="quick-tips">
        <h2>Quick Relief Tips</h2>
        <div className="tips-grid">
          {tips.map((tip, index) => (
            <div key={index} className="tip-card">
              <span className="tip-number">{index + 1}</span>
              <p>{tip}</p>
            </div>
          ))}
        </div>
      </div>

      {/* When to Call Doctor */}
      <div className="doctor-section">
        <h2>When to Call Your Doctor</h2>
        <div className="warning-signs">
          <ul>
            <li>Can't keep any liquids down for 24 hours</li>
            <li>Losing weight rapidly</li>
            <li>Feeling dizzy or faint when standing</li>
            <li>Heart racing or palpitations</li>
            <li>Signs of dehydration (dark urine, dry mouth)</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MorningSickness;