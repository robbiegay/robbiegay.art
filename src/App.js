import React, { useState } from 'react';
import './App.css';
import Homepage from './Homepage'
import Blog from './Blog'
import Portfolio from './Portfolio'
import Music from './Music'

function App() {
  const [display, setDisplay] = useState('home');

  function changePage(pageName) {
    setDisplay(pageName);
  }

  switch (display) {
    case "home":
      return (
        <div className="App">
          <Homepage style={{ height: '100vh', width: '100vw' }} changePage={changePage} />
        </div>
      );
    case "blog":
      return (
        <div className="App">
          <Blog />
        </div>
      );
    case "portfolio":
      return (
        <div className="App">
          <Portfolio />
        </div>
      );
    case "music":
      return (
        <div className="App">
          <Music />
        </div>
      );
    default:
      console.log("-----------------------------------");
      console.log("ERROR: Navigation handler triggered a default case.");
      console.log("Where were you trying to go?");
      console.log("Redirecting -> HOME");
      console.log("-----------------------------------");
      setDisplay("home");
  }
}

export default App;
