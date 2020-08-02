import React, { useEffect, useState } from 'react';
import '../App.css';
import { Button, Container, FormControl, TextField } from '@material-ui/core';

import { get, login } from '../Api';

const Login = (props) => {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [attempting, setAttempting] = useState(true);

  useEffect(() => {
    console.log('checking for session');
    async function checkAuth() {
      const auth = await get('/auth/user');
      if (auth && auth.username) {
        // if already logged in, set auth
        console.log('found session');
        props.setAuth(auth);
      } else {
        console.log('no session found');
        // else show login form
        setAttempting(false);
      }
    }
    checkAuth();
  }, [props]);

  const authenticate = async () => {
    setAttempting(true);
    try {
      const auth = await login(username, password);
      if (auth && auth.username) {
        // if already logged in, set auth
        props.setAuth(auth);
      } else {
        setAttempting(false);
      }
    } catch (e) {
      console.warn(e);
    }
  };

  const onKeyPress = (event) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      authenticate();
    }
  };

  if (attempting) {
    return (
      <Container>
        Attempting login...
      </Container>
    );
  }

  return (
    <Container>
      <FormControl>
        <TextField
          onChange={({ target }) => setUsername(target.value)}
          value={username}
        />
        <TextField
          onChange={({ target }) => setPassword(target.value)}
          onKeyPress={onKeyPress}
          type="password"
          value={password}
        />
        <Button type="submit" onClick={authenticate}>
          Log in
        </Button>
      </FormControl>
    </Container>
  );
}

export default Login;
