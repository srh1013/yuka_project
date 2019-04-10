import React, { Component } from "react";
import SearchBar from "./SearchBar.jsx";

class Body extends Component {
	render() {
		return (
			<div>
        <History />
				<SearchBar />
			</div>
		);
	}
}

export default Body;