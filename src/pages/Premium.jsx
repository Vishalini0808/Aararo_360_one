import React, { useState } from 'react';
import './Premium.css';

const Premium = () => {
  const [selectedPlan, setSelectedPlan] = useState('yearly');

  const plans = {
    yearly: {
      name: 'Annual Plan',
      price: '₹999',
      originalPrice: '₹1,999',
      savings: '50% OFF',
      period: 'per year',
      popular: true
    },
    quarterly: {
      name: 'Quarterly Plan',
      price: '₹249',
      originalPrice: '₹755',
      savings: '33% OFF',
      period: 'per 3 months',
      popular: false
    },
        monthly: {
      name: 'Monthly Plan',
      price: '₹99',
      originalPrice: '₹499',
      savings: '20% OFF',
      period: 'per month',
      popular: false
    }
  };

  const features = [
    {
      category: 'Expert Guidance',
      items: [
        { name: 'Unlimited Doctor Consultations', free: '5/month', premium: 'Unlimited' },
        { name: '24/7 Chat with Pediatricians', free: 'Basic', premium: 'Priority Access' },
        { name: 'Personalized Diet Plans', free: 'Generic', premium: 'Customized' },
        { name: 'Video Consultations', free: 'Not Available', premium: 'Available' }
      ]
    },
    {
      category: 'Advanced Tracking',
      items: [
        { name: 'Growth Analytics', free: 'Basic Charts', premium: 'Advanced Analytics' },
        { name: 'Vaccination Tracker', free: 'Schedule Only', premium: 'Smart Reminders' },
        { name: 'Milestone Predictions', free: 'Not Available', premium: 'AI-Powered' },
        { name: 'Health Reports', free: 'Basic', premium: 'Detailed Analysis' }
      ]
    },
    {
      category: 'Community & Support',
      items: [
        { name: 'Expert Q&A Sessions', free: 'Monthly', premium: 'Weekly' },
        { name: 'Private Community', free: 'Basic Access', premium: 'Premium Groups' },
        { name: 'Live Workshops', free: 'Recorded', premium: 'Live + Recorded' },
        { name: 'Personal Coach', free: 'Not Available', premium: 'Dedicated Coach' }
      ]
    },
    {
      category: 'Exclusive Content',
      items: [
        { name: 'Video Library', free: 'Limited', premium: 'Full Access' },
        { name: 'E-books & Guides', free: 'Basic', premium: 'Premium Collection' },
        { name: 'Recipe Database', free: '50 Recipes', premium: '500+ Recipes' },
        { name: 'Meditation Sessions', free: 'Not Available', premium: 'Guided Sessions' }
      ]
    }
  ];

  const testimonials = [
    {
      name: 'Priya Sharma',
      plan: 'Premium Member',
      text: 'The unlimited doctor consultations saved us multiple hospital visits. Worth every rupee!',
      rating: 5
    },
    {
      name: 'Anjali Patel',
      plan: 'Annual Plan',
      text: 'The personalized diet plans and 24/7 support made my pregnancy journey stress-free.',
      rating: 5
    },
    {
      name: 'Rohit Kumar',
      plan: 'Premium Member',
      text: 'As a new dad, the expert guidance and community support have been invaluable.',
      rating: 5
    }
  ];

  return (
    <div className="premium-page">
      <div className="page-hero">
        <div className="container">
          <div className="hero-content">
            <h1>Premium Membership 👑</h1>
            <p>Unlock expert guidance, personalized support, and exclusive features for your parenting journey</p>
          </div>
        </div>
      </div>

      <div className="premium-content">
        <div className="container">
          {/* Pricing Section */}
          <div className="pricing-section">
            <h2>Choose Your Plan</h2>
            <p>Select the plan that works best for your family's needs</p>
            
            <div className="plan-selector">
              <button 
                className={`plan-option ${selectedPlan === 'yearly' ? 'active' : ''}`}
                onClick={() => setSelectedPlan('yearly')}
              >
                Yearly
              </button>
              <button 
                className={`plan-option ${selectedPlan === 'quarterly' ? 'active' : ''}`}
                onClick={() => setSelectedPlan('quarterly')}
              >
                Quarterly
              </button>
              <button 
                className={`plan-option ${selectedPlan === 'monthly' ? 'active' : ''}`}
                onClick={() => setSelectedPlan('monthly')}
              >
                Monthly
              </button>
            </div>

            <div className="plans-display">
              {Object.entries(plans).map(([key, plan]) => (
                <div 
                  key={key}
                  className={`plan-card ${plan.popular ? 'popular' : ''} ${selectedPlan === key ? 'selected' : ''}`}
                  onClick={() => setSelectedPlan(key)}
                >
                  {plan.popular && <div className="popular-badge">Most Popular</div>}
                  <h3>{plan.name}</h3>
                  <div className="price-section">
                    <span className="price">{plan.price}</span>
                    <span className="period">{plan.period}</span>
                  </div>
                  <div className="original-price">
                    <span>₹{plan.originalPrice}</span>
                    <span className="savings">{plan.savings}</span>
                  </div>
                  <ul className="plan-features">
                    <li>✓ Unlimited Doctor Consultations</li>
                    <li>✓ 24/7 Pediatrician Support</li>
                    <li>✓ Personalized Diet Plans</li>
                    <li>✓ Advanced Growth Tracking</li>
                    <li>✓ Premium Community Access</li>
                  </ul>
                  <button className="select-plan-btn">
                    {selectedPlan === key ? 'Selected' : 'Select Plan'}
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Features Comparison */}
          <div className="features-comparison">
            <h2>Free vs Premium Features</h2>
            <p>See how Premium enhances your parenting experience</p>
            
            <div className="comparison-table">
              {features.map((category, index) => (
                <div key={index} className="category-section">
                  <h3 className="category-title">{category.category}</h3>
                  <div className="features-list">
                    {category.items.map((feature, featureIndex) => (
                      <div key={featureIndex} className="feature-row">
                        <div className="feature-name">{feature.name}</div>
                        <div className="feature-free">
                          <span>{feature.free}</span>
                        </div>
                        <div className="feature-premium">
                          <span>{feature.premium}</span>
                          <span className="premium-badge">PREMIUM</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Testimonials */}
          <div className="testimonials-section">
            <h2>What Our Premium Members Say</h2>
            <div className="testimonials-grid">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="testimonial-card">
                  <div className="testimonial-content">
                    <p>"{testimonial.text}"</p>
                  </div>
                  <div className="testimonial-author">
                    <div className="author-info">
                      <h4>{testimonial.name}</h4>
                      <span>{testimonial.plan}</span>
                    </div>
                    <div className="rating">
                      {'⭐'.repeat(testimonial.rating)}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* FAQ Section */}
          <div className="faq-section">
            <h2>Frequently Asked Questions</h2>
            <div className="faq-grid">
              <div className="faq-item">
                <h4>Can I cancel my subscription anytime?</h4>
                <p>Yes, you can cancel your subscription at any time. Your premium features will remain active until the end of your billing period.</p>
              </div>
              <div className="faq-item">
                <h4>Is there a free trial?</h4>
                <p>We offer a 7-day free trial for all premium plans. No credit card required to start your trial.</p>
              </div>
              <div className="faq-item">
                <h4>How do doctor consultations work?</h4>
                <p>You can chat with certified pediatricians and gynecologists 24/7 through our app. Video consultations can be scheduled as needed.</p>
              </div>
              <div className="faq-item">
                <h4>Can I switch between plans?</h4>
                <p>Yes, you can upgrade or downgrade your plan at any time. Changes will take effect at the start of your next billing cycle.</p>
              </div>
            </div>
          </div>

          {/* Final CTA */}
          <div className="final-cta">
            <div className="cta-content">
              <h2>Start Your Premium Journey Today</h2>
              <p>Join thousands of parents who trust Aararo 360 for expert guidance and support</p>
              <div className="cta-buttons">
                <button className="cta-btn primary">Start 7-Day Free Trial</button>
                <button className="cta-btn secondary">View All Features</button>
              </div>
              <p className="guarantee">🔒 100% Secure Payment • 🎯 7-Day Money Back Guarantee</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Premium;