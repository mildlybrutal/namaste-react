import { useState } from "react";

const User = ({ name }) => {
	const [count,setCount] = useState(0);
	const [count2] = useState(1);
	return (
		<div className="user-card">
			<h2>Count = {count}</h2>
			<h2>Count2 = {count2}</h2>
			<h2>Name: {name}</h2>
			<h3>Location: India</h3>
			<h4>Contact: @keepingIt100a</h4>
		</div>
	);
};

export default User;
