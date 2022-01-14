import { Reducer } from 'react';
import { Actions, IUserState } from '../types/StateTypes';

export const initialUserState = {
  userName: null,
};

const userReducer : Reducer<IUserState, Actions.AllActions> = (state, action) => {
  switch (action.type) {
    case 'USER:SET_NAME':
      return {
        ...state,
        userName: action.userName,
      };
    default:
      return state;
  }
};

export default userReducer;
