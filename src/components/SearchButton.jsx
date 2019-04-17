import React from "react";
import { Link } from "react-router-dom";

export default function SearchButton({ barcode }) {
  return <Link to={`/product/${barcode}`}>Search please</Link>;
}

