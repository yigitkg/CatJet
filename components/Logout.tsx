import Cookies from 'js-cookie';

interface LogoutProps {
  onLogout: () => void;
}

/**
 * Logout component
 *
 * @param {Object} props - The component props
 * @param {Function} props.onLogout - The logout callback function
 * @returns {JSX.Element} - The logout button component
 */
const Logout: React.FC<LogoutProps> = ({ onLogout }) => {
  /**
   * Handle logout click event
   */
  const handleLogout = () => {
    Cookies.remove('loggedIn', { secure: true });
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
