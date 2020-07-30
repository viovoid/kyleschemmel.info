import React from 'react';
import '../App.css';

const Home = (props) => {
  console.log(props.isAuth);
  return (
    <div className="App">
      <header className="App-header">
        Home
      </header>
    </div>
  );
}

export default Home;
