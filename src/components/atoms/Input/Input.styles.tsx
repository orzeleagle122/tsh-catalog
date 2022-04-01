import styled from 'styled-components';
import React, {FC, InputHTMLAttributes, ReactNode} from 'react';

interface AppProps extends InputHTMLAttributes<HTMLInputElement>{
  rest?: ReactNode,
}

const InputWrapper = styled.input`
    width: 100%;
    height: 100%;
    border: 1px solid #e0e2ea;
    font-weight: 600;
    font-size: 14px;
    line-height: 16px;
    outline: none;
    padding: 16px 0 16px 16px;
    border-radius: 8px;
`;

const Input: FC<AppProps> = ({children, ...rest}) => {
  return <InputWrapper {...rest}/>;
};

export default Input;