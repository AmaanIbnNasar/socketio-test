import React from 'react';
import { useAppState } from '../state/StateContext';
import LoginPage from './LoginPage';
import LandingPage from './OldHomePage';

const HomePage: React.FC = () => {
  const { user } = useAppState();
  console.log(user.userName);
  return (
    <div>
      {user.userName ? <LandingPage /> : <LoginPage />}
    </div>
  );
};

export default HomePage;
