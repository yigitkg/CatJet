'use client';
import React, { useState, useEffect } from 'react';
import Cookies from 'js-cookie';
import Login from './Login';
import HomePage from './HomePage';
import { loggedInState } from '@/store/auth';
import { useRecoilState } from 'recoil'; // <-- Importing the hook here

/**
 * This is the main page component.
 * It displays either the home page or the login page based on the logged in state.
 */
const MainPage: React.FC = () => {
  const [loggedIn, setLoggedIn] = useRecoilState(loggedInState);

  /**
   * useEffect hook to check if the user is logged in when the component mounts.
   * It updates the logged in state based on the 'loggedIn' cookie value.
   */
  useEffect(() => {
    setLoggedIn(Cookies.get('loggedIn') === 'true');
  }, []);

  return (
    <div className="min-h-screen flex justify-center items-center p-4 md:p-8 lg:p-16">
      {loggedIn ? (
        <HomePage onLogout={() => setLoggedIn(false)} />
      ) : (
        <Login onLoginSuccess={() => setLoggedIn(true)} />
      )}
    </div>
  );
};

export default MainPage;
