import React, { Component } from 'react';

import History from '../components/History';
import SearchBar from '../components/SearchBar';
import NavbarTitle from "../components/NavbarTitle";


class Home extends Component {
  render() {
    return (
      <div>
        <NavbarTitle />
        <History />
				<SearchBar />
      </div>
    );
  }
}

export default Home;
