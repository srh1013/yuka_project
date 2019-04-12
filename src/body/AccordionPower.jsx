import React from "react";
import { CardBody, Card, CardImg, Button, Collapse } from "reactstrap";

const AccordionPower = props => {
	return (
		<>
			<h5> {props.power} </h5>
			<CardImg src={props.image} alt="Power" />
			<Button
				color="primary"
				onClick={props.toggle}
				style={{ marginBottom: "1rem" }}
			>
				+
			</Button>
			<Collapse isOpen={props.collapse}>
				<Card>
					<CardBody>{props.description}</CardBody>
				</Card>
			</Collapse>
		</>
	);
};

export default AccordionPower;
