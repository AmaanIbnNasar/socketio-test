import { useState, useEffect } from 'react';
import socketIOClient from 'socket.io-client';

export const baseUrl = 'http://localhost:3001';

export const useApi = (endpoint: string) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        const resp = await (fetch(baseUrl + endpoint));
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

export const useSocket = (socketMessage: string) => {
  const [data, setData] = useState(null);
  useEffect(() => {
    const socket = socketIOClient(baseUrl);
    socket.on(socketMessage, (resp) => {
      setData(resp);
    });
  }, [socketMessage]);
  return [data];
};
