import { LOGO_URL } from "../utils/constants";
import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
	const onlineStatus = useOnlineStatus();
	const [btnNameReact, setBtnNameReact] = useState("Login");
	const { loggedInUser } = useContext(UserContext);

	const cartItems = useSelector((store) => store.cart.items);
	console.log(cartItems);
	const handleLoginClick = () => {
		setBtnNameReact(btnNameReact === "Login" ? "Logout" : "Login");
	};

	return (
		<header className="bg-white shadow-sm">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="flex justify-between items-center h-16">
					<div className="flex-shrink-0">
						<img src={LOGO_URL} alt="Logo" className="h-8 w-auto" />
					</div>
					<nav className="hidden md:block">
						<ul className="flex items-center space-x-4">
							<li>
								<Link
									to="/"
									className="text-gray-700 hover:text-gray-900 px-3 py-2 text-sm font-medium"
								>
									Home
								</Link>
							</li>
							<li>
								<Link
									to="/about"
									className="text-gray-700 hover:text-gray-900 px-3 py-2 text-sm font-medium"
								>
									About
								</Link>
							</li>
							<li>
								<Link
									to="/grocery"
									className="text-gray-700 hover:text-gray-900 px-3 py-2 text-sm font-medium"
								>
									Grocery
								</Link>
							</li>
							<li>
								<Link
									to="/contact"
									className="text-gray-700 hover:text-gray-900 px-3 py-2 text-sm font-medium"
								>
									Contact
								</Link>
							</li>
							<li className="text-gray-700 hover:text-gray-900 px-3 py-2 text-sm font-bold">
								{loggedInUser}
							</li>
						</ul>
					</nav>
					<div className="flex items-center space-x-4">
						<span className="text-sm font-medium text-gray-700">
							{onlineStatus ? "Online ✅" : "Offline ❗"}
						</span>
						<button
							className="inline-flex items-center px-3 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
							onClick={handleLoginClick}
						>
							{btnNameReact}
						</button>
						<Link to="/cart" className="text-gray-700 hover:text-gray-900">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								className="h-6 w-6"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth={2}
									d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
								/>
							</svg>
						</Link>
						<p className="font-bold ">({cartItems.length} items)</p>
					</div>
				</div>
			</div>
		</header>
	);
};

export default Header;
