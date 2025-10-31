import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./auth.css";

const VerifyOTP = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const email = location.state?.email; // email passed from Forgot Password

  const [otp, setOtp] = useState("");
  const [error, setError] = useState("");

  const handleVerify = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const res = await fetch("http://localhost:8080/api/auth/verify-otp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, otp }),
      });

      const message = await res.text(); // <-- Read response text

      if (message.includes("OTP Verified")) {
        navigate("/reset-password", { state: { email } });
      } else {
        setError("❌ Incorrect or Expired OTP. Try again.");
      }

    } catch (err) {
      setError("❌ Server Error. Try Again Later.");
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <h1 className="auth-title">Enter OTP</h1>
        <p className="auth-subtitle">We sent a 6-digit code to <b>{email}</b></p>

        <form className="auth-form" onSubmit={handleVerify}>
          <input
            type="text"
            className="form-input"
            placeholder="Enter OTP"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
            required
          />

          {error && <p className="error-message">{error}</p>}

          <button className="auth-button primary" type="submit">
            Verify OTP
          </button>
        </form>
      </div>
    </div>
  );
};

export default VerifyOTP;