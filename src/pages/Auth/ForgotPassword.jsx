import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './auth.css';

const ForgotPassword = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const res = await fetch("http://localhost:8080/api/auth/forgot-password", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }), // ✅ Send correctly as object
      });

      if (!res.ok) {
        throw new Error("Email not found");
      }

      navigate("/verify-otp", { state: { email } }); // ✅ Move to OTP screen

    } catch (err) {
      setError("❌ Email Not Found");
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <h1 className="auth-title">Reset Your Password</h1>
        <p className="auth-subtitle">Enter your email to receive OTP</p>

        <form className="auth-form" onSubmit={handleSubmit}>
          <input
            type="email"
            className="form-input"
            placeholder="Enter your registered email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          {error && <p className="error-message">{error}</p>}

          <button className="auth-button primary" type="submit">
            Send OTP
          </button>
        </form>

        <div className="auth-footer">
          <Link to="/signin" className="auth-link">← Back to Sign In</Link>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;