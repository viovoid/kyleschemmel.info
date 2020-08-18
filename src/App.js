import React, { useState } from 'react';
import { Router } from '@reach/router';

import Home from './routes/Home';
import Brews from './routes/Brews';
import Login from './routes/Login';
import NotFound from './routes/NotFound';

import Frame from './frame/Frame';

const App = () => {
  const [auth, setAuth] = useState(null);

  //TODO: pass props to routes through context
  return (
    <Router>
      {auth
        ? <Frame default>
            <Home path="/" auth={auth} />
            
            <Brews path="/brews/*" auth={auth} />
            <NotFound default />
          </Frame>
        : <Login
            setAuth={setAuth}
            auth={auth}
            default
          />
      }
    </Router>
  );
}

export default App;
