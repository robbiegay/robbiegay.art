import React from 'react';
import logo from './logo.svg';
import './App.css';
import Homepage from './Homepage'

function App() {
  return (
    <div className="App">
      <Homepage style={{ height: '100vh', width: '100vw' }} /> {/*, zIndex:-1*/}
    </div>
  );
}

export default App;
