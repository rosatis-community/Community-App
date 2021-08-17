import { styled, TextField } from '@material-ui/core';
import React, { useState } from 'react';
import CBox from '../components/commons/CBox';
import CContainedButton from '../components/commons/CContainedButton';
import CContainer from '../components/commons/CContainer';
import CPaper from '../components/commons/CPaper';

interface LoginFormProps {
  username: string;
  password: string;
}

const LoginRoot = styled('div')(({ theme }) => ({
  height: '100%',
  background:
    'linear-gradient(90deg, rgba(58,58,85,1) 0%, rgba(9,9,121,1) 0%, rgba(0,212,255,1) 99%)',
}));

const LoginContainer = styled(CContainer)(({ theme }) => ({
  height: '100%',
}));

const LoginPaper = styled(CPaper)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  padding: theme.spacing(4),
}));

const LoginForm = styled('form')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
}));

const Login = () => {
  const [state, setState] = useState<LoginFormProps>({
    username: '',
    password: '',
  });

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    console.log(state);
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setState({ ...state, [event.target.name]: event.target.value });
  };

  return (
    <LoginRoot>
      <LoginContainer maxWidth="xs">
        <LoginPaper>
          <LoginForm onSubmit={handleSubmit} noValidate>
            <TextField
              variant="filled"
              name="username"
              label="Username"
              margin="normal"
              onChange={handleInputChange}
            />
            <TextField
              variant="filled"
              name="password"
              label="Password"
              type="password"
              margin="normal"
              onChange={handleInputChange}
            />
            <CBox mb={1} />
            <CContainedButton type="submit">Log in</CContainedButton>
          </LoginForm>
        </LoginPaper>
      </LoginContainer>
    </LoginRoot>
  );
};

export default Login;
