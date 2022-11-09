import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { Container, Button, ButtonText } from './styles';

const Main: React.FC = () => {
    const navigation = useNavigation();
  return(
    <Container>
      <ButtonText>
        Main Screen
      </ButtonText>
      <Button onPress={() => navigation.navigate('SignIn')}>
        <ButtonText>
          Back to Sign In
        </ButtonText>
      </Button>
    </Container>
  );
}

export default Main;