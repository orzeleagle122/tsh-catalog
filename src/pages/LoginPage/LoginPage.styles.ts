import styled from 'styled-components';
import logo from '../../assets/images/login.png';

export const Wrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  gap: 100px;
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
`;

export const Header = styled.nav`
  display: flex;
  align-items: center;
  height: 144px;
  background-color: #fff;
`;

export const FormContainer = styled.div`
  form {
    display: flex;
    flex-direction: column;
    max-width: 500px;
  }

  height: 100%;
  width: 100%;
`;
