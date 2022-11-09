import React, { useState } from 'react';
import { Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Button from '../../components/Button';
import Input from '../../components/Input'

import BasketIcon from '../../assets/basket.png';
import PhoneIcon from '../../assets/phone.png';
import MailIcon from '../../assets/mail.png';
import UserIcon from '../../assets/user.png';
import LockIcon from '../../assets/lock.png';
import CircleImage from '../../assets/header.png'
import {
  Container,
  Header,
  HeaderBackgroundImage,
  HeaderImageContainer,
  HeaderImage,
  HeaderTextContainer,
  HeaderTitle,
  HeaderText,
  FormContainer,
  Footer,
  FooterLink,
  FooterText
} from './styles';

const SignUp: React.FC = () => {
  const [newAccountData, setNewAccountData] = useState({
    userName: '',
    userEmail: '',
    userPhone: '',
    userPassword: '',
    confirmPassword: '',
  })

  const CheckPassword = ({userPassword, confirmPassword}) => {
    if(userPassword !== confirmPassword){
      Alert.alert("ATENÇÃO", "As senhas não coincidem. por favor verifique")
    }
  }

  const navigation = useNavigation();
  return (
    <Container>
      <Header>
        <HeaderBackgroundImage source={CircleImage} />
        <HeaderTextContainer>
          <HeaderTitle>Criar Conta</HeaderTitle>
          <HeaderText>Preencha o formulário abaixo</HeaderText>
        </HeaderTextContainer>
        <HeaderImageContainer>
          <HeaderImage source={BasketIcon} />
        </HeaderImageContainer>
      </Header>
      <FormContainer>
          <Input 
            id="name"
            span="Nome"
            inputImage={UserIcon}
            name="name"
            value={newAccountData.userName}
            onChangeText={() => console.log('NAME')}
            type="text"
          />
          <Input 
            id="email"
            span="Email"
            inputImage={MailIcon}
            name="email"
            value={newAccountData.userEmail}
            onChangeText={() => console.log('userEmail')}
            type="email"
          />
          <Input 
            id="phone"
            span="Telefone"
            inputImage={PhoneIcon}
            name="phone"
            value={newAccountData.userPhone}
            onChangeText={() => console.log('userPhone')}
            keyboardType="phone-pad" 
          />
          <Input 
            id="password"
            span="Senha"
            inputImage={LockIcon}
            name="password"
            value={newAccountData.userPassword}
            onChangeText={() => console.log('userPassword')}
            secureTextEntry={true}
          />
            <Input 
            id="confirmPassword"
            span="Confirme a senha"
            inputImage={LockIcon}
            name="confirmPassword"
            value={newAccountData.confirmPassword}
            onChangeText={() => console.log('confirmPassword')}
            secureTextEntry={true}
          />
        <Button text='Criar Conta' onPress={() => console.log('Post new account')} />
      </FormContainer>
      <Footer>
        <FooterText>Já tem uma conta?</FooterText>
        <FooterLink onPress={() => navigation.navigate('SignIn')}>Acesse aqui</FooterLink>
      </Footer>
    </Container>
  );
}

export default SignUp;