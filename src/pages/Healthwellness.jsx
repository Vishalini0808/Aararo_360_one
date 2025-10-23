import React from 'react';

const HealthWellness = () => {
  const wellnessCategories = [
    {
      title: "Nutrition & Diet",
      image: "https://images.unsplash.com/photo-1490818387583-1baba5e638af?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      articles: [
        {
          title: "Pregnancy Superfoods: What to Eat for a Healthy Baby",
          description: "Discover the essential nutrients and foods that support fetal development"
        },
        {
          title: "Foods to Avoid During Pregnancy: Complete Safety Guide",
          description: "Learn which foods pose risks and how to maintain a safe diet"
        },
        {
          title: "Managing Pregnancy Cravings Healthily",
          description: "How to satisfy cravings while maintaining balanced nutrition"
        }
      ]
    },
    {
      title: "Exercise & Fitness",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      articles: [
        {
          title: "Safe Pregnancy Exercises by Trimester",
          description: "Workout routines tailored to each stage of pregnancy"
        },
        {
          title: "Yoga Poses for Every Trimester",
          description: "Gentle stretches and poses to relieve pregnancy discomfort"
        },
        {
          title: "Walking Your Way Through Pregnancy",
          description: "How daily walks benefit you and your baby"
        }
      ]
    },
    {
      title: "Mental Health",
      image: "https://images.unsplash.com/photo-1485546246426-74dc88dec4d9?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      articles: [
        {
          title: "Managing Pregnancy Anxiety and Stress",
          description: "Techniques to stay calm and centered during pregnancy"
        },
        {
          title: "Pregnancy Mood Swings: What's Normal?",
          description: "Understanding emotional changes and when to seek help"
        },
        {
          title: "Mindfulness and Meditation for Expectant Moms",
          description: "Practices to connect with your body and baby"
        }
      ]
    },
    {
      title: "Medical Care",
      image: "https://images.unsplash.com/photo-1551601651-2a8555f1a136?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      articles: [
        {
          title: "Your Prenatal Appointment Schedule",
          description: "What to expect at each checkup and important tests"
        },
        {
          title: "Understanding Prenatal Vitamins",
          description: "Which supplements you need and why they're important"
        },
        {
          title: "When to Call Your Doctor: Warning Signs",
          description: "Symptoms that require immediate medical attention"
        }
      ]
    }
  ];

  const featuredArticles = [
    {
      title: "New Study Reveals Benefits of Mediterranean Diet in Pregnancy",
      description: "Research shows improved outcomes for moms and babies",
      category: "Nutrition",
      readTime: "4 min read"
    },
    {
      title: "Pregnancy Sleep Guide: Positions and Tips for Better Rest",
      description: "How to get comfortable and sleep well through each trimester",
      category: "Wellness",
      readTime: "5 min read"
    },
    {
      title: "The Truth About Pregnancy Skincare: What's Safe?",
      description: "Ingredients to avoid and pregnancy-safe products",
      category: "Beauty",
      readTime: "3 min read"
    }
  ];

  const wellnessTips = [
    {
      icon: "💧",
      title: "Stay Hydrated",
      tip: "Drink 8-10 glasses of water daily to support increased blood volume and amniotic fluid"
    },
    {
      icon: "😴",
      title: "Prioritize Sleep",
      tip: "Aim for 7-9 hours of sleep and use pillows for support as your belly grows"
    },
    {
      icon: "🚶‍♀️",
      title: "Move Daily",
      tip: "30 minutes of moderate exercise most days helps with circulation and mood"
    },
    {
      icon: "🧘‍♀️",
      title: "Practice Relaxation",
      tip: "Deep breathing and meditation can reduce stress and improve sleep quality"
    },
    {
      icon: "🥗",
      title: "Eat Balanced Meals",
      tip: "Focus on whole foods: fruits, vegetables, lean proteins, and whole grains"
    },
    {
      icon: "📞",
      title: "Stay Connected",
      tip: "Join pregnancy groups or talk with friends about your experience"
    }
  ];

  return (
    <div className="health-wellness">
      {/* Header Section */}
      <div className="hw-header">
        <h1>Health & Wellness</h1>
        <p className="hw-subtitle">
          Your complete guide to staying healthy during pregnancy. From nutrition and exercise 
          to mental wellness and medical care, we've got expert advice to support you and your baby.
        </p>
      </div>

      <div className="divider"></div>

      {/* Featured Articles */}
      <div className="featured-section">
        <h2>Featured Health Articles</h2>
        <div className="featured-grid">
          {featuredArticles.map((article, index) => (
            <div key={index} className="featured-card">
              <div className="article-meta">
                <span className="category-tag">{article.category}</span>
                <span className="read-time">{article.readTime}</span>
              </div>
              <h3>{article.title}</h3>
              <p>{article.description}</p>
              <button className="read-more-btn">Read Article →</button>
            </div>
          ))}
        </div>
      </div>

      {/* Wellness Categories */}
      <div className="categories-section">
        <h2>Health & Wellness Topics</h2>
        <div className="categories-grid">
          {wellnessCategories.map((category, index) => (
            <div key={index} className="category-card">
              <div className="category-header">
                <img src={category.image} alt={category.title} />
                <h3>{category.title}</h3>
              </div>
              <div className="category-articles">
                {category.articles.map((article, articleIndex) => (
                  <div key={articleIndex} className="article-preview">
                    <h4>{article.title}</h4>
                    <p>{article.description}</p>
                    <button className="article-link">Read More →</button>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Daily Wellness Tips */}
      <div className="wellness-tips">
        <h2>Daily Wellness Tips</h2>
        <p className="tips-intro">
          Small, consistent habits can make a big difference in your pregnancy journey. 
          Here are practical tips to incorporate into your daily routine.
        </p>
        <div className="tips-grid">
          {wellnessTips.map((tip, index) => (
            <div key={index} className="tip-card">
              <div className="tip-icon">{tip.icon}</div>
              <div className="tip-content">
                <h4>{tip.title}</h4>
                <p>{tip.tip}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Emergency Information */}
      <div className="emergency-info">
        <div className="emergency-content">
          <h3>🚨 When to Seek Immediate Medical Care</h3>
          <div className="warning-list">
            <div className="warning-column">
              <h4>Call Your Doctor Immediately For:</h4>
              <ul>
                <li>Heavy vaginal bleeding</li>
                <li>Severe abdominal pain</li>
                <li>No fetal movement for 12+ hours</li>
                <li>Your water breaks</li>
              </ul>
            </div>
            <div className="warning-column">
              <h4>Contact Within 24 Hours For:</h4>
              <ul>
                <li>Mild bleeding or spotting</li>
                <li>Persistent headache</li>
                <li>Fever over 100.4°F</li>
                <li>Painful urination</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Resources Section */}
      <div className="resources-section">
        <h2>Additional Resources</h2>
        <div className="resources-grid">
          <div className="resource-card">
            <h4>📞 Support Hotlines</h4>
            <p>24/7 pregnancy support and emergency consultation</p>
            <button className="resource-btn">View Numbers</button>
          </div>
          <div className="resource-card">
            <h4>👥 Support Groups</h4>
            <p>Connect with other expectant parents in your area</p>
            <button className="resource-btn">Find Groups</button>
          </div>
          <div className="resource-card">
            <h4>📚 Educational Materials</h4>
            <p>Downloadable guides and pregnancy planning tools</p>
            <button className="resource-btn">Download</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HealthWellness;