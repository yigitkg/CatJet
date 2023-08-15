import Logout from './Logout';
import CatDisplay from '@/pages/api';

interface HomePageProps {
  onLogout: () => void;
}

/**
 * HomePage component.
 *
 * @param {HomePageProps} props - The component props.
 * @param {Function} props.onLogout - The logout function.
 * @returns {ReactNode} The rendered component.
 */
const HomePage: React.FC<HomePageProps> = ({ onLogout }) => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center px-4 sm:px-8 md:px-16">
      <div className="text-center space-y-6">
        <h1 className="text-2xl sm:text-4xl md:text-6xl">
          Find your favorite Ninja!
        </h1>
        <CatDisplay />
      </div>
      <div className="mt-6">
        <Logout onLogout={() => onLogout()} />
      </div>
    </div>
  );
};

export default HomePage;
