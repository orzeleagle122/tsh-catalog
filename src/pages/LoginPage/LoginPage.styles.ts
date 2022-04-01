import styled from 'styled-components';
import logo from '../../assets/images/login.png';

export const Wrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100vh !important;
  gap: 100px;
  background-color: #fff;
`;

export const ImgWrapper = styled.div`
  background-image: url(${logo});
  width: 40%;
  height: 100vh;
  background-size: cover;
  background-position: center;
`;

export const FormWrapper = styled.div`
  width: 60%;
  height: 100%;
`;

export const Header = styled.nav`
  display: flex;
  align-items: center;
  height: 144px;
`;

export const FormContainer = styled.div`
  margin-top: 183px;
  height: 100%;
  width: 100%;

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
  }

  input {
    margin-bottom: 22px;
  }
`;
