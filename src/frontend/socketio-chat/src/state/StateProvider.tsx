import React, { useReducer } from 'react';
import rootReducer, { initialState } from './reducers/RootReducer';
import StateContext from './StateContext';

const StateProvider: React.FC = ({ children }) => (
  <StateContext.Provider value={useReducer(rootReducer, initialState)}>
    {children}
  </StateContext.Provider>
);

export default StateProvider;
