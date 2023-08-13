'use client'; // This is a client component 👈🏽
import { useState } from 'react';
import Cookies from 'js-cookie';

interface LoginProps {
  onLoginSuccess: () => void;
}

const Login: React.FC<LoginProps> = ({ onLoginSuccess }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);

  const handleLogin = () => {
    if (username === 'username' && password === 'password') {
      setLoggedIn(true);
      Cookies.set('loggedIn', 'true');
      onLoginSuccess();
    }
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center p-4">
      {loggedIn ? (
        <div className="text-center w-full sm:w-1/2 md:w-1/3 lg:w-1/4">
          <p className="text-lg">Welcome, {username}!</p>
        </div>
      ) : (
        <div className="text-center w-full sm:w-1/2 md:w-1/3 lg:w-1/4">
          <input
            type="text"
            placeholder="UserName"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full mb-2 p-3 border rounded"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full mb-2 p-3 border rounded"
          />
          <button
            onClick={handleLogin}
            className="w-full px-4 py-2 mt-2 bg-green-500 text-white rounded"
          >
            Login
          </button>
        </div>
      )}
    </div>
  );
};

export default Login;
