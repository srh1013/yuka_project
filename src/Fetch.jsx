
import React from 'react';
import Axios from 'axios';

export default class Fetch extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			isLoading: false,
			isSuccess : false,
			isError: false,
			result: null
		}
		debugger;
	}

		componentDidMount(){
			const { requestUrl } = this.props;
			debugger;
			this.setState({
				isLoading: true,
				isSuccess: false,
				isError: false,
				result: null
			});
			Axios
			.get(requestUrl)
			.then(result =>{
				debugger;
				this.setState({
					isLoading: false,
					isSuccess: true,
					isError: false,
					result: result
				})
			})
			.catch(error =>
				this.setState({
					isLoading: false,
					isSuccess: false,
					isError: true,
					result: error
				})
			);
		}

		render(){
			const { renderError, renderLoading, renderSuccess } = this.props;
			const { isError, isLoading, isSuccess, result } = this.state;
			debugger;
			if (isError){
				return renderError(result);
			}
			if (isLoading){
				return renderLoading();
			}
			if(isSuccess){
				return renderSuccess(result);
			}
			return null;
		}
}