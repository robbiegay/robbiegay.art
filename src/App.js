import React from "react";
import "./App.css";
import Homepage from "./Homepage";
import Blog from "./Blog";
import Portfolio from "./Portfolio";
import Music from "./Music";
import BlogPost from ".//BlogPost";
import Glch from "./apps/Glch";
import GlchPrivacy from "./apps/GlchPrivacy";
import TheEasyGame from "./apps/TheEasyGame";
import TheEasyGamePrivacy from "./apps/TheEasyGamePrivacy";
import FinancedFarmer from "./apps/FinancedFarmer";
import FinancedFarmerPrivact from "./apps/FinancedFarmerPrivacy";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import FinancedFarmerPrivacy from "./apps/FinancedFarmerPrivacy";

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
              <Homepage style={{ height: "100vh", width: "100vw" }} changePage={changePage} />
            </Route>
            <Route exact path="/blog">
              <Blog />
            </Route>
            <Route path="/blog">
              <BlogPost />
            </Route>
            <Route path="/portfolio">
              <Portfolio />
            </Route>
            <Route path="/music">
              <Music />
            </Route>
            <Route exact path="/apps/glch">
              <Glch />
            </Route>
            <Route path="/apps/glch/privacy">
              <GlchPrivacy />
            </Route>
            <Route exact path="/apps/easy-game">
              <TheEasyGame />
            </Route>
            <Route path="/apps/easy-game/privacy">
              <TheEasyGamePrivacy />
            </Route>
            <Route exact path="/apps/financed-farmer">
              <FinancedFarmer />
            </Route>
            <Route path="/apps/financed-farmer/privacy">
              <FinancedFarmerPrivacy />
            </Route>
          </Switch>
        </Router>
      </div>
    </>
  );
}

export default App;
