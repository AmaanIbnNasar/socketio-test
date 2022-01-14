import React from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from './screens/HomePage';
import StateProvider from './state/StateProvider';

function App() {
  return (
    <StateProvider>
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </StateProvider>
  );
}

export default App;
