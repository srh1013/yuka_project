import React from "react";
import { InputGroup, Input, Button } from "reactstrap";
import styles from "./SearchBar.module.css";

const SearchBar = props => {
	return (
		<div className="w-80 p-3" style={{backgroundColor:"rgb(247, 211, 6)"}}>
			<InputGroup>
				<Input
					className={styles.text}
					style={{ textAlign: "center" }}
					placeholder="ENTRE TON CODE BARRE ICI"
				/>
				<Button color="secondary" size="sm" href="/product">VALIDER</Button>
			</InputGroup>
		</div>
	);
};

export default SearchBar;
