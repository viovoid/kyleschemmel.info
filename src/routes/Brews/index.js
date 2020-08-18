import React from 'react';
import { Router } from '@reach/router';
import List from './List';
import View from './View';

const Brews = () => {
  return (
    <Router>
      <List path="/" />
      <View path=":id" />
    </Router>
  );
}

export default Brews;
