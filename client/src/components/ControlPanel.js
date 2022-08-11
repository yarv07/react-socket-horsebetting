import { useCallback, useState } from 'react';
import styled from 'styled-components';

const Button = styled.button`
  border: 2px solid black;
  border-radius: 6px;
  background-color: transparent;
  padding: 5px 10px;
  margin: 5px;
  box-shadow: 0 4px 4px 1px rgba(0, 0, 0, 0.15);
`;

const Container = styled.div`
  border: 2px solid black;
  border-radius: 6px;
  padding: 25px;
  display: flex;
  justify-content: center;
`;

export const ControlPanel = ({ start, disconnect, connect }) => {
  const [isStarted, setIsStarted] = useState(false);

  const handleStart = useCallback(() => {
    !isStarted && connect();
    start();
    setIsStarted(true);
  }, [connect, isStarted, start]);

  const handleStop = useCallback(() => {
    disconnect();
  }, [disconnect]);

  return (
    <Container>
      <Button onClick={handleStart}>
        {isStarted ? 'Restart' : 'Start'}
      </Button>
      <Button onClick={handleStop}>Stop</Button>
    </Container>
  );
};
