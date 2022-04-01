import React, { useEffect } from 'react';
import Input from '../../components/atoms/Input/Input.styles';
import { FormContainer, FormWrapper, Header, ImgWrapper, Wrapper } from './LoginPage.styles';
import Button from '../../components/atoms/Button/Button.styles';

const LoginPage = () => {

  useEffect(()=>{
    const disableScroll = () => {
      document.body.style.overflow = 'hidden';
    }
    disableScroll();
  },[])

  return (
    <Wrapper>
      <ImgWrapper />
      <FormWrapper>
        <Header>
          <h1>join.tsh.io</h1>
        </Header>
        <FormContainer>
          <h1>Login</h1>
          <form >
            <label htmlFor="fname">Username</label>
            <Input type="text" id="fname" name="fname" />
            <label htmlFor="lname">Password</label>
            <Input type="text" id="lname" name="lname"/>
            <Button type="submit">Log in</Button>
          </form>
        </FormContainer>
      </FormWrapper>
    </Wrapper>
  );
};

export default LoginPage;
