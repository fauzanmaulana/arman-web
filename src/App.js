import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// image
import logo from './image/Horizontal.png';
import playstore from './image/playstore.png'

// page component
import Home from './components/Home'
import Bookmark from './components/Bookmark'
import About from './components/About'

// component
import HeaderOne from './components/Common/Header/HeaderOne'

import Footer from './components/Common/Footer'

function App() {
  return (
    <Router>
      <HeaderOne logo={logo} />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/bookmark">
            <Bookmark />
          </Route>
        </Switch>
      <Footer playstore={playstore} logo={logo} />
    </Router>
  );
}

export default App;
