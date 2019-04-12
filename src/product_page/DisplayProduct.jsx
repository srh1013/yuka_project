import React from "react";

const DisplayProduct = ({
	info,
	productname,
	image,
	novagroup,
	data,
	nutriscore,
	nutriScorePicture,
	sugars,
	loadingIcon
}) => (
	<div>
		{console.log(data)}
		<img src={loadingIcon()} alt=" "/>
		<h1> {info}</h1>
		<h1> {productname} </h1>
		<img src={image} alt=" " />
		<p> novagroup: {novagroup}</p>
		<img src={nutriScorePicture(nutriscore)} alt=" "/>
		<p>sucres pour 100g: {sugars}</p>
	</div>
);

export default DisplayProduct;
