import Logout from './Logout';
import CatDisplay from '@/pages/api';

interface HomePageProps {
  onLogout: () => void;
}

const HomePage: React.FC<HomePageProps> = ({ onLogout }) => {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-slate-600">
      <div className="w-2/3 bg-gray-300 p-4 rounded-lg mb-4 shadow-md">
        <h1 className="text-xl font-bold mb-2">Home Page</h1>
        <CatDisplay />
      </div>
      <Logout onLogout={() => onLogout()} />
    </div>
  );
};

export default HomePage;
