import React from 'react';
import '../App.css';

const Home = (props) => {
  console.log(props.suth);
  return (
    <div className="App">
      <header className="App-header">
        {JSON.stringify(props.auth)}
      </header>
    </div>
  );
}

export default Home;
