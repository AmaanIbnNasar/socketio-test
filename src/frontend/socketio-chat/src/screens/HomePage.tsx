import React from 'react';
import { useSocket } from '../api/api';

function HomePage() {
  const [data] = useSocket('FromAPI');
  const [userMessage] = useSocket('chatMessage');
  return (
    <>
      <div className="container">
        {data}
      </div>
      <div>
        {userMessage}
      </div>
    </>
  );
}

export default HomePage;
