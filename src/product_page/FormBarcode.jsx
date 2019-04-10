import React, { Component } from "react";

class FormBarcode extends Component {
	constructor(props) {
		super(props);
		this.state = {
			value: "",
			barcode: this.handleChange
		};
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}
	handleChange(event) {
		// this.setState({ value: event.target.value });
		this.props.onChangeBarcode(event.target.value);
	}

	handleSubmit(event) {
		alert("A code was submitted: " + this.state.value);
		event.preventDefault();
	}

	render() {
		return (
			<div>
				<form>
					<input
						id="barcode"
						type="text"
						value={this.state.value.replace(/\*/g, "")}
						placeholder="barcode"
						onChange={this.handleChange}
					/>
					<button type="submit" formtarget={this.handleSubmit}>
						Search
					</button>
				</form>
			</div>
		);
	}
}

export default FormBarcode;
