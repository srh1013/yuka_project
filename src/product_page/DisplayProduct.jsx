import React from "react";

const DisplayProduct = ({ info, productname, image, novagroup, list }) => (
	<div>
		<h1> found?{info}</h1>
		<h1> nom: {productname} </h1>
		<img src={image} alt="imageCompo" />
		<h1> novagroup: {novagroup}</h1>
	</div>
);

export default DisplayProduct;
