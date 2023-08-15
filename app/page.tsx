'use client';
import MainPage from '../components';
import { RecoilRoot } from 'recoil';

/**
 * Renders the main application component.
 *
 * @returns {JSX.Element} The rendered application component.
 */
function App() {
  return (
    // Wrap the entire application with RecoilRoot for state management
    <RecoilRoot>
      {/* Render the main page */}
      <MainPage />
    </RecoilRoot>
  );
}

export default App;
