import React from "react";

import Fetch from '../Fetch';
import Product from '../components/Product';

// Le nom du pattern : 'render-props' ---- cf. Inversion de la dépendance >> COMMENT TO KEEP
export default function ProductPage({ match }){
	return (
		<Fetch 
			requestUrl={`https://fr.openfoodfacts.org/api/v0/produit/${match.params.barcode}`} 
			renderError={() => "Oups.... une erreur est survenue"}
			renderLoading={() => "Chargement du produit en cours ...."} 
			renderSuccess={({product}) => {
				debugger;
				return <Product 
				name={product.product_name_fr} 
				brand={product.brands}
				imageUrl={product.image_front_small_url}
				novagroup={product.nova_group} 
				sugars_value={product.nutriments.sugars_value}
				sugars_unit={product.nutriments.sugars_unit}
				energyV={product.nutriments.energy_value}
				energyU={product.nutriments.energy_unit}
				fatV={product.nutriments.fat_value}
				fatU={product.nutriments.fat_unit}
				saturedFatV={product["nutriments"]["saturated-fat_value"]}
				saturedFatU={product["nutriments"]["saturated-fat_unit"]}
				saltV={product.nutriments.salt_value}
				saltU={product.nutriments.salt_unit}
				/>
		}} />
	)
}
