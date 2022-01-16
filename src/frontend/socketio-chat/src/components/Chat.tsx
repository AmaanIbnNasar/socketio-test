import React, { SyntheticEvent, useState } from 'react';
// import { useSocket } from '../api/api';
import { useAppState } from '../state/StateContext';

const Chat: React.FC = () => {
  const [message, setMessage] = useState('');
  const [data, setData] = useState<Array<string>>([]);
  const { socket: { socket }, user } = useAppState();
  // const [chatMessage] = useSocket(socket, 'chatMessage');
  // console.log(`Chat Message: ${chatMessage}`);
  const handleMessageSubmit = (event: SyntheticEvent) => {
    event.preventDefault();
    const userMessage = `${user.userName}:${message}`;
    socket.emit('CHAT_MESSAGE', userMessage);
    setMessage('');
  };

  socket.on('CHAT_MESSAGE', (msg) => {
    setData([...data, msg]);
  });

  return (
    <div className="container-fluid">
      <div className="card">
        <h1 className="card-title p-3">Chat Window</h1>
        <div className="card-body">
          <ul className="list-group list-group-flush">
            {data.map((msg) => (
              <li className="list-group-item" key={msg}>{msg}</li>
            ))}
          </ul>
        </div>
      </div>
      <div className="container-fluid fixed-bottom">
        <form onSubmit={handleMessageSubmit}>
          <div className="row row-cols-2">
            <input id="message-input" className="form-control col-9" type="text" placeholder="Enter a message" value={message} onChange={(e) => setMessage(e.target.value)} />
            <input className="btn btn-success col-3" type="submit" value="Submit" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Chat;
