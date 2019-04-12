import React, { Component } from "react";
import { Collapse, Button, CardBody, Card, CardImg } from "reactstrap";

class AccordionPower extends Component {
	constructor(props) {
		super(props);
		this.toggle = this.toggle.bind(this);
		this.state = { collapse: false };
	}

	toggle() {
		this.setState(state => ({ collapse: !state.collapse }));
	}

	render() {
		return (
			<div>
				<h5> {this.props.power} </h5>
				<CardImg src={this.props.image} alt="Power" />
				<Button
					color="primary"
					onClick={this.toggle}
					style={{ marginBottom: "1rem" }}
				>
					+
				</Button>
				<Collapse isOpen={this.state.collapse}>
					<Card>
						<CardBody>{this.props.description}</CardBody>
					</Card>
				</Collapse>
			</div>
		);
	}
}

// const AccordionPower = props => {
// 	return (
// 		<>
// 			<h5> {props.power} </h5>
// 			<CardImg src={props.image} alt="Power" />
// 			<Button
// 				color="primary"
// 				onClick={props.toggle}
// 				style={{ marginBottom: "1rem" }}
// 			>
// 				+
// 			</Button>
// 			<Collapse isOpen={props.collapse}>
// 				<Card>
// 					<CardBody>{props.description}</CardBody>
// 				</Card>
// 			</Collapse>
// 		</>
// 	);
// };

export default AccordionPower;
