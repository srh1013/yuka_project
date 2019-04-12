import React, { Component } from "react";
import { Button } from "reactstrap";
import styles from "./SearchBar.module.css";
import { InputGroup, Input } from "reactstrap";

class SearchBar extends Component {
	constructor(props) {
		super(props);
		this.state = {  }
	}
	handle(event){
		this.setState({ 
			barcode: event.target.value,
			list: "list",
			info: "",
			productname: "",
			image: "",
			novagroup: ""
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
	render() { 
		return ( <div class="w-80 p-3">
		 			<InputGroup>
		 				<Input
		 					className={styles.text}
		 					style={{ textAlign: "center" }}
		 					placeholder="ENTRE TON CODE BARRE ICI"
		 					onChange={this.handle.bind(this)}
		 				/>
		 				<Button color="secondary" size="sm" onClick={this.getProduct()}>
		 					VALIDER
		 				</Button>
		 			</InputGroup>
		 		</div> );
	}
}
 
export default SearchBar;


// const SearchBar = props => {
// 	return (
// 		<div class="w-80 p-3">
// 			<InputGroup>
// 				<Input
// 					className={styles.text}
// 					style={{ textAlign: "center" }}
// 					placeholder="ENTRE TON CODE BARRE ICI"
// 					onChange={this.handle.bind(this)}
// 				/>
// 				<Button color="secondary" size="sm">
// 					VALIDER
// 				</Button>
// 			</InputGroup>
// 		</div>
// 	);
// };

// export default SearchBar;
