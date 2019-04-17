import React, { Component } from "react";


import Fetch from '../Fetch';
import Product from '../components/Product';

// Le nom du pattern : 'render-props' ---- cf. Inversion de la dépendance
export default function ProductPage({ match }){
	return (
		<Fetch 
			requestUrl={`https://fr.openfoodfacts.org/api/v0/produit/${match.params.barcode}`} 
			renderError={() => "Oups.... une erreur est survenue"}
			renderLoading={() => "Chargement du produit en cours ...."} 
			renderSuccess={({product}) => {
				debugger;
				return <Product 
				packaging={product.packaging} 
				name={product.product_name_fr} 
				brand={product.brands}
				imageUrl={product.image_front_small_url} />
		}} />
	)
}