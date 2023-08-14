'use client';
import React, { useState, useEffect } from 'react';
import Cookies from 'js-cookie';
import Login from './Login';
import HomePage from './HomePage';
import { loggedInState } from '@/store/auth';
import { useRecoilState } from 'recoil'; // <-- Importing the hook here

const MainPage: React.FC = () => {
  const [loggedIn, setLoggedIn] = useRecoilState(loggedInState);

  useEffect(() => {
    setLoggedIn(!!Cookies.get('loggedIn'));
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
