import React from 'react';
import './App.css';
import Homepage from './Homepage'
import Blog from './Blog'
import Portfolio from './Portfolio'
import Music from './Music'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  function changePage(pageName) {
    document.location.href = pageName;
  }

  return (
    <>
      <div className="App">
        <Router>
          <Switch>
            <Route exact path="/">
              <Homepage style={{ height: '100vh', width: '100vw' }} changePage={changePage} />
            </Route>
            <Route exact path="/blog">
              <Blog />
            </Route>
            <Route path="/portfolio">
              <Portfolio />
            </Route>
            <Route path="/music">
              <Music />
            </Route>
          </Switch>
        </Router>
      </div>
    </>
  );
}

export default App;
