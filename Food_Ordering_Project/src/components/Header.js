import { LOGO_URL } from "../utils/constants";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import LoginPage from "./LoginPage";
import useOnlineStatus from "../utils/useOnlineStatus";
const Header = () => {
	const onlineStatus = useOnlineStatus();
	const [btnNameReact, setBtnNameReact] = useState("Login");

	useEffect(() => {
		console.log("Button Name Changed");
	}, [btnNameReact]);
	return (
		<div className="flex justify-between  bg-red-300  shadow-lg mb-2 sm:bg-yellow-600">
			<div className="logo-container">
				<img src={LOGO_URL} className="w-56" />
			</div>
			<div className="flex items-center">
				<ul className="flex p-4 m-4">
					<li className="px-4">Online Status: {onlineStatus ? "✅" : "❗"}</li>
					<li className="px-4">
						<Link to="/">Home</Link>
					</li>
					<li className="px-4">
						<Link to="/about">About Us</Link>
					</li>
					<li className="px-4">
						<Link to="/grocery">Grocery</Link>
					</li>
					<li className="px-4">
						<Link to="/contact">Contact</Link>
					</li>
					<li className="px-4">Cart</li>
					<button
						className="login"
						onClick={() => {
							<LoginPage />;
							btnNameReact === "Login"
								? setBtnNameReact("Logout")
								: setBtnNameReact("Login");
						}}
					>
						{btnNameReact}
					</button>
				</ul>
			</div>
		</div>
	);
};

export default Header;
