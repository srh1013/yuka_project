import React, { Component } from 'react';

import History from '../components/History';
import SearchBar from '../components/SearchBar';


class Home extends Component {
  render() {
    return (
      <div>
        <History />
				<SearchBar />
      </div>
    );
  }
}

export default Home;
