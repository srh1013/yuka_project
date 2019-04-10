import React, { Component } from "react";
import GenerateProduct from "./GenerateProduct";
import DisplayProduct from "./DisplayProduct";
import FormBarcode from "./FormBarcode";
import axios from "axios";

class ApiTest extends Component {
	constructor(props) {
		super(props);
		this.state = {
			list: "list",
			barcode: "",
			info: "",
			productname: "",
			image: "",
			novagroup: ""
			// Employee State init
		};
	}

	handle(event){
		this.setState({ 
			barcode: event.target.value
		})
	}

	// setBarcode(barcode) {
	// 	this.setState({ 
	// 		barcode: barcode 
	// 	});
	// }

	getProduct() {
		// Récupération des données produit via fetch
		fetch("https://fr.openfoodfacts.org/api/v0/produit/" + this.state.barcode)
			.then(response => response.json())
			.then(data => {
				// Une fois les données récupérées, on va mettre à jour notre state avec les nouvelles données
				this.setState({
					// barcode: data[0],
					list: data,
					info: data.status_verbose,
					productname: data.product.product_name,
					image: data.product.image_front_small_url,
					novagroup: data.product.nova_group
				});
			});
			console.log(this.state.list)
	}

	// AXIOS

	// componentDidMount() {
	// 	axios
	// 		.get("https://fr.openfoodfacts.org/api/v0/produit/" + this.state.barcode)
	// 		.then(response =>
	// 			this.setState({
	// 				list: response.data
	// 			})
	// 		);
	// }

	render() {
		return (
			<React.Fragment>

				{console.log(this.state.list)}

				<input type="text" onChange={this.handle.bind(this)} placeholder="barcode2" />

				{/* <FormBarcode onChangeBarcode={barcode => this.setBarcode(barcode)} /> */}
				{/* <FormBarcode /> */}
				<GenerateProduct selectProduct={() => this.getProduct()} />

				<DisplayProduct
					list={this.state.list}
					info={this.state.info}
					productname={this.state.productname}
					image={this.state.image}
					novagroup={this.state.novagroup}
				/>

			</React.Fragment>
		);
	}
}

export default ApiTest;
