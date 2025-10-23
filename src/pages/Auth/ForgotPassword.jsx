import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './auth.css';  // Same folder


const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [touched, setTouched] = useState(false);

  const validateEmail = (email) => {
    if (!email) return 'Email is required';
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return 'Please enter a valid email address';
    return '';
  };

  const handleBlur = () => {
    setTouched(true);
    const emailError = validateEmail(email);
    setError(emailError);
  };

  const handleChange = (e) => {
    setEmail(e.target.value);
    // Clear error when user starts typing
    if (touched && error) {
      const emailError = validateEmail(e.target.value);
      setError(emailError);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setTouched(true);
    
    const emailError = validateEmail(email);
    setError(emailError);

    if (!emailError) {
      // Simulate password reset process
      setIsSubmitted(true);
    }
  };

  if (isSubmitted) {
    return (
      <div className="auth-container">
        <div className="auth-card">
          <div className="auth-header">
            <div className="success-icon">✓</div>
            <h1 className="auth-title">Check Your Email</h1>
            <p className="auth-subtitle">
              We've sent password reset instructions to <strong>{email}</strong>
            </p>
          </div>
          
          <div className="success-actions">
            <Link to="/signin" className="auth-button primary">
              Return to Sign In
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="auth-container">
      <div className="auth-card">
        <div className="auth-header">
          <h1 className="auth-title">Reset Your Password</h1>
          <p className="auth-subtitle">Enter your email address and we'll send you reset instructions</p>
        </div>

        <form className="auth-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="email" className="form-label">Email Address</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={handleChange}
              onBlur={handleBlur}
              className={`form-input ${error && touched ? 'error' : ''}`}
              placeholder="Enter your email address"
            />
            {error && touched && <span className="error-message">{error}</span>}
          </div>

          <button type="submit" className="auth-button primary">
            Send Reset Instructions
          </button>
        </form>

        <div className="auth-footer">
          <Link to="/signin" className="auth-link">
            ← Back to Sign In
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;