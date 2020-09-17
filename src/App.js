import React from 'react';
import logo from './platypus.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <a
          className="App-link"
          href="https://en.wikipedia.org/wiki/Platypus"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn About Platypus
        </a>
      </header>
    </div>
  );
}

export default App;
