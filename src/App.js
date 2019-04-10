import React, { Component } from 'react';
import './App.css';

import NavbarTitle from './header/NavbarTitle';
import Body from './body/Body';

class App extends Component {
  render() {
    return (
      <div className="App">
        
        <NavbarTitle />
        <Body />
        
      </div>
    );
  }
}

export default App;
