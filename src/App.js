import React, { Component } from "react";
import "./App.css";

import NavbarTitle from "./header/NavbarTitle";
import LegendPower from "./body/LegendPower.jsx";

class App extends Component {
	render() {
		return (
			<div className="App">
				<NavbarTitle />
				<LegendPower />
			</div>
		);
	}
}

export default App;
