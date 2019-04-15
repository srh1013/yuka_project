import React, { Component } from 'react';
import './App.css';

import Router from './pages/Router';
import NavbarTitle from './components/NavbarTitle';


class App extends Component {
  render() {
    return (
      <div className="App">
        <NavbarTitle />
        <Router />
      </div>
    );
  }
}

export default App;
