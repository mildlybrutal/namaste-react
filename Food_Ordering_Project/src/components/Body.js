import RestaurantCard, { withVegLabel } from "./RestaurantCard";
import { useState, useEffect } from "react";
import resList from "../utils/mockData";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
	// Local State Variable - Super Powerful Variable -> setListofRest = Update the list
	const [listOfRestaurants, setListOfRestaurants] = useState([]);
	const [filteredRestaurants, setFilteredRestaurants] = useState([]);
	const [searchInput, setSearchInput] = useState("");

	const RestaurantCardVeg = withVegLabel(RestaurantCard);

	useEffect(() => {
		fetchData();
	}, []);

	const fetchData = async () => {
		try {
			const response = await fetch(
				"https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.1163192&lng=79.0705079&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
			);
			const json = await response.json();

			// Optional Chaining
			const restaurantCards =
				//setListOfRestaurants();
				json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
					?.restaurants;
			setListOfRestaurants(restaurantCards);
		} catch (error) {
			console.error(error);
		}
	};
	const onlineStatus = useOnlineStatus();
	if (onlineStatus === false) {
		return <h1>Looks like you are offline, please connect to the internet</h1>;
	}
	// Conditional Rendering
	if (listOfRestaurants.length === 0) {
		return <Shimmer />;
	}
	const handleSearch = () => {
		if (searchInput.trim() === "") {
			setListOfRestaurants(filteredRestaurants);
		} else {
			const filteredRestaurants = listOfRestaurants.filter((res) =>
				res.info.name.toLowerCase().includes(searchInput.toLowerCase())
			);
			setListOfRestaurants(filteredRestaurants);
		}
	};

	return listOfRestaurants.length === 0 ? (
		<Shimmer />
	) : (
		<div className="body">
			<div className="search m-4 p-4">
				<input
					type="text"
					placeholder="Search your restaurant"
					className="border  border-solid border-black focus:ring-2"
					value={searchInput}
					onChange={(e) => {
						setSearchInput(e.target.value);
					}}
				></input>
				<button
					className="px-4 py-2 bg-green-100 m-4 rounded-lg"
					onClick={handleSearch}
				>
					Search
				</button>
			</div>
			<div className="filter flex">
				<div className="search m-4 p-4 flex items-center">
					<button
						className="px-4 py-2  bg-green-100 rounded-lg"
						onClick={() => {
							const filteredList = listOfRestaurants.filter(
								(res) => res.info.avgRating > 4
							);
							setListOfRestaurants(filteredList);
							console.log(listOfRestaurants);
						}}
					>
						Top Rated Restaurants
					</button>
				</div>
			</div>
			<div className="flex flex-wrap justify-center">
				{listOfRestaurants.map((res) => {
					return (
						<Link key={res.info.id} to={"/restaurants/" + res.info.id}>
							{" "}
							{res.info.veg ? (
								<RestaurantCardVeg resData={res} />
							) : (
								<RestaurantCard resData={res} />
							)}
							<RestaurantCard resData={res} />
						</Link>
					);
				})}
			</div>
		</div>
	);
};

export default Body;
