import styled from 'styled-components/native';
import theme from '../../themes'

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const Button = styled.TouchableOpacity`
  width: 150px;
  height: 50px;
  border: 1px solid #75165e;
  background: ${theme.colors.white};
  justify-content: center;
  align-items: center;
  border-radius: 20px;
`;
export const ButtonText = styled.Text``;
