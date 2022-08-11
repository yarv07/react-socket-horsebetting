import styled from 'styled-components';
import { HorseIcon } from '../icons';

const Container = styled.div`
  display: flex;
  jastify-content: center;
`;

const Heading = styled.h4`
  margin-bottom: 15px;
`;

export const Horse = ({ horseId }) => {
  return (
    <Container>
      <Heading>{horseId}</Heading>
      <HorseIcon />
    </Container>
  );
};
