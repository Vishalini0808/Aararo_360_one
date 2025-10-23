import React from 'react';

const PregnancySymptoms = () => {
  const symptoms = [
    {
      title: "Morning Sickness",
      description: "Nausea and vomiting that can occur at any time of day",
      relief: "Eat small, frequent meals and try ginger tea"
    },
    {
      title: "Fatigue", 
      description: "Overwhelming tiredness, especially in first trimester",
      relief: "Rest when possible and listen to your body"
    },
    {
      title: "Food Aversions & Cravings",
      description: "Strong dislikes or desires for certain foods",
      relief: "Eat what you can tolerate, maintain balanced nutrition"
    },
    {
      title: "Frequent Urination",
      description: "Need to urinate more often due to hormonal changes",
      relief: "Stay hydrated but reduce fluids before bedtime"
    },
    {
      title: "Breast Tenderness",
      description: "Sore, swollen breasts as they prepare for breastfeeding",
      relief: "Wear supportive bras and use warm compresses"
    },
    {
      title: "Mood Swings",
      description: "Emotional ups and downs due to hormonal fluctuations",
      relief: "Practice relaxation techniques and communicate feelings"
    }
  ];

  const featuredArticles = [
    {
      title: "What is SPD in Pregnant Women?",
      description: "Everything to Know About Symphysis Pubis Dysfunction"
    },
    {
      title: "Here's What to Do If You're Pregnant With Tailbone Pain",
      description: "Effective relief strategies for coccydynia"
    },
    {
      title: "Expectant Moms Can Get Disabled Parking Permits Under New Guidelines",
      description: "Learn about your rights and accommodations"
    }
  ];

  return (
    <div className="pregnancy-symptoms">
      <div className="symptoms-header">
        <h1>Pregnancy Symptoms</h1>
        <p className="symptoms-subtitle">
          Your body is working hard to grow a new human, so it's only natural to experience 
          a number of pregnancy side effects. Our pregnancy guides feature in-depth information 
          on pregnancy symptoms, why they happen and what you can do to stay safe, healthy and as comfortable as possible.
        </p>
      </div>

      <div className="divider"></div>

      {/* Getting Started Section */}
      <div className="getting-started">
        <h2>Getting Started</h2>
        <p>
          Have you ever found yourself wondering, "What will I feel like during pregnancy?" 
          Let us help prepare you. Below, our articles walk you through some of the most common 
          pregnancy symptoms women experience, plus tips on how to find relief.
        </p>
        <button className="view-all-button">View All Articles →</button>
      </div>

      {/* Common Symptoms Grid */}
      <div className="symptoms-grid">
        {symptoms.map((symptom, index) => (
          <div key={index} className="symptom-card">
            <h3>{symptom.title}</h3>
            <p className="symptom-description">{symptom.description}</p>
            <div className="relief-tips">
              <strong>Relief Tips:</strong> {symptom.relief}
            </div>
          </div>
        ))}
      </div>

      {/* Read More Section */}
      <div className="read-more-section">
        <h2>Read More About Pregnancy Symptoms</h2>
        <p>
          Ready to go beyond the basics? Here you'll find the latest data, expert insight 
          and proven advice on pregnancy symptoms you may encounter, from your run-of-the-mill 
          side effects to the more uncommon symptoms that may take you by surprise.
        </p>
        
        <div className="featured-articles">
          {featuredArticles.map((article, index) => (
            <div key={index} className="featured-article">
              <h4>{article.title}</h4>
              <p>{article.description}</p>
              <button className="read-article">Read Article →</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PregnancySymptoms;