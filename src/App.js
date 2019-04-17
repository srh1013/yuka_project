import React, { Component } from "react";
import "./App.css";

import Router from './pages/Router';
import NavbarTitle from './components/NavbarTitle';
import LegendPower from "./body/LegendPower.jsx";


class App extends Component {
  render() {
    return (
      <div className="App">
        <NavbarTitle />
        <Router />
        <LegendPower />
      </div>
    );
  }
}

export default App;
