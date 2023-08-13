import React from 'react';
import Logout from './Logout';

interface LogoutProps {
  onLogout: () => void;
}

const HomePage: React.FC<LogoutProps> = ({ onLogout }) => {
  return (
    <div>
      HomePage
      <Logout onLogout={() => onLogout()} />
    </div>
  );
};

export default HomePage;
