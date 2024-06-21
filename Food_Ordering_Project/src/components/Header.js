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
		<div className="header">
			<div className="logo-container">
				<img src={LOGO_URL} className="logo" />
			</div>
			<div className="nav-items">
				<ul>
					<li>
						Online Status: {onlineStatus ? "✅" : "❗"}
					</li>
					<li>
						<Link to="/">Home</Link>
					</li>
					<li>
						<Link to="/about">About Us</Link>
					</li>
					<li>
						<Link to="/grocery">Grocery</Link>
					</li>
					<li>
						<Link to="/contact">Contact</Link>
					</li>
					<li>Cart</li>
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
