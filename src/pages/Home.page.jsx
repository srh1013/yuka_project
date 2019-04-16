import React, { Component } from 'react';
import Api from '../Api'

import History from '../components/History';
import SearchBar from '../components/SearchBar';


class Home extends Component {
  render() {
    return (
      <div>
        <History />
				<SearchBar />
        <Api />
      </div>
    );
  }
}

export default Home;
