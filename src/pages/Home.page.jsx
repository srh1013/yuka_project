import React, { Component } from 'react';

import History from '../components/History';
import LegendPower from "../components/LegendPower";
import InputGroup from "../components/InputGroup";


class Home extends Component {
  render() {
    return (
      <div>
        <History />       
        <InputGroup />
        <LegendPower />
      </div>
    );
  }
}

export default Home;
