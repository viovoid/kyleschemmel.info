import React, { useState } from 'react';
import './App.css';
import { Router } from '@reach/router';

import Home from './routes/Home';
import Alt from './routes/Alt';
import Login from './routes/Login';
import NotFound from './routes/NotFound';

const App = () => {
  const [isAuth, setAuth] = useState(false);
  return (
    <Router>
      <Login
        callback={() => setAuth(!isAuth)}
        isAuth={isAuth}
        path="/"
      />
      <Home path="/home" isAuth={isAuth} />
      <Alt path="/alt" isAuth={isAuth} />
      <NotFound default />
    </Router>
  );
}

export default App;
