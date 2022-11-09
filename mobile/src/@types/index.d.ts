import 'styled-components';

declare module '*.png';
declare module '*.jpg';
declare module '*.jpeg';
declare module '*.json';
declare module '*.tsx';
declare module '*.svg';
declare module '*.gif';

declare module 'styled-components' {
  export interface Theme {
      colors: {
        background: string,
        orange: string,
        input: string,
        span: string,
        
        black: string,
        white: string,
    },

    weights: {
      bolder: string,
      bold: string,
      standard: string,
      thin: string
    }  
  }
}