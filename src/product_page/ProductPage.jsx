import React, { Component } from "react";
import DisplayProduct from "./DisplayProduct";
import axios from "axios";
import { InputGroup, Input, Button } from "reactstrap";


class ApiTest extends Component {
	constructor(props) {
		super(props);
		this.state = {
			data: [],
			barcode: "",
			info: "",
			productname: "",
			image: "",
			novagroup: "",
			nutriscore: "",
			error: null,
			isLoading: false,
			sugars_value: "",
			sugars_unit: ""
		};
	}

	handle(event) {
		this.setState({
			barcode: event.target.value
		});
		console.log(this.state.barcode);
	}

	// Display Nutriscore picture depending on score :
	nutriScorePicture() {
		const nutriscore = this.state.nutriscore;
		if (nutriscore === "-1") {
			return "https://static.openfoodfacts.org/images/misc/nutriscore-a.svg";
		} else if (nutriscore === "-2") {
			return "https://static.openfoodfacts.org/images/misc/nutriscore-b.svg";
		} else if (nutriscore === "-3") {
			return "https://static.openfoodfacts.org/images/misc/nutriscore-c.svg";
		} else if (nutriscore === "-4") {
			return "https://static.openfoodfacts.org/images/misc/nutriscore-d.svg";
		} else if (nutriscore === "-5") {
			return "https://static.openfoodfacts.org/images/misc/nutriscore-e.svg";
		}
	}

	loadingIcon() {
		const isLoading = this.state.isLoading;
		if (isLoading === true) {
			return "https://proxy.duckduckgo.com/iu/?u=https%3A%2F%2Fthumbs.dreamstime.com%2Ft%2Fsimple-loading-icon-isolated-white-background-vector-illustration-44423755.jpg&f=1";
		}
	}

	// API via AXIOS
	getProduct() {
		this.setState({ isLoading: true });

		axios
			.get("https://fr.openfoodfacts.org/api/v0/produit/" + this.state.barcode)
			.then(result =>
				this.setState({
					data: result.data,
					info: result.data.status_verbose,
					productname: result["data"]["product"]["product_name"],
					image: result.data.product.image_front_small_url,
					novagroup: result.data.product.nova_group,
					nutriscore:
						result["data"]["product"]["nutriments"]["nutrition-score-fr_100g"],
					sugars_value: result.data.product.nutriments.sugars_value,
					sugars_unit: result.data.product.nutriments.sugars_unit,
					isLoading: false
				})
			)
			.catch(error =>
				this.setState({
					error,
					isLoading: false
				})
			);
	}

	render() {
		return (
			<React.Fragment>
				<div className="w-80 p-3">
					<InputGroup>
						{/* Barcode input*/}
						<Input
							style={{ textAlign: "center" }}
							placeholder="ENTRE TON CODE BARRE ICI"
							onChange={this.handle.bind(this)}
						/>

						<Button
							color="secondary"
							size="sm"
							onClick={() => this.getProduct()}
						>
							VALIDER
						</Button>
					</InputGroup>

					<DisplayProduct
						data={this.state.data}
						info={this.state.info}
						productname={this.state.productname}
						image={this.state.image}
						novagroup={this.state.novagroup}
						nutriscore={this.state.nutriscore}
						nutriScorePicture={() => this.nutriScorePicture()}
						sugars={this.state.sugars_value + this.state.sugars_unit}
						loadingIcon={() => this.loadingIcon()}
					/>
				</div>
			</React.Fragment>
		);
	}
}

export default ApiTest;
