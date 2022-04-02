import styled from 'styled-components';
import logo from '../../assets/images/login.png';

export const Wrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  gap: 150px;
  background-color: #fff;

  @media (max-width: 420px) {
    padding: 40px 24px 0 24px;
    height: calc(100vh);
  }
  
`;

export const ImgWrapper = styled.div`
  background-image: url(${logo});
  width: 40%;
  background-size: cover;
  background-position: center;
  
  @media screen and (max-width: 420px) {
    display: none;
  }
`;

export const FormWrapper = styled.div`
  width: 60%;

  @media (max-width: 420px) {
    width: 100%;;
  }
`;

export const Header = styled.nav`
  display: flex;
  align-items: center;
  height: 144px;
  @media screen and (max-width: 420px) {
    height: 40px;
  }
  
`;

export const FormContainer = styled.div`
  margin-top: 183px;
  width: 100%;

  @media screen and (max-width: 420px) {
    margin-top: 103px;
  }

  h1 {
    font-weight: 600;
    font-size: 30px;
    line-height: 40px;
    color: #1a1b1d;
    margin-bottom: 29px;
  }

  form {
    display: flex;
    flex-direction: column;
    max-width: 500px;

    label {
      margin-bottom: 8px;
    }
    
    p{
      font-weight: 600;
      font-size: 14px;
      line-height: 16px;
      text-decoration-line: underline;
      color: #9194A5;
      cursor: pointer;
      margin-top: 16px;
      align-self: flex-start;
    }
  }

  span {
    color: red;
    font-weight: 600;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 20px;
  }

  input {
    margin-bottom: 22px;
  }
`;
