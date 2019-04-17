import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export default function SearchButton({ barcode }) {
  return <Link to={`/product/${barcode}`}>Search please</Link>;
}

SearchButton.propTypes = {
  filter: PropTypes.string.isRequired
};
