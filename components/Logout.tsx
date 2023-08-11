'use client'; // This is a client component 👈🏽
import Cookies from 'js-cookie';

interface LogoutProps {
  onLogout: () => void;
}

const Logout: React.FC<LogoutProps> = ({ onLogout }) => {
  const handleLogout = () => {
    Cookies.remove('loggedIn');
    onLogout();
  };

  return (
    <button
      onClick={handleLogout}
      className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
    >
      Çıkış yap
    </button>
  );
};

export default Logout;
