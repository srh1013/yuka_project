import React, { Component } from "react";


import Fetch from '../Fetch';
import Product from '../components/Product';

// Le nom du pattern : 'render-props' ---- cf. Inversion de la dépendance
export default function ProductPage({ match }){
	return (
		<Fetch 
			requestUrl={`https://fr.openfoodfacts.org/api/v0/produit/${match.params.codeBar}`} 
			renderError={() => "Oups.... une erreur est survenue"}
			renderLoading={() => "Chargement du produit en cours ...."} 
			renderSuccess={(product) => {
				debugger;
				return <Product title={product.title} imageUrl={product.imageUrl} />
		}} />
	)
}