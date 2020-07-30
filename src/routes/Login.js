import React from 'react';
import '../App.css';
import { Link } from '@reach/router';

const Login = (props) => {
console.log(props);
  return (
    <div className="App">
      <header className="App-header">
        <p>
          {props.isAuth}
          <button onClick={props.callback}>
            Log in
          </button>
          <button onClick={() => props.navigate('/home')}>
            To Home
          </button>
          <Link to="/home/" />
        </p>
      </header>
    </div>
  );
}

export default Login;
