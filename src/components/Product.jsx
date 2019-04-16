import React from 'react';
import {
	Card,
	Collapse,
	Jumbotron,
	Button,
	CardBody,
	Row,
	Col
} from "reactstrap";
import styles from "./Product.module.css";

export default class Product extends React.Component {
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
			
			<div className={`${styles.Bg} no-gutters p-2 p-sm-4`}>
			<h1>{this.props.packaging}</h1>
			<h1> {this.props.title}</h1>
				<Jumbotron className={`${styles.CardStyle} no-gutters`}>
					<Row className="m-1 m-md-5">
						<Col xs={{ size:12, order:2}} sm={{ size:4, order:1}} className="d-flex justify-content-center">
							<img src={this.props.imageUrl} alt=""/>
						</Col>
						<Col xs={{ size: 12, order:1}} sm={{ size: 7, offset: 1, order:2}} >
							<h2 className="text-center text-sm-left">{this.props.name}</h2>
							<h3 className="text-center text-sm-left">Marque</h3>
						</Col>
					</Row>
          <Row><img block className="mx-auto my-5 " src="https://via.placeholder.com/250x250/green" alt="" style={{borderRadius: "100%"}} /></Row>
					<Row>
						<Button
							color="success"
							onClick={this.toggle}
							size="lg"
							style={{ marginBottom: "1rem" }}
              block
              className="m-2 m-md-5 p-1"
						>
							Plus d'informations sur ce produit
						</Button>
						<Collapse isOpen={this.state.collapse} style={{width:"100%"}}>
							<Card>
								<CardBody className="py-0" >
									<Row className="d-flex flex-column text-center">
										<Col className="p-3">Calories</Col>
										<Col className="p-3 border-top ">Sucres</Col>
										<Col className="p-3 border-top ">Lipides</Col>
									</Row>
								</CardBody>
							</Card>
						</Collapse>
					</Row>
					<div />
				
				</Jumbotron>
			</div>
		);
	}
}