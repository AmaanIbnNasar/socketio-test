import { Reducer } from 'react';
import { Actions, IState } from '../types/StateTypes';
import socketReducer, { initialSocketState } from './SocketReducer';
import userReducer, { initialUserState } from './UserReducer';

export const initialState : IState = {
  user: initialUserState,
  socket: initialSocketState,
};

const rootReducer: Reducer<IState, Actions.AllActions> = (state, action) => ({
  user: userReducer(state.user, action),
  socket: socketReducer(state.socket, action),
});

export default rootReducer;
