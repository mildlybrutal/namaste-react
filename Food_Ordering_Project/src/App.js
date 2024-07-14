import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import LoginPage from "./components/LoginPage";
import Profile from "./components/Profile";
import Cart from "./components/Cart";
import { lazy, Suspense } from "react";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Profile from "./components/Profile";
import { useState, useEffect, useContext } from "react";
import UserContext from "./utils/UserContext";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";

const Grocery = lazy(() => import("./components/Grocery"));
const AppLayout = () => {
	const [userName, setUserName] = useState();

	useEffect(() => {
		const data = {
			name: "Akash",
		};
		setUserName(data.name);
	}, []);
	return (
		<Provider store={appStore}>
			<UserContext.Provider value={{ loggedInUser: userName }}>
				<div className="app">
					<Header />
					<Outlet />
				</div>
			</UserContext.Provider>
		</Provider>
	);
};

const appRouter = createBrowserRouter([
	{
		path: "/",
		element: <AppLayout />,
		children: [
			{
				path: "/",
				element: <Body />,
			},
			{
				path: "/about",
				element: <About />,
			},
			{
				path: "/contact",
				element: <Contact />,
			},
			{
				path: "/restaurants/:resId", //resId is dynamic
				element: <RestaurantMenu />,
			},
			{
				path: "/cart",
				element: <Cart />,
			},
			{
				path: "/login",
				element: <LoginPage />,
			},
			{
				path: "/profile",
				element: <Profile />,
			},
			{
				path: "/grocery",
				element: (
					<Suspense fallback="Loading ...">
						<Grocery />
					</Suspense>
				),
			},
		],
		errorElement: <Error />,
	},
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
