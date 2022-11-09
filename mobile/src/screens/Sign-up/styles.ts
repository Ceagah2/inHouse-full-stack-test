import { ResponsiveSize } from '../../utils/responsive';
import styled from 'styled-components/native';
import theme from '../../themes'

export const Container = styled.ScrollView`
  flex: 1;
`;

export const Header = styled.View`
  justify-content:center;
  align-items: center;
`;
export const HeaderBackgroundImage = styled.Image`
  width: 100%;
  height: 250px;
  z-index: 1;
  margin-bottom: -50px;
`;
export const HeaderTextContainer = styled.View`
  background: transparent;
  position: absolute;
  justify-content: center;
  align-items: center;
  z-index: 2;
`;
export const HeaderTitle = styled.Text`
  color: ${theme.colors.white};
  font-family: ${theme.weights.bolder};
  font-size: ${ResponsiveSize(20)};
`;

HeaderTitle.defaultProps = HeaderTitle.defaultProps || {};
HeaderTitle.defaultProps.maxFontSizeMultiplier = 1.2;

export const HeaderText = styled.Text`
  color: ${theme.colors.white};
  font-family: ${theme.weights.thin};
  font-size: ${ResponsiveSize(13)};
`;
HeaderText.defaultProps = HeaderText.defaultProps || {};
HeaderText.defaultProps.maxFontSizeMultiplier = 1.2;

export const HeaderImageContainer = styled.View`
  width: 100px;
  height: 100px; 
  z-index: 2;
`;
export const HeaderImage = styled.Image`
  width: 100px;
  height: 100px;
`;
export const FormContainer = styled.View`
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
`;
export const Footer = styled.View`
  width:100%;
  height: 100px;
  justify-content: center;
  flex-direction: row;
  margin-top: 10px;
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