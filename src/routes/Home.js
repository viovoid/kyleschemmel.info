import React from 'react';
import '../main.css';

const Home = (props) => {
  return (
    <div className="App">
      <header className="App-header">
        {JSON.stringify(props.auth)}
      </header>
    </div>
  );
}

export default Home;
