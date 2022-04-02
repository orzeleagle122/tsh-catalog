import React, { ButtonHTMLAttributes, FC } from 'react';
import styled, { css } from 'styled-components';

//interface AppProps extends React.ComponentPropsWithoutRef<'button'> {
interface AppProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  outlined?: boolean;
  animated?: boolean;
  height?: number;
}

const ButtonWrapper = styled.button<AppProps>`
  width: 100%;
  background-color: #4460f7;
  color: white;
  border: none;
  border-radius: 4px;
  height: ${({height})=> height ? `${height}px` : "38px"};
  cursor: pointer;
  outline: none;
  transition: all 0.2s ease-in-out;

  &:hover {
    background-color: #2140e8;
  }
  :disabled {
    background-color: #9194a5;
    cursor: not-allowed;
  }

  ${({ animated }) =>
    animated &&
    css`
      animation: pulse-animation 1.5s infinite;
    `}

  ${({ outlined }) =>
    outlined &&
    css`
      width: 88px;
      height: 38px;
      font-weight: 600;
      font-size: 14px;
      line-height: 16px;
      display: flex;
      align-items: center;
      justify-content: center;
      color: #4460f7;
      border: 1px solid #4460f7;
      border-radius: 4px;
      background-color: #ffffff;
      cursor: pointer;

      &:hover {
        border: 1px solid #2140e8;
        background-color: #ffffff;
      }

      &:disabled {
        border: 1px solid #9194a5;
        color: #9194a5;
        background-color: #ffffff;
        cursor: not-allowed;
      }
    `}

  @keyframes pulse-animation {
    0% {
      box-shadow: 0 0 0 0px rgba(0, 0, 0, 0.2);
    }
    100% {
      box-shadow: 0 0 0 10px rgba(0, 0, 0, 0);
    }
  }
`;

const Button: FC<AppProps> = ({ children, ...rest }) => {
  return <ButtonWrapper {...rest}>{children}</ButtonWrapper>;
};

export default Button;
