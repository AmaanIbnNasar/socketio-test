import { Reducer } from 'react';
import socketIOClient from 'socket.io-client';
import { BASE_URL } from '../../api/api';
import { Actions, ISocketState } from '../types/StateTypes';

export const initialSocketState: ISocketState = {
  socket: socketIOClient(BASE_URL).connect(),
};

const socketReducer: Reducer<ISocketState, Actions.AllActions> = (state, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default socketReducer;
