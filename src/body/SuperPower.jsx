import React from "react";
import { Card, CardImg, CardText, CardBody, CardTitle } from "reactstrap";

const SuperPower = props => {
	return (
		<>
			<Card
				style={{ height: 500 }}
				className="bg-transparent d-none d-lg-block"
			>
				<CardImg src={props.image} alt="Power" />
				<CardBody>
					<CardTitle className="text-center">{props.power}</CardTitle>
					<CardText>{props.description}</CardText>
				</CardBody>
			</Card>
		</>
	);
};

export default SuperPower;
