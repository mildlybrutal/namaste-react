import UserClass from "./UserClass";
import {Component} from "react";
class About extends Component {
	constructor(props) {
		super(props);

		console.log("Parent Constuctor");
	}
	componentDidMount(){
		//API calls are made here
	
	}
	render() {
		console.log("Parent Render");
		return (
			<div className="about">
				<h1>About Class Component</h1>

				<h2>
					<UserClass name={"Akash {classs}"} />
				</h2>
			</div>
		);
	}
}

export default About;
