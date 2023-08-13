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
    <div className="min-h-screen flex justify-center items-center">
      {loggedIn ? (
        <div className="text-center">
          <p>Welcome, {username}!</p>
        </div>
      ) : (
        <div className="text-center">
          <input
            type="text"
            placeholder="UserName"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="mb-2 p-2 border rounded"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="mb-2 p-2 border rounded"
          />
          <button
            onClick={handleLogin}
            className="px-4 py-2 bg-green-500 text-white rounded"
          >
            Login
          </button>
        </div>
      )}
    </div>
  );
};

export default Login;
