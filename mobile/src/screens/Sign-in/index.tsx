import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import HeaderImg from '../../assets/bike-boy.png';
import UserIcon from '../../assets/user.png';
import LockIcon from '../../assets/lock.png';
import Button from '../../components/Button';
import Input from '../../components/Input';
import { Api } from '../../services/api';
import { Platform } from 'react-native';
import React , { useState }from 'react';
import { 
  Container,
  Header,
  HeaderImage,
  LoginForm,
  FormTitle,
  InputContainer,
  Footer,
  FooterText,
  FooterLink
} from './styles';

const SignIn: React.FC = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')

  const handleLogin = async () => {
    const data = {email, password}
    try{
      const response = await Api.post('/sessions', {data});
      const jsonValue = JSON.stringify(response)
      await AsyncStorage.setItem('@userData', jsonValue)
    } catch (err) {
      console.log(JSON.stringify(err))
    }
  }
  
  return(
    <Container  behavior={Platform.OS === "ios" ? "padding" : "height"}>
      <Header>
        <HeaderImage source={HeaderImg} />
      </Header>
      <LoginForm>
          <FormTitle>Login</FormTitle>
        <InputContainer>
          <Input 
            id="email"
            span="Email"
            inputImage={UserIcon}
            name="email"
            value={email}
            onChangeText={(e:string) => setEmail(e)}
            type="email"
            textContentType ="emailAddress"
          />
          <Input 
            id ="password"
            span="Senha"
            inputImage={LockIcon}
            name="password"
            value={password}
            onChangeText={(p:string) => setPassword(p)}
            type="password"
            secureTextEntry 
          />
        </InputContainer>
        <Button text='Acessar' onPress={() => handleLogin()} />
      </LoginForm>
      <Footer>
          <FooterText>Não tem uma conta?</FooterText>
          <FooterLink onPress={() => navigation.navigate('SignUp')}>Crie aqui!</FooterLink>
      </Footer>
    </Container>
  );
}

export default SignIn;