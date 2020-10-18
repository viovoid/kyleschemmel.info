import React from 'react';
import { Router } from '@reach/router';

import Home from './routes/Home';
import NotFound from './routes/NotFound';
import Manifesto from './routes/Pages/Manifesto';
import Blog from './routes/Pages/Blog';
import Cards from './routes/Pages/Cards';

import Frame from './frame/Frame';

const App = () => {

  //TODO: pass props to routes through context
  return (
    <Router>
      <Frame default>
        <Home path="/" />
        <Manifesto path="/manifesto" />
        <Blog path="/blog" />
        <Cards path="/cards" />
        <NotFound default />
      </Frame>
    </Router>
  );
}

export default App;
