import React, { Component } from "react";
import styles from "./History.module.css";
import SuperHeroRed_phone from "../images/SuperHeroRed_phone.png";

class History extends Component {
	render() {
		return (
			<div className={styles.main}>
				<p className={styles.title}>
					Hey, tu sais quoi? <br /> Il parait que les aliments ont des supers
					pouvoirs! Tu veux les voir?
				</p>
				<p className={styles.notice}>
					Scan vite le code barre pour les découvrir !
				</p>
				<div className={styles.superHero}>
					<img src={SuperHeroRed_phone} />
				</div>
			</div>
		);
	}
}

export default History;
