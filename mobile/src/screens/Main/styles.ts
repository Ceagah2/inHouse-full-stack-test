import styled from 'styled-components/native';
import theme from '../../themes'
import { ResponsiveSize } from '../../utils/responsive';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;
export const Circle = styled.View`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background-color: ${theme.colors.background}
`;
export const CircleText = styled.Text`
  font-family: ${theme.weights.logged};
  font-size: ${ResponsiveSize(20)};
  color: ${theme.colors.white};
`;
CircleText.defaultProps = CircleText.defaultProps || {};
CircleText.defaultProps.maxFontSizeMultiplier = 1.2;