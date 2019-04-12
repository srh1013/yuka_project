import React, { Component } from 'react';
import './App.css';

import Router from './pages/Router';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Router />
      </div>
    );
  }
}

export default App;
