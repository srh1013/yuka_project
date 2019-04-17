import React from "react";


export default function SearchInput({ onChange }) {
  return (
    <input
      onChange={event => onChange(event.target.value)}
      placeholder="Tapez le code barre du produit"
    />
  );
}
