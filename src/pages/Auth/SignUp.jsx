import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const SignUp = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const navigate = useNavigate();

  const validateField = (name, value) => {
    switch (name) {
      case 'name':
        if (!value.trim()) return 'Full name is required';
        if (value.trim().length < 2) return 'Name must be at least 2 characters';
        return '';
      
      case 'email':
        if (!value) return 'Email is required';
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) return 'Please enter a valid email address';
        return '';
      
      case 'password':
        if (!value) return 'Password is required';
        if (value.length < 6) return 'Password must be at least 6 characters';
        return '';
      
      case 'confirmPassword':
        if (!value) return 'Please confirm your password';
        if (value !== formData.password) return 'Passwords do not match';
        return '';
      
      default:
        return '';
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    // Validate field on change if it's been touched
    if (touched[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: validateField(name, value)
      }));
    }
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    setTouched(prev => ({
      ...prev,
      [name]: true
    }));
    setErrors(prev => ({
      ...prev,
      [name]: validateField(name, value)
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Mark all fields as touched
    const allTouched = Object.keys(formData).reduce((acc, key) => {
      acc[key] = true;
      return acc;
    }, {});
    setTouched(allTouched);

    // Validate all fields
    const newErrors = {};
    Object.keys(formData).forEach(key => {
      newErrors[key] = validateField(key, formData[key]);
    });
    setErrors(newErrors);

    // Check if form is valid
    const isValid = Object.values(newErrors).every(error => !error);
    
    if (isValid) {
      if (isValid) {
  const userData = {
    name: formData.name,
    email: formData.email,
    password: formData.password
  };

  fetch("http://localhost:8080/api/users/signup", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(userData)
  })
  .then(async (res) => {
    if (!res.ok) {
      const message = await res.text();
      throw new Error(message);
    }
    return res.json();
  })
  .then(data => {
    localStorage.setItem('aararo_user', JSON.stringify({
      id: data.id,
      name: data.name,
      email: data.email,
      joinDate: new Date().toISOString()
    }));
    alert("Account created successfully! Welcome to Aararo 360°");
    navigate('/');
  })
  .catch(err => {
    alert("Signup failed: " + err.message);
  });
}

      // Store user data in localStorage (simulating backend)
      const userData = {
        name: formData.name,
        email: formData.email,
        joinDate: new Date().toISOString()
      };
      localStorage.setItem('aararo_user', JSON.stringify(userData));
      
      // Show success message and redirect
      alert('Account created successfully! Welcome to Aararo 360°');
      navigate('/');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-600 to-blue-600 py-8 px-4">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md p-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-3">Create Your Account</h1>
          <p className="text-gray-600 text-sm">
            Join Aararo 360° for personalized pregnancy and parenting support
          </p>
        </div>

        <form className="space-y-6" onSubmit={handleSubmit}>
          <div className="space-y-2">
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
              Full Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              onBlur={handleBlur}
              className={`w-full px-4 py-3 border-2 rounded-lg focus:outline-none focus:ring-2 transition-all ${
                errors.name 
                  ? 'border-red-500 focus:ring-red-200' 
                  : touched.name && !errors.name 
                  ? 'border-green-500 focus:ring-green-200'
                  : 'border-gray-300 focus:ring-blue-200 focus:border-blue-500'
              }`}
              placeholder="Enter your full name"
            />
            {errors.name && (
              <span className="text-red-500 text-sm flex items-center gap-1">
                <span>⚠</span> {errors.name}
              </span>
            )}
            {touched.name && !errors.name && (
              <span className="text-green-600 text-sm flex items-center gap-1">
                <span>✓</span> Name looks good
              </span>
            )}
          </div>

          <div className="space-y-2">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              onBlur={handleBlur}
              className={`w-full px-4 py-3 border-2 rounded-lg focus:outline-none focus:ring-2 transition-all ${
                errors.email 
                  ? 'border-red-500 focus:ring-red-200' 
                  : touched.email && !errors.email 
                  ? 'border-green-500 focus:ring-green-200'
                  : 'border-gray-300 focus:ring-blue-200 focus:border-blue-500'
              }`}
              placeholder="Enter your email"
            />
            {errors.email && (
              <span className="text-red-500 text-sm flex items-center gap-1">
                <span>⚠</span> {errors.email}
              </span>
            )}
            {touched.email && !errors.email && (
              <span className="text-green-600 text-sm flex items-center gap-1">
                <span>✓</span> Valid email
              </span>
            )}
          </div>

          <div className="space-y-2">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              onBlur={handleBlur}
              className={`w-full px-4 py-3 border-2 rounded-lg focus:outline-none focus:ring-2 transition-all ${
                errors.password 
                  ? 'border-red-500 focus:ring-red-200' 
                  : touched.password && !errors.password 
                  ? 'border-green-500 focus:ring-green-200'
                  : 'border-gray-300 focus:ring-blue-200 focus:border-blue-500'
              }`}
              placeholder="Create a password (min. 6 characters)"
            />
            {errors.password && (
              <span className="text-red-500 text-sm flex items-center gap-1">
                <span>⚠</span> {errors.password}
              </span>
            )}
            {touched.password && !errors.password && (
              <span className="text-green-600 text-sm flex items-center gap-1">
                <span>✓</span> Password is strong
              </span>
            )}
          </div>

          <div className="space-y-2">
            <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">
              Confirm Password
            </label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              onBlur={handleBlur}
              className={`w-full px-4 py-3 border-2 rounded-lg focus:outline-none focus:ring-2 transition-all ${
                errors.confirmPassword 
                  ? 'border-red-500 focus:ring-red-200' 
                  : touched.confirmPassword && !errors.confirmPassword 
                  ? 'border-green-500 focus:ring-green-200'
                  : 'border-gray-300 focus:ring-blue-200 focus:border-blue-500'
              }`}
              placeholder="Confirm your password"
            />
            {errors.confirmPassword && (
              <span className="text-red-500 text-sm flex items-center gap-1">
                <span>⚠</span> {errors.confirmPassword}
              </span>
            )}
            {touched.confirmPassword && !errors.confirmPassword && (
              <span className="text-green-600 text-sm flex items-center gap-1">
                <span>✓</span> Passwords match
              </span>
            )}
          </div>

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white py-3 px-4 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transform hover:-translate-y-0.5 transition-all duration-200 shadow-lg hover:shadow-xl"
          >
            Create Account
          </button>
        </form>

        <div className="mt-8 text-center border-t border-gray-200 pt-6">
          <p className="text-gray-600 text-sm">
            Already have an account?{' '}
            <Link to="/signin" className="text-purple-600 font-semibold hover:text-purple-700 hover:underline">
              Sign In
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;