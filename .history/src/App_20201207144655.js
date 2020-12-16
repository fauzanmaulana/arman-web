import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// context
import { BookmarkProvider } from './context/BookmarkContext'

// image
import logo from './image/Horizontal.png';
import playstore from './image/playstore.png'

// page component
import Home from './components/Home'
import Bookmark from './components/Bookmark'
import Like from './components/Like'
import History from './components/History'
import About from './components/About'
import Source from './components/Source'
import Search from './components/Search'
import Article from './components/Article'

// component
import HeaderOne from './components/Common/Header/HeaderOne'
import Footer from './components/Common/Footer'

function App() {
  return (
    <BookmarkProvider>
      <Router>
        <HeaderOne logo={logo} />
          <Switch>
            <Route exact path="/">
              <Home  />
            </Route>
            <Route path="/article/:id">
              <Article />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/bookmark">
              <Bookmark />
            </Route>
            <Route path="/like">
              <Like />
            </Route>
            <Route path="/history">
              <History />
            </Route>
            <Route path="/source/:id">
              <Source />
            </Route>
            <Route path="/search/:keyword">
              <Search />
            </Route>
          </Switch>
        <Footer playstore={playstore} logo={logo} />
      </Router>
    </BookmarkProvider>
  );
}

export default App;
