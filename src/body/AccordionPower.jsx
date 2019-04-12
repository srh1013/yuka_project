import React, { Component } from "react";
import {
	Collapse,
	Button,
	CardBody,
	Card,
	CardImg,
	Row,
	Col
} from "reactstrap";

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
				<Row className="row justify-content-start d-flex align-items-center bg-transparent">
					{/* <Col md="1"> */}
					<CardImg
						src={this.props.image}
						alt="Power"
						style={{ height: 50, width: 50 }}
					/>
					{/* </Col>
					<Col md="2"> */}
					<h5> {this.props.power} </h5>
					{/* </Col> */}
					<Button
						color="primary"
						onClick={this.toggle}
						style={{ marginBottom: "1rem" }}
					>
						+
					</Button>
				</Row>

				<Collapse isOpen={this.state.collapse}>
					<Card>
						<CardBody>{this.props.description}</CardBody>
					</Card>
				</Collapse>
			</div>
		);
	}
}

export default AccordionPower;
