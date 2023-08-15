'use client';
import { useState } from 'react';
import Cookies from 'js-cookie';
import { useSetRecoilState } from 'recoil';
import { loggedInState } from '@/store/auth';

interface LoginProps {
  onLoginSuccess: () => void;
}

/**
 * Login component for user authentication.
 *
 * @param {Function} onLoginSuccess - Callback function to be executed on successful login.
 */
const Login: React.FC<LoginProps> = ({ onLoginSuccess }) => {
  const setLoggedIn = useSetRecoilState(loggedInState);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  /**
   * Handles the login process.
   * Sets the loggedIn state to true,
   * sets the loggedIn cookie,
   * and executes the onLoginSuccess callback.
   */
  const handleLogin = () => {
    if (username === 'username' && password === 'password') {
      setLoggedIn(true);
      Cookies.set('loggedIn', 'true', { secure: true, sameSite: 'strict' });
      onLoginSuccess();
    }
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center p-4">
      <div className="text-center w-full sm:w-3/4 md:w-2/3 lg:w-1/2 xl:w-1/3 2xl:max-w-screen-md">
        <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl mb-4">
          Welcome to cat Dojo
        </h1>
        <input
          type="text"
          placeholder="UserName"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="w-full mb-2 p-2 sm:p-3 border rounded"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full mb-2 p-2 sm:p-3 border rounded"
        />
        <button
          onClick={handleLogin}
          className="w-full px-4 py-2 mt-2 bg-green-500 text-white rounded"
        >
          Login
        </button>
      </div>
    </div>
  );
};

export default Login;
