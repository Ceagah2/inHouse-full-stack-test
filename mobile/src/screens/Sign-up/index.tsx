import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { Container, Button, ButtonText } from './styles';

const SignUp: React.FC = () => {
  const navigation = useNavigation();
  return(
    <Container>
      <ButtonText>
          Sign-up Screen
      </ButtonText>
      <Button onPress={() => navigation.navigate('Main')}>
        <ButtonText>
          To Main screen
        </ButtonText>
      </Button>
    </Container>
  );
}

export default SignUp;