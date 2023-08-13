'use client';
import React, { useState, useEffect } from 'react';
import Cookies from 'js-cookie';
import Login from './Login';
import HomePage from './HomePage';

const MainPage: React.FC = () => {
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    setLoggedIn(!!Cookies.get('loggedIn'));
  }, []);

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      {loggedIn ? (
        <HomePage onLogout={() => setLoggedIn(false)} />
      ) : (
        <Login onLoginSuccess={() => setLoggedIn(true)} />
      )}
    </div>
  );
};

export default MainPage;
