import { useState, useEffect } from 'react';
import { Socket } from 'socket.io-client';

export const BASE_URL = 'http://localhost:3001';

export const useApi = (endpoint: string) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        const resp = await (fetch(BASE_URL + endpoint));
        if (!(resp.status >= 200 && resp.status < 300)) {
          throw new Error(`status code: ${resp.status}`);
        }
        const apiData = await resp.json();
        setData(apiData);
      } catch (err) {
        console.log(err);
      }
    })();
  }, [endpoint]);
  return [data, setData];
};

export const useSocket = (socket: Socket, socketMessage: string) => {
  const [data, setData] = useState(null);
  useEffect(() => {
    socket.connect();
    socket.on(socketMessage, setData);
    console.log(socketMessage, data);
    return () => {
      socket.disconnect();
    };
  });
  return [data];
};
