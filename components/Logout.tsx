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
      className="mt-4 w-full sm:w-auto px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
    >
      Logout
    </button>
  );
};

export default Logout;
