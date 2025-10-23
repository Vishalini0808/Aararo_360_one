import React from 'react';
import '../../pages/Styles/settings.css';

const PremiumMembership = () => {
  const plans = [
    {
      name: 'Free',
      price: '$0',
      period: 'forever',
      features: [
        'Basic pregnancy tracking',
        'Community access',
        'Weekly tips',
        'Standard support'
      ],
      buttonText: 'Current Plan',
      buttonVariant: 'secondary'
    },
    {
      name: 'Premium Mom',
      price: '$9.99',
      period: 'per month',
      features: [
        'Advanced tracking & analytics',
        'Personalized nutrition plans',
        '24/7 expert support',
        'Meditation & wellness guides',
        'Partner involvement tools'
      ],
      buttonText: 'Upgrade Now',
      buttonVariant: 'primary',
      popular: true
    },
    {
      name: 'Aararo+',
      price: '$19.99',
      period: 'per month',
      features: [
        'Everything in Premium Mom',
        'Family package (up to 5 members)',
        'Priority 1-on-1 coaching',
        'Early access to new features',
        'Customized growth plans'
      ],
      buttonText: 'Go Premium+',
      buttonVariant: 'gradient'
    }
  ];

  return (
    <div className="premium-page">
      <div className="page-header">
        <h1>Premium Membership</h1>
        <p>Choose the plan that's right for your parenting journey</p>
      </div>

      <div className="plans-container">
        {plans.map((plan, index) => (
          <div key={index} className={`plan-card ${plan.popular ? 'popular' : ''}`}>
            {plan.popular && <div className="popular-badge">Most Popular</div>}
            
            <div className="plan-header">
              <h3 className="plan-name">{plan.name}</h3>
              <div className="plan-price">
                <span className="price">{plan.price}</span>
                <span className="period">/{plan.period}</span>
              </div>
            </div>

            <ul className="plan-features">
              {plan.features.map((feature, featureIndex) => (
                <li key={featureIndex} className="feature">
                  <span className="feature-icon">✓</span>
                  {feature}
                </li>
              ))}
            </ul>

            <button className={`btn ${plan.buttonVariant} full-width`}>
              {plan.buttonText}
            </button>
          </div>
        ))}
      </div>

      <div className="premium-benefits">
        <h2>Why Go Premium?</h2>
        <div className="benefits-grid">
          <div className="benefit">
            <div className="benefit-icon">👶</div>
            <h4>Personalized Tracking</h4>
            <p>Advanced analytics for your baby's growth and development</p>
          </div>
          <div className="benefit">
            <div className="benefit-icon">🍎</div>
            <h4>Nutrition Plans</h4>
            <p>Customized diet plans for pregnancy and postpartum</p>
          </div>
          <div className="benefit">
            <div className="benefit-icon">🧘</div>
            <h4>Wellness Guides</h4>
            <p>Meditation and exercise routines for moms</p>
          </div>
          <div className="benefit">
            <div className="benefit-icon">👨‍👩‍👧</div>
            <h4>Family Support</h4>
            <p>Tools to involve partners and family members</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PremiumMembership;