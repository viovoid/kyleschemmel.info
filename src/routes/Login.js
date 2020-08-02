import React from 'react';
import '../App.css';
import { Button, Container, FormControl, TextField } from '@material-ui/core';

import { get, login } from '../Api';

const Login = (props) => {

  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [attempting, setAttempting] = React.useState(true);

  React.useEffect(() => {
console.log('checking for session');
    async function checkAuth() {
      const auth = await get('/auth/user/');
  console.log(auth);
      if (auth && auth.name) {
        // if already logged in, set auth
        props.setAuth(auth);
      } else {
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
      console.log(auth);
      props.setAuth(auth);
      setAttempting(false);
    } catch (e) {
      console.warn(e);
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
        <TextField value={username} onChange={({ target }) => setUsername(target.value)} />
        <TextField type="password" value={password} onChange={({ target }) => setPassword(target.value)} />
        <Button onClick={authenticate}>
          Log in
        </Button>
      </FormControl>
    </Container>
  );
}

export default Login;
