import { Socket } from 'socket.io-client';

export interface IUserState {
  userName: string | null;
}

export interface ISocketState {
  socket: Socket
}

export interface IState {
  user: IUserState,
  socket: ISocketState
}

export namespace Actions {
  export type SetNameAction = {
    type: 'USER:SET_NAME',
    userName: string
  }

  export type AllActions =
    | SetNameAction
}
