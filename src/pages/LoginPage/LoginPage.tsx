import React, { useEffect, useState } from 'react';
import Input from '../../components/atoms/Input/Input.styles';
import {
  FormContainer,
  FormWrapper,
  Header,
  ImgWrapper,
  Wrapper,
} from './LoginPage.styles';
import Button from '../../components/atoms/Button/Button.styles';
import { useDispatch } from 'react-redux';
import { setUserAction } from '../../redux/slices/userSlice';
import { useAppSelector } from '../../store';
import Loader from '../../components/molecules/Loader/Loader';
import { Navigate } from 'react-router-dom';

const LoginPage = () => {
  const dispatch = useDispatch();
  const [loginValue, setLoginValue] = useState({
    username: '',
    password: '',
  });
  const user = useAppSelector((state) => state.user);
  const { isError, isLoading, isLogin } = user;

  useEffect(() => {
    dispatch(setUserAction());
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setLoginValue({
      ...loginValue,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(setUserAction(loginValue.username, loginValue.password));
    setLoginValue({
      username: '',
      password: '',
    });
  };

  if (isLogin) {
    return <Navigate to="/" />;
  }

  return (
    <Wrapper>
      <ImgWrapper />
      <FormWrapper>
        <Header>
          <h1>join.tsh.io</h1>
        </Header>
        <FormContainer>
          <h1>Login</h1>
          <form onSubmit={handleSubmit}>
            {!isLoading ? (
              <>
                <label htmlFor="username">Username</label>
                <Input
                  type="text"
                  id="username"
                  name="username"
                  value={loginValue.username}
                  onChange={handleChange}
                  required
                  placeholder="Enter username"
                />
                <label htmlFor="password">Password</label>
                <Input
                  type="password"
                  id="password"
                  name="password"
                  value={loginValue.password}
                  onChange={handleChange}
                  required
                  placeholder="Enter password"
                />
                {isError && <p>{isError}</p>}
                <Button height={48} type="submit">Log in</Button>
                <p>Forgot password?</p>
              </>
            ) : (
              <Loader />
            )}
          </form>
        </FormContainer>
      </FormWrapper>
    </Wrapper>
  );
};

export default LoginPage;
