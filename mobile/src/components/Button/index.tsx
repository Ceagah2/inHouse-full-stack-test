import React from 'react';

import { Container, ButtonText } from './styles';

interface ButtonProps {
  onPress(): void;
  text: string;
}

const Button = (props:ButtonProps) => {
  return(
    <Container onPress={() => props.onPress()}>
      <ButtonText>
        {props.text}
      </ButtonText>
    </Container>
  );
}

export default Button;