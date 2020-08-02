import React from 'react';
import { Redirect } from '@reach/router';

const AuthRoute = ({ component: Component, ...props}) => {
  if (!props.auth) {
    console.log('not logged in');
    return <Redirect to="/" />;
  }
  console.log('logged in');

  return <Component {...props} />;
};

export default AuthRoute;
