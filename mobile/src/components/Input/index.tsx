import React from 'react';
import { 
  Container,
  Span,
  InputContainer,
  InputImage,
  TextInput,
  InputChecker
} from './styles';

interface InputProps {
  id: string;
  span: string;
  borderBottom?: string;
  inputImage: Object;
  name: string; 
  value: string;
  onChangeText(): void;
  type?: string;
  secureTextEntry?: boolean;
  inputCheckerImage?: Object;
  keyboardType?: string;
}

const Input = (props: InputProps) => {
  return (
    <Container>
      <Span>{props.span}</Span>
      <InputContainer borderBottom={props.borderBottom}>
        <InputImage source={props.inputImage} />
        <TextInput 
        name={props.name}
        value={props.value}
        onChangeText={props.onChangeText}
        type={props.type} 
        secureTextEntry={props.secureTextEntry}
        keyboardType={props.keyboardType}
        />
        <InputChecker source={props.inputCheckerImage}/>
      </InputContainer>
    </Container>
  );
}

export default Input;