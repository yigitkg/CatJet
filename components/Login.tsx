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
    // Burada sabit kullanıcı adı ve şifreyi kontrol edin
    if (username === 'kullanici' && password === 'sifre') {
      // Giriş başarılı
      setLoggedIn(true);
      Cookies.set('loggedIn', 'true'); // Oturum anahtarını çereze kaydet
      onLoginSuccess();
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center">
      {loggedIn ? (
        <div className="text-center">
          <p>Hoş geldiniz, {username}!</p>
        </div>
      ) : (
        <div className="text-center">
          <input
            type="text"
            placeholder="Kullanıcı Adı"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="mb-2 p-2 border rounded"
          />
          <input
            type="password"
            placeholder="Şifre"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="mb-2 p-2 border rounded"
          />
          <button
            onClick={handleLogin}
            className="px-4 py-2 bg-green-500 text-white rounded"
          >
            Giriş yap
          </button>
        </div>
      )}
    </div>
  );
};

export default Login;
