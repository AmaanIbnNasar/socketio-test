import React, { Dispatch, useContext } from 'react';
import { initialState } from './reducers/RootReducer';
import { Actions, IState } from './types/StateTypes';

export type StateContextType = [IState, Dispatch<Actions.AllActions>];

const StateContext = React.createContext<StateContextType>([
  initialState,
  () => null,
]);

export const useAppState = () => useContext(StateContext)[0];
export const useAppDispatch = () => useContext(StateContext)[1];

export default StateContext;
