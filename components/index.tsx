'use client';
import React, { useState } from 'react';
import Cookies from 'js-cookie';
import Login from './Login';
import Logout from './Logout';

const Entry: React.FC = () => {
  const [loggedIn, setLoggedIn] = useState(!!Cookies.get('loggedIn'));

  return (
    <div className="overflow-hidden flex justify-center items-center bg-gray-100 h-screen">
      {loggedIn ? (
        <Logout onLogout={() => setLoggedIn(false)} />
      ) : (
        <Login onLoginSuccess={() => setLoggedIn(true)} />
      )}
    </div>
  );
};

export default Entry;
