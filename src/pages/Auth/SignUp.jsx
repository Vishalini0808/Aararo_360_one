import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './auth.css';

const SignUp = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match ❌");
      return;
    }

    try {
      const res = await fetch("http://localhost:8080/api/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!res.ok) throw new Error(await res.text());

      alert("✅ Account created successfully!");
      navigate("/signin");

    } catch (err) {
      alert("Signup Failed: " + err.message);
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <h1 className="auth-title">Create Account</h1>

        <form className="auth-form" onSubmit={handleSubmit}>
          <input type="text" name="name" placeholder="Full Name"
            className="form-input" onChange={handleChange} required />

          <input type="email" name="email" placeholder="Email Address"
            className="form-input" onChange={handleChange} required />

          <input type="password" name="password" placeholder="Password"
            className="form-input" onChange={handleChange} required />

          <input type="password" name="confirmPassword" placeholder="Confirm Password"
            className="form-input" onChange={handleChange} required />

          <button className="auth-button primary" type="submit">
            Create Account
          </button>
        </form>

        <div className="auth-footer">
          Already have an account? <Link className="auth-link" to="/signin">Sign In</Link>
        </div>
      </div>
    </div>
  );
};

export default SignUp;