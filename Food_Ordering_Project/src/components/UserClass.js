import React, { Component } from "react";

class UserClass extends Component {
	constructor(props) {
		super(props);
		this.state = {
			count: 0,
			count2: 1,
		};
	}

	render() {
		let { name } = this.props;
		let { count } = this.state;

		return (
			<div className="user-card">
				<h2>Count = {count}</h2>
				<button
					onClick={() => {
						this.setState((prevState) => ({
							count: prevState.count + 1,
						}));
					}}
				>
					Count Increase
				</button>
				<h2>Name: {name}</h2>
				<h3>Location: India</h3>
				<h4>Contact: @keepingIt100a</h4>
			</div>
		);
	}
}

export default UserClass;
