import React, {
  useCallback, useEffect, useState,
} from 'react';
import { useSocket } from '../api/api';
import CentreBox from '../components/CentreBox';
import Chat from '../components/Chat';
import { useAppState } from '../state/StateContext';

function LandingPage() {
  const { socket: { socket } } = useAppState();
  const { user } = useAppState();
  const username = user.userName;
  const [data] = useSocket(socket, 'FromAPI');
  const [userMessage] = useSocket(socket, 'chatMessage');
  const [joined, setJoined] = useState(false);
  const handleInviteAccepted = useCallback(() => {
    setJoined(true);
  }, []);

  const handleJoinChat = useCallback(() => {
    socket.emit('SEND_JOIN_REQUEST');
  }, []);

  useEffect(() => {
    socket.emit('USER_ONLINE', username);

    socket.on('JOIN_REQUEST_ACCEPTED', handleInviteAccepted);

    return () => {
      socket.off('JOIN_REQUEST_ACCEPTED', handleInviteAccepted);
    };
  }, [socket, username, handleInviteAccepted]);
  return (
    <>
      <div>
        {!joined ? (
          <CentreBox>
            <p>Click the button to send a request to join chat!</p>
            <button type="button" onClick={handleJoinChat}>
              Join Chat
            </button>
          </CentreBox>
        ) : (
          <Chat key="chat" />
        )}
      </div>
      <div className="container">
        {data}
      </div>
      <div>
        {userMessage}
      </div>
    </>
  );
}

export default LandingPage;
