import { useMemo } from 'react';
import styled from 'styled-components';
import { Horse } from './Horse';
import { Track } from './Track';

const MAX_DISTANCE = 1000;
const horseWidth = 50;

const HorseContainer = styled.div`
  display: flex;
  width: ${horseWidth}px;
  height: 50px;
`;

export const Race = ({ horseId, distance }) => {
  const translateDistance = useMemo(
    () => (distance / MAX_DISTANCE) * 100,
    [distance]
  );

  return (
    <div>
      {/* <Track /> */}
      <HorseContainer
        style={{
          transform: `translateX(calc(${translateDistance}vw - ${
            horseWidth + 5
          }px))`,
        }}
      >
        <Horse horseId={horseId} />
      </HorseContainer>
    </div>
  );
};
