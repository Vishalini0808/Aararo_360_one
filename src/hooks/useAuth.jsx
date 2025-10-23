// src/hooks/useAuth.js
import { useState, useEffect } from 'react';

export const useAuth = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    checkAuthStatus();
  }, []);

  const checkAuthStatus = () => {
    const userData = localStorage.getItem('aararo_user');
    if (userData) {
      setIsLoggedIn(true);
      setUser(JSON.parse(userData));
    }
  };

  const login = (userData) => {
    localStorage.setItem('aararo_user', JSON.stringify(userData));
    setIsLoggedIn(true);
    setUser(userData);
  };

  const logout = () => {
    localStorage.removeItem('aararo_user');
    setIsLoggedIn(false);
    setUser(null);
  };

  return { isLoggedIn, user, login, logout, checkAuthStatus };
};