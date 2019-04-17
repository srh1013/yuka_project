import React from "react";
import { Link } from "react-router-dom";

export default function SearchButton({ inputCode }) {
  return <Link to={`/product/${inputCode}`}>Valider</Link>;
}

