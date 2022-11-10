import React from 'react';
import { Container, Circle, CircleText } from './styles';

const Main: React.FC = () => {
  return(
    <Container>
      <Circle>
        <CircleText>
          Logado
        </CircleText>
      </Circle>
    </Container>
  );
}

export default Main;