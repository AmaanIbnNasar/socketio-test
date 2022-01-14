import React from 'react';
import { useSocket } from '../api/api';
import { useAppState } from '../state/StateContext';

const Chat: React.FC = () => {
  const { socket: { socket } } = useAppState();
  const [chatMessage] = useSocket(socket, 'chatMessage');
  console.log(chatMessage);
  return (
    <div className="container">
      <div className="card">
        <h1 className="card-title p-3">Chat Window</h1>
        <div className="card-body">
          <ul className="list-group list-group-flush">
            <li className="list-group-item">An item</li>
            <li className="list-group-item">An item 2</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Chat;
