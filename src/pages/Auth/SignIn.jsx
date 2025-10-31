import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./auth.css";

const SignIn = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [submitError, setSubmitError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("http://localhost:8080/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!res.ok) throw new Error("Invalid Email or Password");

      const user = await res.json();
      localStorage.setItem("aararo_user", JSON.stringify(user));

      navigate("/");

    } catch (error) {
      setSubmitError("Invalid Email or Password ❌");
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <h1 className="auth-title">Sign In</h1>

        {submitError && <p className="error-message">{submitError}</p>}

        <form className="auth-form" onSubmit={handleSubmit}>
          <input type="email" name="email" placeholder="Email Address"
            className="form-input" onChange={handleChange} required />

          <input type="password" name="password" placeholder="Password"
            className="form-input" onChange={handleChange} required />

          <button className="auth-button primary" type="submit">Sign In</button>
        </form>

        <div className="auth-footer">
          <Link to="/forgot-password" className="forgot-link">Forgot Password?</Link>
          <p>Don't have an account? <Link className="auth-link" to="/signup">Create Account</Link></p>
        </div>
      </div>
    </div>
  );
};

export default SignIn;