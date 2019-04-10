import React, { Component } from "react";
import "./App.css";

import NavbarTitle from "./header/NavbarTitle";
import Body from "./body/Body";
import ProductPage from "./product_page/ProductPage";

class App extends Component {
	render() {
		return (
			<div className="App">
				<NavbarTitle />
				<Body />
				<ProductPage />
			</div>
		);
	}
}

export default App;
