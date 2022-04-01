import React from 'react';
import { FormContainer, FormWrapper, Header, ImgWrapper, Wrapper } from './LoginPage.styles';

const LoginPage = () => {
  return (
    <Wrapper>
      <ImgWrapper />
      <FormWrapper>
        <Header>
          <h1>join.tsh.io</h1>
        </Header>
        <FormContainer>
          <form action="/action_page.php">
            <label htmlFor="fname">First name:</label>
            <input type="text" id="fname" name="fname" value="John" />
            <label htmlFor="lname">Last name:</label>
            <input type="text" id="lname" name="lname" value="Doe" />
            <button type="submit"> sign in</button>
          </form>
        </FormContainer>
      </FormWrapper>
    </Wrapper>
  );
};

export default LoginPage;
