import React, { Component } from "react";
import "./AccordionPower.module.css";
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
			<div className=" row justify-content-start offset-1 col-md-7 ">
				<Row
					className="row justify-content-start d-flex align-items-center d-lg-none d-xl-block"
					style={{ border: "warning" }}
				>
					{/* <Col md="1"> */}
					<div>
						<CardImg
							src={this.props.image}
							alt="Power"
							style={{ height: 50, width: 50 }}
							className="d-lg-none d-xl-block"
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
					</div>
				</Row>
				<Row>
					<Collapse isOpen={this.state.collapse}>
						<div>{this.props.description}</div>
						{/* <Card>
						<CardBody>{this.props.description}</CardBody>
					</Card> */}
					</Collapse>
				</Row>
			</div>
		);
	}
}

export default AccordionPower;
