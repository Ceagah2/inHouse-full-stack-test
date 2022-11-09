import styled from 'styled-components/native';
import theme from '../../themes'
import { ResponsiveSize } from '../../utils/responsive';

export const Container = styled.ScrollView`
  flex: 1;
`;

export const Header = styled.View`
  width: 100%;
  background: ${theme.colors.background};
  margin-bottom: 30px;
`;
export const HeaderImage = styled.Image`
  width: 100%;
`;
export const LoginForm = styled.View`
  flex: 1;
  justify-content: space-evenly;
  align-items: center;
  margin-top: 10px;
`;
export const FormTitle = styled.Text`
  font-size: ${ResponsiveSize(20)}
  font-family: ${theme.weights.bolder};
  color: ${theme.colors.background};
`;
FormTitle.defaultProps = FormTitle.defaultProps || {};
FormTitle.defaultProps.maxFontSizeMultiplier = 1.2;

export const InputContainer = styled.View`
  margin-bottom: 30px;
`;
export const Footer = styled.View`
  width:100%;
  height: 100px;
  justify-content: center;
  flex-direction: row;
  margin-top: 20px;
`;
export const FooterText = styled.Text`
  font-size: ${ResponsiveSize(15)};
  color: ${theme.colors.span};
`;

FooterText.defaultProps = FooterText.defaultProps || {};
FooterText.defaultProps.maxFontSizeMultiplier = 1.2;

export const FooterLink = styled.Text`
  margin-left: 2px;
  color: ${theme.colors.background};
  font-size: ${ResponsiveSize(15)};
  font-family: ${theme.weights.bold};
`;

FooterLink.defaultProps = FooterLink.defaultProps || {};
FooterLink.defaultProps.maxFontSizeMultiplier = 1.2;
