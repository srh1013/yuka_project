import React, { Component } from "react";

import { BrowserRouter, Route, Switch } from "react-router-dom";

import Home from "./Home.page";
import Error from "./Error.page";
import ProductPage from "./Product.page";

class Router extends Component {
	render() {
		return (
			<BrowserRouter>
				<div>
					<Switch>
						<Route path="/" exact component={Home} />
						<Route path="/home" component={Home} />
						<Route path="/product/:barcode" component={ProductPage} />
						<Route component={Error} />
					</Switch>
				</div>
			</BrowserRouter>
		);
	}
}

export default Router;
