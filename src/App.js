import React from 'react';
import { Router } from '@reach/router';

//import Home from './routes/Home';
import NotFound from './routes/NotFound';
import About from './routes/Pages/About';
import Contact from './routes/Pages/Contact';
import Portfolio from './routes/Pages/Portfolio';
import Services from './routes/Pages/Services';

import Frame from './frame/Frame';

const App = () => {

  //TODO: pass props to routes through context
  return (
    <Router>
      <Frame default>
        {/*<Home path="/" />*/}
        <About path="/" />
        <About path="/about" />
        <Contact path="/contact" />
        <Portfolio path="/portfolio" />
        <Services path="/services" />
        <NotFound default />
      </Frame>
    </Router>
  );
}

export default App;
