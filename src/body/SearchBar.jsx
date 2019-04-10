import React, { Component } from "react";
import { Button } from "reactstrap";
import styles from "./SearchBar.module.css";

import { InputGroup, Input } from "reactstrap";

const SearchBar = props => {
	return (
		<div class="w-80 p-3">
			<InputGroup>
				<Input
					className={styles.text}
					style={{ textAlign: "center" }}
					placeholder="ENTRE TON CODE BARRE ICI"
				/>
				<Button color="secondary" size="sm">
					VALIDER
				</Button>
			</InputGroup>
		</div>
	);
};

export default SearchBar;
