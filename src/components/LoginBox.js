import styled from 'styled-components';
import axios from 'axios';
import { useState } from 'react';

const LoginBox = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [login, setLogin] = useState('');

  const submitHandler = async (e) => {
    e.preventDefault();
    const response = await axios.post('http://127.0.0.1:8000/api/auth/login/', {
      username: login,
      email: email,
      password: password,
    });
    localStorage.setItem('authToken', response.data.key);
    console.log(response);
    console.log(response.data.key);
    setEmail('');
    setPassword('');
    setLogin('');
  };

  return (
    <StyledLoginBox>
      <h1>Logowanie:</h1>
      <StyledLoginForm onSubmit={submitHandler}>
        Email:
        <input
          onChange={(e) => setEmail(e.target.value)}
          type='text'
          value={email}
        />
        Login:
        <input
          onChange={(e) => setLogin(e.target.value)}
          type='text'
          value={login}
        />
        Hasło:
        <input
          onChange={(e) => setPassword(e.target.value)}
          type='password'
          value={password}
        />
        <input className='loginButton' type='submit' value='Zaloguj' />
      </StyledLoginForm>
    </StyledLoginBox>
  );
};

const StyledLoginBox = styled.div`
  padding: 2rem;
  border: solid black;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const StyledLoginForm = styled.form`
  border: solid blue;
  padding: 2rem;
  margin-top: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  .loginButton {
    margin-top: 1rem;
  }
`;

export default LoginBox;
