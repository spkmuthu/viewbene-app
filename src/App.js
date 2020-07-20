import React from 'react';
import logo from './logo.svg';
import './App.css';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { NavigationBar } from './components/NavigationBar';
import Sidebar from './components/Sidebar';

import { FreqUsed } from './FreqUsed';
import { Favorites } from './Favorites';

function App() {
  return (
    <React.Fragment>
      <Router>
        <NavigationBar />
        <Sidebar />
        <Switch>
          <Route exact path="/mostfreq" component={FreqUsed} />
          <Route path="/fav" component={Favorites} />
        </Switch>
      </Router>
    </React.Fragment>
  );
}

export default App;

//<Route exact path="/mostfreq" component={MostFreqUsed} />