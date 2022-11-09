import React , {useState, useEffect}from 'react';
import { Platform } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Button from '../../components/Button';
import Input from '../../components/Input';
import HeaderImg from '../../assets/bike-boy.png';
import UserIcon from '../../assets/user.png';
import LockIcon from '../../assets/lock.png';
import CheckedIcon from '../../assets/Check.png';
import themes from '../../themes';
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
  const [checker, setChecker] = useState<boolean>();
  const [borderBottom, setBorderBottom] = useState<string>('themes.colors.black');
  const [ checkerImage, setCheckerImage ] = useState<Object>()
  const [userEmail, setUserEmail] = useState<string>('')
  const [userPassword, setUserPassword] = useState<string>('')

  useEffect(()=> {
    if(userEmail === 'carlos@gmail.com' ){
      setChecker(true)
    } else {
      setChecker(false)
    }
    if(checker === true){
      setBorderBottom('themes.colors.green');
      setCheckerImage(CheckedIcon)
    }
  },[userEmail])
  const handleSubmit = () => {
    console.log('LOGGED');
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
            borderBottom={borderBottom}
            inputImage={UserIcon}
            name="email"
            value={userEmail}
            onChangeText={(text) => setUserEmail(text)}
            type="email"
            inputCheckerImage={checkerImage}
            textContentType ="emailAddress"
          />
          <Input 
            id ="password"
            span="Senha"
            inputImage={LockIcon}
            name="password"
            value={userPassword}
            onChangeText={(text) => setUserPassword(text)}
            type="password"
            secureTextEntry 
          />
        </InputContainer>
        <Button text='Acessar' onPress={() => handleSubmit()} />
      </LoginForm>
      <Footer>
          <FooterText>Não tem uma conta?</FooterText>
          <FooterLink onPress={() => navigation.navigate('SignUp')}>Crie aqui!</FooterLink>
      </Footer>
    </Container>
  );
}

export default SignIn;