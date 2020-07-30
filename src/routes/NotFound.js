import React from 'react';
import '../App.css';

const NotFound = ({ navigate }) => {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Not Found
          <button onClick={() => 
            //navigate(-1) //XXX: router bug: https://github.com/reach/router/issues/44
            window.history.back()
          }>
            Go Back
          </button>
        </p>
      </header>
    </div>
  );
}

export default NotFound;
