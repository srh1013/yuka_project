import React, { Component } from "react";

import { BrowserRouter, Route, Switch } from "react-router-dom";

import Home from "./Home.page";
import Error from "./Error.page";
import NavbarTitle from "../components/NavbarTitle";
import Product from "./Product.page";

class Router extends Component {
	render() {
		return (
			<BrowserRouter>
				<div>
					<NavbarTitle />
					<Switch>
						<Route path="/" exact component={Home} />
						<Route path="/home" component={Home} />
						<Route path="/product" component={Product} />
						<Route component={Error} />
					</Switch>
				</div>
			</BrowserRouter>
		);
	}
}

export default Router;
