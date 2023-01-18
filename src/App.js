import React from 'react';
import logo from './platypus.png';
import './App.css';
import PlatypusInsult from './PlatypusInsult'
import Button from '@mui/material/Button'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <PlatypusInsult button_label="Platypus Info" />
      </header>
      <div className="Body">
        <Button variant="contained" color="primary" size="small" href="https://en.wikipedia.org/wiki/Platypus">Learn More about Platypuses</Button>
      </div>
    </div>
  );
}

export default App;


// <Button variant="link" onclick="window.open('https://en.wikipedia.org/wiki/Platypus')">1 /Button>
