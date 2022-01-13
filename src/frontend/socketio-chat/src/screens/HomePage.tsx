import React from 'react';
import { useSocket } from '../api/api';

function HomePage() {
  const [data] = useSocket('fromAPI');
  return (
    <div className="container">
      {data}
    </div>
  );
}

export default HomePage;
