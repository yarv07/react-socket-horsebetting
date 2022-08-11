import { useEffect } from 'react';
import { io } from 'socket.io-client';

const socket = io('http://localhost:3002', { autoConnect: false });
const connect = () => socket.connect();
const disconnect = () => socket.disconnect();
const start = () => socket.emit('start');

export const useSocket = (onUpdate, startOnMount) => {
  useEffect(() => {
    if (!startOnMount) return;
    connect();
  }, [startOnMount]);

  socket.on('ticker', (data) => {
    onUpdate(data);
  });

  return {
    connect,
    disconnect,
    start,
  };
};
