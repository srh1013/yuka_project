import React, { Component } from 'react';
import Api from '../Api'

import History from '../components/History';
import SearchBar from '../components/SearchBar';
import LegendPower from "../components/LegendPower";
import InputGroup from "../sami/InputGroup";


class Home extends Component {
  render() {
    return (
      <div>
        <History />
        <InputGroup />
				{/* <SearchBar /> */}
        <LegendPower />
        {/* <Api /> */}
      </div>
    );
  }
}

export default Home;
