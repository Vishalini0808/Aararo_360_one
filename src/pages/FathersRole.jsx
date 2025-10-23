import React from 'react';
import './FathersRole.css';

const FathersRole = () => {
  const fatherTips = [
    {
      category: "During Pregnancy",
      tips: [
        {
          title: "Attend Prenatal Appointments",
          description: "Join your partner for doctor visits and ultrasound scans",
          icon: "🏥"
        },
        {
          title: "Learn About Pregnancy",
          description: "Understand the changes your partner is going through",
          icon: "📚"
        },
        {
          title: "Help with Household Chores",
          description: "Take on more responsibilities to reduce her stress",
          icon: "🏠"
        },
        {
          title: "Practice Massage Techniques",
          description: "Learn gentle massage to relieve pregnancy discomfort",
          icon: "💆"
        }
      ]
    },
    {
      category: "During Delivery",
      tips: [
        {
          title: "Be the Birth Partner",
          description: "Stay with her throughout labor and delivery",
          icon: "👨‍👩‍👧"
        },
        {
          title: "Learn Breathing Techniques",
          description: "Help her with breathing exercises during contractions",
          icon: "🌬️"
        },
        {
          title: "Advocate for Her Needs",
          description: "Communicate her preferences to medical staff",
          icon: "🗣️"
        },
        {
          title: "Capture the Moments",
          description: "Take photos and videos of this special time",
          icon: "📸"
        }
      ]
    },
    {
      category: "Newborn Care",
      tips: [
        {
          title: "Master Diaper Changing",
          description: "Become an expert at quick and clean diaper changes",
          icon: "👶"
        },
        {
          title: "Learn to Swaddle",
          description: "Practice the art of perfect baby swaddling",
          icon: "🛌"
        },
        {
          title: "Take Night Shifts",
          description: "Share nighttime feeding and comforting duties",
          icon: "🌙"
        },
        {
          title: "Bond Through Skin-to-Skin",
          description: "Practice kangaroo care with your newborn",
          icon: "❤️"
        }
      ]
    },
    {
      category: "Supporting Your Partner",
      tips: [
        {
          title: "Encourage Rest",
          description: "Make sure she gets enough sleep and relaxation",
          icon: "😴"
        },
        {
          title: "Handle Visitors",
          description: "Manage family and friends visiting after delivery",
          icon: "👥"
        },
        {
          title: "Prepare Healthy Meals",
          description: "Cook nutritious food for her recovery",
          icon: "🍲"
        },
        {
          title: "Listen and Communicate",
          description: "Be patient and understanding during emotional times",
          icon: "👂"
        }
      ]
    }
  ];

  return (
    <div className="fathers-role-page">
      <div className="page-hero">
        <div className="container">
          <div className="hero-content">
            <h1>Father's Role & Guide 👨‍👧‍👦</h1>
            <p>Essential guidance for new dads to support their partner and bond with their baby</p>
          </div>
        </div>
      </div>

      <div className="fathers-content">
        <div className="container">
          <div className="intro-section">
            <h2>Your Journey as a New Dad</h2>
            <p>Fatherhood is an incredible journey filled with joy, challenges, and precious moments. Your role is crucial in creating a supportive environment for both your partner and your new baby.</p>
          </div>

          <div className="tips-sections">
            {fatherTips.map((section, index) => (
              <div key={index} className="tips-section">
                <h3 className="section-title">{section.category}</h3>
                <div className="tips-grid">
                  {section.tips.map((tip, tipIndex) => (
                    <div key={tipIndex} className="tip-card">
                      <div className="tip-icon">{tip.icon}</div>
                      <div className="tip-content">
                        <h4>{tip.title}</h4>
                        <p>{tip.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="bonding-activities">
            <h2>Bonding Activities with Your Baby</h2>
            <div className="activities-grid">
              <div className="activity-card">
                <div className="activity-icon">🎵</div>
                <h4>Sing and Talk</h4>
                <p>Your voice is comforting to your baby. Sing lullabies or talk about your day.</p>
              </div>
              <div className="activity-card">
                <div className="activity-icon">🚶</div>
                <h4>Go for Walks</h4>
                <p>Take your baby for walks in the stroller or carrier. Fresh air is good for both of you.</p>
              </div>
              <div className="activity-card">
                <div className="activity-icon">🛁</div>
                <h4>Bath Time Fun</h4>
                <p>Make bath time a special bonding experience with gentle play and songs.</p>
              </div>
              <div className="activity-card">
                <div className="activity-icon">📖</div>
                <h4>Read Stories</h4>
                <p>Start reading to your baby early. They love the sound of your voice.</p>
              </div>
            </div>
          </div>

          <div className="support-resources">
            <div className="resource-card">
              <h3>Join Our Dads Community</h3>
              <p>Connect with other new fathers, share experiences, and get support</p>
              <button className="cta-btn primary">Join Dads Group</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FathersRole;