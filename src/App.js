import React, { useState } from 'react';
import './App.css';
import { Router } from '@reach/router';

import Home from './routes/Home';
import Alt from './routes/Alt';
import Login from './routes/Login';
import NotFound from './routes/NotFound';

const App = () => {
  const [auth, setAuth] = useState(null);
  return (
    <Router>
      {auth
        ? (<>
          <Home path="/" auth={auth} />
          <Alt path="/alt" auth={auth} />
        </>) : (
          <Login
            setAuth={setAuth}
            auth={auth}
            path="/"
          />
        )
      }
      <NotFound default />
    </Router>
  );
}

export default App;
