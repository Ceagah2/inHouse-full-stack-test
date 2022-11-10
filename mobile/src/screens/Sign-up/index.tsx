import React, { useState } from 'react'
import { Alert } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import Button from '../../components/Button'
import Input from '../../components/Input'
import { Api } from '../../services/api'
import BasketIcon from '../../assets/basket.png'
import PhoneIcon from '../../assets/phone.png'
import MailIcon from '../../assets/mail.png'
import UserIcon from '../../assets/user.png'
import LockIcon from '../../assets/lock.png'
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
  FooterText,
} from './styles'

const SignUp: React.FC = () => {
  const [checkedPassword, setCheckedPassword] = useState<boolean>()
  const [name, setName] = useState<string>()
  const [password, setPassword] = useState<string>()
  const [confirmPassword, setConfirmPassword] = useState<string>()
  const [email, setEmail] = useState<string>()
  const [phone, setPhone] = useState<string>()

  const CheckPassword = () => {
    if (password !== confirmPassword) {
      Alert.alert('Warning', 'Your password does not match. Please verify.')
      setCheckedPassword(false)
    } else {
      setCheckedPassword(true)
    }
  }

  const handleNewUser = async () => {
    const data = {
      name,
      password,
      email,
      phone,
    }
    CheckPassword()
    if (checkedPassword === true) {
      try {
        await Api.post('/users', data)
        Alert.alert('Successfully', 'User successfully created.')
        navigation.navigate('SignIn')
      } catch (error) {
        console.log(JSON.stringify(error))
      }
    }
  }

  const navigation = useNavigation()
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
          value={name}
          onChangeText={(n: string) => setName(n)}
          type="text"
        />
        <Input
          id="email"
          span="Email"
          inputImage={MailIcon}
          name="email"
          value={email}
          onChangeText={(e: string) => setEmail(e)}
          type="email"
        />
        <Input
          id="phone"
          span="Telefone"
          inputImage={PhoneIcon}
          name="phone"
          value={phone}
          onChangeText={(p: number) => setPhone(p)}
          keyboardType="phone-pad"
        />
        <Input
          id="password"
          span="Senha"
          inputImage={LockIcon}
          name="password"
          value={password}
          onChangeText={(p: string) => setPassword(p)}
          secureTextEntry={true}
        />
        <Input
          id="confirmPassword"
          span="Confirme a senha"
          inputImage={LockIcon}
          name="confirmPassword"
          value={confirmPassword}
          onChangeText={(cp: string) => setConfirmPassword(cp)}
          secureTextEntry={true}
        />
        <Button text="Criar Conta" onPress={() => handleNewUser()} />
      </FormContainer>
      <Footer>
        <FooterText>Já tem uma conta?</FooterText>
        <FooterLink onPress={() => navigation.navigate('SignIn')}>Acesse aqui</FooterLink>
      </Footer>
    </Container>
  )
}

export default SignUp
