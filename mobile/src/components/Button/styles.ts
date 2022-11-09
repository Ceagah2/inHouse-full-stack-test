import styled from 'styled-components/native';
import { ResponsiveSize } from '../../utils/responsive';
import theme from '../../themes'

export const Container = styled.TouchableOpacity`
  width: 300px;
  height: 50px;
  background-color: ${theme.colors.orange};
  justify-content: center;
  align-items: center;
  border-radius: 18px;
`;


export const ButtonText = styled.Text`
  font-size: ${ResponsiveSize(15)};
  font-family: ${theme.weights.thin};
  color: ${theme.colors.white};
`;

ButtonText.defaultProps = ButtonText.defaultProps || {};
ButtonText.defaultProps.maxFontSizeMultiplier = 1.2;