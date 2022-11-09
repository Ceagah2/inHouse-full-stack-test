import styled from 'styled-components/native';
import { ResponsiveSize } from '../../utils/responsive';
import themes from '../../themes';

export const Container = styled.View`
  width: 90%;
  height: 55px;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 20px;
`;
export const Span = styled.Text`
  color: ${themes.colors.span};
  font-weight: ${themes.weights.thin};
  font-size: ${ResponsiveSize(15)};
  margin-bottom: 10px;
`;

Span.defaultProps = Span.defaultProps || {};
Span.defaultProps.maxFontSizeMultiplier = 1.2;

export const InputContainer = styled.View`
  height: 40px;
  flex-direction: row;
  border: none;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid ${(props: { borderBottom: string; }) => props.borderBottom ? props.borderBottom : `${themes.colors.black}`};
`;
export const InputImage = styled.Image`
  margin-right: 5px;
`;
export const TextInput = styled.TextInput`
  width: 200px;
  line-height: 45px;
`;
export const InputChecker = styled.Image`
  width: 30px;
  height: 30px
`;
