import React from "react";

const GenerateProduct = ({ selectProduct }) => {
	return (
		<div>
			<button onClick={selectProduct}>Search Barcode</button>
		</div>
	);
};

export default GenerateProduct;
