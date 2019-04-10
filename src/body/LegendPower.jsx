import React, { Component } from "react";
import "./MainArea.css";
import SuperPower from "./SuperPower.jsx";

class LegendPower extends Component {
	constructor(props) {
		super(props);
		this.state = {
			power: [
				{
					power: "Super pouvoir",
					noteNutriscore: "A",
					image: "",
					description:
						"Excellent ce produit est plein de supers pouvoirs, continue comme ça !!!"
				},
				{
					power: "Pouvoir lilili",
					noteNutriscore: "B",
					image: "",
					description: "Ce produit a de super pouvoir, bon "
				},
				{
					power: "Pouvoir lalala",
					noteNutriscore: "C",
					image: "",
					description: "Ce produit a de super pouvoir, bon "
				},
				{
					power: "Pouvoir dangereux",
					noteNutriscore: "D",
					image: "",
					description:
						"Ce produit a de mauvais pouvoir, cherche encore il existe des produits similaires avec de meilleur pouvoir"
				},
				{
					power: "Pouvoir maléfique",
					noteNutriscore: "E",
					image: "",
					description:
						"Attention, ce produit a des pouvoirs dangereux. Vérifie auprès de tes parents avant de l'ajouter au panier !!!"
				}
			]
		};
	}

	render() {
		return (
			<div>
				{this.state.map((power, index) => {
					return;
				})}
			</div>
		);
	}
}

export default LegendPower;
